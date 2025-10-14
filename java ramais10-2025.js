// Dados dos ramais
const ramaisData = [
    { ramal: '6400', nome: '6400 - Telefonista', departamento: 'GABIN (Gabinete)' },
    { ramal: '6400', nome: '6400 - Telefonista', departamento: 'GABIN (Gabinete)' },
    { ramal: '6401', nome: '6401 - DOF', departamento: 'DA - DOF' },
    { ramal: '6402', nome: '6402 - DSA', departamento: 'DSA' },
    { ramal: '6402', nome: '6402 - DSA', departamento: 'DSA' },
    { ramal: '6402', nome: '6402 - DSA', departamento: 'DSA' },
    { ramal: '6403', nome: '6403 - DSA', departamento: 'DSA' },
    { ramal: '6404', nome: '6404 - Sec Adj', departamento: 'GABIN SEC ADJUNTO (Gabinete do Secretário Adjunto)' },
    { ramal: '6405', nome: '6405 - DSA', departamento: 'DSA' },
    { ramal: '6406', nome: '6406 - DSA', departamento: 'DSA' },
    { ramal: '6407', nome: '6407 - DSA', departamento: 'DSA' },
    { ramal: '6408', nome: '6408 - Sec Adj', departamento: 'GABIN SEC ADJUNTO (Gabinete do Secretário Adjunto)' },
    { ramal: '6409', nome: '6409 - DSA', departamento: 'DSA' },
    { ramal: '6410', nome: '6410 - DIPPE', departamento: 'DIPPE' },
    { ramal: '6411', nome: '6411 - Gabinete', departamento: 'GABIN (Gabinete)' },
    { ramal: '6412', nome: '6412 - Protocolo', departamento: 'DPA - Protocolo' },
    { ramal: '6413', nome: '6413 - Protocolo', departamento: 'DPA - Protocolo' },
    { ramal: '6414', nome: '6414 - DIPPE', departamento: 'DIPPE - DPP' },
    { ramal: '6415', nome: '6415 - ASSCOM', departamento: 'ASSCOM (Assessoria de Comunicação)' },
    { ramal: '6416', nome: '6416 - ASSTEC', departamento: 'ASSTEC' },
    { ramal: '6418', nome: '6418 - DIPPE', departamento: 'DIPPE - DISP' },
    { ramal: '6419', nome: 'DGCAD', departamento: 'DAS - DGCAD (CADUNICO)' },
    { ramal: '6420', nome: '6420 - Gabinete', departamento: 'GABIN (Gabinete)' },
    { ramal: '6421', nome: '6421 - ASSJUR', departamento: 'ASSJUR (Assessoria Jurídica)' },
    { ramal: '6422', nome: '6422- ASSJUR', departamento: 'ASSJUR (Assessoria Jurídica)' },
    { ramal: '6423', nome: '6423 - DPJ', departamento: 'DPJ' },
    { ramal: '6424', nome: '6424 - DICON', departamento: 'DA - DICON' },
    { ramal: '6424', nome: '6424 - DICON', departamento: 'DA - DICON' },
    { ramal: '6425', nome: '6425 - DOF', departamento: 'DA - DOF' },
    { ramal: '6426', nome: '6426 - DSA', departamento: 'DSA' },
    { ramal: '6427', nome: '6427 - CEAS', departamento: 'CEAS' },
    { ramal: '6428', nome: '6428 - DISP', departamento: 'DIPPE - DISP' },
    { ramal: '6429', nome: 'DGS', departamento: 'DAS - DGS (Gestão do SUAS)' },
    { ramal: '6430', nome: '6430 - Gabinete', departamento: 'GABIN (Gabinete)' },
    { ramal: '6431', nome: '6431', departamento: 'Teste VoIP' },
    { ramal: '6432', nome: '6432 - Gabinete', departamento: 'GABIN (Gabinete)' },
    { ramal: '6433', nome: '6433 - Gabinete', departamento: 'GABIN (Gabinete)' },
    { ramal: '6434', nome: 'DICON', departamento: 'DA - DICON' },
    { ramal: '6435', nome: '6435 - Chefe de Gabinete', departamento: 'GABIN (Gabinete)' },
    { ramal: '6436', nome: 'DGP', departamento: 'DA - DGP' },
    { ramal: '6437', nome: '6437 - DGP', departamento: 'DA - DGP' },
    { ramal: '6438', nome: 'FEAS', departamento: 'DGS - FEAS' },
    { ramal: '6439', nome: '6439 - DGCAD', departamento: 'DAS - DGCAD (CADUNICO)' },
    { ramal: '6440', nome: '6440 - DG', departamento: 'DG' },
    { ramal: '6441', nome: '6441 - DIPPE', departamento: 'DIPPE - DCPS (Pro Social)' },
    { ramal: '6442', nome: '6442 - DIPPE', departamento: 'DIPPE - DCPS (Pro Social)' },
    { ramal: '6443', nome: '6443 - DICON', departamento: 'DA - DICON' },
    { ramal: '6444', nome: '6444 - DG', departamento: 'DG' },
    { ramal: '6445', nome: '6445 - DGCAD', departamento: 'DAS - DGCAD (CADUNICO)' },
    { ramal: '6446', nome: 'DG', departamento: 'DG' },
    { ramal: '6447', nome: 'DAS - DGCAD', departamento: 'DAS - DGCAD (CADUNICO)' },
    { ramal: '6448', nome: '6448 - DICON', departamento: 'DA - DICON' },
    { ramal: '6449', nome: '6449 - CEI', departamento: 'CEI' },
    { ramal: '6450', nome: '6450 - CEI', departamento: 'CEI' },
    { ramal: '6451', nome: 'DPA', departamento: 'DA - DPA' },
    { ramal: '6452', nome: '6452 - DAS Direcao', departamento: 'DAS - DIREÇÃO' },
    { ramal: '6453', nome: '6453 - DGS', departamento: 'DAS - DGS (Gestão do SUAS)' },
    { ramal: '6454', nome: '6454 - DIPPE', departamento: 'DIPPE - DCPS (Pro Social)' },
    { ramal: '6455', nome: '6455 - FEAS', departamento: 'DGS - FEAS' },
    { ramal: '6456', nome: '6456 - DPSB', departamento: 'DAS - DPSB (Divisão de Proteção Social Básica)' },
    { ramal: '6457', nome: '6457 - DGS', departamento: 'DGS - Gestão de Benefícios' },
    { ramal: '6458', nome: '6458 - DPSE', departamento: 'DAS - DPSE (Divisão de Proteção Social Especial)' },
    { ramal: '6459', nome: '6459 - Delegacias', departamento: 'Delegacias' },
    { ramal: '6460', nome: '6460 - DIPPE', departamento: 'DIPPE - DISP' },
    { ramal: '6461', nome: '6461 - DTI', departamento: 'DA - DTI' },
    { ramal: '6461', nome: '6461 - DTI', departamento: 'DA - DTI' },
    { ramal: '6461', nome: '6461 - DTI', departamento: 'DA - DTI' },
    { ramal: '6461', nome: '6461 - DTI', departamento: 'DA - DTI' },
    { ramal: '6461', nome: '6461 - DTI', departamento: 'DA - DTI' },
    { ramal: '6461', nome: '6461 - DTI', departamento: 'DA - DTI' },
    { ramal: '6461', nome: '6461 - DTI', departamento: 'DA - DTI' },
    { ramal: '6462', nome: '6462 - DAPI', departamento: 'DAPI' },
    { ramal: '6463', nome: '6463 - DAPI', departamento: 'DAPI' },
    { ramal: '6464', nome: '6464 - DPA', departamento: 'DA - DPA' },
    { ramal: '6465', nome: '6465 - DIPPE', departamento: 'DIPPE' },
    { ramal: '6466', nome: '6466 - Protocolo', departamento: 'DPA - Protocolo' },
    { ramal: '6467', nome: '6467 - DPA', departamento: 'DA - DPA' },
    { ramal: '6468', nome: '6468 - DOF', departamento: 'DA - DOF' },
    { ramal: '6469', nome: '6469 - DTI', departamento: 'DA - DTI' },
    { ramal: '6469', nome: '6469 - DTI', departamento: 'DA - DTI' },
    { ramal: '6470', nome: '6470 - FEAS', departamento: 'DGS - FEAS' },
    { ramal: '6471', nome: '6471 - DCPS', departamento: 'DIPPE - DCPS (Pro Social)' },
    { ramal: '6472', nome: '6472 - DGS', departamento: 'DGS - Regulação SUAS' },
    { ramal: '6473', nome: '6473 - DICON', departamento: 'DA - DICON' },
    { ramal: '6473', nome: '6473 - DICON', departamento: 'DA - DICON' },
    { ramal: '6474', nome: '6474 - DG', departamento: 'DG' },
    { ramal: '6475', nome: '6475 - DPJ', departamento: 'DPJ' },
    { ramal: '6476', nome: '6476 - DGS', departamento: 'DGS - Regulação SUAS' },
    { ramal: '6477', nome: '6477 - ASSJUR', departamento: 'ASSJUR (Assessoria Jurídica)' },
    { ramal: '6478', nome: '6478 - DICON', departamento: 'DA - DICON' },
    { ramal: '6479', nome: '6479 - DTI', departamento: 'DA - DTI' },
    { ramal: '6480', nome: '6480 - DICON', departamento: 'DA - DICON' },
    { ramal: '6481', nome: '6481 - DAPI', departamento: 'DAPI' },
    { ramal: '6482', nome: '6482 - DAPI', departamento: 'DAPI' },
    { ramal: '6483', nome: '6483 - DGCAD', departamento: 'DAS - DGCAD (CADUNICO)' },
    { ramal: '6484', nome: '6484 - DAPI', departamento: 'DAPI' },
    { ramal: '6485', nome: '6485 - DA', departamento: 'DA' },
    { ramal: '6486', nome: '6486 - DA', departamento: 'DA' },
    { ramal: '6486', nome: '6486 - DA', departamento: 'DA' },
    { ramal: '6487', nome: '6487 - DPJ', departamento: 'DPJ' },
    { ramal: '6489', nome: '6489 - DGS', departamento: 'DGS - Regulação SUAS' },
    { ramal: '6490', nome: '6490 - DAS - Gestão', departamento: 'DAS - DGS (Gestão do SUAS)' },
    { ramal: '6491', nome: '6491 - Protocolo', departamento: 'DPA - Protocolo' },
    { ramal: '6492', nome: 'DICON', departamento: 'DA - DICON' },
    { ramal: '6493', nome: '6493 - Elizara', departamento: 'ASSTEC' },
    { ramal: '6494', nome: '6494 - DGP', departamento: 'DA - DGP' },
    { ramal: '6495', nome: '6495 - CEAS', departamento: 'CEAS' },
    { ramal: '6496', nome: '6496 - PSE', departamento: 'DAS - DPSE (Divisão de Proteção Social Especial)' },
    { ramal: '6497', nome: '6497 - CADUNICO', departamento: 'DAS - DGCAD (CADUNICO)' },
    { ramal: '6498', nome: '6498 - CADUNICO', departamento: 'DAS - DGCAD (CADUNICO)' },
    { ramal: '6499', nome: '6499 - DGS', departamento: 'DAS - DGS (Gestão do SUAS)' },
    { ramal: '6500', nome: '6500 - DIPPE - DIREG (Registro)', departamento: 'DIPPE - DIREG (Registro)' },
    { ramal: '6501', nome: '6501 - DIPPE - DIREG (Registro)', departamento: 'DIPPE - DIREG (Registro)' },
    { ramal: '6502', nome: '6502 - DIPPE - DIREG (Registro)', departamento: 'DIPPE - DIREG (Registro)' },
    { ramal: '6503', nome: '6503 - DIPPE - DIREG (Registro)', departamento: 'DIPPE - DIREG (Registro)' },
    { ramal: '6503', nome: '6503 - DIPPE - DIREG (Registro)', departamento: 'DIPPE - DIREG (Registro)' },
    { ramal: '6504', nome: '6504 - DPCT', departamento: 'DA - DICON' },
    { ramal: '6506', nome: '6506 - DAS - Gestão', departamento: 'DAS - DGS (Gestão do SUAS)' },
    { ramal: '6508', nome: '6508 - DGS - Vigilância', departamento: 'DGS - Vigilância em Saúde' },
    { ramal: '6512', nome: '6512 - PSE', departamento: 'DAS - DPSE (Divisão de Proteção Social Especial)' },
    { ramal: '6513', nome: '6513 - DPSE', departamento: 'DAS - DPSE (Divisão de Proteção Social Especial)' },
    { ramal: '6514', nome: '6514 - PSE', departamento: 'DAS - DPSE (Divisão de Proteção Social Especial)' },
    { ramal: '6515', nome: '6515 - PSE', departamento: 'DAS - DPSE (Divisão de Proteção Social Especial)' },
    { ramal: '6517', nome: '6517 - PSE', departamento: 'DAS - DPSE (Divisão de Proteção Social Especial)' },
    { ramal: '6518', nome: '6518 - DGS - Direção do Trabalho', departamento: 'DGS - Gestão do Trabalho' },
    { ramal: '6519', nome: '6519 - DGS - Vigilancia', departamento: 'DGS - Vigilância em Saúde' },
    { ramal: '6522', nome: '6522 - CEAS', departamento: 'CEAS' },
    { ramal: '6526', nome: '6526 - DGS - Vigilância', departamento: 'DGS - Vigilância em Saúde' },
    { ramal: '6528', nome: '6528 - ASSTEC', departamento: 'ASSTEC' },
    { ramal: '6529', nome: '6529 - DIPPE', departamento: 'DIPPE - DCPS (Pro Social)' },
    { ramal: '6530', nome: '6530 - DPA', departamento: 'DA - DPA' },
    { ramal: '6535', nome: '6535 - CADUNICO', departamento: 'DAS - DGCAD (CADUNICO)' },
    { ramal: '6536', nome: '6536 - CEAS', departamento: 'CEAS' },
    { ramal: '6537', nome: '6537 - DPSB', departamento: 'DAS - DPSB (Divisão de Proteção Social Básica)' },
    { ramal: '6538', nome: '6538 - DPSE', departamento: 'DAS - DPSE (Divisão de Proteção Social Especial)' },
    { ramal: '6539', nome: '6539 - DPSB', departamento: 'DAS - DPSB (Divisão de Proteção Social Básica)' },
    { ramal: '6540', nome: '6540 - DAS', departamento: 'DAS - DIREÇÃO' },
    { ramal: '6543', nome: '6543 - ASSTEC', departamento: 'ASSTEC' },
    { ramal: '6544', nome: '6544 - DGS', departamento: 'DAS - DGS (Gestão do SUAS)' },
    { ramal: '6545', nome: '6545 - DICON', departamento: 'DA - DICON' },
    { ramal: '6546', nome: 'Teste link SIP SICDHAS', departamento: 'Teste VoIP' },
    { ramal: '6547', nome: '6547 - DPSB', departamento: 'DAS - DPSB (Divisão de Proteção Social Básica)' },
    { ramal: '6548', nome: '6548 - DPSB', departamento: 'DAS - DPSB (Divisão de Proteção Social Básica)' },
    { ramal: '6549', nome: '6549 - DPSE', departamento: 'DAS - DPSE (Divisão de Proteção Social Especial)' },
    { ramal: '6550', nome: '6550 - FEAS', departamento: 'DGS - FEAS' },
    { ramal: '6551', nome: '6551 - DPJ', departamento: 'DPJ' },
    { ramal: '6552', nome: '6552 - DPJ', departamento: 'DPJ' },
    { ramal: '6553', nome: '6553 - DPJ', departamento: 'DPJ' },
    { ramal: '6554', nome: '6554 - FEAS', departamento: 'DGS - FEAS' },
    { ramal: '6555', nome: '6555 - IDOSO', departamento: 'IDOSO (Unidade Especial de Atenção ao Idoso)' },
    { ramal: '6555', nome: '6555 - IDOSO', departamento: 'IDOSO (Unidade Especial de Atenção ao Idoso)' },
    { ramal: '6555', nome: '6555 - IDOSO', departamento: 'IDOSO (Unidade Especial de Atenção ao Idoso)' },
    { ramal: '6556', nome: '6556 - DG', departamento: 'DG' },
    { ramal: '6557', nome: '6557 - DPSB', departamento: 'DAS - DPSB (Divisão de Proteção Social Básica)' },
    { ramal: '6560', nome: '6560', departamento: 'CEI' },
    { ramal: '6569', nome: '6569 - DPA', departamento: 'DA - DPA' },
    { ramal: '6572', nome: '6572 - Protocolo', departamento: 'DPA - Protocolo' },
    { ramal: '6575', nome: '6575 - DICON', departamento: 'DA - DICON' },
    { ramal: '6575', nome: '6575 - DICON', departamento: 'DA - DICON' },
    { ramal: '6575', nome: '6575 - DICON', departamento: 'DA - DICON' },
    { ramal: '6599', nome: 'Teste DDR VoIP', departamento: 'Teste VoIP' },
    { ramal: '6599', nome: 'Teste DDR VoIP', departamento: 'Teste VoIP' },
    { ramal: '8001', nome: 'Teste 2 STAS GXP2140', departamento: 'TesteVoIP2' },
    { ramal: '8001', nome: 'Teste 2 STAS GXP2140', departamento: 'TesteVoIP2' },
    { ramal: '8002', nome: 'Teste 3 STAS GRP2612', departamento: 'Teste VoIP' },
    { ramal: '8418', nome: '8418 - COPA', departamento: 'COPA' },
    { ramal: '8420', nome: '8420 - Beto Fatinel', departamento: 'GABIN (Gabinete)' },
    { ramal: '8420', nome: '8420 - Beto Fatinel', departamento: 'GABIN (Gabinete)' }
];

