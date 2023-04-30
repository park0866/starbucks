// 공통 적으로 제어하는 것

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



const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2023 
//글자내용 지정