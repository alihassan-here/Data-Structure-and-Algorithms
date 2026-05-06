function product(nums){
    if(nums.length<2) return nums;
    let i=0;
    let productArray=[]
    while(i<nums.length){
        let product=1;
        let j=0;
        while(j<nums.length){
            if(i!=j){
                product*=nums[j]
            }
            j++;
        }
        productArray.push(product)
        i++
    }
    return productArray;
}

console.log(product([1,2,3,4]))

// Input:  [1,2,3,4]
// Output: [24,12,8,6]