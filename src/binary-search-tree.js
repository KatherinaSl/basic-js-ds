const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode
  }

  add(data) {
    let node = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = node;
    } else {
      let next = this.rootNode;
      while (true) {
        if (node.data < next.data) {
          if (!next.left) {
            next.left = node;
            break;
          } else {
            next = next.left;
          }
        } else if (node.data > next.data) {
          if (!next.right) {
            next.right = node;
            break;
          } else {
            next = next.right;
          }
        } else if (node.data === next.data) {
          break;
        }
      }
    }
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
    let next = this.rootNode;
    while (next !== null) {
      if (data < next.data) {
        next = next.left;
      } else if (data > next.data) {
        next = next.right;
      } else if (data === next.data) {
        break;
      }
    }
    return next
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data)
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else { //data === node.data
      if (!node.left && !node.right) {
        return null;
      } 
      if(!node.right && node.left) {
        return node.left;
      }
      if(!node.left && node.right) {
        return node.right;
      }
      let minRightChildNode = this.minNode(node.right);
      node.data = minRightChildNode.data;

      node.right = this.removeNode(node.right, minRightChildNode.data)
      return node;
    }
  }

  min() {
    let minNode = this.minNode(this.rootNode);
    return !minNode ? null : minNode.data;
  }

  minNode(node) {
    if (!node) {
      return node;
    } else {
      let next = node;
      while (next.left) {
        next = next.left;
      }
      return next;
    }
  }

  max() {
    if (!this.rootNode) {
      return this.rootNode;
    } else {
      let next = this.rootNode;
      while (next.right) {
        next = next.right;
      }
      return next.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};