

document.getElementById("boton").addEventListener("click", Conocermasdemi);
document.getElementById("boton_Graciasporsutiempo").addEventListener("click", Graciasporsutiempo);


function Masdemi() {
    document.getElementById("demo").innerHTML = "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
    document.getElementById("demo").style.display = "block";
}

function Graciasporsutiempo() {
    document.getElementById("demo").innerHTML = "Gracias ante todo por estar interesado en mi perfil , como mencione anteriormente,soy una persona proactiva a la que le gusta aprender constantemente cosas nuevas. No tengo mucha experiencia pero le pongo empeño.";
    document.getElementById("demo").style.display = "none";
}

function Conocermasdemi() {
    if (document.getElementById("demo").style.display == "none") {
        Masdemi();
    } else {
        Graciasporsutiempo();
    }
}
