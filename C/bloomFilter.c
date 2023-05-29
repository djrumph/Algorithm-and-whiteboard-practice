#include <stdio.h>

unsigned long DanielJBernsteinHash(const char* str) {
    unsigned long hash = 5381;
    int c;

    while ((c = *str++)) {
        hash = ((hash << 5) + hash) + c; // hash * 33 + c
    }
    
    return hash;
}

unsigned long fnvHash(const char* str) {
    unsigned long hash = 14695981039346656037UL;
    int c;

    while ((c = *str++)) {
        hash ^= c;
        hash *= 1099511628211UL;
    }
    return hash;
}

unsigned long JenkinsOatHash(const char* str) {
    unsigned long hash = 0;
    int c;

    while ((c = *str++)) {
        hash += c;
        hash += (hash << 10);
        hash ^= (hash >> 6);
    }

    hash += (hash << 3);
    hash ^= (hash >> 11);
    hash += (hash << 15);
    return hash;
}

void checkBloomFilter(int* bloomFilter, int filterLength){
    for(int v = 0; v< filterLength; v++){
        printf("%d ", bloomFilter[v]);
    }
    printf("\n");
}

int* bloomHash(const char* string, int * result, int filterLength){

    int hash1 = (int) DanielJBernsteinHash(string) % filterLength;
    int hash2 = (int) fnvHash(string) % filterLength;
    int hash3 = (int) JenkinsOatHash(string) % filterLength;

    result[0] = hash1;
    result[1] = hash2;
    // *result = hash2;
    result[2] = hash3;

    // printf("Hash value: %lu\n", result[0]);
    // printf("Hash value: %lu\n", result[1]);
    // printf("Hash value: %lu\n", result[2]);

    return result;
    
}

int* addBloomFilter(int* bloomFilter, const char* string, int filterLength){
    //don't like this, figure out how to use one variable
    int* result;
    int results[3];
    result = results;
    result = bloomHash(string, result, filterLength);


    // printf("%d\n", result[0]);
    // printf("%d\n", result[1]);
    // printf("%d\n", result[2]);
    bloomFilter[*result++] = 1;
    bloomFilter[*result++] = 1;
    bloomFilter[*result++] = 1;
    return bloomFilter;

}

char* checkForString(int* bloomFilter, const char* string, int filterLength){
    //don't like this, figure out how to use one variable
    int* result;
    int results[3];
    result = results;
    result = bloomHash(string, result, filterLength);

    char* found="Might be here";
    char* notFound="Definintely not here";

    if(bloomFilter[result[0]] ==1){
        return found;
    } else if(bloomFilter[result[1]] ==1){
        return found;
    } else if(bloomFilter[result[2]] ==1){
        return found;
    }
    return notFound;
}

int main() {
    int bloomFilter[100] = {0};
    char* input = "cheyenne";
    char* checkInput = "cheyenne";
    int filterLength = 100;
    checkBloomFilter(bloomFilter, filterLength);
    addBloomFilter(bloomFilter, input, filterLength);
    checkBloomFilter(bloomFilter, filterLength);
    printf(checkForString(bloomFilter, checkInput, filterLength));
    return 0;
}
