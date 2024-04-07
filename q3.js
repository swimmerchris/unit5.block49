class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function countNodes(t) {
    const height = maxDepth(t)
    return 2 ** height - 1;
}

function maxDepth(node) {
    if (node == null) {
        return 0;
    }
    else {
        let leftDepth = maxDepth(node.left);
        let rightDepth = maxDepth(node.right);

        return Math.max(rightDepth, leftDepth) + 1
    }

}


let root = new TreeNode(10);
root.left = new TreeNode(11);
root.left.left = new TreeNode(13);
root.left.right = new TreeNode(14);
root.right = new TreeNode(12);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(16);

console.log(countNodes(root))