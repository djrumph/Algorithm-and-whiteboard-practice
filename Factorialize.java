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
}
