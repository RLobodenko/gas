var but1 = document.getElementById('1');

function f1(){
    
    var a = document.getElementById('in1').value;
    

     
    
    var b = 3.87 - a ;
    
    var c = document.getElementById('in2').value;
    
  var d = c - b;
    var e = document.getElementById('in3').value;
    
    var j = e - b;
    

    

    
   
    
    document.getElementById('out3').innerHTML = b.toFixed(2) + " м";
    document.getElementById('out2').innerHTML = d.toFixed(2) + " м";
    document.getElementById('out4').innerHTML = j.toFixed(2) + " м";
  

}


function f2(){
    
    var a = document.getElementById('in4').value;
    

     
    
    var b = 3.87 - a ;
    
    var c = document.getElementById('in5').value;
    
  var d = c - b;
    var e = document.getElementById('in6').value;
    
    var j = e - b;
    
    var f = document.getElementById('in7').value;
    
    var k = b - c;
    
    var l = f - k;
    
    
    var m = e - c - k;
    

    document.getElementById('out5').innerHTML = k.toFixed(2) + " м";
    document.getElementById('out6').innerHTML = l.toFixed(2) + " м";
    document.getElementById('out7').innerHTML = m.toFixed(2) + " м";
}

