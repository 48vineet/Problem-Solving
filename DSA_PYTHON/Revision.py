
#! Selection sort

# arr = [1, 4, 6, 8, 3]

# n = len(arr)

# for i in range(0, n):
#     min_idx = i
#     for j in range(i+1, n):
#         if arr[j] < arr[min_idx]:
#             min_idx = j
#     arr[i], arr[min_idx] = arr[min_idx], arr[i]

# print(arr)

#! Bubble Sort (Adjacent swapping)

# arr = [1, 4, 6, 8, 3]
# n = len(arr)

# for i in range(n-2, -1, -1):
#     for j in range(0, n-1):
#         if arr[j] > arr[j+1]:
#             arr[j], arr[j+1] = arr[j+1], arr[j]

# print(arr)

#! Selection Sort

# arr1 = [1, 4, 6, 8, 3]


# n = len(arr)

# for i in range(1, n):
#     key = arr[i]
#     j = i - 1
#     while j >= 0 and arr[j] > key:
#         arr[j+1] = arr[j]
#         j -= 1
#     arr[j+1] = key

# print(arr, "Hii")


arr1 = [1, 4, 6, 8, 3]
arr2 = [9, 8, 7, 6, 5]

arr2 = arr1

print(arr2)
