class test {
    public static void main(String[] args) {


        int[][] test = {
                {13, 27, 18, 26},
                {4, 5, 1, 3},
                {32, 35, 37, 39},
                {1000, 1001, 857, 1}};

        System.out.println(largestOfFour(test));


    }

    static String largestOfFour(int[][] arr) {
        // You can do this!

        // create variables to store biggest number
        int biggest = 0;
        //create array to store the largest elements from each array
        int[] largestArray = new int[arr.length];

  /*go through the array, find the biggest number in sub array, assign and store that
  array in an array */
        for (int i = 0; i < arr.length; i++) {
            //reset biggest number for each new array element
            biggest = 0;

            // go through the sub array elements and find the biggest number
            for (int j = 0; j < arr[i].length; j++) {
                if (arr[i][j] > biggest) {
                    biggest = arr[i][j];
                    largestArray[i] = biggest;
                }

            }
            //add the largest number to the array
            largestArray[i] = biggest;
        }
        //return the array with the largest values from each sub array
        
        //comment out the below here if you don't want to return a string

        String result = "";

        //return the array as a single string, so much easier in javascript
        for(int i = 0; i < largestArray.length; i++)
        {
            result = result + " " +  largestArray[i];
        }

        return result;
    }
}
