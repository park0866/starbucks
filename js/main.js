const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// = seachEl.querySelector('.search input')


searchEl.addEventListener('click' , function () {
  searchInputEl.focus();
});
//search div요소를 클릭하게되면 함수가 실행되는데 input요소에 focus를 해라


//focus 시작
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused'); //포커스드 클래스 추가
  searchInputEl.setAttribute('placeholder', '통합검색');     
  //input 요소에 placeholder속성을 추가하고 이름을 통합검색이라고 지정한다.
});


//focus 해제
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused'); //포커스드 클래스 삭제
  searchInputEl.setAttribute('placeholder', '');     
  //input 요소에 placeholder속성에 빈요소를 넣는다.
});


const badgeEl = document.querySelector('header .badges');




const toTopEl =document.querySelector('#to-top');
toTopEl.addEventListener('click',function () {
  //gsap 애니메이션을 처리하는 javascript라이브러리가 window객체를 통해 애니메이션을 처리하겠다는 의미
  gsap.to(window, .7 ,{
    scrollTo: 0
  });
});

//scroll 할때마다 window.scrollY 값 출력
//_.throttle (함수, 시간(ms));
//300 = 0.3s  즉 , 0.3초마다 기록하기 
//문제점 : gsap = > 사라지나 포인터는 계속남아있다 없애야해!
//    display: 'none' 를 추가해야된다 문자데이터이므로 따옴표쓰기
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //배지 숨기기    
    // badgeEl.style.display = 'none';
    // gsap.to(요소,지속시간,옵션);
    gsap.to(badgeEl,.6,{
      opacity: 0,
      display: 'none' 
    });
    //버튼 보이기
    gsap.to(toTopEl,.2 ,{
      x:0 //원래자리로 돌아오기 (돌아오는 용도)
    });
  }else{
    //배지 보이기 
    // badgeEl.style.display = 'block';
  
    gsap.to(badgeEl,.6,{
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기 (css 선택자를 적어줘도됨)
    gsap.to(toTopEl, .2 , {
      x: 100 // x축으로 100 이동 (숨기는 용도)
    });
  }
}, 300 ));






//fade-in
// delay: .7 초마다 딜레이를 만든다 index+1 = 1첫번째 요소부터 forEach 하나씩
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl,1,{
    delay: (index+1)*.7,
    opacity: 1
  });

});




//공지사항 Swiper 함수 실행
//Swiper(css선택자(인수),옵션(함수));
//autoplay: 자동으로 슬라이드 재생
//loop : 반복재생(4번쨰 >> 1번째)
new Swiper('.notice-line .swiper',{
  direction: 'vertical',
  autoplay: true,
  loop:true
});

new Swiper('.promotion .swiper',{
  // direction: 'horizontal', 기본값
  slidesPerView: 3,
  spaceBetween: 10, //여백10px
  centeredSlides: true, //1번 슬라이드가 가운데보이기
  loop: true,
  autoplay: {
    delay: 5000, //500(ms) = 0.5초

  },
  pagination: {
    el : '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 (실제로 눌러서 제어 가능)
  },
  navigation:{
    prevEl : '.promotion .swiper-prev',
    nextEl : '.promotion .swiper-next'
  }
});




//toggle
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if(isHidePromotion) {
    //숨김처리
    promotionEl.classList.add('hide');
  } else{
    //보임처리
    promotionEl.classList.remove('hide');
  }
}); 




// youtube floating
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObj(selector,delay,size) {
  // gsap.to(요소,시간,옵션); 애니메이션 라이브러리
  gsap.to(
    selector,
    random(1.5,2.5),
    {
      y: size, //위아래로 움직이는 값
      repeat: -1, // 무한으로 반복
      yoyo: true, // 한번 재생된 애니메이션 다시 위로 올라가게 만듬
      ease: Power1.easeInOut,//gasp easing power1
      delay: random(0,1) //3초뒤 애니메이션 실행
  });
}

floatingObj('.floating1',1 , 15);
floatingObj('.floating2',.5 , 15);
floatingObj('.floating3',1.5 , 20);



// scrollmagic
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach( function (spyEl) {
  // scene = 특정한 요소를 감시하는 메소드
  //setClassToggle() : 토글을 온오프하는 메소드
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정함
      triggerHook: .8 // 걸리면 실행된다 뷰포트 기준 맨위 0 아래 1 가운데 0.5 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());

});

new Swiper('.awards .swiper',{
  // direction: 'horizontal', 기본값
  slidesPerView: 5,
  spaceBetween: 30, //여백10px
  centeredSlides: true, //1번 슬라이드가 가운데보이기
  loop: true,
  autoplay: true,
  navigation : {
    prevEl :'.awards .swiper-prev',
    nextEl :'.awards .swiper-next'
  }
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2023 
//글자내용 지정