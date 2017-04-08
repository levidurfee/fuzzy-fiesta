class BinaryNode {
	constructor(value) {
		this.value = value;
	}
}

class BinaryTree {
	insert(value) {
		let node = this.root;
		if(!node) {
			return this.root = new BinaryNode(value);
		}

		while(node) {
			if(value > node.value) {
				if(node.right) {
					node = node.right;
				} else {
					node = node.right = new BinaryNode(value);
					break;
				}
			} else if(value < node.value) {
				if(node.left) {
					node = node.left;
				} else {
					node = node.left = new BinaryNode(value);
				}
			} else {
				break;
			}
		}
		return node;
	}
}

let binaryTree = new BinaryTree;
binaryTree.insert(50);
binaryTree.insert(40);
binaryTree.insert(60);
binaryTree.insert(19);
binaryTree.insert(20);
console.log(binaryTree);
