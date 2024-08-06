// trim string method remove whitespace but msg become unchangeable*/
let msg='         nitin ';
console.log(msg.trim());
console.log(msg)
// lets take example
// let password=prompt("enter yout password : ");
// let newpass=password.trim();
// console.log("new password aftertrim is | ",newpass, " |");
let str="random";
console.log(str.toUpperCase());
console.log(str[0]);
let sh="Ilovecoding";
console.log(sh.slice(1,4));
let arr=["nitin", "kumar" ,"patel"];
console.log(arr);
let earr=[];
earr[0]="nittin";
earr[1]=1;
console.log(earr);
console.log(earr.length)
console.log([1,2,3,4].length);
console.log(arr[1][1]);
arr[0]=1;
console.log(arr);
// merging arr
let arr1=[1,2,3];
let arr2=[4,5,6];
console.log(arr1.concat(arr2));
console.log(arr1);
let arr3=arr1.concat(arr2);
console.log(arr3);
let arr5=[4,5,6,4,3,5];
console.log(arr5.slice(0,2));
console.log(arr5.splice(0,2));
console.log(arr5.splice(0,2,56,76,56));
console.log(arr5);
// assignment
let start=['january','july','march','august'];
let end=start.splice(0,2,'july','june');
// console.log(start.splice(0,2,'july','june'));
end=start;
console.log(end);
// rteverse
let id=['c','c++','html','javascript','python','java','c#','sql'];
id.push("sql");
id.reverse();
console.log(id.indexOf('javascript'));
// array by refernce
let a=[4,5,6];
let b=a;
console.log(a==b);
const arr9=[1,2,3,4,5];
arr9=[4,5];
console.log(arr9);
console.log(arr9);
