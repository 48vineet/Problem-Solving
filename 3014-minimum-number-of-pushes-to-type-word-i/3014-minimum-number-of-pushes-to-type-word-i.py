class Solution:
    def minimumPushes(self, word: str) -> int:
        unique_chars = len(set(word))
        pushes = 0
        cost = 1

        while unique_chars > 0:
            take = min(8, unique_chars) 
            pushes += take * cost
            unique_chars -= take
            cost += 1

        return pushes
