document.getElementById("btn-1").addEventListener("click",fun);
document.getElementById("btn-2").addEventListener("click",fun2);
document.getElementById("btn-3").addEventListener("click",fun3);
document.getElementById("btn-4").addEventListener("click",fun4);

let count=0;
function fun(){
    count+=3;
    document.getElementById("span").innerHTML="$"+count;
}

function fun2(){
    count+=2;
    document.getElementById("span").innerHTML="$"+count;
}

function fun3(){
    count+=3;
    document.getElementById("span").innerHTML="$"+count;
}

function fun4(){
    count+=5;
    document.getElementById("span").innerHTML="$"+count;
}