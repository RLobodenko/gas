var but1 = document.getElementById('1');

function f1(){
    
    var a = document.getElementById('in1').value;
    

     
    
    var b = 3.87 - a ;
    
    var c = document.getElementById('in2').value;
    
  var d = c - b;
   
   
    document.getElementById('out3').innerHTML = b.toFixed(2) + " м";
    document.getElementById('out2').innerHTML = d.toFixed(2) + " м";
   
    
}
