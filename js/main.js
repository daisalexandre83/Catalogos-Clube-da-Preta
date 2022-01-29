/* $(".btn-club-plan").click(function () {
    $(".btn-club-plan").hide();
    $(".books").show();
}) */

function showProducts() {
    document.querySelector('.btn-club-plan').style.display = 'none';
    document.querySelector('.books').style.display = 'block';
}

function showResume1() {
    console.log('daiane');
    /* document.querySelectorAll('.texto-resumo-livro').style.display = 'block';
    document.querySelector('.btn-escolher').style.display = 'none';
    document.querySelector('.btn-close').style.display = 'block'; */
    document.querySelector('.book-informations').style.display = 'block';
    document.querySelector('.books-2').style.display = 'none'
    document.querySelector('.books-3').style.display = 'none'
    document.querySelector('.books-4').style.display = 'none'
    document.querySelector('.books-5').style.display = 'none'
    document.querySelector('.books-6').style.display = 'none'
    document.querySelector('.resumo-livro').style.display = 'none';
    document.querySelector('.btn-close').style.display = 'block';
}

function close1() {
    document.querySelector('.book-informations').style.display = 'none';
    document.querySelector('.books-2').style.display = 'block'
    document.querySelector('.books-3').style.display = 'block'
    document.querySelector('.books-4').style.display = 'block'
    document.querySelector('.books-5').style.display = 'block'
    document.querySelector('.books-6').style.display = 'block' 
    document.querySelector('.resumo-livro').style.display = 'block';
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