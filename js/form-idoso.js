(function() {
    'use strict';

    const form = document.getElementById('formIdoso');
    const resultadoDiv = document.getElementById('resultado');

    document.getElementById('idade').addEventListener('blur', function() {
        const raw = String(this.value).trim();
        if (raw === '') return;
        const valor = parseInt(raw);
        if (isNaN(valor)) return;
        if (valor > 120) this.value = 120;
        if (valor < 60) this.value = 60;
    });

    document.getElementById('peso').addEventListener('blur', function() {
        const raw = String(this.value).trim();
        if (raw === '') return;
        const valor = parseFloat(raw);
        if (isNaN(valor)) return;
        if (valor > 300) this.value = 300;
        if (valor < 30) this.value = 30;
    });

    document.getElementById('altura').addEventListener('blur', function() {
        const raw = String(this.value).trim();
        if (raw === '') return;
        const valor = parseFloat(raw);
        if (isNaN(valor)) return;
        if (valor > 250) this.value = 250;
        if (valor < 100) this.value = 100;
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
            calcularIMC();
        } else {
            form.classList.add('was-validated');
        }
    }, false);

    function calcularIMC() {
        const nome = document.getElementById('nome').value;
        const idade = parseInt(document.getElementById('idade').value);
        const peso = parseFloat(document.getElementById('peso').value);
        const alturaCm = parseFloat(document.getElementById('altura').value);

        const alturaM = alturaCm / 100;
        const imc = peso / (alturaM * alturaM);

        const classificacao = classificarIMCIdoso(imc);

        mostrarResultado(nome, imc, classificacao);
        anunciarResultado(nome, imc, classificacao);
    }

    function mostrarResultado(nome, imc, classificacao) {
        const imcFormatado = imc.toFixed(1);
        
        let porcentagem = 0;
        
        if (imc < 22) {
            porcentagem = Math.max(0, ((imc - 15) / 7) * 20);
        } else if (imc < 27) {
            porcentagem = 20 + ((imc - 22) / 5) * 40;
        } else if (imc < 30) {
            porcentagem = 60 + ((imc - 27) / 3) * 20;
        } else {
            porcentagem = 80 + Math.min(((imc - 30) / 15) * 20, 20);
        }
        
        porcentagem = Math.max(0, Math.min(100, porcentagem));
        
        resultadoDiv.innerHTML = `
            <div class="card resultado-card shadow-lg border-0">
                <div class="resultado-header ${classificacao.classe}">
                    <i class="bi ${classificacao.icone} fs-1 mb-2" aria-hidden="true"></i>
                    <h3 class="mb-1">Resultado do IMC</h3>
                    <p class="mb-0"><strong>${nome}</strong></p>
                </div>
                <div class="resultado-body p-4">
                    <div class="mb-4">
                        <div class="text-center mb-3">
                            <div class="display-3 fw-bold ${classificacao.classe.replace('resultado-', 'text-')}">
                                ${imcFormatado}
                            </div>
                            <small class="text-muted text-uppercase fw-bold">Índice de Massa Corporal</small>
                        </div>
                        
                        <div class="position-relative mb-2" style="height: 50px;">
                            <div class="progress" style="height: 50px; border-radius: 50px; overflow: hidden;">
                                <div class="progress-bar" 
                                     role="progressbar" 
                                     style="width: 20%; background: linear-gradient(90deg, #4FC3F7, #29B6F6); border-radius: 50px 0 0 50px;"
                                     aria-label="Abaixo do peso"></div>
                                <div class="progress-bar" 
                                     role="progressbar" 
                                     style="width: 40%; background: linear-gradient(90deg, #66BB6A, #4CAF50);"
                                     aria-label="Peso Normal"></div>
                                <div class="progress-bar" 
                                     role="progressbar" 
                                     style="width: 20%; background: linear-gradient(90deg, #FFCA28, #FFA726);"
                                     aria-label="Sobrepeso"></div>
                                <div class="progress-bar" 
                                     role="progressbar" 
                                     style="width: 20%; background: linear-gradient(90deg, #FF7043, #EF5350); border-radius: 0 50px 50px 0;"
                                     aria-label="Obesidade"></div>
                            </div>
                            
                            <div class="position-absolute" 
                                 style="left: ${porcentagem}%; top: -10px; transform: translateX(-50%); z-index: 10;">
                                <i class="bi bi-caret-down-fill fs-1 ${classificacao.classe.replace('resultado-', 'text-')}" 
                                   style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));"
                                   aria-hidden="true"></i>
                            </div>
                        </div>
                        
                        <div class="d-flex justify-content-between px-1 mt-2">
                            <small class="fw-bold" style="color: #4FC3F7;">Baixo Peso</small>
                            <small class="fw-bold" style="color: #66BB6A;">Normal</small>
                            <small class="fw-bold" style="color: #FFCA28;">Sobrepeso</small>
                            <small class="fw-bold" style="color: #EF5350;">Obesidade</small>
                        </div>
                    </div>

                    <div class="text-center mb-4">
                        <span class="badge ${classificacao.classe} px-4 py-3 fs-5">
                            <i class="bi ${classificacao.icone} me-2" aria-hidden="true"></i>
                            ${classificacao.classificacao}
                        </span>
                    </div>

                    <div class="alert alert-light border-start border-4 ${classificacao.classe.replace('resultado-', 'border-')}" role="alert">
                        <h5 class="alert-heading">
                            <i class="bi bi-lightbulb-fill me-2" aria-hidden="true"></i>
                            Orientação
                        </h5>
                        <p class="mb-0">${classificacao.mensagem}</p>
                    </div>

                    <div class="alert alert-warning border-0" role="alert">
                        <div class="d-flex align-items-start">
                            <i class="bi bi-exclamation-triangle-fill me-2 mt-1" aria-hidden="true"></i>
                            <div>
                                <strong>Importante:</strong> Esta é uma avaliação baseada em valores de referência para idosos. 
                                Consulte um geriatra para avaliação completa.
                            </div>
                        </div>
                    </div>

                    <div class="d-grid gap-2">
                        <button type="button" 
                                class="btn btn-idoso btn-lg"
                                onclick="document.getElementById('formIdoso').reset(); document.getElementById('resultado').style.display='none'; document.getElementById('formIdoso').classList.remove('was-validated');"
                                aria-label="Fazer novo cálculo">
                            <i class="bi bi-arrow-repeat me-2" aria-hidden="true"></i>
                            Calcular Novamente
                        </button>
                    </div>
                </div>
            </div>
        `;

        resultadoDiv.style.display = 'block';
        setTimeout(() => {
            resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }

    function anunciarResultado(nome, imc, classificacao) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'visually-hidden';
        announcement.textContent = `Resultado calculado. ${nome} tem IMC de ${imc.toFixed(1)}, classificado como ${classificacao.classificacao}. ${classificacao.mensagem}`;
        document.body.appendChild(announcement);

        setTimeout(() => {
            announcement.remove();
        }, 3000);
    }

    form.addEventListener('reset', function() {
        resultadoDiv.style.display = 'none';
        form.classList.remove('was-validated');
    });

    if (!document.querySelector('style[data-visually-hidden]')) {
        const style = document.createElement('style');
        style.setAttribute('data-visually-hidden', 'true');
        style.textContent = `
            .visually-hidden {
                position: absolute;
                width: 1px;
                height: 1px;
                margin: -1px;
                padding: 0;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border: 0;
            }
        `;
        document.head.appendChild(style);
    }
})();
