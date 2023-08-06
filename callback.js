let greet = (fullName) => {
  for (const i in fullName) {
    console.log(fullName[i]);
  }
};
let name = "Mashood Ali";
let secondFunc = (name, callback) => {
  let spliting = name.split(" ");
  callback(spliting);
};
console.log(secondFunc(name, greet));