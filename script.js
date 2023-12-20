const hora = document.getElementById("horario");
const minutos = document.getElementById("minutero");
const segundos = document.getElementById("segundero");

function reloj() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let rotaciónHora = 30*hh + (mm / 2);
  let rotaciónMinutos = 6*mm;
  let rotaciónSegundos = 6*ss;

  hora.style.transform = `rotate(${rotaciónHora}deg)`;
  minutos.style.transform = `rotate(${rotaciónMinutos}deg)`;
  segundos.style.transform = `rotate(${rotaciónSegundos}deg)`;
}

setInterval(reloj, 1000);