#include <stdio.h>
#include <stdlib.h>
#include <stddef.h>


typedef struct node{
   int num;
   struct node *next; 
} Node, *NodePtr;

int main(){

    int countNodes(Node * ptr);
    Node * tailNode(Node * ptr);

    Node * searchNodes(Node * ptr, int valueToFind);

    Node * addNode( Node *ptr, int valueToAdd);

    Node * deleteNode(Node* ptr);

    Node head;

    Node * ptr = &head;
    printf("%d\n", ptr==NULL);

    NodePtr top = NULL;
    top = addNode(top, 6);
    addNode(top,7);
    addNode(top,8);
    top = deleteNode(top);
    top = deleteNode(top);
    top = deleteNode(top);
    


   

    printf("%d\n", countNodes(top));
    // printf("%d\n", ptr->num);
    int searchValue = 6;
    printf("found %d at node %p\n", searchValue, searchNodes(top, searchValue));

    // printf("value of tail is %d", tailNode(ptr)->num);


}

Node * deleteNode(NodePtr node){
    if(node->next != NULL){
        NodePtr newSpot = node;
        newSpot= node->next;
        free(node);
        return newSpot;
    }
    free(node);
}

Node * addNode(NodePtr currentList, int value){
    NodePtr newNode = (NodePtr) malloc(sizeof (Node));
    newNode->next = NULL;
    newNode->num = value;

    if(currentList==NULL){
        currentList = newNode;
        return currentList;
    } 
    while(currentList !=NULL){
        if(currentList->next ==NULL){
            currentList->next = newNode;
            return currentList;
        }
        currentList++;
    }
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

Node * tailNode(NodePtr currentNode){
    if(currentNode == NULL){
        return NULL;
    }
    while(currentNode->next != NULL){
        currentNode= currentNode->next;
    }
    return currentNode;
}

