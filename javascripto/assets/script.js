var elogios = [
    "Diva sem defeito",
    "Não é github, mas é gatinho",
    "Icone incompreendido",
    "Responsivo",
    "Fada Sensata",
    "Maravilindo",
    "Cristal",
    "Zero defeitos",
    "Amorzinho",
    "Sexy",
    "Cremoso",
];
function elogiar(){
    var random = Math.floor(Math.random() * elogios.length);
    document.getElementById("titulo").innerHTML = elogios[random];
}