public class Test {

    public static void main (String args[])
    {

       String test = "hello";

       StringBuilder reverseTest = new StringBuilder();
       reverseTest.append(test);

       reverseTest = reverseTest.reverse();

        System.out.println(reverseTest);

        test = reverseTest.toString();

        System.out.println(test);
        
        }
    
     public static void isPalin(){
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a String: ");

        String str = input.next();

        str = str.replaceAll("[1234567890!@#$%^&*()|?><;:]","");

        StringBuilder reversing = new StringBuilder();

        String reverseStr = reversing.append(str).reverse().toString();

        System.out.println("Original String: " + str);
        System.out.println("reverse String: " + reverseStr);

        if(str.equals(reverseStr)){
            System.out.println("Palindrone");
        }
        else{
            System.out.println("not Palindrone");
        }
    }
  }