// Variáveis globais
let filteredData = [...ramaisData];
let sortColumn = 'ramal';
let sortDirection = 'asc';

// Inicializar a tabela
function initTable() {
    updateTable();
    document.getElementById('total-count').textContent = ramaisData.length;
    
    // Adicionar event listeners para os filtros
    document.getElementById('search-ramal').addEventListener('input', filterTable);
    document.getElementById('search-nome').addEventListener('input', filterTable);
    document.getElementById('search-departamento').addEventListener('input', filterTable);
    
    // Botão limpar filtros
    document.getElementById('clear-filters').addEventListener('click', clearFilters);
    
    // Botão resetar busca
    document.getElementById('reset-search').addEventListener('click', clearFilters);
    
    // Adicionar event listeners para ordenação
    document.querySelectorAll('th[data-sort]').forEach(th => {
        th.addEventListener('click', () => {
            const column = th.getAttribute('data-sort');
            if (sortColumn === column) {
                sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                sortColumn = column;
                sortDirection = 'asc';
            }
            
            // Atualizar indicadores visuais
            document.querySelectorAll('th').forEach(header => {
                header.classList.remove('asc', 'desc');
            });
            th.classList.add(sortDirection);
            
            sortTable();
            updateTable();
        });
    });
}

// Filtrar a tabela
function filterTable() {
    const ramalFilter = document.getElementById('search-ramal').value.toLowerCase();
    const nomeFilter = document.getElementById('search-nome').value.toLowerCase();
    const departamentoFilter = document.getElementById('search-departamento').value.toLowerCase();
    
    filteredData = ramaisData.filter(item => {
        return (
            item.ramal.toLowerCase().includes(ramalFilter) &&
            item.nome.toLowerCase().includes(nomeFilter) &&
            item.departamento.toLowerCase().includes(departamentoFilter)
        );
    });
    
    sortTable();
    updateTable();
}

// Limpar todos os filtros
function clearFilters() {
    document.getElementById('search-ramal').value = '';
    document.getElementById('search-nome').value = '';
    document.getElementById('search-departamento').value = '';
    
    filteredData = [...ramaisData];
    sortTable();
    updateTable();
}

// Ordenar a tabela
function sortTable() {
    filteredData.sort((a, b) => {
        let aValue = a[sortColumn];
        let bValue = b[sortColumn];
        
        // Para ordenação numérica na coluna de ramal
        if (sortColumn === 'ramal') {
            aValue = parseInt(aValue);
            bValue = parseInt(bValue);
        }
        
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });
}

// Atualizar a tabela
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
                <td>${item.ramal}</td>
                <td>${item.nome}</td>
                <td>${item.departamento}</td>
            `;
            table