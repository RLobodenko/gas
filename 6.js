var but = document.getElementById('but');
var radio1 = document.getElementsByName('in1');
var radio2 = document.getElementsByName('in2');

var radio5 = document.getElementsByName('in5');
var radio6 = document.getElementsByName('in6');

var one = document.getElementById('1');



function f2() {
   
    for (i=0;i<radio6.length;i++){
        
        
   


        
 if(radio1[i].selected && radio5[i].selected) {

 document.getElementById('out1').innerHTML = "10кПа";
                document.getElementById('out').innerHTML =  "0,74 кПа";
                return;



        }


 else if(radio1[i].selected && radio6[i].selected) {

 document.getElementById('out1').innerHTML = "10кПа";
                document.getElementById('out').innerHTML =  "0,77 кПа";
                return;



        }


    

         


      
         else if(radio2[i].selected && radio5[i].selected) {

  document.getElementById('out1').innerHTML = "300кПа";
                document.getElementById('out').innerHTML =  "17,71 кПа";
                return;



        }

         else if(radio2[i].selected && radio6[i].selected) {
 document.getElementById('out1').innerHTML = "300кПа";
 
                document.getElementById('out').innerHTML =  "18,46 кПа";
                return;



        }

       

        


        
    }
}




function f1(){
    
    var a = document.getElementById('in7').value;
    var b = document.getElementById('in8').value;
      
  var c = document.getElementById('in9').value;
     var d = document.getElementById('in10').value;

     
    
    var e = 676 * a + 729 * b + 2500 * c + 2641.96 * d;

var f = 26 * a + 27 * b + 50 * c + 51.4 * d;
    
    var j = e / f ;

 
            var k = 20 / j;
            document.getElementById('out2').innerHTML = k.toFixed(2) + " кПа";
    
    var l = 480 / j
    document.getElementById('out3').innerHTML = l.toFixed(2) + " кПа";
       
    }
 
  

     
   
    


