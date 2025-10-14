// Dados completos dos ramais
const ramaisData = [
    { ramal: '6400', nome: '6400 - Telefonista', departamento: 'GABIN (Gabinete)' },
    { ramal: '6400', nome: '6400 - Telefonista', departamento: 'GABIN (Gabinete)' },
    { ramal: '6401', nome: '6401 - DOF', departamento: 'DA - DOF' },
    // ... (mantenha todos os dados)
];

// Função para remover ramais duplicados
function removerDuplicados(ramais) {
    const visto = new Set();
    return ramais.filter(ramal => {
        // Se já vimos este número de ramal, remova
        if (visto.has(ramal.ramal)) {
            return false;
        }
        // Se não vimos, adicione ao Set e mantenha
        visto.add(ramal.ramal);
        return true;
    });
}

// Sistema de filtros - INICIALMENTE sem duplicados
let filteredData = removerDuplicados([...ramaisData]);
let sortColumn = 'ramal';
let sortDirection = 'asc';

// Restante do código permanece igual...
function initTable() {
    updateTable();
    document.getElementById('total-count').textContent = removerDuplicados(ramaisData).length;
    
    document.getElementById('search-ramal').addEventListener('input', filterTable);
    document.getElementById('search-nome').addEventListener('input', filterTable);
    document.getElementById('search-departamento').addEventListener('input', filterTable);
    
    document.getElementById('clear-filters').addEventListener('click', clearFilters);
    document.getElementById('reset-search').addEventListener('click', clearFilters);
    
    document.querySelectorAll('th[data-sort]').forEach(th => {
        th.addEventListener('click', () => {
            const column = th.getAttribute('data-sort');
            if (sortColumn === column) {
                sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                sortColumn = column;
                sortDirection = 'asc';
            }
            
            document.querySelectorAll('th').forEach(header => {
                header.classList.remove('asc', 'desc');
            });
            th.classList.add(sortDirection);
            
            sortTable();
            updateTable();
        });
    });
}

function filterTable() {
    const ramalFilter = document.getElementById('search-ramal').value.toLowerCase();
    const nomeFilter = document.getElementById('search-nome').value.toLowerCase();
    const departamentoFilter = document.getElementById('search-departamento').value.toLowerCase();
    
    // Aplica filtro E remove duplicados
    const dadosFiltrados = ramaisData.filter(item => {
        return (
            item.ramal.toLowerCase().includes(ramalFilter) &&
            item.nome.toLowerCase().includes(nomeFilter) &&
            item.departamento.toLowerCase().includes(departamentoFilter)
        );
    });
    
    filteredData = removerDuplicados(dadosFiltrados);
    sortTable();
    updateTable();
}

function clearFilters() {
    document.getElementById('search-ramal').value = '';
    document.getElementById('search-nome').value = '';
    document.getElementById('search-departamento').value = '';
    
    filteredData = removerDuplicados([...ramaisData]);
    sortTable();
    updateTable();
}

// Restante das funções permanece igual...
function sortTable() {
    filteredData.sort((a, b) => {
        let aValue = a[sortColumn];
        let bValue = b[sortColumn];
        
        if (sortColumn === 'ramal') {
            aValue = parseInt(aValue);
            bValue = parseInt(bValue);
        }
        
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });
}

function updateTable() {
    const tableBody = document.getElementById('table-body');
    const noResults = document.getElementById('no-results');
    const resultsCount = document.getElementById('results-count');
    const totalCount = document.getElementById('total-count');
    
    tableBody.innerHTML = '';
    
    if (filteredData.length === 0) {
        noResults.style.display = 'block';
        resultsCount.textContent = '0';
    } else {
        noResults.style.display = 'none';
        resultsCount.textContent = filteredData.length;
        totalCount.textContent = removerDuplicados(ramaisData).length;
        
        filteredData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.ramal}</td>
                <td>${item.nome}</td>
                <td>${item.departamento}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}

document.addEventListener('DOMContentLoaded', initTable);
