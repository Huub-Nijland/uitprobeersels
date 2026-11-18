let number = process.argv[2];
function primecheck(nmb) {
    if (nmb <= 1)
        return false;

    for (let i = 2; i < nmb; i++)
        if (nmb % i === 0)
            return false;

        
  return true;  
}
if (primecheck(number) == true)
    console.log("true");
else
    console.log("false");