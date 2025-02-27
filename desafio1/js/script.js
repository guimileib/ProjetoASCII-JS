document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    const maxBalloons = 10;
    const balloons = [];

    document.getElementById("btnCriar").addEventListener("click", function() {
        console.log("Botão clicado!");
        if (balloons.length >= maxBalloons) {
            const oldBalloon = balloons.shift();
            oldBalloon.remove();
        }

        const balao = document.createElement("div");
        balao.classList.add("balao");

        const size = Math.floor(Math.random() * 40) + 30;
        balao.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
        balao.style.left = `calc(${Math.random() * 80}vw + 10px)`;
        balao.style.height = `${size * 1.4}px`;

        container.appendChild(balao);
        balloons.push(balao);

        setTimeout(() => {
            balao.remove();
            const index = balloons.indexOf(balao);
            if (index > -1) {
                balloons.splice(index, 1);
            }
        }, 5000);
    });
});
