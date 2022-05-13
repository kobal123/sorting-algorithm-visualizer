async function bubbleSort(){



  let BARS = document.getElementsByClassName('bar');
  for(let i=0;i<GlobalArr.length-1;i++){
    for(let k=0;k<GlobalArr.length-i-1;k++){
      if(GlobalArr[k]>GlobalArr[k+1]){

        [GlobalArr[k],GlobalArr[k+1]]=[GlobalArr[k+1],GlobalArr[k]]
        await swap(BARS[k],BARS[k+1]);
      }
    }
    setElementColor(GlobalArr.length - 1 -i,"red");
  }

  await sleep(500);
  setAllElementColor("blue");
}


function swap(e1,e2){
  return new Promise(resolve=>{
    window.requestAnimationFrame(function() {
      setTimeout(() => {
        bar.insertBefore(e2, e1);
        resolve();
      }, 2000/slider.value);
    });

  });
}






