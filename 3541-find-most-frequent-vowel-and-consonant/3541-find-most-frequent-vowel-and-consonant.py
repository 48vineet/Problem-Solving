class Solution:
    def maxFreqSum(self, s: str) -> int:
        hash_table = {}

        for ch in s:
            hash_table[ch] = hash_table.get(ch , 0) + 1
        
        max_vowel = 0
        max_curr = 0
        
        for ch in s:
            if ch in ["a" , "e" , "i" , "o" , "u"]:
                vans = hash_table[ch]
                max_vowel = max(max_vowel , vans)
            else:
                ans = hash_table[ch]
                max_curr = max(ans , max_curr)

        return max_vowel + max_curr
        

