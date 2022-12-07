
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result_player = document.getElementById("result_player");
const result_cpu = document.getElementById("result_cpu");

let counter_cpu = 0;
let counter_player = 0;
paragraph_cpu.textContent = counter_cpu;
paragraph_player.textContent = counter_player;

rock.addEventListener("click", () => {

  result_player.setAttribute("src", "./image/piedra.jpg");

  let num_random = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  if (num_random === 1) {
    result_cpu.setAttribute("src", "./image/piedra.jpg");
    counter_player = counter_player + 0;
    counter_cpu = counter_cpu + 0;
    paragraph_cpu.textContent = counter_cpu;
    paragraph_player.textContent = counter_player;
  }

  if (num_random === 2) {
    result_cpu.setAttribute("src", "./image/papel.jpg");
    counter_player = counter_player + 0;
    counter_cpu = counter_cpu + 1;
    paragraph_cpu.textContent = counter_cpu;
    paragraph_player.textContent = counter_player;
  }

  if (num_random === 3) {
    result_cpu.setAttribute("src", "./image/tijera.jpg");
    counter_player = counter_player + 1;
    counter_cpu = counter_cpu + 0;
    paragraph_cpu.textContent = counter_cpu;
    paragraph_player.textContent = counter_player;
  }


  if (counter_cpu === 3) {
    alert("Perdiste ");

    window.setTimeout(() => {
      window.location.reload()
    }, 1000);
  }
  if (counter_player === 3) {
    alert("Ganaste ");
    window.setTimeout(() => {
      window.location.reload()
    }, 1000);
  }


  window.setTimeout(() => {
    result_cpu.setAttribute("src", "./image/pregunta.png");
    result_player.setAttribute("src", "./image/pregunta.png");
  }, 1500);
});

paper.addEventListener("click", () => {
  
  result_player.setAttribute("src", "./image/papel.jpg");

  
  let num_random = Math.floor(Math.random() * (3 - 1 + 1) + 1);

 
  if (num_random === 1) {
    result_cpu.setAttribute("src", "./image/piedra.jpg");
    counter_player = counter_player + 1;
    counter_cpu = counter_cpu + 0;
    paragraph_cpu.textContent = counter_cpu;
    paragraph_player.textContent = counter_player;
  }
  if (num_random === 2) {
    result_cpu.setAttribute("src", "./image/papel.jpg");
    counter_player = counter_player + 0;
    counter_cpu = counter_cpu + 0;
    paragraph_cpu.textContent = counter_cpu;
    paragraph_player.textContent = counter_player;
  }
  if (num_random === 3) {
    result_cpu.setAttribute("src", "./image/tijera.jpg");
    counter_player = counter_player + 0;
    counter_cpu = counter_cpu + 1;
    paragraph_cpu.textContent = counter_cpu;
    paragraph_player.textContent = counter_player;
  }

 
  if (counter_cpu === 3) {
    alert("Perdiste ");
    window.setTimeout(() => {
      window.location.reload()
    }, 1000);
  }
  if (counter_player === 3) {
    alert("Ganaste ");
    window.setTimeout(() => {
      window.location.reload()
    }, 1000);
  }

  window.setTimeout(() => {
    result_cpu.setAttribute("src", "./image/pregunta.png");
    result_player.setAttribute("src", "./image/pregunta.png");
  }, 1500);
});

scissors.addEventListener("click", () => {

  result_player.setAttribute("src", "./image/tijera.jpg");


  let num_random = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  if (num_random === 1) {
    result_cpu.setAttribute("src", "./image/piedra.jpg");
    counter_player = counter_player + 0;
    counter_cpu = counter_cpu + 1;
    paragraph_cpu.textContent = counter_cpu;
    paragraph_player.textContent = counter_player;
  }
  if (num_random === 2) {
    result_cpu.setAttribute("src", "./image/papel.jpg");
    counter_player = counter_player + 1;
    counter_cpu = counter_cpu + 0;
    paragraph_cpu.textContent = counter_cpu;
    paragraph_player.textContent = counter_player;
  }
  if (num_random === 3) {
    result_cpu.setAttribute("src", "./image/tijera.jpg");
    counter_player = counter_player + 0;
    counter_cpu = counter_cpu + 0;
    paragraph_cpu.textContent = counter_cpu;
    paragraph_player.textContent = counter_player;
  }


  if (counter_cpu === 3) {
    alert("Perdiste ");
    window.setTimeout(() => {
      window.location.reload()
    }, 1000);
  }
  if (counter_player === 3) {
    alert("Ganaste ");
    window.setTimeout(() => {
      window.location.reload()
    }, 1000);
  }

  window.setTimeout(() => {
    result_cpu.setAttribute("src", "./image/pregunta.png");
    result_player.setAttribute("src", "./image/pregunta.png");
  }, 1500);
});
