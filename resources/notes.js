// WRITE ONTO FILE -> -> overwrite file if data already present
fs.writeFileSync("random.txt","hello, I m programmer");  

// READ FROM FILE -> readFileSync(filename, encoding); -> encoding by default buffer
let data = fs.readFileSync("random.txt","utf-8");   
console.log(data);

// CHECK IF FILE EXIST OR NOT
console.log(fs.existsSync("random.txt"));

// PROCESS -> 1st two args are reserve 0: node path 1: file path
console.log(process.argv);  

let lines = data.split("\r\n");     // [data, \r, data, \r] -> [data "" data ""]
 if (options.includes("-n") || options.includes("-b")) {   
                            console.log(numbering, lines[j]);
                            numbering += 1;
                        } else {
                            console.log(lines[j]) ;  // [data "" data ""] -> [data, data]
                        }

// https://www.w3schools.com/nodejs/nodejs_filesystem.asp

// -b : empty no numbering
// data toh numbering
// cmd : wcat -b fn 

// cmd : wcat -n -b fn // jo phle aya uski preference in code

// fn1 -w fn2 // all data of fn1 gets overwrite to fn2

//1- wcat filename => displays content of the file in the terminal
//2- wcat filename1 filename2 filename3... => displays content of all files in the terminal(contactinated form) in the given order.
//3- wcat -s filename => convert big line breaks into a singular file
//4- wcat -n filename => give numbering to all the lines5- wcat -b filename => give numbering to non-empty lines
