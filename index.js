// INIT
window.onload = function() {
    createDots();
    activeDot(0)
};
// INIT


// SLIDER
let imgItem = document.querySelector('.item-slide')
let count = 0;
let imageArray = ["assets/char-1.svg","assets/char-2.svg","assets/char-3.svg","assets/char-4.svg"];
let lastItem = imageArray.length-1;
let dotsWrapper = document.querySelector('.dots');

debounceClick = function(callback, wait, isTrailing) {
    let timeout;
    return function() {
      let context = this,
          args = arguments;
  
      if (!isTrailing && !timeout) {
        callback.apply(context, args);
      }
      if (!timeout) {
        timeout = setTimeout(function() {
          timeout = null;
          if (isTrailing) {
            callback.apply(context, args);
          }
        }, wait);
      }
    };
  };



imgItem.addEventListener('click', debounceClick( (e) => {
    ++count;
    if (count >= imageArray.length) {
        count = 0;
    } 

    
    // for (let index = 0; index < imageArray.length; index++) {
    //     const element = imageArray[index];

    //     if (e.target.currentSrc.includes(element)) {
    //         e.target.classList.add('in-item-slide')
    //     } 
    //     else {
    //         e.target.classList.remove('in-item-slide')
    //     }
    //     e.target.classList.remove('in-item-slide')
    // }
    
    imgItem.setAttribute("src", imageArray[count])
    activeDot(count);
}, 500, false));


const createDots = () => {
    for (let index = 0; index < imageArray.length; index++) {
        let dot = document.createElement('span')
        dot.classList.add('dot', 'dot-'+index);
        dotsWrapper.appendChild(dot);
    }
}

const activeDot = (idx) => {
    for (const item of dotsWrapper.childNodes) {
        if (item.classList.contains('dot-'+idx)) {
            item.classList.add('active-dot')
        } else {
            item.classList.remove('active-dot')
        }
    }
}
// SLIDER



window.addEventListener('scroll', function(){
    var scrolled = window.pageYOffset;
    var parallax = document.querySelector(".body-section");
    // You can adjust the 0.4 to change the speed
      var coords = (scrolled * 0.3) + 'px'
    parallax.style.transform = 'translateY(' + coords + ')';
  });

