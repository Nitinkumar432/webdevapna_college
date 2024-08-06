let url="https://dog.ceo/api/breeds/image/random";
let btn=document.querySelector("button");
btn.addEventListener("click", async ()=>{
  let fact= await getimage();
  console.log(fact);
  let img=document.querySelector("#result");
 img.setAttribute("src",fact);
})
async function getimage() {
    try {
        let res = await axios.get(url);
        // console.log(res.data.message);
        return res.data.message;
    } catch (error) {
        // console.log("Error:", error);
        return "no fact found";
    }
}
getimage();