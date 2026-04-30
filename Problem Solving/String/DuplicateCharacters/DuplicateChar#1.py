def duplicate(str):
    countChar={}
    for ch in str:
        if ch in countChar:
            countChar[ch]=countChar[ch]+1
        else:
            countChar[ch]=1

    for ch,count in countChar.items():
        if count>1:
            print(ch,count)
# def duplicate(str):
#     for ch in set(str):
#         if str.count(ch)>1:
#             print(ch,str.count(ch))

duplicate("Programming")