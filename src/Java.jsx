
import React from 'react'
var totalHeight = 0;
const sliders= document.querySelectorAll('.slides');
// console.log(sliders);
function calculateTotalHeightMinusElement(excludeElementClass)
{

  var bodyChildren = (document.getElementById('root')).children;

   for (var i = 0; i < bodyChildren.length; i++) {

//     // Add the height of this element
    totalHeight = totalHeight + bodyChildren[i].offsetHeight;
   }



 }

document.addEventListener("DOMContentLoaded", function(event) {
  // const raushan= document.querySelector('.raushan');
  // console.log(raushan.id);

  // Pass in the class name of the element you want to minus from the height calculation
  calculateTotalHeightMinusElement("myDivClass");
  const pic = document.querySelectorAll('.imgsection');

// console.log(hover);
  // pic.addEventListener('mouseover',(e)=>{
  //   // console.log("ineter");
  //   hover.classList.remove('cover');
  // });
  // pic.addEventListener('mouseout',(e)=>{
  //   // console.log("ineter");
  //   hover.classList.add('cover');
  // });

  pic.forEach((element)=>{
    // console.log(element);
    element.addEventListener('mouseover',(e)=>{
      const hover=element.querySelector('.hover');
      hover.classList.remove('cover');
    })
    element.addEventListener('mouseout',(e)=>{
      const hover=element.querySelector('.hover');
      hover.classList.add('cover');
    })
  })

});
const style= document.createElement('style');
const head = document.getElementsByTagName('head')[0];
window.addEventListener('scroll',(e)=>{

    var currentheight=(window.pageYOffset);
    var currentwidth=(window.innerWidth);
   var height= document.body.scrollHeight;
   height=totalHeight;
   var actul=(currentwidth/height)*currentheight;
   var x= currentwidth/actul -1+.06;
    var h= (x/height)*currentheight;
   const realheight=(actul+h*actul);
   if(realheight>=currentwidth-8)
   {
      document.getElementById('ram').classList.add('display');
   }
   const css= `.padding::after{
       width:${realheight}px;
   }`
   style.innerHTML=css;
   head.insertAdjacentElement("beforeend",style);
   // console.log(document.body.getBoundingClientRect());

})
var checkScrollSpeed = (function(settings){
   settings = settings || {};

   var lastPos, newPos, timer, delta,
       delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

   function clear() {
     lastPos = null;
     delta = 0;
   }

   clear();

   return function(){
     newPos = window.scrollY;
     if ( lastPos != null ){ // && newPos < maxScroll
       delta = newPos -  lastPos;
     }
     lastPos = newPos;
     clearTimeout(timer);
     timer = setTimeout(clear, delay);
     return delta;
   };
})();

// listen to "scroll" event
window.onscroll = function(){
  var value=checkScrollSpeed() ;
  value=Math.abs(Math.trunc(value));
//   console.log(value);
  if(value==0)
  {
   document.getElementById('ram').classList.add('display');
  }
  else
  {
   document.getElementById('ram').classList.remove('display');
  }
};
// window.document.addEventListener('onload')




