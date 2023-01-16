/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2){
    long * countNodes(struct ListNode * l1, struct ListNode *l2, long * result);
    struct ListNode* numberToList(struct ListNode * list ,long num, long length);

    long lengths[3];

    countNodes(l1, l2, lengths);

    // printf("%d\n", lengths[0]);
    // printf("%d\n", lengths[1]);

    struct ListNode * longest;

    if(lengths[0] > lengths[1]){
        longest = l1;
        numberToList(l1, lengths[2], lengths[0] );
        return l1;
    } else{
        longest = l2;
        printf("NUM b4 %ld", lengths[2]);
        numberToList(l2, lengths[2], lengths[1]);
        return l2;
    }

    printf("%d", longest->val);

    return 0;
}

long* countNodes(struct ListNode * l1, struct ListNode *l2, long * result){
    unsigned long sum = 0;
    int l1Count = 0;
    int l2Count = 0;
    while(l1 != NULL || l2 !=NULL){
        if(l1 != NULL){
            sum+=l1->val * pow(10, l1Count);
            l1=l1->next;
            l1Count++;
        }

        if(l2 != NULL){
            printf("sum: %ld\n", sum);
            printf("num to add: %ld\n", (pow(10, l2Count)));
            sum+=l2->val * pow(10, l2Count);
            printf("sum: %ld\n", sum);
            l2=l2->next;
            l2Count++;
        }
    }

    result[0] = l1Count;
    result[1] = l2Count;
    result[2] = sum;

    // printf("%d\n", result[0]);

    return result;
}

//function to turn a number into a linked list
//should modulo number by 10 and store result in a node while the node isn't null.
struct ListNode * numberToList(struct ListNode * list ,long num, long length){
    int numToStore;
    int count;
    while(list !=NULL){
        // count =pow(10, length);
        printf("num is: %ld\n", num);
        numToStore = num%10; //num % (int) pow(10, length);
        list->val=numToStore;
        //length--;
        num= num/10; //numToStore;
        if(num>=1 &&list->next==NULL){
            printf("last num is: %d\n", num);
            // struct ListNode node;
            // (NodePtr) malloc(sizeof (Node)
            struct ListNode * newNode = malloc(sizeof (struct ListNode));
            newNode->val=num;
            newNode->next=NULL;
            list->next=newNode;
            return list;
        }
        list = list->next;
    }
    return list;
}
