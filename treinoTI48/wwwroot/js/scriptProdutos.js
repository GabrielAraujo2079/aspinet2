document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();

        // Pega o nome e preço do produto clicado
        const card = this.closest('.card');
        const nome = card.querySelector('.card-title').textContent;
        const preco = card.querySelector('.card-text').textContent;

        // Preenche o modal
        document.getElementById('modalNomeProduto').textContent = nome;
        document.getElementById('modalPrecoProduto').textContent = preco;
        document.getElementById('quantidade').value = 1;

        // Abre o modal
        const modal = new bootstrap.Modal(document.getElementById('modalComprar'));
        modal.show();
    });
});

document.getElementById('btnConfirmarCompra').addEventListener('click', function () {
    const nome = document.getElementById('modalNomeProduto').textContent;
    const quantidade = document.getElementById('quantidade').value;

    alert(`✅ Compra realizada!\n${quantidade}x ${nome}`);

    bootstrap.Modal.getInstance(document.getElementById('modalComprar')).hide();
});