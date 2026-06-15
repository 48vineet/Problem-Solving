# class Solution:
#     def subsets(self, nums: List[int]) -> List[List[int]]:
#         result = []

#         def backtrack(index, subset):
#             if index == len(nums):
#                 result.append(subset.copy())
#                 return
#             subset.append(nums[index])
#             backtrack(index+1, subset)
#             subset.pop()
#             backtrack(index+1, subset)

#         backtrack(0, [])
#         return result

# def subsets(nums, target):
#     result = []

#     def backtrack(index, subset):
#         if index == len(nums):
#             if sum(subset) == target:
#                 result.append(subset.copy())
#                 return
#             return
#         subset.append(nums[index])
#         backtrack(index+1, subset)
#         subset.pop()
#         backtrack(index+1, subset)

#     backtrack(0, [])
#     return result


# print(subsets([1, 2, 3, 4, 5, 6, 7], 10))

# def sumSequence(arr, target):
#     result = []

#     def solve(index, summ, subset):
#         if summ == target:
#             result.append(subset.copy())
#             return
#         elif summ > target:
#             return
#         elif index >= len(arr):
#             return

#         subset.append(arr[index])

#         solve(index + 1, summ + arr[index], subset)
#         subset.pop()

#         solve(index + 1, summ, subset)

#     solve(0, 0, [])
#     return result


# print(sumSequence([1, 2, 3, 4, 5, 6, 7], 10))


#! Generate subsequence of each number

# def Subsequence(nums):
#     result = []

#     def solve(index, subset):
#         if index == len(nums):
#             result.append(subset.copy())
#             return
#         subset.append(nums[index])
#         solve(index + 1, subset)
#         subset.pop()
#         solve(index + 1, subset)

#     solve(0, [])
#     return result


# print(Subsequence([1, 2, 3]))


# def SumOfSequence(nums, target):
#     result = []

#     def solve(index, subset, Sum):
#         if Sum == target:
#             result.append(subset.copy())
#             return
#         elif index >= len(nums):
#             return
#         elif Sum > target:
#             return
#         subset.append(nums[index])
#         solve(index + 1, subset, Sum + nums[index])
#         subset.pop()
#         solve(index + 1, subset, Sum)

#     solve(0, [], 0)
#     return result


# print(SumOfSequence([1, 2, 3, 4, 5, 6], 8))
