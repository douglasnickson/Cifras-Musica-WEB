
//Alterando o Icone de + e - da sidebar
$("ul.nav li.parent>a").click(function(){
 
    $(this).find('em').toggleClass("fa-minus");      
});


//Mostra ou Esconde a Sidebar de Acordo com a tela
$(window).on('resize', function () {
 	if ($(window).width() > 768) $('#main-sidebar').collapse('show')
});

$(window).on('resize', function () {
	if ($(window).width() <= 767) $('#main-sidebar').collapse('hide')
});
