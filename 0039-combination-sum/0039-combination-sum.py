class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res= []
        def backtrack(index ,Sum , subset):
            if Sum == target:
                res.append(subset.copy())
                return
            elif Sum > target:
                return
            elif index == len(candidates):
                return 
            
            subset.append(candidates[index])
            ans = Sum + candidates[index]
            backtrack(index , ans , subset)
            subset.pop()
             
            backtrack(index + 1 , Sum , subset)
        
        backtrack(0 , 0 , [])
        return res


        
        