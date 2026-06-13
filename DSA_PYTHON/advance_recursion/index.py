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

def subsets(nums, target):
    result = []

    def backtrack(index, subset):
        if index == len(nums):
            if sum(subset) == target:
                result.append(subset.copy())
                return
            return
        subset.append(nums[index])
        backtrack(index+1, subset)
        subset.pop()
        backtrack(index+1, subset)

    backtrack(0, [])
    return result


print(subsets([1, 2, 3, 4, 5, 6, 7], 10))
