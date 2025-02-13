var but = document.getElementById('but');
var radio1 = document.getElementsByName('in1');
var radio2 = document.getElementsByName('in2');
var radio3 = document.getElementsByName('in3');
var radio4 = document.getElementsByName('in4');
var radio5 = document.getElementsByName('in5');
var radio6 = document.getElementsByName('in6');
var radio7 = document.getElementsByName('in7');


function f2() {
   
    for (i=0;i<radio7.length;i++){
        
        
     if(radio1[i].selected && radio3[i].selected) {

       
          document.getElementById('out1').innerHTML = "10kPa";
                document.getElementById('out').innerHTML = "1,27kPa";
                return;
        }


        else if(radio1[i].selected && radio4[i].selected) {

 document.getElementById('out1').innerHTML = "10kPa";
                document.getElementById('out').innerHTML =  "0,94kPa";
                return;



        }
 else if(radio1[i].selected && radio5[i].selected) {

 document.getElementById('out1').innerHTML = "10kPa";
                document.getElementById('out').innerHTML =  "0,74kPa";
                return;



        }


 else if(radio1[i].selected && radio6[i].selected) {

 document.getElementById('out1').innerHTML = "10kPa";
                document.getElementById('out').innerHTML =  "0,56kPa";
                return;



        }


         else if(radio1[i].selected && radio7[i].selected) {

 document.getElementById('out1').innerHTML = "10kPa";
                document.getElementById('out').innerHTML =  "0,49kPa";
                return;



        }

         else if(radio2[i].selected && radio3[i].selected) {

 document.getElementById('out1').innerHTML = "300kPa";
                document.getElementById('out').innerHTML =  "30,57kPa";
                return;



        }


         else if(radio2[i].selected && radio4[i].selected) {

  document.getElementById('out1').innerHTML = "300kPa";
                document.getElementById('out').innerHTML =  "22,64kPa";
                return;



        }

         else if(radio2[i].selected && radio5[i].selected) {

  document.getElementById('out1').innerHTML = "300kPa";
                document.getElementById('out').innerHTML =  "17,71kPa";
                return;



        }

         else if(radio2[i].selected && radio6[i].selected) {
 document.getElementById('out1').innerHTML = "300kPa";
 
                document.getElementById('out').innerHTML =  "13,37kPa";
                return;



        }

         else if(radio2[i].selected && radio7[i].selected) {
 document.getElementById('out1').innerHTML = "300kPa";
 
                document.getElementById('out').innerHTML =  "11,71kPa";
                return;



        }

        


        
    }
}






