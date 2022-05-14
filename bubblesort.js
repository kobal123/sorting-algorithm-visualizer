async function bubbleSort(){



  const BARS = document.getElementsByClassName('bar');
  for(let i=0;i<GlobalArr.length-1;i++){
    for(let k=0;k<GlobalArr.length-i-1;k++){

      if(GlobalArr[k]>GlobalArr[k+1]){
        if(didArrayChange)
          return;

        setElementColor(k,"red");
        setElementColor(k+1,"red");

        [GlobalArr[k],GlobalArr[k+1]]=[GlobalArr[k+1],GlobalArr[k]]
        await swap(BARS[k],BARS[k+1]);
      }
      setElementColor(k,"powderblue");
      setElementColor(k+1,"powderblue");

    }
    setElementColor(GlobalArr.length - 1 -i,"green");
  }
  sleep(100);
  setElementColor(0,"green");

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






