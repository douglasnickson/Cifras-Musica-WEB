
//Alterando o Icone de + e - da sidebar
$("ul.nav li.parent>a").click(function(){
    $(this).find('em').toggleClass("fa-minus");      
});


//Mostra ou Esconde a Sidebar de Acordo com a tela
$(window).on('resize', function () {
 	if ($(window).width() > 768) $('#sidebar-collapse').collapse('show')
});

$(window).on('resize', function () {
	if ($(window).width() <= 767) $('#sidebar-collapse').collapse('hide')
});