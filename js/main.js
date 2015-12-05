(function() {
  var maskSVG = document.getElementById('mask');

  var patternEls = document.getElementsByClassName('pattern-box');
  var i = 0;
  var j = 0;

  for (i = 0; i < patternEls.length; i++) {
    (function() {
      var el = patternEls[i];
      el.addEventListener('click', function() {

       for (j = 0; j < patternEls.length; j++) {
          patternEls[j].classList.remove('selected');
        }

        var patternId = el.getAttribute('patternId');
        maskSVG.style.fill = "url(#" + patternId + ")";
        el.classList.add('selected');
        index = i;
      });
    }())
  }
})();