const turnOn = document.getElementById ( "turnOn" ); // Botão de ligar
const turnOff = document.getElementById ( "turnOff" ); // Botão de desligar
const lamp = document.getElementById ( "lamp" ); // Chamando a Lampada


function isLampBroken () { 
    return lamp.src.indexOf ( "quebrada" ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
    lamp.src = "./img/ligada.jpg";
}
}

function lampOff () {
    if ( !isLampBroken () ) {
    lamp.src = "./img/desligada.jpg";
}
}

function lampBroken () {
    lamp.src = "./img/quebrada.jpg";
}




turnOn.addEventListener ( "click", lampOn ); // Indicador que com o "click" a lampada será ligada
turnOff.addEventListener ( "click", lampOff );
lamp.addEventListener ( "mouseover", lampOn ); // Resposavel por passar o mouse e ligar
lamp.addEventListener ( "mouseleave", lampOff );
lamp.addEventListener ( "dblclick", lampBroken ); // Dois Clicks a lâmpada será quebrada