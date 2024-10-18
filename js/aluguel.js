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

    formulario.addEventListener('submit', function(event){
        // Previne o comportamento padrão de recarregar a página ao enviar o formulário
        event.preventDefault();

        // Obtém o valor do campo Nome
        const name = document.getElementById('txtNome').value;

        // Verifica se o campo Nome está vazio
        if (name.trim() === '') {
            // Se estiver vazio, exibe uma mensagem de alerta
            alert('Por favor, preencha o campo Nome.');
            return; // Interrompe a execução da função
        }

        // Verifica se os campos de endereço estão preenchidos
        const email = document.getElementById('email').value;
        if (email === '') {
            alert('Por favor, preencha um email válido.');
            return;
        }

        const dataAvulso = document.getElementById('dataAvulso').value;
        const inputDate = new Date(dataAvulso);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        if (inputDate < currentDate) {
            alert("A data solicitada é menor do que a atual. Certifique-se de escolher uma data válida")
            return;
        }

        // Se todos os campos estiverem corretamente preenchidos, exibe uma mensagem de sucesso
        alert('Aluguel bem sucedido! Verifique a confirmação no seu e-mail');
        // Reseta os campos do formulário
        form.reset();
    })


}
