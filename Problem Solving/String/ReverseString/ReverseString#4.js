function reverse(str){
    let strArray=str.split("");
    let i=0;
    let j=strArray.length-1;
    while(i<j){
        swap(i,j,strArray);
        console.log(strArray)
        i++;
        j--
    }
    return strArray.join("")

}

function swap(i,j,characters){
        let temp=characters[i];
        characters[i]=characters[j];
        characters[j]=temp
}

console.log(reverse("message"))