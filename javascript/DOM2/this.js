// let btn=document.querySelector("button");
// btn.addEventListener('click',function(){
//  console.log(this.innerText);
// });
//keyboard event
let btn=document.querySelector("button");
btn.addEventListener('click',function(event){
    console.log(event);
    console.log('clicked');
});
let input=document.querySelector("input");
input.addEventListener("keydown" ,function(){
    console.log("key was pressed");
})
let form =document.querySelector('form');
form.addEventListener("submit",function(event){
    event.preventDefault();
    // print enter value
    console.log(event.value);
    alert("form submitted");
    console.log("hello");
  

})