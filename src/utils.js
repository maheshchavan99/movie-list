export const moviesRuntime=(num)=>{
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return hours +"hr"+ ":" + minutes +"min";    
  }
  export const generData=(gener)=>{
    let generDatas=gener?.join(", ")
    return generDatas
  }