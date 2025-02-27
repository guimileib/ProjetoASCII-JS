document.addEventListener("DOMContentLoaded", function() {
    console.log("Js carregado");

    const botao = document.getElementById("btnCriar");
    botao.addEventListener("click", criarMorcego);
    

    if(botao.addEventListener("click", criarMorcego)){
        console.log("Botão clicado");
    }
});

function criarMorcego() {
    console.log("btn clicado");

    const somMorcego = new Audio("/audio/bat_fly.mp3");
    somMorcego.play();

    let videoContainer = document.getElementById("videoContainer");
    let videoBtn = document.getElementById("videoBtn");
    videoContainer.style.display = "block";
    videoBtn.play();

    //const botao = document.getElementById("btnCriar");
    //botao.style.display = "none";
    
    
    for (let i = 0; i < 20; i++) {
        const morcego = document.createElement("img");
        morcego.src = "/img/morcego_unic.png";
        morcego.style.position = "absolute";
        morcego.style.width = "300px";
        morcego.style.left = Math.random() * window.innerWidth + "px";
        morcego.style.top = Math.random() * window.innerHeight + "px";
        morcego.style.transition = "transform 5.5s linear";

        document.body.appendChild(morcego);

        setTimeout(() => {
            morcego.style.transform = "translateY(-100vh) rotateY(45deg) rotateX(45deg) scale(1.5)";
            setTimeout(() => morcego.remove(), 5000);
        }, 200);
    }
}