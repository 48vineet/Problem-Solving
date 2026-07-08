class Solution:
    def sumAndMultiply(self, n: int) -> int:
        n = str(n)
        curr_sum = 0
        s = ""

        if int(n) == 0:
            return 0
        
        for i in range(0, len(n)):
            if n[i] == "0":
                continue
            
            curr_sum += int(n[i])
            s += n[i]

        return int(s) * curr_sum