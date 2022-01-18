
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
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
});  // go to the top

function newpop(num) { 
    var wid = 900;
    var hei = 900;

    // 화면 가운데 맞추기
    var left = (window.screen.width / 2) - (wid/2); 
    var top = (window.screen.height / 4);

    var windowStatus = 'width='+wid+', height='+hei+
    ', left='+left+', top='+top+', scrollbars=no, status=no, titlebar=no';

    const src = "../images/trip/"+num+".jpg";

    window.open(src, "popUp", windowStatus) // 사진팝업
}

// 툴팁박스
const imgContent = document.querySelectorAll('.img-content-hover');
function showImgContent(e) {
  for(var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
};
document.addEventListener('mousemove', showImgContent);