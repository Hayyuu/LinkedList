import  {Node} from "./node.mjs";

class LinkedList{
    constructor(head=null,length=0){
        this.head=head;
        this.length=0;
    }
    getNodes() {
        return this.Node;
    }
    getLastNode(){
        let lastNode=this.head;
        if(lastNode){
            while(lastNode.next!=null){
                lastNode=lastNode.next;
                }
            return lastNode;
        }
    }
    append(newNode){
        let lastNode=this.getLastNode();
        lastNode.next=newNode;
        console.log(lastNode);
        this.length++;
        return this;
    }
    prepend(newNode){
        let nextNode=this.head.next;
        this.head=newNode;
        this.head.next=nextNode;
        this.length++;
        return this;
    }
    size(){
        return `Size ${this.length}`;
    }
}

let linkedListObj=new LinkedList(new Node());
let node1=new Node(1);
let node2=new Node(2);
console.log(linkedListObj.append(node1));
console.log(linkedListObj.append(node2));

let firstNode=new Node("First Node");
let lastNode=new Node("End Node");

console.log(linkedListObj.prepend(firstNode));
console.log(linkedListObj.size());
console.log(linkedListObj.append(lastNode));
console.log(linkedListObj.size());

console.log(`last node ${linkedListObj.getLastNode().value}`);


