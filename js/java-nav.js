 


//select all links
const allLinks =document.querySelectorAll(".navbar1 .links a");


function scrollToSomewhere(elements){
elements.forEach(bullet=>{
    
    bullet.addEventListener("click",(e)=>{
     
        e.preventDefault();
        
         document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        });
        
    });
});
}


scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);