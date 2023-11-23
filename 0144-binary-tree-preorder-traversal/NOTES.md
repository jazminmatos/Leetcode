# ​Preorder Traversal: Root-Left-Right

## Recursive Steps

Preorder(root):

1. Follow step 2 to 4 until root != NULL
2. Write root -> data
3. Preorder (root -> left)
4. Preorder (root -> right)
5. End loop

## Iterative Steps

1. Initialize stack with root
2. While stack is not empty
3. Remove last item from stack and set it to current node
4. Add current node's value to result array
5. If current's right leaf node exists, push to stack
6. Repeat #5 for current's left leaf node
7. Return result

## Notes

Always check if tree is empty by having a base case when root === null.
