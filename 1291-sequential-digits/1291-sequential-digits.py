class Solution:
    def sequentialDigits(self, low: int, high: int) -> List[int]: 
        res = []

        for i in range(1 , 10):
            n = str(i)
            for j in range(i+1 , 10):
                n += str(j)
                if int(n) >= low and int(n) <= high:
                    res.append(int(n))
                else:
                    continue
        
        return sorted(res)