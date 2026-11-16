class Solution:
    def validPath(self, n: int, edges: list[list[int]], source: int, destination: int) -> bool:
        if source == destination:
            return True
        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)
        vis = set()
        def dfs(node):
            if node == destination:
                return True
            vis.add(node)
            for nei in adj[node]:
                if nei not in vis:
                    if dfs(nei):
                         return True
            return False
        return dfs(source)