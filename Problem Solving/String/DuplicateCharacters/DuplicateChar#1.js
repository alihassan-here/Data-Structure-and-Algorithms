function duplicate(str){
    let countMap=new Map();
    for(let ch of str){
        if(countMap.has(ch)){
            countMap.set(ch,countMap.get(ch)+1)
        }else{
            countMap.set(ch,1)
        }
    }
    countMap.forEach((value,key)=>{
        if(value>1){
            console.log(key)
        }
    })
}


duplicate("Programming")