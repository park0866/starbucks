
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
//<div id="player"></div>
function onYouTubeIframeAPIReady() {
   new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최초 재생할 유투브 영상 ID
    playerVars:{
      loop:true, //반복 재생 유무
      autoplay: true,// 자동 재생 유무
      playlist:'An6LvWQuj_8'// 반복 재생할 유투브 영상 ID 목록
    },
    events: {
      onReady : function(event){ // 음소거시 시작하겠다
        event.target.mute() //음소거
      }
    }
  });
}