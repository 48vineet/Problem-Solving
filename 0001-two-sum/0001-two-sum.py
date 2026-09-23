class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        hashSet = {}
        for i in range(0, len(nums)):
            complement = target - nums[i]
            if complement in hashSet:
                return [hashSet[complement], i]
            hashSet[nums[i]] = i