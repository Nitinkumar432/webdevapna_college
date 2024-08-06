let url="http://universities.hipolabs.com/search?name=";
// let country="nepal";

let btn=document.querySelector("button");
btn.addEventListener("click", async()=>{
    let  country=document.querySelector("input").value;
    console.log(country);
   let college =await  getcollege(country);
   console.log(college);
   show(college);

    console.log("button clicked");
})
async function getcollege(country){
    try{
        let res=await axios.get(url+country);
        // console.log(res.data);
        return res.data;
    }catch(e){
        return "college not found";
    }
}
function show(colarr){
    let list=document.querySelector("#list");
    for(col of colarr){
        console.log(col.name);
        let li= document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}