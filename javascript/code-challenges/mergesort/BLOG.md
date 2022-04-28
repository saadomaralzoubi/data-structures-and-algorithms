# Trace

Sample array: [8,4,23,42,16,15]

![](./1.png)

pass 1: On the first step, arr.length = 6, mid = 3, left = [8,4,23] ,right = [42,16,15]. And the recursive function will run for the left array, which arr.length = 3, mid = 1, left = [8] ,right = [4,23], then the recursive function for the left will evaluate to false, and will run for the right array, which has arr.length = 2,mid = 1, left = [4],right = [23], and here we done the dividing for the first half it'll run the first merge for (left,right,arr) as ([4],[23],[4,23]), which will return [4,23], then the second merge for (left,right,arr ) as ([8],[4,23],[8,4,23] ), return [4,8,23], and the first left is done.

pass 2: the mergeSort function will run for the right array [42,16,15], which has arr.length = 3,mid= 1, left = [42], right = [16,15], then the recursive function for the left array will evaluate to false, and will run for the right array, which has arr.length = 2,mid = 1, left = [16],right = [15], and the dividing for the second half is done, now run the first merge for (left,right,arr) as ([16],[15],[16,15]), return [15,16], then the second merge for (left,right,arr) as ([42],[15,16],[42,16,15]) return [15,16,42], and the first right is done.

pass 3: now the final merge, which has the values [4,8,23],[15,16,42],[8,4,23,42,16,15] will return [4,8,15,16,23,42] .
