class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        candidates.sort()
        def solve(index , Sum , subset):
            if Sum == target:
                res.append(subset.copy())
                return
            elif Sum > target:
                return
            elif index == len(candidates):
                return
            
            for i in range(index , len(candidates)):
                if i > index and candidates[i] == candidates[i - 1]:
                    continue
            
                subset.append(candidates[i])
                solve(i + 1 , Sum + candidates[i] , subset )
                subset.pop()
 
        
        solve(0 , 0 , [])
        return res

        