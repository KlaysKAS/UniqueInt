var musicChair = document.getElementById('chair');
var mnemonic = document.getElementById('mnemonic');
var mnemonicClose = document.getElementById('mnemonicCloseB');

musicChair.addEventListener('click',function(){
  mnemonic.setAttribute('class', 'modal fade show');
  mnemonic.setAttribute('aria-modal', true);
  mnemonic.setAttribute('style', 'display: block;');
})
mnemonicClose.addEventListener('click', function(){
  mnemonic.setAttribute('class', 'modal fade');
  mnemonic.setAttribute('style', 'display: none;');
  mnemonic.removeAttribute('aria-modal');
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
    mInfo.removeAttribute('aria-modal');
})

function keyDownHandler(e) {
  if (e.keyCode == 32) {
		 mInfo.setAttribute('class', 'modal fade show');
     mInfo.setAttribute('aria-modal', true);
     mInfo.setAttribute('style', 'display: block;');
	}
}

var add = document.getElementById('Add');
