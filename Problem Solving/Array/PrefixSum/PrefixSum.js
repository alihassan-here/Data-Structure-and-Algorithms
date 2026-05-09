
function prefSum(arr){
    let length=arr.length;
    let prefixSumArray=new Array(length);
    prefixSumArray[0]=arr[0];
    for(let i=1;i<length;i++){
        prefixSumArray[i]=prefixSumArray[i-1]+arr[i];
    }
    return prefixSumArray;
}



console.log(prefSum([10, 20, 10, 5, 15]))
// INPUT: [10, 20, 10, 5, 15]
// OUTPUT:[10,30,40,45,60]