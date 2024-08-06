//create a paragraph
let para1=document.createElement('p');
para1.innerText='hey i am here';
document.querySelector('body').append(para1);
// para1.style.color='red';
para1.classList.add('red');
let h3=document.createElement('h3');
h3.innerText='hey i am blue';
h3.classList.add('blue');
document.querySelector('body').append(h3);
//creating div we here append h1 and paragraphtah in div
let div=document.createElement('div');
let h1=document.createElement("h1");
let para2=document.createElement("p");
h1.innerText="i am in div";
para2.innerText='me too!';
div.append(h1);
div.append(para2);
div.classList.add('box');
document.querySelector('body').append(div);
