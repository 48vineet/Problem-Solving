from collections import Counter
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        hashA = Counter(magazine)
        hashB = Counter(ransomNote)

        for ch in hashB:
            if hashB[ch] > hashA[ch]:
                return False
        return True
        