/*
    ---MULTIPLE POINTERS PATTERN---
    Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
*/
    //---NAIVE SOLUTION---
/*
    function sumZero(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;i<arr.length;j++){
            if(arr[i]+arr[j]===0){
                return [arr[i],arr[j]];
            }
        }
    }
}
*/

//---REFACTORED SOLUTION---
function sumZero(arr){
    let left=0,
    right=arr.length-1;
    while(left<right){
        let sum=arr[left]+arr[right];
        if(sum===0){
            return [arr[left],arr[right]];
        }else if(sum>0){
            right--;
        }else{
            left++;
        }
    }
}
console.log(sumZero([-3,-2,0,1,2,3]))
