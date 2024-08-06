let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");
btn.addEventListener("click",function(){
    // console.log("clicked");
    let  item=document.createElement("li");

    console.log(input.value);
    item.innerText=input.value;
    ul.appendChild(item);
    let dbtn=document.createElement("button");
    dbtn.innerText='delete';
    dbtn.classList.add('delete');
    item.appendChild(dbtn);
    input.value="";
});
ul.addEventListener("click",function(event){
    if (event.target.nodeName=='BUTTON'){
        let item=event.target.parentElement;
        console.log(item);
        item.remove();
        console.log("delete");
    }
else{
    console.log("button clicked");
}
});
let dbtns=document.querySelectorAll(".delete");
for(d of dbtns){
    d.addEventListener("click",function(){
        console.log("element deleted");
        let par=this.parentElement;
        par.remove();

    });

}