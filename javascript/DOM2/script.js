// let btn=document.querySelector("button");
// console.dir(btn);
// btn.onclick=function(){
//     console.log("button was clicked");
//     alert("btn clicked");
// }
// apply on every button
let btnm=document.querySelectorAll("button");
for(btns of btnm){
    btns.onclick=sayhello;
    btns.onmouseenter=function(){
        console.log("you enter in website");
    }

}
// function sayhello(){
//     alert("clicked ");
// }
// function sayName(){
//     alert("ha ji ek bar aurt ");
// }
//
let btn3=document.querySelector('button');
// btn3.addEventListener('click',sayhello);
// btn3.addEventListener('click',sayName);
btn3.addEventListener('dbclick',function(){
    alert("you clicked double at time");
    console.log("2time");
})