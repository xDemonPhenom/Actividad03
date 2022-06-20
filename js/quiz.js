var Data = {
  data: [
    {
      Pregunta: "¿Quién abolió la esclavitud en el Perú?",
      Alternativas: [
        {
          Alternativa: "Ramon Castilla",
          Respuesta: "A",
        },
        {
          Alternativa: "Pedro Castillo",
          Respuesta: "B",
        },
        {
          Alternativa: "Superman",
          Respuesta: "C",
        },
      ],
      Resultado: "A",
    },
    {
      Pregunta: "¿Cuál es la capital de Australia?",
      Alternativas: [
        {
          Alternativa: "Oslo",
          Respuesta: "A",
        },
        {
          Alternativa: "Sidney",
          Respuesta: "B",
        },
        {
          Alternativa: "Tangamandapio",
          Respuesta: "C",
        },
      ],
      Resultado: "B",
    },
    {
      Pregunta: "¿Cuál es el pais más pequeño del mundo?",
      Alternativas: [
        {
          Alternativa: "Rusia",
          Respuesta: "A",
        },
        {
          Alternativa: "El Vaticano",
          Respuesta: "B",
        },
        {
          Alternativa: "Ciudad Gótica",
          Respuesta: "C",
        },
      ],
      Resultado: "B",
    },
    {
      Pregunta: "¿Como se llama el actual presidente del Perú?",
      Alternativas: [
        {
          Alternativa: "Batman",
          Respuesta: "A",
        },
        {
          Alternativa: "San Martín",
          Respuesta: "B",
        },
        {
          Alternativa: "Pedro Castillo",
          Respuesta: "C",
        },
      ],
      Resultado: "C",
    },
    {
      Pregunta: "¿En qué pais se celebrará el mundial 2022?",
      Alternativas: [
        {
          Alternativa: "Qatar",
          Respuesta: "A",
        },
        {
          Alternativa: "Brasil",
          Respuesta: "B",
        },
        {
          Alternativa: "México",
          Respuesta: "C",
        },
      ],
      Resultado: "A",
    },
    {
      Pregunta: "¿Cuántas horas tiene el día?",
      Alternativas: [
        {
          Alternativa: "25",
          Respuesta: "A",
        },
        {
          Alternativa: "24",
          Respuesta: "B",
        },
        {
          Alternativa: "20",
          Respuesta: "C",
        },
      ],
      Resultado: "B",
    },
    {
      Pregunta: "¿Cuál es el continente más pequeño?",
      Alternativas: [
        {
          Alternativa: "Europa",
          Respuesta: "A",
        },
        {
          Alternativa: "Asia",
          Respuesta: "B",
        },
        {
          Alternativa: "Oceania",
          Respuesta: "C",
        },
      ],
      Resultado: "C",
    },
    {
      Pregunta: "¿Cuántas estaciones hay en el transcurso de un año?",
      Alternativas: [
        {
          Alternativa: "8",
          Respuesta: "A",
        },
        {
          Alternativa: "5",
          Respuesta: "B",
        },
        {
          Alternativa: "4",
          Respuesta: "C",
        },
      ],
      Resultado: "C",
    },
    {
      Pregunta: "¿Cuántos días tiene el mes de Febrero?",
      Alternativas: [
        {
          Alternativa: "29",
          Respuesta: "A",
        },
        {
          Alternativa: "28",
          Respuesta: "B",
        },
        {
          Alternativa: "30",
          Respuesta: "C",
        },
      ],
      Resultado: "B",
    },
    {
      Pregunta: "¿De que color es el cielo?",
      Alternativas: [
        {
          Alternativa: "Celeste",
          Respuesta: "A",
        },
        {
          Alternativa: "Azul",
          Respuesta: "B",
        },
        {
          Alternativa: "Gris",
          Respuesta: "C",
        },
      ],
      Resultado: "A",
    },
  ],
};

