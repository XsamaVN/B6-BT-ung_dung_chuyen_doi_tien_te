function chuyendoi() {
   let a = document.getElementById('From').value;
   let b = document.getElementById('To').value;
   let amount = document.getElementById('Amount').value;
   let kq = amount * a / b;
   document.getElementById('Result').innerHTML = kq;
}
