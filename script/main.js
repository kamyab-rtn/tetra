(function(){

  var cards = document.querySelectorAll('.js-card');
  
  cards.forEach(function(elem){
    onClick(elem, cards);
  })

  function close(elem) {
    elem.classList.remove('is-opened');
  }

  function open(elem) {
    elem.classList.add('is-opened');
  }

  function onClick(elem, cards) {
    elem.addEventListener('click', function(){
      
      
      if(elem.classList.contains('is-opened')) {
        cards.forEach(function(item) {
          close(item);
        });
      } else {
        cards.forEach(function(item) {
          close(item);
        });
        open(elem);
      }

    });
  }

})();
