!function ($) {
    $(document).on("click","ul.nav li.parent > a ", function(){          
        $(this).find('em').toggleClass("fa fa-minus");      
    }); 
    $(".sidebar span.icon").find('em:first').addClass("fa fa-plus");
}