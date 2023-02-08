class Node{
    constructor(value)
    {
        this.value=value;
        this.nextNode=null;
    }
}
class Stack{
        rootNode = null;
        count = 0;
        push(value){
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
            pop(){
                let temp=this.rootNode;
                let previousNode;
                while(temp.nextNode!=null)
                {
                    previousNode=temp;
                    temp=temp=temp.nextNode;
                }
                previousNode.nextNode=null;
                this.count--;
              }         
print()
{
   
    while(this.rootNode!=null)
    {
        console.log(this.rootNode.value);
        this.rootNode=this.rootNode.nextNode;
    }
}
}

let S=new Stack();
S.push(1);
S.push(2);
S.push("hi");
S.pop();
S.print();
