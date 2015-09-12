$(function(){

  var calculator = new Calculator();

});

 function Calculator(){
   var calc = this;
   $('#equals').click(function(){
     calc.num1 = $('#number1').val();
     calc.op = $('#operation').val();
     calc.num2 = $('#number2').val();
     if (calc.validNums() && calc.validOps()) {
       calc.math();
     }
   });
 }

Calculator.prototype.validNums = function(){
     if (this.num1 == parseInt(this.num1, 10) && this.num2 == parseInt(this.num2, 10)) {
      return true;
    }else {
      $('#result').text('Sorry, one of those is not a valid number!');
    }
  };


Calculator.prototype.validOps = function(){
  if (this.op == '+' || this.op == '-' || this.op == '*' || this.op == '/') {
   return true;
 }else {
   $('#result').text('Sorry, not a valid operation!');
 }
};

Calculator.prototype.math = function(){
  if (this.op == '+'){
    $('#result').text(Number(this.num1) + Number(this.num2));
  }
  else if (this.op == '-'){
    $('#result').text(Number(this.num1) - Number(this.num2));
  }
  else if (this.op == '*'){
    $('#result').text(Number(this.num1) * Number(this.num2));
  }
  else if (this.op == '/'){
    $('#result').text(Number(this.num1) / Number(this.num2));
  }
};







//
// Calculator.prototype.calculate = function(){
//     n1 = Number(this.number1);
//     n2 = Number(this.number2);
//     debugger
//   if (this.operation == '+'){
//     $('#result').text(n1 + n2);
//   } else if (this.operation == '-'){
//     $('#result').text(n1 - n2);
//   } else if (this.operation == '/'){
//     $('#result').text(n1 / n2);
//   } else if (this.operation == '*'){
//     $('#result').text(n1 * n2);
//   }
// };
