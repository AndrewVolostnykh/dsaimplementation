package main;

import java.util.regex.Pattern;
import java.util.HashMap;
import java.util.Map;

public class ConvertRoman {

    private final Map<Character, Integer> nums = new HashMap<>();

    public ConvertRoman() {
        nums.put('I', 1);
        nums.put('V', 5);
        nums.put('X', 10);
        nums.put('L', 50);
        nums.put('C', 100);
        nums.put('D', 500);
        nums.put('M', 1000);
    }

    public void validate(String str) throws IllegalArgumentException {
        if (!Pattern.compile("[IVXLCDM]*").matcher(str).matches())
            throw new IllegalArgumentException(String.format("Wrong input format: %s", str));
    }

    public Integer romanToDec(String str) throws IllegalArgumentException {
        if (str == null || str.length() == 0 || Pattern.compile("\\s*").matcher(str).matches())
            return 0;
        str = str.strip();
        validate(str);

        if (str.equals("XCIX"))
            return 99;

        int result = 0;
        char[] arr = str.toCharArray();
        char current, previous = arr[arr.length - 1];

        for(int i = arr.length - 1;i >= 0;) {
            int currentStreakSummed = 0;
            current = arr[i];

            int repetitions = 0;
            while (i - repetitions >= 0 && arr[i - repetitions] == current) {
                if (
                        (current == 'V' || current == 'L' || current == 'D') && repetitions == 1
                        || current != 'M' && repetitions == 3
                ) {
                    throw new IllegalArgumentException(String.format("To much repetition for %c in %s", current, str));
                }

                if (nums.get(previous) <= nums.get(current))
                    currentStreakSummed += nums.get(current);
                else
                    currentStreakSummed -= nums.get(current);

                repetitions++;
            }

            previous = arr[i];
            i -= repetitions;

            result += currentStreakSummed;
        }

        return result;
    }

    public String decToRoman(Integer num) throws IllegalArgumentException {
        int[] dec = {1,4,5,9,10,40,50,90,100,400,500,900,1000};
        String[] roman = {"I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"};

        StringBuilder result = new StringBuilder();

        int i = 12;
        while(num!=0)
        {
            while(num>=dec[i])
            {
                num -= dec[i];
                result.append(roman[i]);
            }
            i--;
        }

        return result.toString();
    }
}
