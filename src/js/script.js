// Array de produtos (exemplo)
const produtos = [
    { id: 1, nome: "Produto 1", preco: 100.00 },
    { id: 2, nome: "Produto 2", preco: 150.00 },
    { id: 3, nome: "Produto 3", preco: 200.00 },
    { id: 4, nome: "Produto 4", preco: 250.00 }
];

// Adiciona um evento de clique a cada botão de "Adicionar ao Carrinho"
const adicionarCarrinhoButtons = document.querySelectorAll('.adicionar-carrinho');
adicionarCarrinhoButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const produtoId = event.target.parentElement.getAttribute('data-id');
        const produto = produtos.find(p => p.id == produtoId);
        
        // Adiciona o produto ao carrinho
        adicionarAoCarrinho(produto);
        
        // Exibe uma mensagem de alerta informando que o produto foi adicionado ao carrinho
        alert(`${produto.nome} adicionado ao carrinho!`);
        
        // Redireciona para a página do carrinho
        window.location.href = 'carrinho.html';
    });
});

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Armazena o carrinho no localStorage
}