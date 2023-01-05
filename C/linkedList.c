#include <stdio.h>


typedef struct node{
   int num;
   struct node *next; 
} Node, *NodePtr;

int main(){

    int countNodes(Node * ptr);

    Node head;
    Node next;
    Node tail;

    Node * ptr = &head;

    head.num = 1;
    head.next = &next;

    next.num = 2;
    next.next = &tail;

    tail.num = 3;
    tail.next = NULL;

    printf("%d\n", countNodes(ptr));
    printf("%d", ptr->num);


    int searchValue = 1;
    printf("found %d at node %d", searchValue, searchNodes(ptr, searchValue));


}

int countNodes(NodePtr currentNode){
    int count = 0;
    while(currentNode !=NULL){
        count++;
        currentNode = currentNode->next;
    }
    return count;
}

Node * searchNodes(NodePtr currentNode, int valueToFind){
    // int count = 1;
    while(currentNode != NULL){
        if(currentNode->num == valueToFind ){
            return currentNode;
            //return count;
        }
        // count++;
        currentNode = currentNode->next;
    }
}
