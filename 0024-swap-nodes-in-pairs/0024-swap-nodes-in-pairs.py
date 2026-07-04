# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None or head.next is None:
            return head

        temp1 = head
        temp2 = head.next
        head = temp2
        temp1.next = temp2.next
        temp2.next = temp1

        safe = temp1

        while safe.next and safe.next.next:
            temp1 = safe.next
            temp2 = safe.next.next

            temp1.next = temp2.next
            temp2.next = temp1
            safe.next = temp2

            safe = temp1

        return head
