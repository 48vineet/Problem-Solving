class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        hashSet = {}

        for i in range(0 , len(nums)):
            hashSet[nums[i]] = i

        for i in range(0 , len(nums)):
           ans = target - nums[i]
           if ans  in hashSet and hashSet[ans] != i:
                return [ i , hashSet[ans]]