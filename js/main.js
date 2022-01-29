/* $(".btn-club-plan").click(function () {
    $(".btn-club-plan").hide();
    $(".books").show();
}) */

function showProducts() {
    document.querySelector('.btn-club-plan').style.display = 'none';
    document.querySelector('.books').style.display = 'block';
}

function showResume() {
    console.log('daiane');
    document.querySelectorAll('.texto-resumo-livro').style.display = 'block';
    document.querySelector('.btn-escolher').style.display = 'none';
    document.querySelector('.btn-close').style.display = 'block';
}

/* showProducts();

$(".resumo-livro").click(function () {
    $(".texto-resumo-livro").show();
    $(".btn-escolher").hide();
    $(".btn-close").show();
})

$(".btn-close").click(function () {
    $(".texto-resumo-livro").hide();
    $(".btn-close").hide();
}) */