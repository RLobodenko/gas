var but = document.getElementById('but');
var radio1 = document.getElementsByName('in1');
var radio2 = document.getElementsByName('in2');

var radio5 = document.getElementsByName('in5');
var radio6 = document.getElementsByName('in6');



function f2() {
   
    for (i=0;i<radio6.length;i++){
        
        
   


        
 if(radio1[i].selected && radio5[i].selected) {

 document.getElementById('out1').innerHTML = "10kPa";
                document.getElementById('out').innerHTML =  "0,7kPa";
                return;



        }


 else if(radio1[i].selected && radio6[i].selected) {

 document.getElementById('out1').innerHTML = "10kPa";
                document.getElementById('out').innerHTML =  "0,77kPa";
                return;



        }


    

         


      
         else if(radio2[i].selected && radio5[i].selected) {

  document.getElementById('out1').innerHTML = "300kPa";
                document.getElementById('out').innerHTML =  "17,71kPa";
                return;



        }

         else if(radio2[i].selected && radio6[i].selected) {
 document.getElementById('out1').innerHTML = "300kPa";
 
                document.getElementById('out').innerHTML =  "18,46kPa";
                return;



        }

       

        


        
    }
}





