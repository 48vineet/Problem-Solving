class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


class SinglyLinkedList:
    def __init__(self) -> None:
        self.head = None

    def append(self, val):
        new_node = Node(val)
        if not self.head:
            self.head = new_node
        else:
            curr = self.head
            while curr.next is not None:
                curr = curr.next
            curr.next = new_node

    def traverse(self):
        if not self.head:
            print("Linked List Is Empty")
        else:
            curr = self.head
            while curr is not None:
                print(curr.val, end=" -> ")
                curr = curr.next
            print("None")

    def insert(self, val, pos):
        new_node = Node(val)
        if pos == 0:
            new_node.next = self.head
            self.head = new_node
        else:
            curr = self.head
            prev = None
            count = 0
            while curr is not None and count < pos:
                prev = curr
                curr = curr.next
                count += 1
            prev.next = new_node
            new_node.next = curr

    def delete(self, val):
        temp = self.head
        if temp.next is not None:
            if temp.val == val:
                self.head = temp.next
                del temp
                return
            else:
                found = False
                prev = None
                while temp is not None:
                    if temp.val == val:
                        found = True
                        break
                    prev = temp
                    temp = temp.next

                if found:
                    prev.next = temp.next
                    del temp
                    return
                else:
                    print("Val Doesnt Exist")


node1 = SinglyLinkedList()
node1.append(5)
node1.append(7)
node1.append(8)
node1.append(9)
node1.append(2)
node1.append(5)
node1.traverse()
node1.insert(10, 5)
node1.traverse()
node1.delete(9)
node1.traverse()
