class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        res = []

        def solve(idx , subset):
            if sum(subset) == n and len(subset) == k:
                res.append(subset.copy())
                return
                
            if idx <= 9:

                subset.append(idx)
                solve(idx+1 , subset)
                subset.pop()
                solve(idx + 1 , subset)
            return
        
        solve(1 , [])
        return res

