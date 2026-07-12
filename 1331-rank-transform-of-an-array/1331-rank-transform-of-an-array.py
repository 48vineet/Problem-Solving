class Solution:
    def arrayRankTransform(self, arr):

        sorted_unique = sorted(set(arr))
        rank_map = {}

        rank = 1
        for val in sorted_unique:
            rank_map[val] = rank
            rank += 1
            
        res = []
        for num in arr:
            res.append(rank_map[num])
        
        return res
