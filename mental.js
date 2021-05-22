var musicChair = document.getElementById('chair');
musicChair.addEventListener('click',function(){
  document.getElementById('chairS').play()
})
var musicShelf = document.getElementById('shelf');
musicShelf.addEventListener('click',function(){
  document.getElementById('shelfS').play()
})


document.addEventListener("keydown", keyDownHandler, false);
var mInfo = document.getElementById('modalInfo');
var mClose = document.getElementById('mCloseB');
mClose.addEventListener('click', function(){
    mInfo.setAttribute('class', 'modal fade');
    mInfo.setAttribute('style', 'display: none;');
    elem.removeAttribute('aria-modal');
})

function keyDownHandler(e) {
  if (e.keyCode == 32) {
		 mInfo.setAttribute('class', 'modal fade show');
     mInfo.setAttribute('aria-modal', true);
     mInfo.setAttribute('style', 'display: block;');
	}
}




