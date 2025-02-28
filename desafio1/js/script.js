document.addEventListener("DOMContentLoaded", function() {
    console.log("Js carregado");

    let videoInicial = document.getElementById("videoInicial");
    let videoContainer = document.getElementById("videoContainer");
    let botao = document.getElementById("btnCriar");

    videoContainer.style.display = "block";

    document.body.addEventListener("click", function iniciarVideo() {
        videoInicial.play().catch(error => console.error("Erro ao tentar iniciar o vídeo:", error));
        document.body.removeEventListener("click", iniciarVideo); 
    });

    videoInicial.addEventListener("ended", function() {
        console.log("Video finalizado, botao aparecendo");
        botao.style.display = "block";
    });

   
    botao.addEventListener("click", criarMorcego);

});

function criarMorcego() {
    console.log("btn clicado");

    let videoInicial = document.getElementById("videoInicial");
    let videoContainer = document.getElementById("videoContainer");
    let videoBtn = document.getElementById("videoBtt");
    let botao = document.getElementById("btnCriar");

    videoInicial.style.display = "none";
    videoContainer.style.display = "block";
    videoBtn.style.display = "block";
    videoBtn.style.visibility = "visible";
    videoBtn.style.opacity = "1";
    videoBtn.play()
    
    botao.style.display = "none";

    setTimeout(() => {
        let somMorcego = new Audio("/desafio1/audio/bat_fly.mp3");
        somMorcego.play();
    }, 1000);

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {
            setTimeout(() => {
                const morcego = document.createElement("img");
                morcego.src = "/desafio1/img/morcego_unic.png";
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
            }, 1000);
        
        }, i * 500);
    }   

    videoBtn.addEventListener("ended", function() {
        console.log("Video finalizado, botao aparecendo");
        videoBtn.style.display = "none";
        videoContainer.style.background = "black";
    });

    
}