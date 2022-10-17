const charToInt = (s)=> s.charCodeAt(0) - 64
const intToChar = (n) => String.fromCharCode(n);

const input = process.argv.slice(2)[0];

if(input.length > 1){
    throw new Error('Please make sure that you are using a single character representing A-Z letter!')
}

const inputCharCode = input.charCodeAt(0)

if(inputCharCode > 90 || inputCharCode < 65){
    throw new Error('Please make sure that you are using A-Z letter!')
}

const position = charToInt(input)
const separator = ' ';
const lineLength = (position * 2) - 1 ;

for (let i = 1; i <= lineLength; i++) {
    const currentChar = i <= position ? intToChar(i + 64) : intToChar(64 + (position * 2 - i))
    const edgeSpace = separator.repeat(Math.abs(position - i))
    const middleSpace = separator.repeat(Math.abs(lineLength - (edgeSpace.length * 2) - 2))

    if (i === 1 || i === (position * 2) - 1){
        console.log(`${edgeSpace}${currentChar}${edgeSpace}`);
    }

    else{
        console.log(`${edgeSpace}${currentChar}${middleSpace}${currentChar}${edgeSpace}`);
    }
}