## **Tree:**

Trees consist of vertices (nodes) and edges that connect them. trees are **hierarchical**. They are similar to Graphs, except that a **cycle** cannot exist in a Tree - they are **acyclic**. In other words, there is always exactly one path between any two nodes.

- **Root Node**: A node with no parent nodes. Generally, trees don’t *have* to have a root. However, **rooted trees** have one distinguished node and are largely what we will use in this course.
- **Child Node**: A node linked to an upper node (*Parent Node*)
- **Parent Nodes**: A node that has links to one or more *Child Node*
- **Sibling Node**: Nodes that share the same *Parent Node*
- **Leaf Node**: A node that doesn’t have any *Child Node*
- **Ancestor Nodes**: The nodes on the path from a node *d* to the root node. Ancestor nodes include node *d*’s parents, grandparents, and so on.
- **Sub-tree: For a particular non-leaf node, a collection of nodes, essentially the tree, starting from its child node. The tree formed by a node and its descendants.**
- **Degree of a node: Total number of children of a node**
- **Length of a path: The number of edges in a path**
- **Depth of a node *n*: The length of the path from a node *n* to the root node. The depth of the root node is 0.**
- **Level of a node *n*: (Depth of a Node)+1**
- **Height of a node *n*: The length of the path from *n* to its deepest descendant. The height of the tree itself is the height of the root node, and the height of leaf nodes is always 0.**
- **Height of a Tree: Height of its root node**

depth

> level | degree

height

## Why Tree?

    1. Store DS which naurally forms hierarchy
    2. Moderate access and search
    3. Moderate insertion/deletion
    4. Don’t have an upper limit on number of node ??   
    
    Commonly used in :
    1. Hierarchical Data
    2. Seraching using traversals
    3. Manipulate sorted list
    4. Router algorithms
    5. Form of multi-stage decision making

Some of the types:

- Binary tree
- Binary Search Tree
- AVL
- Skewed Tree
- Red-Black trees
- 2-3 trees

 **The maximum number of nodes at level ‘l’ of a binary tree is 2l.**

 **The Maximum number of nodes in a binary tree of height ‘h’ is 2h – 1.** 

 **In a Binary Tree with N nodes, minimum possible height or the minimum number of levels is? Log2(N+1)** 

 **A Binary Tree with L leaves has at least? Log2L? + 1   levels**

 **In Binary tree where every node has 0 or 2 children, the number of leaf nodes is always one more than nodes with two children.**


## **Balanced Tree**

    |Height(LeftSubTree) - Height(RightSubTree) |<= 1∣Height(LeftSubTree)−Height(RightSubTree)∣<=1

## **Complete Binary Tree**

    All the levels are completely filled except possibly the last one
    Practical example of Complete Binary Tree is Binary Heap. 

- The total number of nodes in a complete binary tree of height “h” : **2^h ≤ total number of nodes ≤ 2^(h+1)-1.**
- max number of nodes at each level : **2^0+2^1+2^3+2^4+...+2^*r* =2^(*r*+1)−1.** 
- The total number of non-leaf nodes (*n*) in a complete binary tree of height **“h”** are expressed as:**⌊2^(*h*−1)⌋ ≤ *n* ≤ 2^(*h*−1)**
- The total number of leaf-nodes (*n*) in a complete binary tree of height **“h”** is expressed as:**2^(*h*−1) ≤ *n* ≤ 2^*h***
- The nodes are present in between the range of:**2^*h* < *Nodes* < 2^(*h*+1)−1**


## **Full Binary Tree (Proper Binary Tree)**

    Every node has 0 or 2 children. No node can have 1 child.

- **2*h+1* < total number of n*odes* < 2^(*h*+1)−1**
- In a Full Binary Tree, number of leaf nodes is the number of internal nodes plus 1 , **L = I + 1** 

## **Perfect Binary Tree**

    A Binary Tree is said to be perfect if it is both full and complete.

- The total number of nodes in a perfect binary tree of height **‘h’**, is given as: **2^(*h*+1)−1**
- The total number of leaf nodes are given as **2^*h*** *or* **(*n*+1)/2**

## **Skewed Binary Tree**

    Binary trees where all the nodes except one have one and only one child.
    All of the children nodes are either left or right child nodes, so the entire tree is positioned to the left or the right side.
    To be avoided at all costs because the time complexity of most operations will be high.
**Types:**
    
- Left-Skewed Binary Tree and Right-Skewed Binary Tree

## **Binary Search Tree**

    Each node of the tree has key-value pairs.

- ***NodeValues(left subtree of Node n) << Node Value of Node n << NodeValues(right subtree of Node n)***

> ### Methods

**insert(data)**
***insertNode(node, data)***

**remove(data)**
***removeNode(node, data)***

**delete(Node)** -
***Deleting the leaf node |
Deleting a node with one child  |
Deleting a node with two children***

**inorder(node)** - ***With recursion
Without recursion | 
Without recursion or stack***

**preorder(node)**

**postorder(node)**

**getRootNode()**

**search(data)**

> ### Other Questions

**findMaxNode(node)**
**findMinNode(node)**
**findKthMax(root,k)**
**findKthMin(root,k)**
**printLeftView()**
**printRightView()**

> ### Tree Traversals :
    
Complexity for all 4 travesing is O(n) - as all of the needs to be visited once

**Bread First Traversals (Or Level Order Traversal)**

**Depth First Traversals:**
(a) Inorder (Left, Root, Right) : 4 2 5 1 3 gives nodes in non-decreasing order
(b) Preorder (Root, Left, Right) : 1 2 4 5 3  prefix expression on of an expression tree.
(c) Postorder (Left, Right, Root) : 4 5 2 3 1


## **Links**
- [Handshaking Lemma and Interesting Tree Properties ](https://www.geeksforgeeks.org/handshaking-lemma-and-interesting-tree-properties/?ref=rp )
- https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/?ref=lbp


hash
Trie
Graph
