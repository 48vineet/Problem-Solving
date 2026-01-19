
from math import log10

#! Reverse the number python prog

num = 14683
rev = 0

# for i in range(0, len(str(num))):
#     n = num % 10
#     rev = rev * 10 + n
#     num = num // 10

# print(rev)

# while num > 0:
#     n = num % 10
#     rev = rev * 10 + n
#     num = num // 10

# print(rev)


#! Count the digit

# * Method 1
# num = 14683
# count = 0

# while num > 0:
#     count += 1
#     num = num // 10

# print(count)

# * Method 2
num = 14683  # Reinitialize num
# mcount = int(log10(num)) + 1
# print(mcount)


#! Check if num is palindrome of not


# def is_palindrome(num):
#     orignal = num
#     rev = 0
#     while num > 0:
#         n = num % 10
#         rev = rev * 10 + n
#         num = num // 10
#     return orignal == rev


# # Example usage
# num = 121
# print(is_palindrome(num))

#! Check if given no is amstrong no

def isAmstrong(num):
    orignal = num
    sumOf = 0
    count = 0
    temp = num  # Store the original number for reuse

    while temp > 0:
        n = temp % 10
        count += 1
        temp = temp // 10

    temp = num  # Reinitialize temp to the original number
    while temp > 0:
        n = temp % 10
        sumOf = sumOf + pow(n, count)
        temp = temp // 10

    return orignal == sumOf


print(isAmstrong(134))
