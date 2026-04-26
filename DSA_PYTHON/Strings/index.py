class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        result = ""
        count = 0
        for ch in s:
            if ch == "(":
                count += 1
                if count > 1:
                    result += ch
            else:
                count -= 1
                if count > 0:
                    result += ch
        return result


s = "    the sky is blue   "
a = s.strip().split()

ans = a.reverse()
result = " ".join(ans)

print(result)


class Solution:
    def reverseWords(self, s: str) -> str:
        a = s.strip().split()
        a.reverse()

        result = " ".join(a)
        return result


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        result = ""
        base = strs[0]
        if len(strs) == 0:
            return ""

        for i in range(0, len(base)):
            for ch in strs[1:]:
                if i == len(ch) or ch[i] != base[i]:
                    return result
            result += base[i]

        return result
