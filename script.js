function firstNonRepeatedChar(str) {
 // Write your code here

	// let i =0;          
	// let j =0;
         
	// while(i < str.length){
	//   if(str.charAt(i) === str.charAt(j)){
	//     i++;
	//   }
	//   else{
	//     if(i-j <= 1){
	//       return (str.charAt(j));
	//     }
	//     j=i;
	//     i++;
	//   }     
	// 	return null
	if (!str) return null;

  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (charCount[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }

  return null; // If no non-repeated character is found 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
