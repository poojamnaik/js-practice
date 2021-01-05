
modules.export =  class BST {
    constructor() {
        this.root = null
    }
    findRootNode() {
        return this.root;
    }

    findMinNode(){
            let currentNode = rootNode;
            while(currentNode.leftChild){
                currentNode = currentNode.leftChild;
            }
            return currentNode.val;
    }
    findAncestors(rootNode, k) {
        let currentNode = rootNode;
        if(rootNode.val === k) {
          return true;
        }
        const path = [];
        while(currentNode){
          if(currentNode.val ===k ) {
            break;
          }
          path.push(currentNode.val);
          currentNode = (currentNode.val > k) ? currentNode.left: currentNode.rightChild;
        }
      
        return path.length === 0 ? false : path.reverse();
      }

    findAncestorsUsingRecursion(rootNode, k) {
        var result = []
        recfindAncestors(rootNode, k, result)
        return result;
    }
    
    recfindAncestors(rootNode, k, result) {
        if (rootNode == null) {
            return false;
        } else if (rootNode.val == k) {
            return true;
        } else if ((recfindAncestors(rootNode.leftChild, k, result)) || (recfindAncestors(rootNode.rightChild, k, result))) {
            result.push(rootNode.val)
            return true;
        }
        return false;
    }

    findHeight(rootNode) { 
        if (rootNode === null) // no node in BST
            return 0;
        else if (rootNode.leftChild === null && rootNode.rightChild === null) //Base case, leaf nodes have 0 height
            return 0
        else {
            //Find Height of left subtree and then right subtree
            //Return greater height value of left or right subtree (plus 1)
            var leftHeight = findHeight(rootNode.leftChild)
            var rightHeight = findHeight(rootNode.rightChild)
            if (leftHeight > rightHeight)
                return leftHeight + 1
            else
                return rightHeight + 1
        }
    }


    findMinWithRecursion(rootNode) {
        let currentNode = rootNode;
        if(currentNode.leftChild) {
            return findMin(currentNode.leftChild);
        } else {
            return currentNode.val;
        }
    }

    findKthMax(k) {
        let level = 0 ;
        let currentNode = this.root;
        while(level < k ) {
            if(currentNode == null){
                break;
            }
            currentNode = currentNode.right;
            level++;
        }
        return currentNode;
    }

    insert(data) {
        if(this.root == null ){
         this.root(new Node(data));
        }
        insertNode(this.root, data);
        
    }

    insertNode(currentNode, data) {
        if(currentNode == null) {
            currentNode = new Node(data);
        }
        if(currentNode.data > data) { // 10 > 2
            //insert left
            currentNode.left = insertNode(currentNode.left, data); // leftNode, 2
        }
        else {
            // insert right
            currentNode.right = insertNode(currentNode.right, data); // leftNode, 2
        }
        return currentNode;

    }

    search(node, value) {
        if (node == null ) {
            return null;
        }
        if (node.data > value) {
           return  search(node.left, value);
        } else if (node.data < value) {
            return search(node.left, value);
        } else if (node.data === value) {
            return node;
        }
        return null;
    }

    delete(value) {
        // root delete
        // left child 

            // 15  6   8    20 3   7    10
    }

    deleteNode() {

    }

    inorder() {
        //if the currentNode IS NOT EQUAL to null
            if (currentNode!==null) {
                //make recursive call to the left subtree
                this.inOrderPrint(currentNode.leftChild);
                //print the value of the currentNode
                console.log(currentNode.val);
                //make recursive call to the right subtree
                this.inOrderPrint(currentNode.rightChild);
            }
        //if the currentNode IS EQUAL to null, then 
        //we simply return
    }

    postorder() {
        if (currentNode!==null) {
            //make recursive call to the left subtree
            this.postOrderPrint(currentNode.leftChild);
             //make recursive call to the right subtree
            this.postOrderPrint(currentNode.rightChild);
            //print its value
            console.log(currentNode.val);
        }

    }
    preorder() {
        if (currentNode!==null) {
            console.log(currentNode.val);
            this.preOrderPrint(currentNode.leftChild);
            this.preOrderPrint(currentNode.rightChild);
        }
    }

    insertWithoutRecursion(newValue) {
        if(this.root==null){
            this.root=new Node(newValue);
            return;
        }
        var currentNode = this.root;
        while (currentNode) {
            if (newValue < currentNode.val) {
                if(!currentNode.leftChild){
                    currentNode.leftChild = new Node(newValue);
                    break;
                }else{
                    currentNode = currentNode.leftChild
                }
            } else {
                 if(!currentNode.rightChild){
                    currentNode.rightChild = new Node(newValue);
                    break;
                }else{
                     currentNode = currentNode.rightChild
                }
            }
        }
    }
    
    // find all nodes at the distance k from root
    findKNodes(rootNode, k) {
        var result = [];
        findK(rootNode, k, result);
        return result;
    }
    
    //Helper recursive function to traverse tree and push all the nodes at "k" distance into "result" array
    findK(rootNode, k, result) {
        if (rootNode == null)
            return
        if (k == 0)
            result.push(rootNode.val)
        else {
            //Decrement k at each step till you reach at the leaf node
            //or when k == 0 then push the Node's data into result 
            findK(rootNode.leftChild, k - 1, result)
            findK(rootNode.rightChild, k - 1, result)
        }
    }
    
}