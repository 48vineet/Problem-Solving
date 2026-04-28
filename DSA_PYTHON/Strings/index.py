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


class Solution:
    def largestOddNumber(self, num: str) -> str:
        for i in range(len(num) - 1, -1, -1):
            if int(num[i]) % 2 == 1:
                return num[:i+1]
        return ""


class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        mapST = {}
        mapTS = {}

        for i in range(len(s)):
            c1 = s[i]
            c2 = t[i]

            # check s → t
            if c1 in mapST:
                if mapST[c1] != c2:
                    return False

            # check t → s
            if c2 in mapTS:
                if mapTS[c2] != c1:
                    return False

            # store mapping
            mapST[c1] = c2
            mapTS[c2] = c1

        return True