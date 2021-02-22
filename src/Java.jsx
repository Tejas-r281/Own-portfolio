import React from 'react'
var totalHeight = 0;
function calculateTotalHeightMinusElement(excludeElementClass)
{
  // Get all child elements of the body tag
  var bodyChildren = (document.getElementById('root')).children;

//   console.log(bodyChildren);


//   // Loop through the selected elements
   for (var i = 0; i < bodyChildren.length; i++) {

//     // Add the height of this element
    totalHeight = totalHeight + bodyChildren[i].offsetHeight;
   }
//    totalheight(totalHeight);
// console.log(totalHeight);


 }

document.addEventListener("DOMContentLoaded", function(event) {

  // Pass in the class name of the element you want to minus from the height calculation
  calculateTotalHeightMinusElement("myDivClass");
});
const style= document.createElement('style');
console.log(style);
const head = document.getElementsByTagName('head')[0];
console.log(head);
window.addEventListener('scroll',(e)=>{

    var currentheight=(window.pageYOffset);
    var currentwidth=(window.innerWidth);
    // console.log(currentwidth);
   var height= document.body.scrollHeight;
   height=totalHeight;
   var actul=(currentwidth/height)*currentheight;
   var x= currentwidth/actul -1+.048;
    var h= (x/height)*currentheight;
    // console.log(h);
   const realheight=(actul+h*actul);
   const css= `.padding::after{
       width:${realheight}px;
   }`
   style.innerHTML=css;
//    console.log(style);
   head.insertAdjacentElement("beforeend",style);
//    console.log(totalHeight);

})


