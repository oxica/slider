var  slider  = { 
//массив с  изображениями 
slides: [ '6. jpg',' 9. jpg', '20. jpg'], 
// начальный кадр  (индекс из массива,  нумерация с  0) 
frame:O, 
set:  function(image)  {  // установка нужного фона слайдеру 
document.getElementByid("scr")  .style.backgroundimage 
"url("+image+")"; 
} ; 
}  ' 
init:  function()  {  // запуск слайдера с  начальной картинкой 
this.set(this.slides[this.frame]); 
} ' 
left:  function()  {  // влево 
}  ' 
this.frame--; 
if(this.frame  <  0)  this.frame  =  this.slides.length-1; 
this.set(this.slides[this.frame]); 
right:  function()  {  // вправо 
this.frame++; 
if(this.frame  ==  this.slides.length)  this.frame  О; 
this.set(this.slides[this.frame]); 
window.onload  =  function()  {  // запуск слайдера после  загрузки 
документа 
slider.  init  (); 
set!nterval(function()  {  //  5  секунд 
slider.right();  //после - переход на  кадр справа 
),5000); 
} ; 
