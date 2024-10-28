var but2 = document.getElementById('2');
var but3 = document.getElementById('3');



function f4(){
    
   var d = document.getElementById('in6').value;
    var i = document.getElementById('in7').value;

   // var f = d + i;
    
//var j = 2 * d * i / f;
    
    var q = 0.1 * d / 10;
     
    var w = 0.2 * d / 10;
     
   
     
    var t = 0.4 * d / 10;
     
    var u = 0.1 * i / 10;
     
     var p = 0.2 * i / 10;
     

     
   var  s = 0.4 * i / 10;
     

     
     
     
    
     

     
     

     
  
     
    var u1 = 0.9 * i / 10;

 
     var p1 = 0.8 * i / 10;
     
  
     
   var  s1 = 0.6 * i / 10;
     
     

    if ( i >= 100 && i <= 200) {
        
        document.getElementById('out7').innerHTML = w.toFixed(2) + " см";
        document.getElementById('out10').innerHTML = p.toFixed(2) + " см";
        
     
        document.getElementById('out22').innerHTML = p1.toFixed(2) + " см";
        
        
        document.getElementById('out6').innerHTML = " ";
    
   
        document.getElementById('out8').innerHTML = " ";
        
        document.getElementById('out9').innerHTML = " ";
        
        
        document.getElementById('out11').innerHTML = " ";
        
      
        
   
        
        document.getElementById('out21').innerHTML = " ";
        document.getElementById('out23').innerHTML = " ";
        
        
        return
    }
    else if ( i > 200){
        document.getElementById('out6').innerHTML = q.toFixed(2) + " см";
    
   
        document.getElementById('out8').innerHTML = t.toFixed(2) + " см";
        
        document.getElementById('out9').innerHTML = u.toFixed(2) + " см";
        
        
        document.getElementById('out11').innerHTML = s.toFixed(2) + " см";
        
 
        
        document.getElementById('out21').innerHTML = u1.toFixed(2) + " см";
        document.getElementById('out23').innerHTML = s1.toFixed(2) + " см";
        
        
        
        document.getElementById('out7').innerHTML =  " ";
        document.getElementById('out10').innerHTML = " ";
      
        document.getElementById('out22').innerHTML = " ";
        
        return
    }
    
  
    
// var k = 6 * j;
    
 //  var  l = 2 * j;
      
 //document.getElementById('out2').innerHTML = j + " мм";
    
 //   document.getElementById('out3').innerHTML = l + " мм";
    
    
  
    
    
    
    
   

    
}


function f5(){
    


var v = document.getElementById('in9').value;
    
    
var x = v * 0.054 / 10;
    
  var y = v * 0.12 / 10;
    
var z = v * 0.28 / 10;
    
 
    var a = (v - v * 0.054) / 10;
        
      var b = (v - v * 0.12) / 10;
        
    var c = (v - v * 0.28) / 10;
    
    var b1 = 6 * v / 10;
    var c1 = 2 * v / 10;
    
    document.getElementById('out24').innerHTML = b1.toFixed(1) + " см";
    document.getElementById('out25').innerHTML = c1.toFixed(1) + " см";
    
    if ( v >= 100 && v <= 300) {
        
        
        
        
        
        document.getElementById('out13').innerHTML = y.toFixed(2) + " см";
        document.getElementById('out16').innerHTML = b.toFixed(2) + " см";
        
        
        
        
        document.getElementById('out12').innerHTML =  " ";
    
   
    
    document.getElementById('out14').innerHTML = " ";
        
        document.getElementById('out15').innerHTML = " ";
        
        
        document.getElementById('out17').innerHTML = " ";
        return
    }
    else if ( v > 300){
    document.getElementById('out12').innerHTML = x.toFixed(2) + " см";
    
   
    
    document.getElementById('out14').innerHTML = z.toFixed(2) + " см";
        
        document.getElementById('out15').innerHTML = a.toFixed(2) + " см";
        
        
        document.getElementById('out17').innerHTML = c.toFixed(2) + " см";
        
           document.getElementById('out13').innerHTML =  " ";
        document.getElementById('out16').innerHTML = " ";
        return
    }
    

        
       
}






