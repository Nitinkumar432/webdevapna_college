let arr=['mango','banana','chillli','doodh'];
let d=arr.length
// for(let i=0;i<d;i++){
//     console.log(arr[i]);
// }



// using whilee loop
let i=0;
while(i<d){
    console.log(arr[i]);
    i++;

}


// nested array
let c=[[1,2,3],[4,5,6],[7,8,9]];
let r=c.length;
let cr=c[0].length;
for(let i=0;i<r;i++){
    for(let j=0;j<cr;j++){
        console.log(c[i][j]);
    }
}
let rt=['mango','banana','tree'];
for(i of rt){
    for(j of i){
        console.log(j);
    }
}