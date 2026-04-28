def vowels(str):
    count=0
    checker=["a","e","i","o","u"]
    for check in str:
        if(check.lower() in checker):
            count+=1    
    return count


print(vowels("hello"))
