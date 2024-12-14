//var but1 = document.getElementById('1');
var but = document.getElementById('but');
var radio1 = document.getElementsByName('in1');
var radio2 = document.getElementsByName('in2');
var radio3 = document.getElementsByName('in3');
var radio4 = document.getElementsByName('in4');
var radio5 = document.getElementsByName('in5');
var radio6 = document.getElementsByName('in6');
var radio7 = document.getElementsByName('in7');

//var ryb = new Object();
//ryb.symma = "МПа";


function f2() {
   
    for (i=0;i<radio7.length;i++){
        
        
     if(radio1[i].selected && radio3[i].selected) {

       
       
                document.getElementById('out').innerHTML = "0,94кПа";
                return;
        }


        else if(radio1[i].selected && radio4[i].selected) {

 
                document.getElementById('out').innerHTML =  "0,74кПа";
                return;



        }
 else if(radio1[i].selected && radio5[i].selected) {

 
                document.getElementById('out').innerHTML =  "0,59кПа";
                return;



        }


 else if(radio1[i].selected && radio6[i].selected) {

 
                document.getElementById('out').innerHTML =  "0,47кПа";
                return;



        }


         else if(radio1[i].selected && radio7[i].selected) {

 
                document.getElementById('out').innerHTML =  "0,42кПа";
                return;



        }

         else if(radio2[i].selected && radio3[i].selected) {

 
                document.getElementById('out').innerHTML =  "22,5кПа";
                return;



        }


         else if(radio2[i].selected && radio4[i].selected) {

 
                document.getElementById('out').innerHTML =  "17,9кПа";
                return;



        }

         else if(radio2[i].selected && radio5[i].selected) {

 
                document.getElementById('out').innerHTML =  "14,3кПа";
                return;



        }

         else if(radio2[i].selected && radio6[i].selected) {

 
                document.getElementById('out').innerHTML =  "11,3кПа";
                return;



        }

         else if(radio2[i].selected && radio7[i].selected) {

 
                document.getElementById('out').innerHTML =  "10кПа";
                return;



        }

        


        
    }
}


/* function f1(){
    
 let a = document.getElementById('in1').value;
  let b = document.getElementById('in2').value;
  let c = document.getElementById('in3').value;
    
 a=parseFloat(a);
b=parseFloat(b);
    c=parseFloat(c);
    
    let j = a + b + c;
     let k = 0.13 + a + b + c;
      let l = 3.87 - a;
     let m = c - l;
  
    document.getElementById('out3').innerHTML = j.toFixed(2) + " м";
    document.getElementById('out4').innerHTML = k.toFixed(2) + " м";
    document.getElementById('out5').innerHTML = l.toFixed(2) + " м";
    document.getElementById('out6').innerHTML = m.toFixed(2) + " м";
    
}

*/



