function getis(){
        for(var i=0;i<localStorage.length;i++)
        {
            console.log(localStorage.key(i));
            var title=localStorage.key(i);
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
            var butt=document.createElement('button');
            butt.innerHTML="Delete";
            butt.id=localStorage.key(i);
            butt.className="btn btn-danger";
            butt.addEventListener("click",del);
            titleDiv.innerHTML=title;
            dataDiv.innerHTML=data;
            externalDiv.appendChild(ediv1);
            ediv1.appendChild(ediv2);
            ediv2.appendChild(titleDiv);
            ediv2.appendChild(dataDiv);
            ediv2.appendChild(butt);
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

    function del()
    {
        console.log(this.id);
        localStorage.removeItem(this.id);
        var myob=document.getElementById(this.id);
        myob.remove();
        if(localStorage.length==0)
        {
            var head=document.createElement("div");
            head.className="alert alert-danger alert-dismissible fade show";
            head.innerHTML="please create note";
            document.getElementById("create1").appendChild(head);
        }
    }
