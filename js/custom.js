
//Alterando o Icone de + e - da sidebar
$("ul.nav li.parent>a").click(function(){
    $(this).find('em').toggleClass("fa-minus");      
});
