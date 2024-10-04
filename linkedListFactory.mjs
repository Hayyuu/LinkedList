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
            else if(index > this.length-1){
                return;

            }
            else{
               if(node!=this.getLastNode()){
                 node=node.next;
               }
            }
            

        }
        return node;
       
    }
    append(value){
        let node=new Node(value);
        if(this.length===0){
            this.head=node;
            node.next=null;
        }
        else{
            let lastNode=this.getLastNode();
            node.next=null;
            lastNode.next=node;
            console.log(lastNode);
           
        }
        this.length++;
        return this;
    }
    prepend(value){
        let node=new Node(value);
        node.next=this.head;
        this.head=node;
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
            console.log("Inside tostring"+ node.value)
            if(node==this.getLastNode()){
                console.log(node);
                str+=node.value;
                str+=" -> "+node.next
                return str;
              }
            str+=node.value +" -> ";
            node=node.next;
            
        }
        
        return str;
    }
    insertAt(value,index){
        if(index==0){
            this.prepend(value);
        }
        else{
            let node=new Node(value);
            let prevNode,currentNode;
            currentNode=this.head;
            prevNode=null;
            for(let i=0;i<index;i++){
               prevNode=currentNode;
               currentNode=currentNode.next;
            }
            node.next=currentNode;
            prevNode.next=node;
            this.length++;
        }
        
        return this;
    }
  
}

let linkedListObj=new LinkedList(new Node());

console.log(linkedListObj);
console.log("Before First Append");
console.log(linkedListObj.append(1));
console.log(linkedListObj.append(2));


console.log("Before prepend");
console.log(linkedListObj.prepend("First Node"));
console.log(linkedListObj.size());
console.log(linkedListObj.append("End Node"));
console.log(linkedListObj.size());

console.log(`last node ${linkedListObj.getLastNode().value}`);
console.log(`Head ${linkedListObj.getHead()}`)

console.log(`Node at index 3 has a value of ${linkedListObj.getNodeAt(3).value}`)
console.log(linkedListObj.pop());
console.log("After Pop"+linkedListObj.size());

console.log(`List contains the value 6 ${linkedListObj.contains(6)}`);
console.log(`Index of 'First Node' is ${linkedListObj.findIndex('First Node')}`);
console.log(`String representation ${linkedListObj.toString()}`);
console.log('Before Insert');
console.log(linkedListObj.size());

console.log(linkedListObj.insertAt(7,0));
console.log(linkedListObj.size());

console.log(linkedListObj.insertAt(8,1));

console.log(linkedListObj.toString());
console.log(linkedListObj.size());
console.log ('end')
