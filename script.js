

function checkPalindrome(){
    
    let word1 = document.getElementById("word1").value;
    let word2 = word1;




let sum = 0;
let j = word2.length - 1;

for(i = 0; i < word1.length; i++)
{
    if(word1[i] === word2[j])
    {
        sum++;
        j--;
    }
}
if (sum === word1.length)
{
    alert(`${word1} is a palindrome!`);
}
else 
{
    alert(`${word1} is not a palindrome...`);
}

};