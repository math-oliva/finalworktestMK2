fetch('dados.json')
    .then(response => response.json())
    .then(data => {
        const subpaginasDiv = document.getElementById('subpaginas');

        data.forEach((pagina, index) => {
            const paginaDiv = document.createElement('div');
            paginaDiv.innerHTML = `
                <h2>${pagina.titulo}</h2>
                <p>${pagina.conteudo}</p>
                <nav>
                    ${index > 0 ? `<a href="#" onclick="navegar(${index - 1})">Página Anterior</a>` : ''}
                    ${index < data.length - 1 ? `<a href="#" onclick="navegar(${index + 1})">Próxima Página</a>` : ''}
                </nav>
            `;
            subpaginasDiv.appendChild(paginaDiv);
        });
    })
    .catch(error => console.error('Erro ao carregar os dados:', error));

function navegar(index) {
    window.location.hash = `#pagina${index}`;
    location.reload();
}
