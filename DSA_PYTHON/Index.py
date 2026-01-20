
from math import log10, sqrt

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

# def isAmstrong(num):
#     orignal = num
#     sumOf = 0
#     count = 0
#     temp = num  # Store the original number for reuse

#     while temp > 0:
#         n = temp % 10
#         count += 1
#         temp = temp // 10

#     temp = num  # Reinitialize temp to the original number
#     while temp > 0:
#         n = temp % 10
#         sumOf = sumOf + pow(n, count)
#         temp = temp // 10

#     return orignal == sumOf


# print(isAmstrong(134))


#! Factors of the numbers TC- O(N) SC- O(K) where k would be the total no of factors

# num = 19
# l1 = []

# for i in range(1, num+1):
#     if num % i == 0:
#         l1.append(i)

# print(l1)


#! Factors of the numbers TC- O(N/2) SC- O(K) where k would be the total no of factors
# num = 20
# l1 = []

# for i in range(1, (num+1)//2):
#     if num % i == 0:
#         l1.append(i)
# l1.append(num)
# print(l1)


#! Factors of the numbers TC- O(sqrt(n)) + o(nlogn) SC- O(K) where k would be the total no of factors

# num = 20
# l1 = []

# for i in range(1, int((sqrt(num))+1)):
#     if num % i == 0:
#         l1.append(i)
#         if num // i != i:
#             l1.append(num // i)
# l1.sort()
# print(l1)

#! Hashing in python here time comple is O(1) where space comple is O(1)

# * Method 1
# nums = [2, 3, 4, 5, 6, 6, 3, 2, 1, 2, 3, 4, 9, 8, 3, 12]
# dic = {}


# for i in range(0, len(nums)):
#     if nums[i] in dic:
#         dic[nums[i]] += 1
#     else:
#         dic[nums[i]] = 1

# print(dic)

# * Method 2

nums = [2, 3, 4, 5, 6, 6, 3, 2, 1, 2, 3, 4, 9, 8, 3, 12]
dic = {}
n = len(nums)

for i in range(0, n):
    dic[nums[i]] = dic.get(nums[i], 0)+1

print(dic)
