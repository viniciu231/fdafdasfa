var ganhador = 0

function verificar() {
  if (
    (arrayX[0] == "X" && arrayX[1] == "X" && arrayX[2] == "X") ||
    (arrayO[0] == "O" && arrayO[1] == "O" && arrayO[2] == "O")
  ) {
    primeiro.innerHTML += `<span class="vitoriaHorizontal"></span>`;
    if (arrayX[0] == "X") {
      ganhador = "X";
    } else if (arrayO[0] == "O") {
      ganhador = "O";
    }
  } else if (
    (arrayX[3] == "X" && arrayX[4] == "X" && arrayX[5] == "X") ||
    (arrayO[3] == "O" && arrayO[4] == "O" && arrayO[5] == "O")
  ) {
    quarto.innerHTML += `<span class="vitoriaHorizontal"></span>`;
    if (arrayX[3] == "X") {
      ganhador = "X";
    } else if (arrayO[3] == "O") {
      ganhador = "O";
    }
  } else if (
    (arrayX[6] == "X" && arrayX[7] == "X" && arrayX[8] == "X") ||
    (arrayO[6] == "O" && arrayO[7] == "O" && arrayO[8] == "O")
  ) {
    setimo.innerHTML += `<span class="vitoriaHorizontal"></span>`;
    if (arrayX[6] == "X") {
      ganhador = "X";
    } else if (arrayO[6] == "O") {
      ganhador = "O";
    }
  }

  if (
    (arrayX[0] == "X" && arrayX[3] == "X" && arrayX[6] == "X") ||
    (arrayO[0] == "O" && arrayO[3] == "O" && arrayO[6] == "O")
  ) {
    setimo.innerHTML += `<span class="vitoriaVertical"></span>`;
    if (arrayX[0] == "X") {
      ganhador = "X";
    } else if (arrayO[0] == "O") {
      ganhador = "O";
    }
  } else if (
    (arrayX[1] == "X" && arrayX[4] == "X" && arrayX[7] == "X") ||
    (arrayO[1] == "O" && arrayO[4] == "O" && arrayO[7] == "O")
  ) {
    oitavo.innerHTML += `<span class="vitoriaVertical"></span>`;

    if (arrayX[1] == "X") {
      ganhador = "X";
    } else if (arrayO[1] == "O") {
      ganhador = "O";
    }
  } else if (
    (arrayX[2] == "X" && arrayX[5] == "X" && arrayX[8] == "X") ||
    (arrayO[2] == "O" && arrayO[5] == "O" && arrayO[8] == "O")
  ) {
    nono.innerHTML += `<span class="vitoriaVertical"></span>`;

    if (arrayX[2] == "X") {
      ganhador = "X";
    } else if (arrayO[2] == "O") {
      ganhador = "O";
    }
  }
  if (
    (arrayX[0] == "X" && arrayX[4] == "X" && arrayX[8] == "X") ||
    (arrayO[0] == "O" && arrayO[4] == "O" && arrayO[8] == "O")
  ) {
    quarto.innerHTML += `<span class="vitoriaDiagonal"></span>`;

    if (arrayX[0] == "X") {
      ganhador = "X";
    } else if (arrayO[0] == "O") {
      ganhador = "O";
    }
  } else if (
    (arrayX[2] == "X" && arrayX[4] == "X" && arrayX[6] == "X") ||
    (arrayO[2] == "O" && arrayO[4] == "O" && arrayO[6] == "O")
  ) {
    quarto.innerHTML += `<span class="vitoriaDiagonal2"></span>`;

    if (arrayX[2] == "X") {
      ganhador = "X";
    } else if (arrayO[2] == "O") {
      ganhador = "O";
    }
  }

  if (ganhador == "X") {
    console.log("X ganhou");
  } else if (ganhador == "O") {
    console.log("O ganhou");
  }
}
