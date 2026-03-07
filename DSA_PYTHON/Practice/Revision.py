
#! Selction sort

# arr = [1, 4, 6, 8, 3]
# n = len(arr)

# for i in range(0, n):
#     min_ele = i
#     for j in range(i+1, n):
#         if arr[j] < arr[min_ele]:
#             min_ele = j
#     arr[i], arr[min_ele] = arr[min_ele], arr[i]

# print(arr)

#! Bubble sort

# arr = [1, 4, 6, 8, 3]
# n = len(arr)

# for i in range(n-2, -1, -1):
#     for j in range(0, i+1):
#         if arr[j] > arr[j+1]:
#             arr[j], arr[j+1] = arr[j+1], arr[j]

# print(arr)

#! Insertion Sort

# arr = [1, 4, 6, 8, 3]
# n = len(arr)

# for i in range(0, n):
#     key = arr[i]
#     j = i-1
#     while j >= 0 and arr[j] > key:
#         arr[j+1] = arr[j]
#         j -= 1
#     arr[j+1] = key

# print(arr)

#! merge sort

# def merge(left, right):
#     result = []
#     i, j = 0, 0
#     m, n = len(left), len(right)

#     while i < m and j < n:
#         if left[i] < right[j]:
#             result.append(left[i])
#             i += 1
#         else:
#             result.append(right[j])
#             j += 1

#     if i < m:
#         while i < m:
#             result.append(left[i])
#             i += 1

#     if j < n:
#         while j < n:
#             result.append(right[j])
#             j += 1

#     return result


# def mergeSort(arr):
#     if len(arr) <= 1:
#         return arr
#     mid = len(arr) // 2
#     left = mergeSort(arr[:mid])
#     right = mergeSort(arr[mid:])
#     return merge(left, right)


# arr = [1, 4, 6, 8, 3]
# print(mergeSort(arr))


#! Quick Sort

def partition(arr, low, high):
    i = low - 1
    pivot = arr[high]
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[j], arr[i] = arr[i], arr[j]

    i += 1
    arr[high], arr[i] = arr[i], arr[high]
    return i


def quickSort(arr, low, high):
    if low < high:
        pivIdx = partition(arr, low, high)
        quickSort(arr, low, pivIdx-1)
        quickSort(arr, pivIdx+1, high)


arr = [1, 4, 6, 8, 0, 4, 3]
quickSort(arr, 0, len(arr)-1)
print(arr)
