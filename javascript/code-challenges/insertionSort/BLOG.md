# Trace

Sample array: [8,4,23,42,16,15]

step 1: On the first iteration, i = 1, j = 0 and temp = array[i] = 4 , we check between the first element and the second element 8 and 4 if the second element is less than the first element it's true, the second element will be in place of the first element. The array is [4, 8, 23, 42, 16, 15]

step 2:
On the second iteration i = 2, j = 1 and temp = array[i] = 23
we check between the second element and the third element 8 and 23 evaluates to false, so nothing changes. The array is [4, 8, 23, 42, 16, 15].

step 3: On the third iteration i = 3, j = 2 and temp = array[i] = 42 .we check between the third element and the fourth element 23 and 42 It evaluates to false, so nothing changes. The array is [4, 8, 23, 42, 16, 15].

step 4: On the fourth iteration i = 4, j = 3 and temp = array[i] = 16. we check between the fourth element and the fifth element 420 and 16 evaluates to true. the array [4, 8, 16, 23, 42, 15].

step 5: check for each element if it's smaller move it before.
