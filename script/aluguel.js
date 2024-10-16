window.onload = function() {
    var tipoAluguel = document.getElementById('frequenciaAluguel')
    var dataAvulso = document.getElementById('cxDataAvulso')
    var diaSemana = document.getElementById('diaSemana')
    var formulario = document.getElementById('frmAluguel')

    tipoAluguel.addEventListener('change', function(event){
        if (tipoAluguel.value == 'avulso'){
            dataAvulso.style.display = 'block'
            diaSemana.style.display = 'none'
        } else if (tipoAluguel.value != ''){
            diaSemana.style.display = 'block'
            dataAvulso.style.display = 'none'
        }
    })

    formulario.addEventListener('submit', function(){
        
    })


}
