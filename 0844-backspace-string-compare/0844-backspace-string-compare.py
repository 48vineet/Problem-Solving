class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        stack1 = []
        stack2 = []
        for i in range(len(s)):
            if s[i] == "#":
                if stack1:
                    stack1.pop()
            else:
                stack1.append(s[i])
        ans1 = "".join(stack1)
        for i in range(len(t)):
            if t[i] == "#":
                if stack2:
                    stack2.pop()
            else:
                stack2.append(t[i])
        ans2 = "".join(stack2)
        return ans1 == ans2
        