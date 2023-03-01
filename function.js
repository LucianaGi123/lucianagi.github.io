

document.getElementById("boton").addEventListener ("click", Conocermasdemi);
document.getElementById("boton_Graciasporsutiempo").addEventListener ("click", Graciasporsutiempo);


function Masdemi () {
    document.getElementById("demo").innerHTML = "Gracias ante todo por estar interesado en mi perfil , como mencione anteriormente,soy una persona proactiva a la que le gusta aprender constantemente cosas nuevas. No tengo mucha experiencia pero le pongo empeño.";   
    document.getElementById("demo").style.display = "block";
}

function Graciasporsutiempo () {
    document.getElementById("demo").innerHTML = "Gracias ante todo por estar interesado en mi perfil , como mencione anteriormente,soy una persona proactiva a la que le gusta aprender constantemente cosas nuevas. No tengo mucha experiencia pero le pongo empeño." ;  
    document.getElementById("demo").style.display = "none";
}

function Conocermasdemi () {
if (document.getElementById("demo").style.display == "none") {
    Masdemi ();
} else {  
    Graciasporsutiempo ();
}
}
