window.addEventListener('load',function(){

  var btn = document.getElementById("boton");
  var f1 = document.getElementById("form1");
  var f2 = document.getElementById("form2");

  f1.setAttribute('style','visibility:visible');
  f2.setAttribute('style','visibility:hidden');

  btn.addEventListener("click",function(){

    f1.setAttribute('style','visibility:hidden');
    f2.setAttribute('style','visibility:visible');

  });


})