// Função para exibir os produtos no carrinho
function exibirCarrinho() {
    const produtosCarrinhoDiv = document.getElementById('produtos-carrinho');
    const totalDiv = document.getElementById('total');
    produtosCarrinhoDiv.innerHTML = ''; // Limpa a div antes de exibir os produtos

    let total = 0;

    // Recupera o carrinho do localStorage
    const carrinhoArmazenado = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Exibe cada produto no carrinho
    carrinhoArmazenado.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto-carrinho');
        produtoDiv.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
        `;
        produtosCarrinhoDiv.appendChild(produtoDiv);
        total += produto.preco; // Soma o preço do produto ao total
    });

    totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`; // Atualiza o total
}

// Função para voltar à loja
document.getElementById('voltar').addEventListener('click', () => {
    window.location.href = 'produtos.html'; // Redireciona para a página principal
});

// Chama a função para exibir o carrinho ao carregar a página
window.onload = exibirCarrinho;

// Função para exibir os produtos no carrinho
function exibirCarrinho() {
    const produtosCarrinhoDiv = document.getElementById('produtos-carrinho');
    const totalDiv = document.getElementById('total');
    produtosCarrinhoDiv.innerHTML = ''; // Limpa a div antes de exibir os produtos

    let total = 0;

    // Recupera o carrinho do localStorage
    const carrinhoArmazenado = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Exibe cada produto no carrinho
    carrinhoArmazenado.forEach((produto, index) => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto-carrinho');
        produtoDiv.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <button class="remover" data-index="${index}">Remover</button>
        `;
        produtosCarrinhoDiv.appendChild(produtoDiv);
        total += produto.preco; // Soma o preço do produto ao total
    });

    totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`; // Atualiza o total

    // Adiciona eventos de clique aos botões de remover
    const removerButtons = document.querySelectorAll('.remover');
    removerButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            removerDoCarrinho(index);
        });
    });
}

// Função para remover um produto do carrinho
function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1); // Remove o produto do carrinho
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage
    exibirCarrinho(); // Atualiza a exibição do carrinho
}

// Função para voltar à loja
document.getElementById('voltar').addEventListener('click', () => {
    window.location.href = 'produtos.html'; // Redireciona para a página principal
});

// Chama a função para exibir o carrinho ao carregar a página
window.onload = exibirCarrinho;


// Função para exibir os produtos no carrinho
function exibirCarrinho() {
    const produtosCarrinhoDiv = document.getElementById('produtos-carrinho');
    const totalDiv = document.getElementById('total');
    produtosCarrinhoDiv.innerHTML = ''; // Limpa a div antes de exibir os produtos

    let total = 0;

    // Recupera o carrinho do localStorage
    const carrinhoArmazenado = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Exibe cada produto no carrinho
    carrinhoArmazenado.forEach((produto, index) => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto-carrinho');
        produtoDiv.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <button class="remover" data-index="${index}">Remover</button>
        `;
        produtosCarrinhoDiv.appendChild(produtoDiv);
        total += produto.preco; // Soma o preço do produto ao total
    });

    totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`; // Atualiza o total

    // Adiciona eventos de clique aos botões de remover
    const removerButtons = document.querySelectorAll('.remover');
    removerButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            removerDoCarrinho(index);
        });
    });
}

// Função para remover um produto do carrinho
function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1); // Remove o produto do carrinho
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage
    exibirCarrinho(); // Atualiza a exibição do carrinho
}

// Função para finalizar a compra
function finalizarCompra() {
    const carrinhoArmazenado = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    if (carrinhoArmazenado.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let mensagem = "Você comprou:\n";
    let total = 0;

    carrinhoArmazenado.forEach(produto => {
        mensagem += `- ${produto.nome}: R$ ${produto.preco.toFixed(2)}\n`;
        total += produto.preco;
    });

    mensagem += `Total: R$ ${total.toFixed(2)}`;
    alert(mensagem); // Exibe a mensagem com os produtos e o total
}

// Função para voltar à loja
document.getElementById('voltar').addEventListener('click', () => {
    window.location.href = 'produtos.html'; // Redireciona para a página principal
});

// Adiciona evento de clique ao botão de finalizar compra
document.getElementById('finalizar-compra').addEventListener('click', finalizarCompra);

// Chama a função para exibir o carrinho ao carregar a página
window.onload = exibirCarrinho;