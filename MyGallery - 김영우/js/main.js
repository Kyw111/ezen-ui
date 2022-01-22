$(document).ready(function(){
    $(".head-content h1").click(function(){
        var turnonTest = $(".subcontent-1").css("opacity") // 변수로 만들기
         if(turnonTest == 1){
            $(".subcontent-1").css({"opacity" : "0"});
        }else{
        $(".subcontent-1").css({"opacity" : "1"});
        }
    });
}); // 갤러리컨텐트 클릭

$(document).ready(function(){
    $(".life-content h2").click(function(){
        var turnonTest = $(".subcontent-2").css("opacity") // 변수로 만들기
        if(turnonTest == 1){
            $(".subcontent-2").css({"opacity" : "0"});
        }else{
           $(".subcontent-2").css({"opacity" : "1"});
        }
    });
}); // 라이프컨텐트 클릭

$(document).ready(function(){
    $(".trip-content h2").click(function(){
        var turnonTest = $(".subcontent-3").css("opacity") // 변수로 만들기
        if(turnonTest == 1){
            $(".subcontent-3").css({"opacity" : "0"});
        }else{
           $(".subcontent-3").css({"opacity" : "1"});
        }
    });
}); // 트립컨텐트 클릭


$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $("#top-btn").fadeIn();
        }else {
            $('#top-btn').fadeOut();
        }
    });
    $('#top-btn').click(function(){
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
}); // go to the top

$(function(){
    $(".life-left").click(function(){
        var turnOn = $(".caption1").css("opacity") // 변수로 만들기
        if(turnOn == 1){
            $(".caption1").css({"opacity" : "0"});
        }else{
           $(".caption1").css({"opacity" : "1"});
        }
    });
    $(".life-right").click(function(){
        var turnOn = $(".caption2").css("opacity") // 변수로 만들기
        if(turnOn == 1){
            $(".caption2").css({"opacity" : "0"});
        }else{
           $(".caption2").css({"opacity" : "1"});
        }
    });
    $(".trip-left").click(function(){
        var turnOn = $(".caption3").css("opacity") // 변수로 만들기
        if(turnOn == 1){
            $(".caption3").css({"opacity" : "0"});
        }else{
           $(".caption3").css({"opacity" : "1"});
        }
    });
    $(".trip-right").click(function(){
        var turnOn = $(".caption4").css("opacity") // 변수로 만들기
        if(turnOn == 1){
            $(".caption4").css({"opacity" : "0"});
        }else{
           $(".caption4").css({"opacity" : "1"});
        }
    });
}); // 사진클릭

$(function(){  // 네브바 부드럽게 움직이기
    $( '.menu_1' ).click( function() {
    $( 'html, body' ).animate( { scrollTop : 450 }, 500 );
        return false;
    } );
    $( '.menu_2' ).click( function() {
    $( 'html, body' ).animate( { scrollTop : 900 }, 500 );
        return false;
    } );
    $( '.menu_3' ).click( function() {
    $( 'html, body' ).animate( { scrollTop : 900 }, 500 );
        return false;
    } );
} );