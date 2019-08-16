
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
/* image-grid */

var nimg=32

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

