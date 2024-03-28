function firstNonRepeatedChar(str) {
 // Write your code here

	let i =0;          
	let j =0;
         
	while(i < str.length){
	  if(str.charAt(i) === str.charAt(j)){
	    i++;
	  }
	  else{
	    if(i-j <= 1){
	      return (str.charAt(j));
	    }
	    j=i;
	    i++;
	  }     
		return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
