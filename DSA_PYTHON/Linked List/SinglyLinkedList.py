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
