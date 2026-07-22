class Solution:
    def findNthDigit(self, n: int) -> int:
        length = 1   # digit length
        count = 9    # count of numbers with 'length' digits
        start = 1    # starting number of this range
        
        # Step 1: find the range
        while n > length * count:
            n -= length * count
            length += 1
            count *= 10
            start *= 10
        
        # Step 2: find the exact number
        num = start + (n - 1) // length
        
        # Step 3: find the digit inside the number
        digit_index = (n - 1) % length
        return int(str(num)[digit_index])
