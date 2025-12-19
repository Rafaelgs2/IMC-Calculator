function calcularIMC(peso, alturaCm) {
    const alturaM = alturaCm / 100;
    const imc = peso / (alturaM * alturaM);
    return Number(imc.toFixed(2));
}

function classificarIMCCrianca(imc, idade, sexo) {
    const tabelaReferencia = {
        masculino: {
            2: { p3: 14.7, p85: 18.4, p97: 19.6 },
            4: { p3: 14.2, p85: 17.5, p97: 18.8 },
            6: { p3: 14.0, p85: 18.0, p97: 20.0 },
            8: { p3: 14.2, p85: 19.3, p97: 22.0 },
            10: { p3: 14.6, p85: 21.0, p97: 24.0 },
            12: { p3: 15.2, p85: 23.0, p97: 26.0 }
        },
        feminino: {
            2: { p3: 14.4, p85: 18.0, p97: 19.4 },
            4: { p3: 13.9, p85: 17.2, p97: 18.6 },
            6: { p3: 13.6, p85: 17.8, p97: 19.8 },
            8: { p3: 13.8, p85: 19.5, p97: 22.3 },
            10: { p3: 14.2, p85: 21.5, p97: 24.8 },
            12: { p3: 15.0, p85: 23.5, p97: 27.0 }
        }
    };
    
    const idadeRef = Math.round(idade / 2) * 2;
    const limites = tabelaReferencia[sexo]?.[idadeRef] || tabelaReferencia[sexo][6];
    
    if (imc < limites.p3) {
        return {
            classificacao: 'Magreza',
            classe: 'resultado-baixo-peso',
            icone: 'bi-exclamation-triangle-fill',
            mensagem: 'IMC abaixo do esperado para a idade. Recomenda-se avaliação médica.'
        };
    } else if (imc < limites.p85) {
        return {
            classificacao: 'Peso adequado',
            classe: 'resultado-peso-normal',
            icone: 'bi-check-circle-fill',
            mensagem: 'IMC dentro da faixa adequada para a idade. Continue com hábitos saudáveis!'
        };
    } else if (imc < limites.p97) {
        return {
            classificacao: 'Sobrepeso',
            classe: 'resultado-sobrepeso',
            icone: 'bi-exclamation-circle-fill',
            mensagem: 'IMC acima do esperado. Consulte um pediatra para orientações.'
        };
    } else {
        return {
            classificacao: 'Obesidade',
            classe: 'resultado-obesidade',
            icone: 'bi-x-circle-fill',
            mensagem: 'IMC muito acima do esperado. É importante buscar acompanhamento médico.'
        };
    }
}


function classificarIMCAdulto(imc) {
    if (imc < 18.5) {
        return { 
            classificacao: 'Abaixo do peso', 
            classe: 'resultado-baixo-peso',
            icone: 'bi-exclamation-triangle-fill',
            mensagem: 'Seu IMC está abaixo do recomendado. Consulte um nutricionista.'
        };
    } else if (imc < 25) {
        return { 
            classificacao: 'Peso normal', 
            classe: 'resultado-peso-normal',
            icone: 'bi-check-circle-fill',
            mensagem: 'Seu IMC está na faixa ideal. Mantenha hábitos saudáveis!'
        };
    } else if (imc < 30) {
        return { 
            classificacao: 'Sobrepeso', 
            classe: 'resultado-sobrepeso',
            icone: 'bi-exclamation-circle-fill',
            mensagem: 'Seu IMC indica sobrepeso. Considere ajustes na alimentação e exercícios.'
        };
    } else if (imc < 35) {
        return { 
            classificacao: 'Obesidade grau I', 
            classe: 'resultado-obesidade',
            icone: 'bi-x-circle-fill',
            mensagem: 'Obesidade grau I. Procure acompanhamento médico e nutricional.'
        };
    } else if (imc < 40) {
        return { 
            classificacao: 'Obesidade grau II', 
            classe: 'resultado-obesidade',
            icone: 'bi-x-circle-fill',
            mensagem: 'Obesidade grau II (severa). Busque acompanhamento médico urgente.'
        };
    } else {
        return { 
            classificacao: 'Obesidade grau III', 
            classe: 'resultado-obesidade',
            icone: 'bi-x-circle-fill',
            mensagem: 'Obesidade grau III (mórbida). É fundamental buscar ajuda médica imediata.'
        };
    }
}

function classificarIMCIdoso(imc) {
    if (imc < 22) {
        return { 
            classificacao: 'Abaixo do peso', 
            classe: 'resultado-baixo-peso',
            icone: 'bi-exclamation-triangle-fill',
            mensagem: 'IMC abaixo do recomendado para idosos. Consulte um geriatra.'
        };
    } else if (imc < 27) {
        return { 
            classificacao: 'Peso normal', 
            classe: 'resultado-peso-normal',
            icone: 'bi-check-circle-fill',
            mensagem: 'IMC adequado para sua idade. Continue com alimentação balanceada!'
        };
    } else if (imc < 30) {
        return { 
            classificacao: 'Sobrepeso', 
            classe: 'resultado-sobrepeso',
            icone: 'bi-exclamation-circle-fill',
            mensagem: 'Sobrepeso. Converse com seu médico sobre ajustes na dieta.'
        };
    } else if (imc < 35) {
        return { 
            classificacao: 'Obesidade grau I', 
            classe: 'resultado-obesidade',
            icone: 'bi-x-circle-fill',
            mensagem: 'Obesidade grau I. Procure acompanhamento geriátrico.'
        };
    } else if (imc < 40) {
        return { 
            classificacao: 'Obesidade grau II', 
            classe: 'resultado-obesidade',
            icone: 'bi-x-circle-fill',
            mensagem: 'Obesidade grau II. É importante buscar orientação médica.'
        };
    } else {
        return { 
            classificacao: 'Obesidade grau III', 
            classe: 'resultado-obesidade',
            icone: 'bi-x-circle-fill',
            mensagem: 'Obesidade grau III. Procure atendimento médico urgente.'
        };
    }
}

// Função  processamento
function processarFormulario(event, tipoCategoria) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    const imc = calcularIMC(peso, altura);
    
    let resultado;
    if (tipoCategoria === 'crianca') {
        resultado = classificarIMCCrianca(imc, idade, 'masculino');
    } else if (tipoCategoria === 'adulto') {
        resultado = classificarIMCAdulto(imc);
    } else if (tipoCategoria === 'idoso') {
        resultado = classificarIMCIdoso(imc);
    }
    
    exibirResultado(nome, imc, resultado);
}

//  exibicao resultado
function exibirResultado(nome, imc, resultado) {
    const divResultado = document.getElementById('resultado');
    const textoResultado = document.getElementById('resultadoTexto');
    const alertDiv = divResultado.querySelector('.alert');
    
    
    alertDiv.className = 'alert';
    alertDiv.classList.add(`alert-${resultado.classe}`);
    
    textoResultado.innerHTML = `
        <strong>${nome}</strong>, seu IMC é <strong>${imc}</strong>.<br>
        Classificação: <strong>${resultado.classificacao}</strong>
    `;
    
    divResultado.style.display = 'block';
}
