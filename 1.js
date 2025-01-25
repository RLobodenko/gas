var but1 = document.getElementById('1');

function f1(){
    
    var a = document.getElementById('in1').value;
  var c = document.getElementById('in3').value;
     var d = document.getElementById('in4').value;

     
    
    var e = a * c / (c + d) ;

   var f = a - e;
   
    document.getElementById('out3').innerHTML = e.toFixed(2) + " руб";
        document.getElementById('out4').innerHTML = f.toFixed(2) + " руб";
   
    
}
