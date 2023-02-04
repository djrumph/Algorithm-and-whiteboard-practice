bool isAnagram(char * s, char * t){

    //check if strings are the same size
    int firstStringLength = strlen(s);
    int secondStringLength = strlen(t);

    if(firstStringLength != secondStringLength){
        return 0;
    }

    int hash1[26];
    int hash2[26];

    for(int z = 0; z<26; z++){
        hash1[z] = 0;
        hash2[z] = 0;
    }

    for(int u = 0; u<firstStringLength; u++){
        int hashChar = s[u] - 97;
        hash1[hashChar] +=1;
        hashChar= t[u] - 97;
        hash2[hashChar] +=1;
    }

    for(int p =0; p<25; p++){
        if(hash1[p] != hash2[p]){
            return 0;
        }
    }

    return 1;
}
