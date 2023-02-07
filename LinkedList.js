class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
    }
}
class LinkedList{
        rootNode = null;
        count = 0;
        addElement(value){
                if(this.rootNode == null){
                    this.rootNode= new Node(value)
                    this.count++;
                }else{
                    var temp = this.rootNode;
                    while(temp.nextNode != null){
                        temp = temp.nextNode;
                    }
                    temp.nextNode = new Node(value);
                }
            }
            addElem(index, value){
                var newNode = new Node(value);
                if(index === 0){
                    newNode.nextNode = this.rootNode;
                    this.rootNode = newNode;
                }else{
                    var current = this.rootNode;
                    var currentIndex = 0;
                    while(currentIndex < index-1){
                        current = current.nextNode;
                        currentIndex++;
                    }
                    newNode.nextNode = current.nextNode;
                    current.nextNode = newNode;
                }
                this.count++;
            }
            removeElem(index) {
                if (index === 0) {
                  this.rootNode = this.rootNode.nextNode;
                  this.count--;
                } else {
                  let current = this.rootNode;
                  let previous = null;
                  let i = 0;
                  while (current && i < index) {
                    previous = current;
                    current = current.nextNode;
                    i++;
                  }
                  if (current) {
                    previous.nextNode = current.nextNode;
                    this.count--;
                  }
                }
            }
       
            printElements()
        {
            var temp = this.rootNode;
            if(temp == null){
                console.log("Is empty!")
            }else{
            while(temp != null ){
                console.log(temp.data)
                temp = temp.nextNode;
            }
        }
    }  
}
var list = new LinkedList()
list.addElement(1);
list.addElement(2);
list.addElement(3);
list.addElem(2,1);
list.removeElem(0);
list.printElements();