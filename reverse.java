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
  }
