$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay:true,
    });
    
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00)00000-0000')
    
    $('form').validate ({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email:true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        submitHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert('Existem ${camposncorreto} campos incorretos')
            }
        },
    })
})

