document.addEventListener('DOMContentLoaded', function() {
    const formCrianca = document.getElementById('formCrianca');
    const formAdulto = document.getElementById('formAdulto');
    const formIdoso = document.getElementById('formIdoso');
    
    if (formCrianca) {
        formCrianca.addEventListener('submit', function(e) {
            processarFormulario(e, 'crianca');
        });
    }
    
    if (formAdulto) {
        formAdulto.addEventListener('submit', function(e) {
            processarFormulario(e, 'adulto');
        });
    }
    
    if (formIdoso) {
        formIdoso.addEventListener('submit', function(e) {
            processarFormulario(e, 'idoso');
        });
    }
});
