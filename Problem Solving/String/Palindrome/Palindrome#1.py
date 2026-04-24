def Palindrome(string):
    lst=list(string)
    lst.reverse()
    rev="".join(lst)
    return string==rev


print(Palindrome("mada"))