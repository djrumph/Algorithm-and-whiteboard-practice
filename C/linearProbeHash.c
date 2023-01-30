// Type your code here, or load an example.
#include <stdio.h>
#include <stdlib.h>
int main() {

    int list[]={-4,-4,3,6,-4};

    int hash[10];

    for(int m =0; m<9; m++) hash[m] =0;

    int count = 0;
    int len = 10;
    int hashNum;

    while(count < 5){
        hashNum = list[count] % len +1;

        // printf("%d\n", hash[abs(hashNum)]);

        while(hash[abs(hashNum)] !=0  ) {
            hashNum = hashNum +1;
            printf("hash collison for num: %d at hash: %d\n", list[count], hashNum);
        }

        hash[abs(hashNum)] = list[count];

        printf("hash: %d, num: %d\n", abs(hashNum), hash[abs(hashNum)]);

        count++;
    }
    return 0;
}
