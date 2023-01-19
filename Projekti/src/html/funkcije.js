 function calculate(){

           var num1, num2, res;
           num1 = parseInt(document.getElementById("fnumber").value);
           num2 = parseInt(document.getElementById("snumber").value);
           var oper = document.getElementById("operation").value;

           if (oper == '+') {
               res = num1 + num2;
           }
           else if (oper == '*') {
              res = num1 * num2;
           }
             else if (oper == '/') {
              res = num1 / num2;
           }
             else if (oper == '-') {
              res = num1 - num2;
           }
           document.getElementById("result").value = res;
        }


        function addRecordInList(){
          var record = document.getElementById("fnumber").value + document.getElementById('operation').value + document.getElementById("snumber").value;
         // var text = document.getElementById('operation').value;
          var list = document.getElementById('list');
          var liItem = document.createElement("li");
          var textRecord = document.createTextNode(record);

          liItem.appendChild(textRecord);
          list.appendChild(liItem);
        }