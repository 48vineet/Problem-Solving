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
