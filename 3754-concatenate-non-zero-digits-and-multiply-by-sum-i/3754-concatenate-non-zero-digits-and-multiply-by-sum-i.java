class Solution {
    public long sumAndMultiply(int n) {
        long num = 0;
        long sum = 0;

        while(n>0){
            long rem = n%10;

            if(rem!=0){
                sum+=rem;
                num = num*10 + rem ; 
            }
            n = n/10;
        }
        long ans = 0;

        while(num>0){
            long rem2 = num%10;
            ans = ans*10 + rem2;
            num/=10;
        }

        return ans*sum ;
    }
}