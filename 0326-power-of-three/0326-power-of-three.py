class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        def recurse(ans):
            if ans == 1:
                return True
            elif ans <= 0:
                return False
            
            ans = ans / 3
            return recurse(ans)
        
        return recurse(n)


        
        