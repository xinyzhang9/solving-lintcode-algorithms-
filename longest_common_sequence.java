// Longest Common Subsequence
// For "ABCD" and "EDCA", the LCS is "A" (or "D", "C"), return 1.
// For "ABCD" and "EACB", the LCS is "AC", return 2.
public class Solution {
    /**
     * @param A, B: Two strings.
     * @return: The length of longest common subsequence of A and B.
     */
    public int longestCommonSubsequence(String A, String B) {
        // write your code here
        if(A.length() == 0 || B.length() == 0){
            return 0;
        }
        
        int[][] dp = new int[A.length()+1][B.length()+1];
        int max = 0;
        for(int i = 1; i <= A.length(); i++){
            for(int j=1; j<=B.length(); j++){
                if(A.charAt(i-1) == B.charAt(j-1)){
                    dp[i][j] = dp[i-1][j-1]+1;
                }else{
                    dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
                }                
            }
        }
        return dp[A.length()][B.length()];
    }
   
    
}
