def maxChar(str):
    chars={}
    for char in str:
        if(char in chars):
            chars[char]+=1
        else:
            chars[char]=1
    max=0
    maxChar=''
    for ch in chars:
        if(chars[ch]>max):
            max=chars[ch]
            maxChar=ch
        
    return maxChar




print(maxChar('hellooo'))