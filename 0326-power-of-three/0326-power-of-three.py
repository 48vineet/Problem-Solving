class Solution:
    def isPowerOfThree(self, n: int) -> bool:

        def recurse(num):
            if num == 1:
                return True
            elif num <= 0:
                return False

            num = num / 3

            return recurse(num)
        
        return recurse(n)