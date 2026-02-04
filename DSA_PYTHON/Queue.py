
# Ensure the length of the queue does not exceed 5

MAX = 5
Queue = []
f = -1
r = -1


def enqueue(x):
    global r
    if r == MAX - 1:
        print("Queue Overflow")
    else:
        if r == -1:
            r = 0
            r += r
            Queue[r] = x
            print("item added ", x)
            return


def dequeue():
    if f == -1 and f > r:
        print("Queue Overflow")
    else:

        item = Queue[f]
        f += 1
        print("item removed ", item)
        return item


enqueue(10)
