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
                    var temp = this.rootNode;
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
    var temp=this.rootNode;
    while(temp!=null)
    {
        console.log(temp.value);
        temp=temp.nextNode;
    }
}
}

let S=new Stack();
S.push(1);
S.push(2);
S.push("hi");
S.pop();
S.print();