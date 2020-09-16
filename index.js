/*
----------------------------------------------------------
WITHOUT CLASSES
----------------------------------------------------------
*/

function inOrder(node) {
  if(node.left){
    inOrder(node.left)
  }
  console.log(node.data)
  if(node.right){
    inOrder(node.right)
  }
}

function findOrAdd(currentNode, newNode) {
  if (newNode.data === currentNode.data){
    return true;
  }
  else if (newNode.data < currentNode.data){
    if (currentNode.left){
      return findOrAdd(currentNode.left, newNode)
    } else {
      return currentNode.left = newNode;
    }
  }
  else if (newNode.data > currentNode.data){
    if(currentNode.right){
      return findOrAdd(currentNode.right, newNode);
    } else {
      return currentNode.right = newNode;
    }
  }
}

function max(node) {
  if(node.right){
    return max(node.right);
  } else {
    return node;
  }
}

function min(node) {
  if(node.left){
    return max(node.left);
  } else {
    return node;
  }
}



/*
----------------------------------
with CLASSES
----------------------------------

class Node {
  constructor(data, right = null, left = null) {
    this.data = data;
    this.right = right;
    this.left = left;
  }
}

class Tree {
  constructor() {
    this.root = null;
    // this.nodeCount = 0;
  }

  inOrder(node = this.root){
    if (node === null){
      return true;
    }
    if (node.left){
      this.inOrder(node.left);
    }
    console.log(node.data)
    if (node.right){
      this.inOrder(node.right);
    }
  }

  findOrAdd(node = this.root, value){
    if (this.root === null){
      return this.root.data = value;
    } else if (node.data === value){
      return true;
    } else if (value < node.data){
      if (node.left) {
        return this.findOrAdd(node, value);
      } else {
        return node.left.data = value;
      }
    } else if (value > node.data){
      if(node.right){
        return this.findOrAdd(node, value);
      } else {
        return node.right.data = value;
      }
    }
  }

  max(node = this.root){
    if (node.right){
      return this.max(node.right)
    } else {
      return node.data;
    }
  }

  min(node = this.root){
    if (node.left){
      return this.max(node.left)
    } else {
      return node.data;
    }
  }
}
*/
