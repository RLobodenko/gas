var but1 = document.getElementById('1');




function f1(){
    
   let a = document.getElementById('in1').value;
    let b = document.getElementById('in2').value;
    let c = document.getElementById('in3').value;
    
   a=parseFloat(a);
   b=parseFloat(b);
    c=parseFloat(c);
    l=parseFloat(l);
    let j = a + b + c;
     let k = 0.13 + a + b + c;
      let l = 3.87 - a;
     let m = c - l;
  
    document.getElementById('out3').innerHTML = j + " м";
    document.getElementById('out4').innerHTML = k + " м";
    document.getElementById('out5').innerHTML = l + " м";
    document.getElementById('out6').innerHTML = m.toFixed(2) + " м";
    
}





