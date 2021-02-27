function storeData(){
console.log("hello");
var titleinput=document.getElementById("title");
var datainput=document.getElementById("data");
console.log(titleinput.value);
console.log(datainput.value);
if(titleinput.value!="")
    window.localStorage.setItem(titleinput.value,datainput.value);

}