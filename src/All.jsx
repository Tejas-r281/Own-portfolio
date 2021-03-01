document.addEventListener("DOMContentLoaded",function(event){
    var element = document.getElementById("myh2");
    // element.focus();
    element.addEventListener('focus',(e)=>{
        console.log(e);
    })
});
