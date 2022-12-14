export const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 )

 // ! THIS REGEX ALLOWS EMAIL ADDRESSES THAT HAVE 4 CHARACTERS AFTER THE @ SYMBOL, EVEN IF THERE IS NO '.' WITH CHARACTERS AFTER. EG a@aaaa IS CONSIDERED A VALID EMAIL. 
 
 // ! a@a.a IS NOT CONSIDERED VALID, BUT a@a.aa IS CONSIDERED VALID.