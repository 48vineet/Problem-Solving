class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        w1 = list(word1)
        w2 = list(word2)

        res = []
        i = 0 
        j = 0
        while i != len(w1) and j != len(w2):
            res.append(w1[i])
            i += 1

            res.append(w2[j])
            j += 1
        
        while i != len(w1):
            res.append((w1[i]))
            i += 1
        
        while j != len(w2):
            res.append(w2[j])
            j += 1
        
        
        ans = "".join(res)
        return ans


         
      
        