function Init() {
  //Creacion y captura de elementos para la pregunta
  let SpanPositionAnswer = document.getElementById("PositionAnswer");
  let SpanScore = document.getElementById("Score");

  let DivBox = document.getElementById("Box");
  let DivAnswer = document.createElement("div");
  let DivAlternatives = document.createElement("div");

  // Creando referencia de posición para preguntas (0 de inicio.)
  SpanPositionAnswer.innerText = "0";
  SpanScore.innerText = "0";

  DivAnswer.id = "Answer";
  DivAlternatives.id = "Alternatives";

  DivBox.appendChild(DivAnswer);
  DivBox.appendChild(DivAlternatives);

  //Crear primera pregunta
  MakeAnswer(0, DivAnswer, DivAlternatives);
}

// Creando función para avanzar de pregunta
function NextAnswer() {
  if (!Validation()) {
    alert("Marca una alternativa");
    return;
  }

  //Capturando la posicion actual de la pregunta
  let SpanPositionAnswer = document.getElementById("PositionAnswer");
  let position = parseInt(SpanPositionAnswer.innerText) + 1;

  let SpanScore = document.getElementById("Score");

  //Capturando alternativa checkeada
  let response = document.querySelector('input[name="drone"]:checked').value;

  //Validar si la respuesta es correcta
  if (response == Data.data[position - 1].Resultado) {
    SpanScore.innerText = parseInt(SpanScore.innerText) + 1;
  }

  // Creando reseteo de datos dentro del divBox
  let DivBox = document.getElementById("Box");
  while (DivBox.lastElementChild) {
    DivBox.removeChild(DivBox.lastElementChild);
  }

  // Creando DivPreguntas por cambio de pregunta
  let DivAnswer = document.createElement("div");
  let DivAlternatives = document.createElement("div");

  DivAnswer.id = "Answer";
  DivAlternatives.id = "Alternatives";

  DivBox.appendChild(DivAnswer);
  DivBox.appendChild(DivAlternatives);

  //Construyendo la siguiente pregunta
  MakeAnswer(position, DivAnswer, DivAlternatives);
  // Aumentando la posicion de la pregunta
  SpanPositionAnswer.innerText = position.toString();

  if (SpanPositionAnswer.innerText == "9") {
    let BtnNext = document.getElementById("Next");

    BtnNext.innerHTML = "Finalizar";
    BtnNext.removeAttribute("onclick");
    BtnNext.onclick = ShowResult;
  }
}

//Mostrando resultado del quiz
function ShowResult() {
  let SpanScore = document.getElementById("Score");
  let DivBox = document.getElementById("Box");
  let DivResult = document.createElement("div");
  DivResult.id = "DivResult";

  //Capturando alternativa checkeada
  let response = document.querySelector('input[name="drone"]:checked').value;
  let success = document.getElementById("Score").innerText;

  //Validar si la respuesta es correcta
  if (response == Data.data[9].Resultado) {
    SpanScore.innerText = parseInt(SpanScore.innerText) + 1;
  }
  console.log("resultado:" + document.getElementById("Score").innerText);

  while (DivBox.lastElementChild) {
    DivBox.removeChild(DivBox.lastElementChild);
  }

  DivResult.innerHTML = `Respondiste ${success} preguntas correctas de 10 posibles`;
  DivBox.appendChild(DivResult);
}

function MakeAnswer(Position, DivAnswer, DivAlternatives) {
  //Ingresar texto de título de pregunta
  DivAnswer.innerHTML = Data.data[Position].Pregunta;

  // Recorriendo alternativas por pregunta
  Data.data[Position].Alternativas.forEach((element) => {
    let DivAlternative = document.createElement("div");
    let InputAlternative = document.createElement("input");
    let LabelAlternative = document.createElement("label");

    DivAlternative.className = "Alternative";
    InputAlternative.className = "alternative";

    InputAlternative.setAttribute("type", "radio");
    InputAlternative.setAttribute("name", "drone");
    InputAlternative.setAttribute("value", element.Respuesta);

    LabelAlternative.setAttribute("for", element.Respuesta);
    LabelAlternative.innerHTML = element.Alternativa;

    DivAlternative.appendChild(InputAlternative);
    DivAlternative.appendChild(LabelAlternative);

    DivAlternatives.appendChild(DivAlternative);
  });
}

//Validación de preguntas contestadas

function Validation() {
  if (document.querySelector('input[name="drone"]:checked') == null) {
    return false;
  } else {
    return true;
  }
}
