// let smallimg=document.getElementsByClassName("oldImg");
// for(let i=0;i<smallimg.length;i++){
//     smallimg[i].src="assets/spiderman_img.png";
//     console.log(smallimg[i]);
//     console.log(`photo change at index of ${i}`);
// }

// console.dir(document.querySelector('h1'));
// console.dir(document.querySelector('#description'));
// console.dir(document.querySelector('.oldImg'));
// console.dir(document.querySelectorAll('div a'));
let para=document.querySelector("p");
let idf=document.querySelector("#description"); 
let head=document.querySelectorAll("p");
// // head.style.color:purple;
// para.style.backgroundColor='red';
let link=document.querySelectorAll(".box a");
for(let i=0;i<link.length;i++){
    link[i].style.color='red';
}
let h=document.querySelector("img");
console.log(h.classList);

let m1=document.querySelector("h1");
m1.classList.add('nitin2');
console.log(m1);
let m=document.querySelector('h4');
console.log(m.parentElement);
console.log(m.children);
let newpa=document.createElement('p');
console.log(newpa);

newpa.innerHTML='hi i am here p';
console.log(newpa);
let body=document.querySelector('body');
body.appendChild(newpa);
console.log(body);
//adding button
let byn=document.querySelector('button');
byn.innerText='click me';
body.appendChild(byn);
let ne=document.querySelector('#description');
ne.appendChild("hello ji kaise ho");

ne.style.color='white;';
console.log(ne);
// let create button
let btn2=document.createElement('button');
btn2.innerHTML="hello i am here";
let p=document.querySelector('p');
p.insertAdjacentElement('beforebegin',btn);
console.log(p);
console.log(btn2);

