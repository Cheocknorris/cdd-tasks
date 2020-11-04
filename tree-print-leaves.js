class TreeNode {
    constructor(value) {
      this.value = value;
      // list of all the children
      this.children = [];
    }
    addChildren(children) {
      children.forEach(n => {
        this.children.push(n);
      })
    }
  }
  // Create a tree with the following nodes
  let node8 = new TreeNode(8);
  let node7 = new TreeNode(7);
  let node5 = new TreeNode(5);
  let node3 = new TreeNode(3);
  let node9 = new TreeNode(9);
  let node2 = new TreeNode(2);
  let node1 = new TreeNode(1);
  let node6 = new TreeNode(6);

  node8.addChildren([node7, node5]);
  node7.addChildren([node3, node9]);
  node5.addChildren([node2, node1]);
  node2.addChildren([node6]);

  // node8 is taken as the root of the tree, do what you want
  let root = node8;
//   console.log(root.children);

function printLeaves(node) {
    let count = node.value;
    for (let i = 0; i < node.children.length; i++) {
        let child = node.children[i];
        if (child.children.length > 0) {
            printLeaves(child);
        } else {
            console.log(child.value);
        }
    }
}

printLeaves(root);