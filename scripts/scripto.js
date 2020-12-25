var count=0;
var c = document.querySelector('.pt');
document.querySelector('.button-2').addEventListener('click', inc);
document.querySelector('.button-1').addEventListener('click', dic);
document.querySelector('.reset-1').addEventListener('click', reset);
 function inc(){
    count +=1;
    c.textContent=count;
    color();
 }
 function dic()
 {
    count -=1;
    c.textContent=count;
    color();
 }
 function reset()
 {
    count=0;
    c.textContent=count;
    color();
 }

 function color(){
    if(count<0)
    {
       c.style.color="red";
    }
    else if(count>0){
      c.style.color="black";
  }
  else if(count===0) {
      
      c.style.color="white";
  }
 }
 