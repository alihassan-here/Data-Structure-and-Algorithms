function MaxSubstring(str){
    let left=0;
    let charSet=new Set();

    for(let right=0;right<str.length;right++){
        console.log(str[right])
        while(charSet.has(str[right])){
            charSet.delete(str[left]);
            left++;
        }
        charSet.add(str[right]);
        console.log(charSet)
    }
    return [...charSet];
}

console.log(MaxSubstring("aaaba"));