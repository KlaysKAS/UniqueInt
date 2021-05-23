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


var mInfo = document.getElementById('modalInfo');
var mClose = document.getElementById('mCloseB');
var mOInfo = document.getElementById('mOInfo');
mClose.addEventListener('click', function(){
  mInfo.setAttribute('class', 'modal fade');
  mInfo.setAttribute('style', 'display: none;');
  mInfo.removeAttribute('aria-modal');
})
mOInfo.addEventListener('click', function() {
  mInfo.setAttribute('class', 'modal fade show');
  mInfo.setAttribute('aria-modal', true);
  mInfo.setAttribute('style', 'display: block;');
})


var about = document.getElementById('about');
var aboutClose = document.getElementById('aboutClose')
var modalabout = document.getElementById('modalabout')
about.addEventListener('click', function() {
  modalabout.setAttribute('class', 'modal fade show');
  modalabout.setAttribute('aria-modal', true);
  modalabout.setAttribute('style', 'display: block;');
})
aboutClose.addEventListener('click', function(){
  modalabout.setAttribute('class', 'modal fade');
  modalabout.setAttribute('style', 'display: none;');
  modalabout.removeAttribute('aria-modal');
})