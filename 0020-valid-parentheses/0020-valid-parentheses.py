class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for ch in s:
            if ch == "(" or ch == "[" or ch == "{":
                stack.append(ch)
            else:
                if len(stack) == 0:
                    return False
                
                ans = stack.pop()
                if (ch == ")" and ans != "(") or (ch == "]" and ans != "[") or (ch == "}" and ans != "{"):
                    return False
        
        return len(stack) == 0
