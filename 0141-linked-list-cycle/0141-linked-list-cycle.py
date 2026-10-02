# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        arr = set()
        temp = head

        if not temp:
            return False

        while temp is None or temp.next is not None:
            if temp in arr:
                return True
            else:
                arr.add(temp)
                temp = temp.next
        
        return False


