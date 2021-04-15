document.addEventListener('DOMContentLoaded', () => {
    loadPortfolio();
});

function loadPortfolio() {
    fetch('datos.json').then(res => {
        return res.json();
    }).then(data => {
        let html = '';

        data.portafolio.forEach(portfolio => {
            html += `
                <div class="element">
                    <img src="img/${portfolio.id}.jpg">
                    <div class="content">
                        <h3>${portfolio.nombre}</h3>
                        <p>${portfolio.desc}</p>
                    </div>
                </div>
            `;
        });

        document.querySelector('#list').innerHTML = html;
    });
}