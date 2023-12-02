document.addEventListener('DOMContentLoaded', function () {
    var limparButton = document.getElementById('enviarButton');
    var menuFornecedor = document.getElementById('fornecedorSelect');
    var infoBox = document.getElementById('infoBox');
    var dataFornecimento = document.getElementById('dataFornecimento');
    var radioButtons = document.querySelectorAll('input[name="refeicao"]');

    var fornecedoresInfo = {
        fornecedor1: "Informações sobre o Fornecedor 1.",
        fornecedor2: "Informações sobre o Fornecedor 2."
        // Adicione mais informações conforme necessário
    };

    limparButton.addEventListener('click', function () {
        menuFornecedor.value = '';
        dataFornecimento.value = '';
        radioButtons.forEach(function (radio) {
            radio.checked = false;
        });
        infoBox.innerHTML = '';
    });

    menuFornecedor.addEventListener('change', function () {
        var selectedFornecedor = menuFornecedor.value;
        infoBox.innerHTML = fornecedoresInfo[selectedFornecedor] || 'Nenhuma informação disponível.';
    });
});
