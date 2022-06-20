var Area = 0.0;
var Perimeter = 0.0;
var GlobalFigure = "";
var GlobalFigureESP = "";

function SelectFigure() {
  let Figure = document.getElementById("Figure").value;
  let Content = document.getElementById("Content");
  let ResultImg = document.getElementById("ResultImg");
  let ResultText = document.getElementById("ResultText");

  Content.style.visibility = "visible";
  ResultImg.setAttribute("src", `Images/Default.png`);
  ResultText.innerHTML = "";

  switch (Figure) {
    case "Square":
      let LengthSquare = parseInt(prompt("Indique longitud por lado"));
      ValidateInteger(LengthSquare);
      Area = Math.pow(LengthSquare, 2);
      Perimeter = LengthSquare * 4;
      GlobalFigure = Figure;
      GlobalFigureESP = "Cuadrado";
      console.log(`El área es: ${Area}`);
      console.log(`El perimetro es: ${Perimeter}`);
      break;

    case "Rectangle":
      let BaseRectangle = parseInt(prompt("Indique longitud de la base"));
      ValidateInteger(BaseRectangle);
      let HeightRectangle = parseInt(prompt("Indique longitud de la altura"));
      ValidateInteger(HeightRectangle);
      Area = BaseRectangle * HeightRectangle;
      Perimeter = 2 * (BaseRectangle + HeightRectangle);
      GlobalFigure = Figure;
      GlobalFigureESP = "Rectangulo";
      console.log(`El área es: ${Area}`);
      console.log(`El perimetro es: ${Perimeter}`);
      break;

    case "Triangle":
      let BaseTriangle = parseInt(prompt("Indique longitud de la base"));
      ValidateInteger(BaseTriangle);
      let HeightTriangle = parseInt(prompt("Indique longitud de la altura"));
      ValidateInteger(HeightTriangle);
      Area = (BaseTriangle * HeightTriangle) / 2;
      Perimeter = BaseTriangle * 3;
      GlobalFigure = Figure;
      GlobalFigureESP = "Triangulo";
      console.log(`El área es: ${Area}`);
      console.log(`El perimetro es: ${Perimeter}`);
      break;

    case "Diamond":
      let MajorDiagonal = parseInt(
        prompt("Indique longitud de la Diagonal Mayor")
      );
      ValidateInteger(MajorDiagonal);
      let MinorDiagonal = parseInt(
        prompt("Indique longitud de la Diagonal Menor")
      );
      ValidateInteger(MinorDiagonal);
      let LengthDiamond = parseInt(prompt("Indique longitud por lado"));
      Area = MajorDiagonal * MinorDiagonal;
      Perimeter = LengthDiamond * 4;
      GlobalFigure = Figure;
      GlobalFigureESP = "Rombo";
      console.log(`El área es: ${Area}`);
      console.log(`El perimetro es: ${Perimeter}`);
      break;

    case "Rhomboid":
      let BaseRhomboid = parseInt(prompt("Indique longitud de la base"));
      ValidateInteger(BaseRhomboid);
      let HeightRhomboid = parseInt(prompt("Indique longitud de la altura"));
      ValidateInteger(HeightRhomboid);
      Area = BaseRhomboid * HeightRhomboid;
      Perimeter = 2 * (BaseRhomboid + HeightRhomboid);
      GlobalFigure = Figure;
      GlobalFigureESP = "Romboide";
      console.log(`El área es: ${Area}`);
      console.log(`El perimetro es: ${Perimeter}`);
      break;

    case "Trapeze":
      let MajorBase = parseInt(prompt("Indique longitud de la base mayor"));
      ValidateInteger(MajorBase);
      let MinorBase = parseInt(prompt("Indique longitud de la base menor"));
      ValidateInteger(MinorBase);
      let HeightTrapeze = parseInt(prompt("Indique longitud de la altura"));
      ValidateInteger(HeightTrapeze);
      let LengthTrapeze = parseInt(prompt("Indique longitud por lado"));
      Area = (HeightTrapeze * (MajorBase * MinorBase)) / 2;
      Perimeter = MajorBase + MinorBase + 2 * LengthTrapeze;
      GlobalFigure = Figure;
      GlobalFigureESP = "Trapecio";
      console.log(`El área es: ${Area}`);
      console.log(`El perimetro es: ${Perimeter}`);
      break;

    case "Circle":
      let Radio = parseInt(prompt("Indique longitud del radio"));
      ValidateInteger(Radio);
      let Diameter = Radio * 2;
      Area = Math.PI * Math.pow(Radio, 2);
      Perimeter = Math.PI * Diameter;
      GlobalFigure = Figure;
      GlobalFigureESP = "Circulo";
      console.log(`El área es: ${Area}`);
      console.log(`El perimetro es: ${Perimeter}`);
      break;

    case "Polygon":
      let LengthPolygon = parseInt(prompt("Indique longitud por lado"));
      ValidateInteger(LengthPolygon);
      let NumberSides = parseInt(prompt("Indique la cantidad de lados"));
      ValidateInteger(NumberSides);
      let Apotema = parseInt(prompt("Indique la longitud del apotema"));
      ValidateInteger(Apotema);
      Perimeter = LengthPolygon * NumberSides;
      Area = (Perimeter * Apotema) / 2;
      GlobalFigure = Figure;
      GlobalFigureESP = "Poligono";
      console.log(`El área es: ${Area}`);
      console.log(`El perimetro es: ${Perimeter}`);
      break;

    default:
      Content.style.visibility = "hidden";
      break;
  }
}

function ShowArea() {
  let ResultImg = document.getElementById("ResultImg");
  let ResultText = document.getElementById("ResultText");
  ResultImg.setAttribute("src", `images/${GlobalFigure}Area.png`);
  ResultText.innerHTML = `El área del ${GlobalFigureESP} es ${Area}`;
  ResultText.color = "white";
}
function ShowPerimeter() {
  let ResultImg = document.getElementById("ResultImg");
  let ResultText = document.getElementById("ResultText");
  ResultImg.setAttribute("src", `images/${GlobalFigure}Perimeter.png`);
  ResultImg.style.width = "100%";
  ResultImg.style.width = "300px";
  ResultText.innerHTML = `El perímetro del ${GlobalFigureESP} es ${Perimeter}`;
  ResultText.color = "white";
  ResultText.marginBottom = "200px";
}

function ValidateInteger(number) {
  if (!Number.isInteger(number)) {
    alert("El número ingresado no es entero");
    return;
  }
}
