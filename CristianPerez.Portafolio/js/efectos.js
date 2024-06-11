$(document).ready(function () {
    //SCROLL

    var acercaDe = $('#acerca-de').offset().top,
        frontend = $('#front-end').offset().top,
        backend = $('#back-end').offset().top,
        contac = $('#contacto').offset().top;

    $('#btn-acerca-de').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: acercaDe - 0,
            },
            500
        );
    });

    $('#btn-front-end').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: frontend - 20,
            },
            500
        );
    });

    $('#btn-back-end').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: backend - 20,
            },
            500
        );
    });

    $('#btn-contacto').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: contac - 20,
            },
            500
        );
    });
});
