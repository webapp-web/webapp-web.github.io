function getis(){
    for(var i=0;i<localStorage.length;i++)
    {
        var title=localStorage.key(i).toUpperCase();
        var data=localStorage.getItem(localStorage.key(i))
        var list=document.getElementById("create1");
        var externalDiv=document.createElement("div");
        externalDiv.id=localStorage.key(i);
        var ediv1=document.createElement("div");
        var ediv2=document.createElement("div");
        ediv1.className="card mt-4";
        ediv2.className="card-body";
        var titleDiv =document.createElement("h4");
        titleDiv.id="titles";
        titleDiv.className="card-title";
        var dataDiv =document.createElement("p");
        dataDiv.id="datas";
        dataDiv.className="card-text mb-2";
        var butt1=document.createElement('button');
        butt1.innerHTML="Edit";
        butt1.id=localStorage.key(i);
        butt1.className="butt1";
        butt1.className="btn btn-success";
        butt1.addEventListener("click",edit);
        titleDiv.innerHTML=title;
        dataDiv.innerHTML=data;
        externalDiv.appendChild(ediv1);
        ediv1.appendChild(ediv2);
        ediv2.appendChild(titleDiv);
        ediv2.appendChild(dataDiv);
        ediv2.appendChild(butt1);
        list.appendChild(externalDiv);
    }
    }
    if(localStorage.length==0)
    {
        var head=document.createElement("div");
        head.className="alert alert-danger alert-dismissible fade show";
        head.innerHTML="please create notes";
        document.getElementById("create1").appendChild(head);
    }
    else
    getis();
var i;
function edit()
{
    i=this.id;
    console.log(i);
    document.getElementById("title").innerHTML="";
    document.getElementById("data").innerHTML="";
    document.getElementById("title").innerHTML=this.id;
    document.getElementById("data").innerHTML=localStorage.getItem(this.id);
}
function storeData(){
    console.log(i);
    var myobj=document.getElementById(i);
    localStorage.removeItem(i);
    var titleinput=document.getElementById("title");
    var datainput=document.getElementById("data");
    myobj.remove();
    var list=document.getElementById("create1");
    var externalDiv=document.createElement("div");
    externalDiv.id=titleinput.value;
    var titleDiv =document.createElement("p");
    titleDiv.id="titles";
    var dataDiv =document.createElement("p");
    dataDiv.id="datas";
    var butt1=document.createElement('button');
    butt1.innerHTML="Edit";
    titleDiv.innerHTML=titleinput.value;
    dataDiv.innerHTML=datainput.value;
    butt1.id=titleinput.value;
    butt1.className="butt1";
    butt1.addEventListener("click",edit);
    externalDiv.appendChild(titleDiv);
    externalDiv.appendChild(dataDiv);
    externalDiv.appendChild(butt1);
    list.appendChild(externalDiv);
    window.localStorage.setItem(titleinput.value,datainput.value);
    location.reload();
    
}