class Solution:
    def addDigits(self, num: int) -> int:
        def func(n):
            res = 0
            while n > 0:
                ans = n % 10
                res += ans
                n = n // 10

            if res < 10:
                return res
            else:
                return func(res)
        
        return func(num)

        