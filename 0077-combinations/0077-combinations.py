class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        ans = [ans for ans in range(1 , n+1)]
        res = []
        def backtrack(start ,subset):
            if len(subset) == k:
                res.append(subset.copy())
                return
            
            for i in range(start , len(ans)):
                subset.append(ans[i])
                backtrack(i + 1 , subset)
                subset.pop()


            
        backtrack(0 ,[])
        return res
        