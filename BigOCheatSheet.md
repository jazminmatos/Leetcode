# Big O Cheat Sheet:

## Big Os

| Big O            | Time        | Description                                                                                |
| ---------------- | ----------- | ------------------------------------------------------------------------------------------ |
| O(1)             | Constant    | no loops                                                                                   |
| O(log N)         | Logarithmic | usually searching algorithms have log n if they are sorted (Binary Search)                 |
| O(n)             | Linear      | for loops, while loops through n items                                                     |
| O(n log(n))      | Log Linear  | usually sorting operations                                                                 |
| O(n<sup>2</sup>) | Quadratic   | every element in a collection needs to be compared to ever other element. Two nested loops |
| O(2<sup>n</sup>) | Exponential | recursive algorithms that solves a problem of size N                                       |
| O(n!)            | Factorial   | you are adding a loop for every element                                                    |

> Iterating through half a collection is still O(n).

> Two separate collections: O(a \* b).

## Rule Book

1. Always worst case
2. Remove constants
3. Different inputs should have different variables.
   - Example: O(a + b) - two for loops using different inputs
     - \+ for steps in order
   - Example: O(a \* b) - two nested for loops using different inputs
     - \* for nested steps
4. Drop non-dominant terms

## What can cause time in a function?

- Operations (+, -, \*, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

## What causes Space Complexity?

- Variables
- Data Structures
- Function Call
- Allocations
