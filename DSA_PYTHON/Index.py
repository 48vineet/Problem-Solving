
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


def is_palindrome(num):
    orignal = num
    rev = 0
    while num > 0:
        n = num % 10
        rev = rev * 10 + n
        num = num // 10
    return orignal == rev


# Example usage
num = 121
print(is_palindrome(num))
