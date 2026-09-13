class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        result = []
        
        while columnNumber > 0:
            columnNumber -= 1 
            remainder = columnNumber % 26
            letter = chr(65 + remainder)
            result.append(letter)
            columnNumber //= 26
        
        return ''.join(reversed(result))
