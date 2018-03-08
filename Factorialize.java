/**
 * 
 *
 * Return the factorial of the provided integer.
 If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 Factorials are often represented with the shorthand notation n!
 For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 */  


class test{
    public static void main(String[] args) {


        factorilize();
    }

    static int factorilize()
    {
        System.out.println("Enter a number: ");
        Scanner input = new Scanner(System.in);

        int num = input.nextInt();
        int result = 1;

        for (int i  = num; i>=1; i--)
        {
            result *=i;
        }

        System.out.println(result);

        return result;
    }
    
    
    public static int factorial(int n){
    for(int i = n-1; i>1; i--){
        n *= i;
    }
        return n;
    }

}
