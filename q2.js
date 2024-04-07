class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isSameTree(t1, t2) {
    if (t1 == null && t2 == null) {
        return true;
    }
    // console.log(t1, t2)
    if (t1 != null && t2 != null) {
        // console.log("hit", t1.value, t2.value)
        return (t1.value == t2.value && isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right));
    }
    return false;
}


let tree1 = new Node(1)
tree1.left = new Node(2);
tree1.right = new Node(3);

let tree2 = new Node(1)
tree2.left = new Node(2)
tree2.right = new Node(3)

console.log(isSameTree(tree1, tree2))

let tree3 = new Node(3)
tree3.left = new Node(2)
tree3.right = new Node(3)

console.log(isSameTree(tree1, tree3))