class Node{
    constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
      this.root = null;
    }


    insert(val){
      var newNode = new Node(val);
      if(this.root === null){
        tree.root = newNode;
        return this;
      }
      else{
        var current = this.root;
        while(true){
          if(val < current.value){
            if(current.left==null){
              current.left = newNode;
              return this;
            }
            else{
            current = current.left;
            }
          }
          else if(val > current.value){
            if(current.right ===null){
              current.right = newNode;
              return this;
            }
            else{
              current = current.right;
            }
           }
        }
      }
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
