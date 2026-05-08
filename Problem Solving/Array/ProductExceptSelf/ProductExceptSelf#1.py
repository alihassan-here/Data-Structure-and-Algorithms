def product(nums):
    if len(nums)<2:
        return nums
    i=0
    productArray=[]
    while i < len(nums):
        product=1
        j=0
        while j<len(nums):
            if(i !=j):
                product*=nums[j]
            j+=1
        productArray.append(product)
        i+=1
    return productArray

print(product([1,2,3,4]))