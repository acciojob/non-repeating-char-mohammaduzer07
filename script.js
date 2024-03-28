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
	      console.log(str.charAt(j));
	      break;
	    }
	    j=i;
	    i++;
	  }      
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
