class Solution:
    def findComplement(self, num: int) -> int:
        mask = (1 << (len(bin(num)) - 2)) - 1 
        return ~num & mask
