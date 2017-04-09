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

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
for(let i=0; i<primes.length; i++) {
	binaryTree.insert(primes[i]);
}
console.log(binaryTree);
