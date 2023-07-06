class Solution {
    public int longestConsecutive(int[] nums) {

        //what are we trying to solve?
        //longest length of the longest sequence
        //what makes up a sequence? consequtive numbers
        //what starts a sequence? no number in set n-1
        //what ends a sequence? no number in set n+1

        //what can we use to see all numbers that could be a sequence?
        //we'll use a set since it only holds one copy of each number

        //make a set from array
        Set<Integer> set = new HashSet<>();

        //add the numbers to the set
        for(int num : nums) {
            set.add(num);
        }

        //create variables to hold length, max, and current number in sequence
        int max = 0;
        int length, sequenceNum;
        //loop over the set
        for(int num : set){

             //set length variable to 0
            length = 0;
            //check if the number in the set is the start of a sequence
            if(!set.contains(num - 1)){
                // set the length variable by 1.
                length++;
                sequenceNum = num;
                //while the next number is in the set
                while(set.contains(sequenceNum+1)){
                    //increment length variable
                    length++;
                    //increment next number variable(make the target the next number in the sequence)
                    sequenceNum++;
                }
                //set the max variable to the greater value of the max and length variables
                max = Math.max(length, max);
            }

        }

        return max;
        //return the max variable

    }
}
