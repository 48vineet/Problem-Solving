
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

# def func(summ, i, n):
#     if i > n:
#         print(summ)
#         return
#     func(summ+i, i+1, n)


# func(0, 1, 10)

#! sum 1 to n by maths

# def func(ft, lt):
#     n = lt
#     theSum = n / 2 * (ft + lt)
#     print(theSum)


# func(1, 10)

#! factorial by recursion
# fact = 1


# def func(num):
#     global fact
#     if num == 0:
#         print(fact)
#         return 1
#     fact *= num
#     return func(num - 1)

# func(4)

#! reverse arr no using recursion

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]


def func(arr, l, r):
    if l >= r:
        print(arr)
        return
    arr[l], arr[r] = arr[r], arr[l]
    func(arr, l+1, r-1)


func(arr, 0, len(arr)-1)
