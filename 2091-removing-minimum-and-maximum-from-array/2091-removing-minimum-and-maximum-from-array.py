class Solution:
    def minimumDeletions(self, nums: List[int]) -> int:
        n = len(nums)
        mini = nums.index(min(nums))
        maxi = nums.index(max(nums))

        if mini > maxi:
            mini, maxi = maxi, mini

        front = maxi + 1
        back = n - mini
        mix = (mini + 1) + (n - maxi)

        return min(front, back, mix)
