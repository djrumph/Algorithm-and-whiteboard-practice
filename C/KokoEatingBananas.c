
//brute force solution, passes 100ish test case but gets a time limit exceeded on longer arrays
int minEatingSpeed(int* piles, int pilesSize, int h){

    unsigned int pileSum = 0;
    int highest;
    for(int y = 0; y< pilesSize; y++){
        pileSum += piles[y];

        if(piles[y] > highest){
            highest = piles[y];
        }
    }

    // printf("pilesSum: %d\n", pileSum);
    // printf("highest: %d", highest);
    
    for(int j = 1; j<= highest; j++){
        //printf("***New: %d***\n", j);
        unsigned long int sum = 0;
        for(int l = 0; l < pilesSize; l++){
            sum+= ceil( (long double) piles[l] / j);
            //printf("sum: %d\n", sum);
            if(sum <= h && l == pilesSize-1){
                return j;
                
            }
        }
    }
    return 0;
}
