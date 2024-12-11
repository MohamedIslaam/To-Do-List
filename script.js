const inp=document.getElementById("itm");
const btn=document.getElementById("btn");
const tskdis=document.getElementById("taskdis");

btn.addEventListener('click',()=>{
    var tskval=inp.value;
    var itm=document.createElement("div");
    itm.className="task-itm";
    var nm=document.createElement("span");
    nm.id="task";
    nm.textContent=tskval;
    var cmp=document.createElement("button");
    cmp.type="button";
    cmp.id="cmp";
    cmp.textContent="Completed";
    itm.appendChild(nm);
    itm.appendChild(cmp);
    tskdis.appendChild(itm);
    cmp.addEventListener('click',()=>{
        tskdis.removeChild(itm);
    })
});