const input = "Regex pros know the difference between\n" + "<i>greedy</i> and <i>lazy</i> matching.";
console.log(input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>'));

const input1 = 'One two three';
input1.replace(/two/, '($`)');
console.log(input1);
console.log(input1.replace(/two/, '($`)')); 