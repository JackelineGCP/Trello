window.addEventListener('load',function(){

  var btn = document.getElementById("boton");
  var f1 = document.getElementById("form1");
  var f2 = document.getElementById("form2");
  var btn2 = document.getElementById("boton2");

  var t1 = document.getElementById("texto");
  var c1 = document.getElementById("click");
  

  f1.setAttribute('style','visibility:visible');
  f2.setAttribute('style','visibility:hidden');
  c1.setAttribute('style','visibility:hidden'); 
  

  btn.addEventListener("click",function(){
    f1.setAttribute('style','visibility:hidden');
    f2.setAttribute('style','visibility:visible');
  });

  btn2.addEventListener("click",function(){
    t1.disabled = true;  
    btn2.setAttribute('style','visibility:hidden');
    c1.setAttribute('style','visibility:visible');   
  });


})