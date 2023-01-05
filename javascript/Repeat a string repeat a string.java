/**
 * Created by DJ on 1/19/2018.
 *
 * Repeat a string repeat a string
 * Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
 */
public class Random {

public static void main (String args [])
{
    System.out.println(repeatStringNumTimes("abc", 3));
}

    static String repeatStringNumTimes(String str, int num) {
        String string = str;
        int count = 0;
        if(num<0)
        {
            return "";
        }
        else{

            for (int i = 1;i<num;i++)
            {
                str += string;
            }
        }
        return str;
}
}
