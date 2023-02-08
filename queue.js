class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
    }
}
class Queue{
        rootNode = null;
        count = 0;
        enqueue(value){
                if(this.rootNode == null){
                    this.rootNode= new Node(value)
                    this.count++;
                }else{
                    let temp = this.rootNode;
                    while(temp.nextNode != null){
                        temp = temp.nextNode;
                    }
                    temp.nextNode = new Node(value);
                }
            }
            dequeue(){
                if(this.rootNode == null){
                  console.log("Queue is empty")
                  return null;
                }else{
                  let value = this.rootNode.data;
                  this.rootNode = this.rootNode.nextNode;
                  this.count--;
                  return value;
                }
              }
              
            printElements(){
                let temp = this.rootNode;
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
    let list = new Queue()
    list.enqueue(1);
    list.enqueue(2);
    list.enqueue(3);
    list.dequeue();
    list.printElements();
