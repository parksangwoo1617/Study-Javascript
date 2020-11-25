const bruce = {name: "Bruce"};
const madeline = {name: "Madeline"};

function greet(){
    return `Hello, I'm ${this.name}!`;
}

console.log(greet(), greet.call(bruce), greet.call(madeline));

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
update.call(madeline, 1942, 'actress');

console.log(bruce, madeline);

const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");

updateBruce.call(madeline, 1274, 'king');

console.log(bruce, madeline);