class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        col = set()
        ld = set()
        rd = set()

        res = []
        board = [["."] * n for i in range(n)]
        
        def backtrack(r):
            if r == n:
                copy = ["".join(row) for row in board]
                res.append(copy)
            
            for c in range(n):
                if c in col or (r - c) in ld or (r + c) in rd:
                    continue
                
                col.add(c)
                ld.add(r - c)
                rd.add(r + c)

                board[r][c] = "Q"

                backtrack(r + 1)
                
                col.remove(c)
                ld.remove(r - c)
                rd.remove(r + c)

                board[r][c] = "."
        
        backtrack(0)
        return res




        