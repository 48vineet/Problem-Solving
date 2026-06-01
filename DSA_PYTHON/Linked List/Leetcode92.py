# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:

        if left == right:
            return head

        temp1, temp2 = head, head
        count1, count2 = 1, 1

        before_left = None

        while count1 < left:
            before_left = temp1
            temp1 = temp1.next
            count1 += 1

        while count2 < right:
            temp2 = temp2.next
            count2 += 1

        after_right = temp2.next
        prev = after_right
        curr = temp1

        while curr != after_right:
            front = curr.next
            curr.next = prev
            prev = curr
            curr = front

        if before_left:
            before_left.next = prev
            return head

        return prev
