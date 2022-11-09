export function getRandomNum(min:number, max:number,exc?:Array<number> | number):number  {
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  if(Array.isArray(exc)){
    let repeat = false
    for (let i = 0; i < exc.length; i++) {
      if(exc[i] === result){

        
        repeat = true
        break
      }
    }

    if(repeat){
      return getRandomNum(min,max,exc)
    }else{
      return result
    }

  }else{
    if(exc !== result){
      return result
    }else{
      return getRandomNum(min,max,exc)
    }
  }
}

