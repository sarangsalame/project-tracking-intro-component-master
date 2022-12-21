let msg = document.querySelector(".message");
let btn = document.querySelector(".btn");
let names =document.querySelector("#name");
let pass =document.querySelector("#password");

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let nameval= names.value
    let passval = pass.value
    if(!nameval || !passval){
        msg.style.display="block";
        console.log(nameval,passval)
        msg.innerText="Name and Password cannot be empty";
    }
    else{
        msg.style.display="block";
        msg.innerText="form submitted sucessfully";
    }
})