
class VisitorInterface {
    visit(node) { }
}

class TreeVisitor extends VisitorInterface {
    constructor(sum) {
        super();
        this.sum = sum;
    }
    visit(node) {
        this.sum = this.sum + node.value;
        if (node.children[0]) this.visit(node.children[0]);
        if (node.children[1]) this.visit(node.children[1]);
    }
}

class VisitableInterface {
    accept(visitor) { }
}

class TreeNode extends VisitableInterface {
    constructor(value) {
        super();
        this.value = value;
        this.children = [];
    }
    addChildren(children) {
        children.forEach(n => { 
            this.children.push(n); 
        })
    }
    accept(visitor) {
        return visitor.visit(this);
    }
}

class Client {

    // preOrderVisit(node, visitor) {
    //     if (node) {
    //         node.accept(visitor);
    //         this.preOrderVisit(node.children[0], visitor);
    //         this.preOrderVisit(node.children[1], visitor);
    //     }
    // }

    run(visitor) {
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

        let root = node8;

        visitor.visit(root);
        // this.preOrderVisit(root, visitor);
        
        return visitor.sum;
    }
}


const treeVisitor = new TreeVisitor(0);
const client = new Client();
console.log(client.run(treeVisitor));


