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

    let videoContainer = document.getElementById("video-container");
    let video = document.getElementById("video");

    videoContainer.style.display = "block";
    video.src ="https://www.youtube.com/embed/ddyKLEb_G38?autoplay=1&mute=1&loop=1&playlist=ddyKLEb_G38";
    video.autoplay = true;
    const botao = document.getElementById("btnCriar");
    botao.style.display = "none";
    
    
    for (let i = 0; i < 10; i++) {
        const morcego = document.createElement("img");
        morcego.src = "/img/morcego_unic.png";
        morcego.style.position = "absolute";
        morcego.style.width = "300px";
        morcego.style.left = Math.random() * window.innerWidth + "px";
        morcego.style.top = Math.random() * window.innerHeight + "px";
        morcego.style.transition = "transform 2s linear";

        document.body.appendChild(morcego);

        setTimeout(() => {
            morcego.style.transform = "translateY(-100vh) rotateY(45deg) rotateX(45deg) scale(1.5)";
            setTimeout(() => morcego.remove(), 2000);
        }, 100);
    }
}