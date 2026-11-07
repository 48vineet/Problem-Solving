from copy import deepcopy

class Solution:
    def floodFill(self, image: list[list[int]], sr: int, sc: int, color: int) -> list[list[int]]:
        
        def dfs(i , j , new_color ,vis, inital_color , r , c ):
            if i < 0 or i >= r or j < 0 or j >= c:
                return
            
            if vis[i][j] != inital_color:
                return
            
            if vis[i][j] == new_color:
                return
            
            vis[i][j] = new_color
            dfs(i+1, j, new_color, vis, inital_color, r, c)
            dfs(i-1, j, new_color, vis, inital_color, r, c)
            dfs(i, j+1, new_color, vis, inital_color, r, c)
            dfs(i, j-1, new_color, vis, inital_color, r, c)

        if image[sr][sc] == color:
            return image
        
        vis = deepcopy(image)
        r, c = len(vis), len(vis[0])
        i_c = vis[sr][sc]
        dfs(sr , sc , color , vis , i_c , r , c)
        return vis