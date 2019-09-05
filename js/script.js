
/*--------------------------------------------------------------*/
/* javascript functions - Rainbow Noir							*/
/*--------------------------------------------------------------*/



/*--------------------------------------------------------------*/
/* nav bar functions */

/* Open */
function openNav() {
  document.getElementById("myNav").style.display = "block";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.display = "none";
}



/*--------------------------------------------------------------*/
/* events drop down */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}





/*--------------------------------------------------------------*/
/* lazyload.js (c) Lorenzo Giuliani
 * MIT License (http://www.opensource.org/licenses/mit-license.html)
 *
 * expects a list of:  
 * `<img src="blank.gif" data-src="my_image.png" width="600" height="400" class="lazy">`
 */

/* !function(window){
  var $q = function(q, res){
        if (document.querySelectorAll) {
          res = document.querySelectorAll(q);
        } else {
          var d=document
            , a=d.styleSheets[0] || d.createStyleSheet();
          a.addRule(q,'f:b');
          for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
            l[b].currentStyle.f && c.push(l[b]);

          a.removeRule(0);
          res = c;
        }
        return res;
      }
    , addEventListener = function(evt, fn){
        window.addEventListener
          ? this.addEventListener(evt, fn, false)
          : (window.attachEvent)
            ? this.attachEvent('on' + evt, fn)
            : this['on' + evt] = fn;
      }
    , _has = function(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
    ;

  function loadImage (el, fn) {
    var img = new Image()
      , src = el.getAttribute('data-src');
    img.onload = function() {
      if (!! el.parent)
        el.parent.replaceChild(img, el)
      else
        el.src = src;

      fn? fn() : null;
    }
    img.src = src;
  }

  function elementInViewport(el) {
    var rect = el.getBoundingClientRect()

    return (
       rect.top    >= 0
    && rect.left   >= 0
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    )
  }

    var images = new Array()
      , query = $q('img.lazy')
      , processScroll = function(){
          for (var i = 0; i < images.length; i++) {
            if (elementInViewport(images[i])) {
              loadImage(images[i], function () {
                images.splice(i, i);
              });
            }
          };
        }
      ;
    // Array.prototype.slice.call is not callable under our lovely IE8 
    for (var i = 0; i < query.length; i++) {
      images.push(query[i]);
    };

    processScroll();
    addEventListener('scroll',processScroll);

}(this);​
 */





/*--------------------------------------------------------------*/
/* image-grid */

var nimg=39

/* image1 */
var text="images/instagram/"+(nimg-0)+".jpg";
document.getElementById("image1").src = text;

/* image2 */
var text="images/instagram/"+(nimg-1)+".jpg";
document.getElementById("image2").src = text;

/* image3 */
var text="images/instagram/"+(nimg-2)+".jpg";
document.getElementById("image3").src = text;

/* image4 */
var text="images/instagram/"+(nimg-3)+".jpg";
document.getElementById("image4").src = text;

/* image5 */
var text="images/instagram/"+(nimg-4)+".jpg";
document.getElementById("image5").src = text;

/* image6 */
var text="images/instagram/"+(nimg-5)+".jpg";
document.getElementById("image6").src = text;

/* image7 */
var text="images/instagram/"+(nimg-6)+".jpg";
document.getElementById("image7").src = text;

/* image8 */
var text="images/instagram/"+(nimg-7)+".jpg";
document.getElementById("image8").src = text;

/* image9 */
var text="images/instagram/"+(nimg-8)+".jpg";
document.getElementById("image9").src = text;

/* image10 */
var text="images/instagram/"+(nimg-9)+".jpg";
document.getElementById("image10").src = text;

/* image11 */
var text="images/instagram/"+(nimg-10)+".jpg";
document.getElementById("image11").src = text;

/* image12 */
var text="images/instagram/"+(nimg-11)+".jpg";
document.getElementById("image12").src = text;

/* image13 */
var text="images/instagram/"+(nimg-12)+".jpg";
document.getElementById("image13").src = text;

/* image14 */
var text="images/instagram/"+(nimg-13)+".jpg";
document.getElementById("image14").src = text;

/* image15 */
var text="images/instagram/"+(nimg-14)+".jpg";
document.getElementById("image15").src = text;

