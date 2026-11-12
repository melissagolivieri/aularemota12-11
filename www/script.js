
function mostrarCampos() {
    const figura = document.getElementById("figura").value;
    const campos = document.getElementById("campos");
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if (figura === "quadrilatero") {
        campos.innerHTML = `
            <input type="number" id="base" placeholder="Digite a base">
            <input type="number" id="altura" placeholder="Digite a altura">
        `;
    }

    else if (figura === "trapezio") {
        campos.innerHTML = `
            <input type="number" id="baseMaior" placeholder="Base maior">
            <input type="number" id="baseMenor" placeholder="Base menor">
            <input type="number" id="altura" placeholder="Altura">
        `;
    }

    else if (figura === "triangulo") {
        campos.innerHTML = `
            <input type="number" id="base" placeholder="Digite a base">
            <input type="number" id="altura" placeholder="Digite a altura">
        `;
    } else {
        campos.innerHTML = "";
    }
}

function calcularArea() {
    const figura = document.getElementById("figura").value;
    let area;

    if (figura === "") {
        alert("Selecione uma figura!");
        return;
    }

    if (figura === "quadrilatero") {
        const base = Number(document.getElementById("base").value);
        const altura = Number(document.getElementById("altura").value);

        if (base <= 0 || altura <= 0) {
            alert("Digite valores válidos!");
            return;
        }

        area = base * altura;
    }

    else if (figura === "trapezio") {
        const maior = Number(document.getElementById("baseMaior").value);
        const menor = Number(document.getElementById("baseMenor").value);
        const altura = Number(document.getElementById("altura").value);

        if (maior <= 0 || menor <= 0 || altura <= 0 || maior < menor) {
            alert("Digite valores válidos!");
            return;
        }

        area = ((maior + menor) * altura) / 2;
    }

    else if (figura === "triangulo") {
        const base = Number(document.getElementById("base").value);
        const altura = Number(document.getElementById("altura").value);

        if (base <= 0 || altura <= 0) {
            alert("Digite valores válidos!");
            return;
        }

        area = (base * altura) / 2;
    }

    document.getElementById("resultado").innerHTML =
        "Área: " + area.toFixed(2) + " unidades²";
}


