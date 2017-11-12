class test{
    public static void main(String[] args) {




palindromeCheck();


    }

    static boolean palindromeCheck()
    {

        System.out.print("Enter string to test: ");
        Scanner input = new Scanner(System.in);
        String stringtoTest = input.next();
        
        //make the string lower case
        stringtoTest.toLowerCase();

        //remove all special characters
        stringtoTest = stringtoTest.replaceAll("[^a-zA-Z]", "");


        // reverse string and save it 
        String reverseString = new StringBuilder(stringtoTest).reverse().toString();

        //display original and reversed string
        System.out.println("Original string is: " + stringtoTest);
        System.out.println("Reversed string is: " + reverseString);
        
        //test if string is reversed and return results 
        if (stringtoTest.equals(reverseString))
        {
            System.out.println("String is the same reversed");
            return true;
        }
        else{
            System.out.println("String is not the same reversed ");
            return false;
        }


    }
}


