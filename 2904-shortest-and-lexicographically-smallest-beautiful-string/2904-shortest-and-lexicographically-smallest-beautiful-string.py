class Solution:
    def shortestBeautifulSubstring(self, s: str, k: int) -> str:
        arr = []
        for i in range(len(s)):
            res = []
            ones = 0
            for j in range(i, len(s)):
                res.append(s[j])
                if s[j] == "1":
                    ones += 1
                if ones == k:
                    arr.append("".join(res))
                    break   

        if not arr:
            return ""

        min_len = min(len(x) for x in arr)
        candidates = [x for x in arr if len(x) == min_len]
        return min(candidates)
