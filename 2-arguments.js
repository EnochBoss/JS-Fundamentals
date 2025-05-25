/*
const arg1 = null;
const arg2 = 10;
const arg3 = 15;

if (false)
*/

const args = process.argv.slice(2); // Ignore first two default args (node and script path)

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}