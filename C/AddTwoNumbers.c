/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2){
    struct ListNode * originalPointer1 = l1;
    struct ListNode * originalPointer2 = l2;
    
    int sum =0;
    int placeHolder = 0;

    while(l1!= NULL || l2 != NULL){

        if(l1!=NULL){
            sum+=l1->val;
        }

        if(l2 !=NULL){
            sum+=l2->val;
        }

        placeHolder = sum >=10 ? sum%10 : sum;
        sum = (sum-placeHolder) /10;

        if(l1!= NULL){
            l1->val = placeHolder;
            if(l1->next == NULL && l2==NULL){
                if(sum >=1){
                    struct ListNode * new = malloc(sizeof(struct ListNode));
                    new->next = NULL;
                    new->val = sum;
                    l1->next = new;
                    return originalPointer1;
                }
                return originalPointer1;
            }
            l1=l1->next;
        } 
        if(l2!=NULL){
            l2->val = placeHolder;
            if(l2->next == NULL && l1==NULL){
                if(sum >=1){
                    struct ListNode * new = malloc(sizeof(struct ListNode));;
                    new->next = NULL;
                    new->val = sum;
                    l2->next = new;
                    return originalPointer2;
                }
                return originalPointer2;
            }
            l2=l2->next;
        }
    }
    return 0;
}
