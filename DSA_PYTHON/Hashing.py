
#! first well learn about reversing a number

# rev = 0
# n = 12345

# while n != 0:
#     num = n % 10
#     rev = rev * 10 + num
#     n = n // 10

# print(rev)

#! Hashing in python

# ? Que 1
# todo constraint is 1) 1 <= n[i] <= 10 2) n and m can have 10**8 elements

# n = [5, 3, 2, 2, 1, 5, 5, 7, 5, 10]
# m = [10, 111, 1, 9, 5, 67, 2]


# * Step 1
# hashList = [0] * 11
# print(hashList)  # ! [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

# * Step 2

# for num in n:
#     hashList[num] += 1

# print(hashList)  # ! [0, 1, 2, 1, 0, 4, 0, 1, 0, 0, 1]

# * step 3 solution

# for ans in m:
#     if ans < 1 or ans > 10:
#         continue
#     else:
#         print(hashList[num])

# todo here time complexity is O(m + n) ans space is O(11) which is equal to O(1)

#! Hashing using dictionary
# n = [5, 3, 2, 2, 1, 5, 5, 7, 5, 10]
# m = [10, 111, 1, 9, 5, 67, 2]

# hashDict = {}

# length = len(n)

# for i in range(0, length):
#     hashDict[n[i]] = hashDict.get(n[i], 0)+1

# print(hashDict)

#! Hashing with charecter

s = "azyxyyzaaaa"
q = ["d", "a", "y", "x"]

dictt = {}

for i in s:
    if i in q:
        dictt[i] = dictt.get(i, 0)+1

print(dictt)
