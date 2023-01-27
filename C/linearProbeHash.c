// Type your code here, or load an example.
#include <stdio.h>
#include <math.h>
#include <stdlib.h>

#define Empty 0
int main(){

    int hashKey(int key);

    char word[] = "ahy";

    int h =0;

    int key = 0;
    int salt =3;

    int list[] = {-4,2,-4,4,8,-3};
    int hash[5];

    for(int f = 0; f<5; f++) hash[f] = 0;

    int*listP = list;
    int hashNum = 0;
    int distinct = 0;

    int arrayLength = 6;

    while(distinct < arrayLength){
        printf("value: %d\n", *listP);
        hashNum  = *listP % arrayLength +1;
        while(hash[abs(hashNum)] != 0 & hash[abs(hashNum)] != 0){
            hashNum = hashNum % arrayLength+1;
        }
        if(distinct == arrayLength){
            printf("Table Full\n");
            break;
        }

        hash[abs(hashNum)]= *listP;
        printf("value: %d\n", *listP);

        printf("hashed index: %d\n", abs(hashNum));
        printf("hashed value: %d\n", hash[abs(hashNum)]);
        distinct++;
        listP+=1;
    }

    for(int g = 0; g <6; g++){
        printf("%d\n", hash[g]);
    }

}
