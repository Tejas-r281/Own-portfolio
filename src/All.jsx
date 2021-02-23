document.addEventListener("DOMContentLoaded",function(event){
    const content= document.querySelectorAll('.a');
    console.log(content);
    window.addEventListener('scroll',(e)=>{
        content.forEach((element)=>{
            // console.log(element);
            // var ans= element.classList.contains('header');
            // console.log(ans);
            if(element.autofocus)
            {
                console.log(element);
            }

        })
    })
});
