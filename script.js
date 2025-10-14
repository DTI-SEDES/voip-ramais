function filterTable() {
    const ramalFilter = document.getElementById('search-ramal').value.toLowerCase();
    const siglaFilter = document.getElementById('search-sigla').value.toLowerCase();
    const departamentoFilter = document.getElementById('search-departamento').value.toLowerCase();
    
    filteredData = ramaisData.filter(item => {
        return (
            item.ramal.toLowerCase().includes(ramalFilter) &&
            item.sigla.toLowerCase().includes(siglaFilter) &&
            item.departamento.toLowerCase().includes(departamentoFilter)
        );
    });
    
    sortTable();
    updateTable();
}

function updateTable() {
    const tableBody = document.getElementById('table-body');
    const noResults = document.getElementById('no-results');
    const resultsCount = document.getElementById('results-count');
    
    tableBody.innerHTML = '';
    
    if (filteredData.length === 0) {
        noResults.style.display = 'block';
        resultsCount.textContent = '0';
    } else {
        noResults.style.display = 'none';
        resultsCount.textContent = filteredData.length;
        
        filteredData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="ramal-cell">${item.ramal}</td>
                <td class="sigla-cell">${item.sigla}</td>
                <td class="departamento-cell">${item.departamento}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}
