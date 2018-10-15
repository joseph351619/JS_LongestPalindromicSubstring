
var longestPalindrome = function(s) {
    var beg =0, end = 0, ind =0;
    var length = s.length;
    var longestLength = 0;
    var longestBeg = 0;
    var longestEnd = 0;
    var currentLength = 0;
    while(ind < length){
        beg = end = ind;
        while(true){
            if(s[ind] === s[end]){
                end++;
            }else if(s[ind] === s[beg]){
                beg--
            }else{
                break;
            }
            if(beg === -1 && end === length){
                break;
            }
        }
        beg++;
        end--;
        while(true){
            if(s[beg] === s[end]){
                beg--; end++;
            }else{
                end--;
                beg++;
                if(end-beg+1 > longestLength){
                    longestLength = end-beg+1;
                    longestBeg = beg;
                    longestEnd = end+1;
                }
                break;
            }
            if(beg < 0 || end > length-1){
                end--;
                beg++;
                if(end-beg+1 > longestLength){
                    longestLength = end-beg+1;
                    longestBeg = beg;
                    longestEnd = end+1;
                }
                break;
            }
        }
        ind++;
    }
    return s.substring(longestBeg, longestEnd);
};

function answerResponse(){
    var input = document.getElementById("input").value;
    var answer = document.getElementById("answer");
    answer.value = longestPalindrome(input);
}
document.getElementById('startButton').addEventListener("click", function(){ answerResponse(); });
