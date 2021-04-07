 const backToTop = document.getElementById('backtotop');

function checkScroll() {
  /*
    웹페이지가 y축으로 스크롤이 되었는지 확인하기 위해
    픽셀 단위로 반환하는 pageYOffset 속성
    pageYOffset이란 변수에는 스크롤 y축의 값이 들어간다
    0이면 스크롤이 안된 상태 (최상단) 
  */
    let pageYOffset = window.pageYOffset;

    if(pageYOffset !== 0) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
}

function moveBackToTop() {
  if(window.pageYOffset > 0) {
    window.scrollTo({top:0, behavior: "smooth"})
  }
}

// 스크롤할때마다 checkScroll함수를 호출해라
window.addEventListener('scroll', checkScroll);
backToTop.addEventListener('click', moveBackToTop);