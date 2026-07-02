class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        res = []
        def backtrack(index , subset):
            if index == len(nums):
                res.append(subset.copy())
                return
            subset.append(nums[index])
            backtrack(index + 1 , subset)
            subset.pop()
            backtrack(index + 1 , subset)
        
        backtrack(0 , [])
        res = [list(x) for x in set(tuple(sorted(x)) for x in res)]
        return res
        