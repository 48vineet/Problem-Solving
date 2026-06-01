# output = "c"
s = "aabbcddee"

hashSet = {}
count = 0
for i in s:
    if i in hashSet:
        hashSet.get(i, count + 1)
    else:
        hashSet[i] = hashSet.get(i, count)

print(hashSet)
