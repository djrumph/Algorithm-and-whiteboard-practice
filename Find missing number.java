package com.company;

import java.util.Arrays;

/**
 * Created by DJ on 10/30/2017.
 * sort an an array of consecutive numbers, identify a single missing number and display that number
 */
public class InterviewQuestions {

    public static void main (String args[])
    {
        int[]  numbers = {9,6,3,2,1,8,7,4,10};



        // int [] newArray = new int[ numbers.length];

        for(int i = 0; i<= numbers.length-1; i++)

        {
            System.out.println(numbers[i]);
        }

        Arrays.sort(numbers);

        for(int i = 0; i<= numbers.length-1; i++)

        {
            System.out.println(numbers[i]);
        }

        for(int i = 0; i<= numbers.length-1; i++)
        {

            if (i == numbers.length - 1) {
                System.out.println("no missing numbers");
            }

            else  if ((numbers[i] + 1) != numbers[i + 1]) {

                int aha = numbers[i ] + 1;
                System.out.println("found number: " + aha);
                break;
            }
        }
    }
}
