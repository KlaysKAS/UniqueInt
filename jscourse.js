let courseC = document.getElementById('completeC');
var scale = document.getElementById('scale');
var toMental = document.getElementById('mental');
courseC.addEventListener('click', function() {
    scale.setAttribute('style', "width: 100%");
    scale.setAttribute('aria-valuenow', "100");
    toMental.removeAttribute('style');
})
