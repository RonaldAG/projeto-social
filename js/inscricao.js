// Quando a janela do navegador for carregada completamente, executa a função
window.onload = function() {
    // Obtém o formulário pelo ID
    const form = document.getElementById('frmIncricao');

    // Obtém o campo de entrada do CEP pelo ID
    const cepInput = document.getElementById('cep');

    // Adiciona um ouvinte de evento quando o campo CEP perde o foco (blur)
    cepInput.addEventListener('blur', function() {
        // Remove todos os caracteres não numéricos do CEP
        const cep = this.value.replace(/\D/g, '');

        // Verifica se o CEP tem exatamente 8 dígitos
        if (cep.length === 8) {
            // URL da API com o CEP inserido
            const url = `https://viacep.com.br/ws/${cep}/json/`;

            // Faz uma requisição para a API ViaCEP com o CEP informado
            fetch(url)
                .then(function(response) {
                    // Verifica se a resposta da requisição está ok (status 200)
                    if (!response.ok) {
                        throw new Error('Erro na resposta da rede');
                    }
                    // Converte a resposta para JSON
                    return response.json();
                })
                .then(function(data) {
                    // Verifica se não ocorreu um erro na resposta da API
                    if (!('erro' in data)) {
                        // Preenche os campos com os dados retornados pela API
                        document.getElementById('street').value = data.logradouro;
                        document.getElementById('neighborhood').value = data.bairro;
                        document.getElementById('city').value = data.localidade;
                        document.getElementById('state').value = data.uf;
                    } else {
                        // Se o CEP não for encontrado, exibe uma mensagem de alerta
                        alert('CEP não encontrado.');
                        // Limpa os campos de endereço
                        clearAddressFields();
                    }
                })
                .catch(function(error) {
                    // Em caso de erro na requisição, exibe uma mensagem de alerta
                    alert('Erro ao buscar o CEP: ' + error.message);
                });
        } else {
            // Se o CEP não tiver 8 dígitos, exibe uma mensagem de alerta
            alert('CEP inválido. O CEP deve conter 8 dígitos.');
            // Limpa os campos de endereço
            clearAddressFields();
        }
    });

    // Função para limpar os campos de endereço
    function clearAddressFields() {
        document.getElementById('street').value = '';
        document.getElementById('neighborhood').value = '';
        document.getElementById('city').value = '';
        document.getElementById('state').value = '';
    }

    // Adiciona um ouvinte de evento ao submeter o formulário
    form.addEventListener('submit', function(event) {
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
        const street = document.getElementById('street').value;
        if (street === '') {
            alert('Por favor, preencha um CEP válido para obter o endereço.');
            return;
        }

        const dataNascimento = document.getElementById('dataNascimento').value;
        const anoNascimento = new Date(dataNascimento).getFullYear();
        const idade = document.getElementById('idade').value;
        const anoAtual = new Date().getFullYear();

        if (anoAtual - anoNascimento != idade){
            alert('Data de nascimento incompatível com idade')
            return;
        }


        // Se todos os campos estiverem corretamente preenchidos, exibe uma mensagem de sucesso
        alert('Inscrição Realizada! Cheque seu email!');
        // Reseta os campos do formulário
        form.reset();
    });
};