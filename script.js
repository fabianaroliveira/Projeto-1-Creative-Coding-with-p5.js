// Adiciona um evento de clique para monitorizar a navegação
document.addEventListener('DOMContentLoaded', () => {
    const link1 = document.getElementById('link-p1');
    const link2 = document.getElementById('link-p2');

    link1.addEventListener('click', () => {
        console.log("A navegar para o Projeto 1...");
    });

    link2.addEventListener('click', () => {
        console.log("A navegar para o Projeto 2...");
    });
});