
#! Print 10 using recursion

# def rec(n, x):
#     if x == 1:
#         return n
#     print(n)
#     return rec(n, x-1)


# print(rec(10, 5))

#! Prit n to 5 using recursion

# def func(n, x):
#     if n > x:
#         return
#     print(n)
#     return func(n+1, x)


# func(1, 10)

#! Sum 1 to n

def func(summ, i, n):
    if i > n:
        print(summ)
        return
    func(summ+i, i+1, n)


func(0, 1, 10)
