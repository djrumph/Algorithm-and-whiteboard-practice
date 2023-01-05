class test{
    public static void main(String[] args) {


        System.out.println(titleCase("hello my love I love you so much!"));


    }

    static String titleCase(String str)
    {


        //make all the letters lowercase
        str = str.toLowerCase();

        //split all the words into an array wtih each element containing only one word
        String newStr[] = str.split(" ");

        //make an array to hold store the capitalized words in
        String[]  finalArray = new String[newStr.length];


  /* go through each element in the newStr array, capitalize the first word, and store it
  inside an array*/
        for (int i = 0; i<newStr.length; i++)
        {
            //make word variavle containing element of array
            String word = newStr[i];
            //store length of the word in a variable
            int length = word.length();

            //capitalize the first letter of the word and make and add the substring of the remaining letters
            word = word.substring(0,1).toUpperCase() + word.substring(1, length);

            //add the capitalized word to the array.
            finalArray[i] = word;


        }

String result = "";

        //return the array as a single string, so much easier in javascript
        for(int i = 0; i < finalArray.length; i++)
        {
           result = result + " " +  finalArray[i];
        }

        // returning substring to get rid of space in front
        return result.substring(1,result.length());


    }


}
