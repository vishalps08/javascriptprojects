let slideIndex =1;
showDivs(slideIndex);


function plusDivs(n)
{
    showDivs(slideIndex+=n)
}

function showDivs(n){

    let i;
    let x = document.getElementsByClassName("mySlides");
    
    if(n>x.length) 
        { slideIndex=1};

    if(n<1) 
        {slideIndex=x.length}
    
    for(i=0;i<x.length;i++)
    {
        // x[i].style.display ="none";
        x[i].classList.remove("active");
    }

    // x[slideIndex-1].style.display= "block";

    x[slideIndex - 1].classList.add("active"); 

}