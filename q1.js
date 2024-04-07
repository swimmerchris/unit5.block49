class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
function inOrder(value) {
    let stack = [];
    let currentNode = root;

    while (currentNode || stack.length > 0) {
        while (currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left;
            // console.log(currentNode)
        }
        // console.log(stack)
        const node = stack.pop();
        console.log(node.value);
        // console.log(node)
        currentNode = node.right;
        // console.log(currentNode, "Stack Length: ", stack.length)
    }
}


let root = new BinarySearchTree(1);
root.left = new BinarySearchTree(2);
root.right = new BinarySearchTree(3);
root.left.left = new BinarySearchTree(4);
root.left.right = new BinarySearchTree(5);
// console.log(typeof root, root)
inOrder(root)