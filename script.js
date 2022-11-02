
   /*Eloquent Javascript Chapter 2 Exercise with triangles */
   
   var content = '';

    for (var i = 0; i < 7; i++) {
        content = content + '#';
        console.log(content);
    }

/*Eloquent Javascript Chapter 3 Exercise with min numbers */
    var min = function (num1, num2) {
        if (num1 > num2) {
          return num2;
        } else {
          return num1;
        }
      };




/*Bank account chapter 6*/

const account = {
  owner: "James",
  balance: 0,

  credit(money){
    this.balance +=amount;
  }

  describe() {
    return `owner: ${this.owner}, balance: ${this.balance}`;
  }
}

console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());


/*ch 7s*/

const values = [3, 11, 7, 2, 9, 10];

let sum = 0;

values.forEach(value => { sum += value;});

console.log(sum);



/*Chapter 8*/ 
function wordInfo(word) {
  console.log(`The word ${word} is ${word.length} characters long`);
  console.log(`Its lowercase value is ${word.toLowerCase()}`);
  console.log(`Its uppercase value is ${word.toUpperCase()}`);

  for (let i = 0; i < word.length; i++) {
      if (word[i] !== word[length - 1 - i]) {
          return 'it is not a palindrome'
      } else {
          return 'it is a palindrome'
      }
  }
}





