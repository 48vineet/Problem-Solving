class Solution:
    def repeatedCharacter(self, s: str) -> str:
        arr = []
        for ch in s:
            if ch in arr:
                return ch
            else:
                arr.append(ch)
        
        