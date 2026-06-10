class Solution:
    def decToBinary(self, n):

        res = ""
        while n > 0:
            if n % 2 == 1:
                res += "1"
            else:
                res += "0"

            n = n // 2

        return res[::-1]

#User function Template for python3

class Solution:
	def binaryToDecimal(self, b):
	    dec = 0
	    power = 0
	    length = len(b) - 1

	    while length >= 0:
	        num = int(b[length]) * (2 ** power)
	        dec += num
	        length -= 1
	        power += 1

	    return dec

class Solution:
    def minBitFlips(self, start: int, goal: int) -> int:
        ans = start ^ goal
        count = 0
        for i in range(0 , 32):
            if ans & (1 << i) != 0:
                count += 1

        return count

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        subset = 2 ** n
        result = []
        for num in range(0 , subset):
            lst = []
            for i in range(0 , n):
                if num & (1 << i) != 0:
                    lst.append(nums[i])

            result.append(lst)

        return result
