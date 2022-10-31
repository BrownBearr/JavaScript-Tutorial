
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
