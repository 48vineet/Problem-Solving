
#! Selection Sort

# arr = [9, 4, 3, 6, 5, 2, 1]
# n = len(arr)

# for i in range(0, n):
#     min_idx = i
#     for j in range(i+1, n):
#         if arr[j] < arr[min_idx]:
#             min_idx = j
#     arr[i], arr[min_idx] = arr[min_idx], arr[i]

# print(arr)


#! Bubble sort (Adjacent Swap)

# arr = [9, 4, 3, 6, 5, 2, 1]
# n = len(arr)

# for i in range(n-2, -1, -1):
#     for j in range(0, i+1):
#         if arr[j] > arr[j+1]:
#             arr[j], arr[j+1] = arr[j+1], arr[j]


# print(arr)

#! Insertion Sort

arr = [8, 5, 3, 5, 3, 2, 1]

n = len(arr)

for i in range(1, n):
    key = arr[i]
    j = i-1
    while j >= 0 and arr[j] > key:
        arr[j+1] = arr[j]
        j -= 1
    arr[j+1] = key

print(arr)
