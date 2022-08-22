let name = document.getElementById('name');
let id = document.getElementById('id');

let data = document.getElementById('data');
let cost = document.getElementById('cost');
let searchitems = document.getElementById('searchitems');
let courses = [];  

if(localStorage.getItem("alldata")!=null){
    courses = JSON.parse(localStorage.getItem("alldata"));
    show();

}
else{
  let courses = [];  
}
/////////////////////////////
function add(){
    let course = {
        getname:name.value,
        getcost:cost.value,
        // getid:id.value,
    }

    courses.push(course)
    localStorage.setItem("alldata",JSON.stringify(courses));
//   let getname = name.value;
//   let getid = id.value;
// console.log(getid);
// console.log(courses);
show()
// name.value="";
// cost.value="";
cl();
}
/////////////////////////

function cl(){
    // console.log("test")
    name.value="";
cost.value="";
}
////////////////////////////
function remove(id){
    // console.log("test")
    courses.splice(id,1);
    localStorage.setItem("alldata",JSON.stringify(courses));
    show();
}
/////////////////////////////
function show(){
let result = ``;
for (let i = 0 ; i<courses.length; i++) {
result+=`
<tr>
<td>${i}</td>
<td>${courses[i].getname}</td>
<td>${courses[i].getcost}</td>

<td> <button onclick="remove(${i})"> <i class="fa fa-solid fa-fan"></i>Delete </button></td>
<td> <button onclick="update(${i})"> <i class="fa fa-sign-in"></i> Update </button></td>
</tr>
`;  
}
data.innerHTML= result;
}
////////////////////////
function update(id){
    // console.log(id);
    courses[id].getname=name.value;
    courses[id].getcost=cost.value;

    // courses[id].getid=id.value;
    localStorage.setItem("alldata",JSON.stringify(courses));
    show();
    cl();

    // <td>${courses[i].getid}</td>

}
 function validation(){
    let Regexname = /^[A-Z][0-9]{1-5}$/;
    console.log();
}
////////////////////
function search(){
    let searchvalue = searchitems.value;
    let result = ``;    
for (let i = 0 ; i<courses.length; i++) {
    if(courses[i].getname.toLowerCase().includes(searchvalue.toLowerCase()))
result+=`
<tr>
<td>${i}</td>
<td>${courses[i].getname}</td>
<td>${courses[i].getcost}</td>
<td> <button onclick="remove(${i})"> <i class="fa fa-solid fa-fan"></i>Delete </button></td>
<td> <button onclick="update(${i})"> <i class="fa fa-sign-in"></i> Update </button></td>
</tr>
`;  
}
data.innerHTML= result;
}
