function enviarDados(event) {
            event.preventDefault()

            const none = document.getElementById('none');
            const mensagem = document.getElementById('mensagem');
            const telefone = '5564981343597'


            const texto = `Olá, me Chamo ${none}, ${mensagem}´
            const msgFormatada = encodeURIComponent(texto) 

            const url = `https://wa.me/${telefone}?t=${mensagem}´

            console.log(url)

            window.open(url, '_blank')
        }