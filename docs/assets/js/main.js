// var tab = document.querySelectorAll('a.form-tab');
// for (var i = 0; i < tab.length; i++) {

// tab[i].addEventListener('click', function(e) {

$('a.form-tab').on('click', function() {
    $('a.form-tab').removeClass('active')
    $(this).addClass('active');
    // console.log($(this));
})

$('.btn-grp').on('click', function() {
	$('.btn-grp').removeClass('active')
	$(this).addClass('active');

})

// this.classList.toggle('active');
$('.faq__questions__item').on('click', function() {
  $(this).children('.faq__details').slideToggle();
  $(this).toggleClass('active');
})
