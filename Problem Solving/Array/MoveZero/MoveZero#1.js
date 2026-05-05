
//MOVE ZEROS TO RIGHT WITHOUT MAINTAINING ORDER
// function moveZeroes(nums) {
//    return nums.sort((a,b)=>b-a)
// }

//MOVE ZEROS TO RIGHT MAINTAINING ORDER
// function moveZeroes(nums) {
//     let i=0;
//     let j=0;
//     while(j<nums.length){
//         if(nums[j]!==0){
//             if (i !== j) {  // Only swap if different positions
//             [nums[i],nums[j]]=[nums[j],nums[i]]
//             i++;
//             }
//         }
//         j++;
//     }
//     return nums;
// }



//MOVE ZEROS TO LEFT MAINTAINING ORDER
function moveZeroes(nums) {
    let i=nums.length-1;
    let j=nums.length-1;
    while(j>=0){
        if(nums[j]!==0){
            if (i !== j) {  // Only swap if different positions
            [nums[i],nums[j]]=[nums[j],nums[i]]
        }
        i--;
        }
        j--;
    }
    return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
// Test cases to try:
console.log(moveZeroes([0,1,0,3,12]));  // [1,3,12,0,0]
console.log(moveZeroes([0]));            // [0]
console.log(moveZeroes([1]));            // [1]
console.log(moveZeroes([1,0,1]));        // [1,1,0]
console.log(moveZeroes([0,0,1]));        // [1,0,0]