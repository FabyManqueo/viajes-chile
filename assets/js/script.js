$(function(){

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)})

    $("a").click(function () {
        var gato = this.hash
        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top - 80
    
            },
            1000
        )
    });

    $(".btn").click(function(){
        alert("Gracias por contactarnos")
    });
});

    