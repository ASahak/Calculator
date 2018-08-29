
const butts = document.querySelectorAll(".num"),
      equals = document.querySelector(".equal"),
      root = document.querySelector(".root"),
      backspace = document.querySelector(".backspace"),
      reset = document.querySelector(".reset"),
      inp = document.querySelector("#calc_val"),
      tr = document.querySelectorAll(".tr");
var bool = false;
butts.forEach((e, m)=>{
    e.onclick = function(){
        bool = true;
        inp.value += e.innerText;
    }
})
tr.forEach((e, m)=>{
    e.onclick = function(){
        if(bool == true){
            inp.value += e.innerText;
            bool = false;
        }
    }
})
equals.onclick = function(){
    inp.value = calculate(inp.value)
}
root.onclick = function(){
    if(bool == true){
        inp.value = Math.sqrt(inp.value)
        bool = false;
    }
}
backspace.onclick = function(){
    inp.value = inp.value.slice(0,inp.value.length-1)
}
reset.onclick = function(){
    bool = false;
    inp.value = "";
}
const calculate = (inp)=>{
    var frt_obj = {
        mult:"*",
        div:"/",
        proz:"%",
        pow:"^",
        sum:"+",
        minus:"-"
    }
    var emp_arr=[],
        result;
            
    for(var key in frt_obj){
        emp_arr.push(frt_obj[key]);
    }
    emp_arr.forEach((elm, mls)=>{
        var reg = new RegExp('(\\d+\\.?\\d*)([\\' + emp_arr[mls] + '])(\\d+\\.?\\d*)');
        
        while(reg.test(inp)){
            result = calc_result(RegExp.$1, RegExp.$2, RegExp.$3);
            inp = inp.replace(reg, result)
        }
       
    })
    function calc_result(e, a, i){
        e = e*1;
        i = i*1;
        switch(a){
            case frt_obj.sum:
                return e+i;
                break;
            case frt_obj.minus:
                return e-i;
                break;
            case frt_obj.mult:
            return e*i;
                break;
            case frt_obj.div:
                return e/i;
                break;
            case frt_obj.proz:
                return e%i;
                break;
            case frt_obj.pow:
                return e**i;
                break;
            default:null;
        }
    }
     
     
    return result
}