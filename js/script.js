
$(function(){

    $('.btn11').on('click', function() {
      $(".btn11").toggleClass('open');
       $('.header .menu').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');


            }
       });

    });

});


var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });



//рассчитанный body со всеми css стилями
let  calculatedBody =  getComputedStyle( document.body);  

let rotated = false;


//если компьютерный экран
if(parseFloat(calculatedBody.width)>=1000) {
  // let footer = document.querySelector('.footer');
  let triangleImages =  document.querySelectorAll('div.item.alCenter.abs.cover');
  let [,rightTriangle,leftTriangle] = triangleImages;
  let topTriangle = document.querySelector('.top-title.rL.alCenter.d-flex');

  // footer.style.opacity = 0;
  topTriangle.style.position = "absolute";
  topTriangle.style.top="-35%";
  topTriangle.style.display="none";
  rightTriangle.style.right="-50%";
  leftTriangle.style.left= "-50%";

  
   //скроллинг
  window.addEventListener('scroll', function(e){


    let choosenElement = defineCurrentWatchingBlock();
    //если есть
     if(choosenElement){
    blockActions(choosenElement.className);
  console.log(choosenElement.className);
 }
 
 

    
  }); 

 


   

}//окончание скриптов для компьютера

//показать треугольники когда прокрутили
function showTrianglesOnScroll(){

  let triangleImages =  document.querySelectorAll('div.item.alCenter.abs.cover');
  let [,rightTriangle,leftTriangle] = triangleImages;
  let topTriangle = document.querySelector('.top-title.rL.alCenter.d-flex');
  
  topTriangle.style.display = '';

  triangleMove(topTriangle,'top');
  triangleMove(rightTriangle,'right');
  triangleMove(leftTriangle,'left');

}

//движение треугольника
function triangleMove( elem, side,speedOfTriangle=50){
  
  setTimeout(function run(){
    if(elem.style[side]=="0%"){    
     return;
    }
       elem.style[side] =`${parseFloat(elem.style[side])+1}%`;

    setTimeout(run, speedOfTriangle);
  } //конец функции
       , 0);
}



//показать footer
function footerShowing(){
   let footer = document.querySelector('.footer');
   setTimeout(function run(){
     if(footer.style.opacity==1)
     return;

     footer.style.opacity =   ((+footer.style.opacity*100+10)/100 );
    setTimeout(run, 150);
   },0);
   
}

let imageBlock = document.querySelector('.brandImageBlock');

//при прокрутке мышкой
imageBlock.addEventListener('wheel', scrollGenerate);
document.body.addEventListener('keydown', (e)=>{
      if(e.which==40||e.which==38) 
      {
        scrollGenerate();
      }
});


//сгенерировать скроллинг
function scrollGenerate(){
  let event = new Event('scroll');
  dispatchEvent(event);
}


let currentState = 0;

//увеличивающееся и вращающееся изображение
function rotatingImage(){
 //изображение для вращения
 if(rotated) return;

  let image = document.querySelector('.brandImage');
  
  //индекс теущего состояния
  let stateArray = [];

console.log(image);
console.log(imageBlock);

 imageBlock.style.position = 'fixed';
 imageBlock.style.bottom = "0%";
 imageBlock.style.left  = "0%";
 imageBlock.style.backgroundColor = 'black';
 imageBlock.style.height  = "100%";
  imageBlock.style.width  = "100%";
 imageBlock.style.zIndex  = "1000";


document.body.style.overflow = 'hidden';



    for(let i=0,j=0,k=0;i<700; i=i+10,j=j+0.015,k=k+0.015 )
  stateArray.push(`rotate(${i}deg) scale(${j},${k}) `);
  stateArray.push(`rotate(${700}deg) scale(${0.95},${0.95}) `);
  stateArray.push(`rotate(${710}deg) scale(${0.95},${0.95}) `);
  stateArray.push(`rotate(${720}deg) scale(${1},${1}) `);


  image.style.transform = stateArray[currentState];
 
  if(!rotated){
    if(currentState == stateArray.length-1){ 
      rotated = true;
      
  

      setTimeout(()=>{
      imageBlock.style.position = 'relative';
      document.body.style.overflow = '';
      },2500)
      imageBlock.removeEventListener(scrollGenerate);
      return;
    }
     image.style.transform = stateArray[currentState];
     currentState++;
  }
 
  
 

}



//действия в зависимости от блока над которым просмотр
function blockActions(blockClass){
   switch(blockClass){
  
      case 'about-block rL hid box cover':
      showTrianglesOnScroll();
      break;
      //вертящееся изображение
      case 'brandImageBlock':
      rotatingImage();

    
   }  
}


//если середина обзорной области равна или ниже центра блока в координатах то срабатывает scroll
//определить блок над которым сейчас середина экрана
function defineCurrentWatchingBlock(){
   
  let centerX = document.documentElement.clientWidth / 2;
  let centerY = document.documentElement.clientHeight / 11;

   let elem = document.elementFromPoint(centerX, centerY);
  
  //меня интересуют #footer, .about-block.rL.hid.box.cover   , .departing-block
  let parentElem = elem.closest('.footer')||elem.closest('.about-block.rL.hid.box.cover')||elem.closest('.brandImageBlock');
  if(parentElem){
    return parentElem;
  }

}



