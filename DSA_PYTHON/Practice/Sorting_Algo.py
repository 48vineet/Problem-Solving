
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

# arr = [8, 5, 3, 5, 3, 2, 1]

# n = len(arr)

# for i in range(1, n):
#     key = arr[i]
#     j = i-1
#     while j >= 0 and arr[j] > key:
#         arr[j+1] = arr[j]
#         j -= 1
#     arr[j+1] = key

# print(arr)

#! Merge Sort

# def merge(left, right):
#     result = []
#     i, j = 0, 0
#     m, n = len(left), len(right)

#     while (i < m and j < n):
#         if left[i] <= right[j]:
#             result.append(left[i])
#             i += 1
#         else:
#             result.append(right[j])
#             j += 1

#     if i < m:
#         while (i < m):
#             result.append(left[i])
#             i += 1

#     if j < n:
#         while (j < n):
#             result.append(right[j])
#             j += 1
#     return result


# def sort(arr):
#     if len(arr) <= 1:
#         return arr
#     mid = len(arr) // 2
#     left = sort(arr[:mid])
#     right = sort(arr[mid:])
#     return merge(left, right)


# arr = [3, 6, 78, 8, 9, 7, 5, 3, 4, 5, 7, 8, 9, 8, 7, 5, 4, 3, 2, 2]

# print(sort(arr))
