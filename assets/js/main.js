const form = document.querySelector("#formulario")

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    if (!peso) {
        setResultado('Peso inválido', false)
        return
    }
    if (!altura) {
        setResultado('Altura inválida', false)
        alert("Use apenas números com pontos(.) ao invés de vírgulas(,) Ex: 1.70")
        return
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)

    const msg = `<p> Seu IMC é ${imc}<br> (${nivelImc})</p>`
    
    setResultado(msg, true)
})

function getNivelImc (imc) {
    const nivel = [' Abaixo do peso ', ' Peso normal ', ' Sobrepeso ', ' Obesidade grau 1 ', ' Obesidade grau 2 ', ' Obesidade grau 3 ']

    if (imc >= 39.9) {return nivel[5]}   
    if (imc >= 34.9) {return nivel[4]}
    if (imc >= 29.9) {return nivel[3]}
    if (imc >= 24.9) {return nivel[2]}
    if (imc >= 18.5) {return nivel[1]}
    if (imc <18.5) {return nivel[0]}
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function criaP (className) {
    const p = document.createElement('h4')
    return p
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML = ''

  
    
    const p = criaP()

    if (isValid) {
        p.classList.add('span-resultado')
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg
    resultado.appendChild(p)

}