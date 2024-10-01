import  {Node} from "./node.mjs";

class LinkedList{
    constructor(head=null,length=0){
        this.head=head;
        this.length=0;
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
    getHead() {
        return this.head.value;
    }
    getNodeAt(index){
        let node=this.head;
        for(let i=0;i<this.length;i++){
            if(i==index){
                return node;
            }
            node=node.next;
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
    pop(){
        let lastNode=this.getLastNode();
        let prevNode=this.getNodeAt(this.length-2);
        lastNode=prevNode;
        prevNode.next=null;
        this.length--;
        return this.getLastNode();
    }
    contains(value){
        let node=this.head;
        let containsBolean=false;
        for(let i=0;i<this.length;i++){
            if(value==node.value){
               containsBolean=true;
               return containsBolean;
            }
            node=node.next;
        }
        return containsBolean;
    }
    findIndex(value){
        let node=this.head;
        for(let i=0;i<this.length;i++){
            if(node.value==value){
                return i;
            }
            node=node.next;
        }
        return null;
    }
    toString(){
        let str="";
        let node=this.head;
        for(let i=0;i<this.length;i++){
            str+=node.value +" -> ";
            node=node.next;
            if(node==null){
              str+=node;
            }
        }
        
        return str;
    }
    insertAt(value,index){
        let currentNode=this.head;
        for(let i=0;i<this.length;i++){
            // currentNode=this.getNodeAt(i);
            if(i==index){
                let newNode=new Node(value);
                newNode.next=currentNode.value;
                currentNode.value=newNode.value;
                this.length++;
                return this;
            }
            currentNode=currentNode.next;
        }
        return this;
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
console.log(`Head ${linkedListObj.getHead()}`)

console.log(`Node at index 1 has a value of ${linkedListObj.getNodeAt(3).value}`)

console.log(linkedListObj.pop());
console.log(`List contains the value 6 ${linkedListObj.contains(6)}`);
console.log(`Index of 'First Node' is ${linkedListObj.findIndex('First Node')}`);
console.log(`String representation ${linkedListObj.toString()}`);
console.log(linkedListObj.insertAt(7,1));
console.log(linkedListObj.getNodeAt(1));
// console.log(linkedListObj);

