class test{
    public static void main(String[] args) {


        System.out.println(findLongestWord("hello my friend"));


    }

    static int findLongestWord(String str)
    {
        //split String into array
           String[] newStr = str.split(" ");
        
        //make variable to hold the value of the longest string
        int longest = 0;
        
        
        //goes through the array and find the longest string
        for(int i =0; i<newStr.length; i++)
        {

            // if the current element is longer than the current longest element, it replaces that number with the current element. 
            if (newStr[i].length() >longest)
            {
                longest = newStr[i].length();
            }
        }

        return longest;
    }
    
    
     public static void longestWord(){

        String sentence = "The quick brown fox jumped over the lazy dog";

        String[] words = sentence.split(" ");
        String longest = "";

        for (int i = 0; i < words.length; i++) {

            if (words[i].length() > longest.length())
                longest = words[i];
        }

        System.out.println(longest);
        System.out.println(longest.length());
    }
