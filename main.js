function a(){
    var va = document.getElementById("net_worth")
    var vvv = document.getElementById("net_worthh")
    var vv = vvv.value
    var v = parseInt(va.value);
    console.log(v);
    document.getElementById("main_h").innerText = vv + "에게 " + v + "원 입금되었습니다";
}

document.getElementById("but").addEventListener("click",a )



