let delhi={
    lat:"28",
    longitude:"77.1025"

}
const student={
    name:'nitin',
    age:23,
    marks:94.4,city:"delhi"
}
student[name]='patel';
console.log(student);
// create posts
const post={
    name:"nitin_patel",
    content:"this is mym",
    like:150,
    repost:5,
    tag:["@apnacollege",'nitin',"kill"]
}
console.log(post);
//accessing single element in object literals
console.log(post.name);
// update/add
const post1={
    name:"nitin_patel",
    content:"this is mym",
    like:150,
    repost:5,
    tag:["@apnacollege",'nitin',"kill"]
}
// update the name 
post1.name='nitin kumar';
// add the gender
post1.gender='male';
console.log(post1);
// delete properties indexing
delete post1.like;
console.log(post1);

// nested object
const info={
    nitin:{
        name:'nitin kumar',
        age:24
    },
    omil:{
        name:'omil goel',
        age:12

    }

};
console.log(info);
console.log(info.nitin.name);
// change 
info.nitin.name="patel";
console.log(info);
// array of object
const student2=[
    {
        name:'nitin',
        age:23,
        city:'delhi'
    },
    {
        name:'patel',
        age:45,
        city:'patna'
    }
];
console.log(student2);



