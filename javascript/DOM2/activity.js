let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    console.log("geenrate");
    let h3=document.querySelector("h3");
    let randc=getrandom();
    h3.innerText=randc;
    console.log("color generated");
    let div=document.querySelector("div");
    div.style.backgroundColor=randc;
})
function getrandom(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let color=`(${r}, ${g},${b})`;
    return color;
}