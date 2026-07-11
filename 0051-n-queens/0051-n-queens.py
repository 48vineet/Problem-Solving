class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        cs=set()
        rd=set()
        ld=set()
        res=[]
        b=[["."]*n for _ in range(n)]
        def ba(r):
            if r == n:
                res.append(["".join(row) for row in b])
                return
            for c in range(n):
                if c in cs or (r+c) in rd or (r-c) in ld:
                    continue
                cs.add(c)
                rd.add(r+c)
                ld.add(r-c)
                b[r][c] = "Q"
                ba(r+1)
                cs.remove(c)
                rd.remove(r+c)
                ld.remove(r-c)
                b[r][c] = "."
        ba(0)
        return res
