class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
let maxDepth = -1;
let bottomLeftValue = 0;

function searchBottomleftValue(node, cDepth = 0) {
    if (node == null) {
        return 0;
    }
    if (cDepth > maxDepth) {
        maxDepth = cDepth;
        bottomLeftValue = node.value;
    }

    searchBottomleftValue(node.left, cDepth + 1);
    searchBottomleftValue(node.right, cDepth + 1);

}


let root = new TreeNode(2);
root.left = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.left.left = new TreeNode(6);
searchBottomleftValue(root)
console.log(bottomLeftValue)