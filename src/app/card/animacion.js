function funcionAnimacion (){
    var color1 = "tarjeta";
    var color2 = "active"
    var tarjeta = document.getElementById("tarjeta");
    var infTarjeta = document.getElementsByTagName("li");
    var infTarjeta1 = document.getElementById("lista"); 
    var sonido = document.getElementById("sonido");
    
        if(tarjeta.id=="tarjeta"){
            sonido.play();
            for (let index = 0; index < infTarjeta.length; index++) {
                infTarjeta[index].style.display="none";
                infTarjeta1.style.display="none";
            }
            tarjeta.id=color2;
        }
}

