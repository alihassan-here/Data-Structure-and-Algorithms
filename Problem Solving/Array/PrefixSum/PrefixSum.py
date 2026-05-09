def pref_sum(arr):
    length=len(arr)
    prefix_sum_array=[0]*length
    prefix_sum_array[0]=arr[0]
    for index,value in enumerate(arr[1:],start=1):
        prefix_sum_array[index]=prefix_sum_array[index-1]+value

    return prefix_sum_array







print(pref_sum([10, 20, 10, 5, 15]))
# INPUT: [10, 20, 10, 5, 15]
# OUTPUT:[10,30,40,45,60]