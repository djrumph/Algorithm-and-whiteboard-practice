import com.sun.scenario.effect.impl.sw.sse.SSEBlend_SRC_OUTPeer;

import java.sql.Array;
import java.util.ArrayList;

/**
 * Created by DJ on 8/4/2017.
 */
public class StringLongestSetChar {

    // given a string "AAABBC" etc, find the character with the longest consective length and print that character
    // and the length of the consectutive characters.


    public static void main (String args[]) {

        String test = "AABBBBCCCCCCFFFFFFFFFFFFFF";
        int count1 = 0;
        int maxCount = 0;
        int count = 1;
        char maxChar = ' ';
        char prevChar = ' ';



        //char[] info = new char[test.length()];

        for( int i = 1; i < test.length(); i++)
        {


            if(test.charAt(i-1)== test.charAt(i))
            {
                System.out.println(test.charAt(i));
                count++;
                count1++;

 //               prevChar = test.charAt(i-1);
//                System.out.println(prevChar);
                System.out.println(count);
            }
            else
            {
                if (count> maxCount) {

                    maxCount = count;
                    count1 = 0;
                    count = 0;
                    maxChar = test.charAt(i-1);
                    System.out.println("MAX COUNT");

                }
            }

            if (i ==test.length()-1)
            {
                if (count> maxCount) {

                    maxCount = count;
                    count1 = 0;
                    count = 0;
                    maxChar = test.charAt(i - 1);
                    System.out.println("RAHHHHHHHHHH");
                }

            }




        }







        System.out.println(maxCount);
       System.out.println(maxChar);

    }
}

