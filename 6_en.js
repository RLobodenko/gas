var but1 = document.getElementById('1');




function f1(){
    
   var a = document.getElementById('in1').value;
    var b = document.getElementById('in2').value;
    var c = document.getElementById('in3').value;
   
    
    
    var d = 3.87 - a;
    var e = c - d;
        
        document.getElementById('out1').innerHTML = d.toFixed(2) + " м";
        document.getElementById('out2').innerHTML = e.toFixed(2) + " м";
        
}





