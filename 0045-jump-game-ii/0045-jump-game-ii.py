class Solution:
    def jump(self, nums: List[int]) -> int:
        left = 0
        right = 0
        jump = 0
        n = len(nums)

        while right < n -1:
            far = 0
            for i in range(left , right+1):
                far = max(far , i + nums[i])
            
            left = right + 1
            right = far
            jump += 1
        
        return jump