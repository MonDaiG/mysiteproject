'use strict';
{
  const draw=() =>{
    var canvas=document.getElementById('canvas')
    var ctx=canvas.getContext("2d")

    // ctx.strokeStyle='black'
    // ctx.strokeRect(50,50,100,100)

    var top=new Image();
    top.src="./pythonbook.png"
    top.onload=()=>{
      ctx.drawImage(top,100,100,200,282)
    }
    var back=new Image();
    back.src="./pythonback.png"
    back.onload=()=>{
      ctx.drawImage(back,0,100,100,282)
    }
    var btm=new Image();
    btm.src="./pythonbtm.png"
    btm.onload=()=>{
      ctx.drawImage(btm,100,383,200,100)
    }


  }
  draw()
}