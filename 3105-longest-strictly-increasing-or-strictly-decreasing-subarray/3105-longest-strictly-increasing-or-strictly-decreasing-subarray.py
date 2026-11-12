class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:

        def asse(arr):
            maxi = 1
            count = 1

            for i in range(len(arr) - 1):
                if arr[i] < arr[i + 1]:
                    count += 1
                else:
                    maxi = max(maxi, count)
                    count = 1

            return max(maxi, count)

        def desc(arr):
            maxi = 1
            count = 1

            for i in range(len(arr) - 1):
                if arr[i] > arr[i + 1]:
                    count += 1
                else:
                    maxi = max(maxi, count)
                    count = 1

            return max(maxi, count)

        increase = asse(nums)
        decrease = desc(nums)

        return max(increase, decrease)