class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


class SinglylinkedList:
    def __init__(self) -> None:
        self.head = None

    def append(self, val):
        new_node = Node(val)

        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next is not None:
                current = current.next
            current.next = new_node

    def traverse(self):
        if not self.head:
            print('SLL Is Empty')
        else:
            current = self.head
            while current is not None:
                print(current.val, end=" ")
                current = current.next


sll = SinglylinkedList()
sll.append(1)
sll.append(12)
sll.append(31)
sll.append(12)
sll.append(111)
sll.append(10)
sll.traverse()
