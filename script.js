 // Start the countdown
 let count = 10;
    
 const countdown = () => {
   document.getElementById("countdown").innerText = count;
   count--;

   if (count >= 1) {
     setTimeout(() => {
       countdown();
     }, 1000);
   } else {
     setTimeout(() => {
       document.getElementById("countdown").innerText = "Happy Independence Day";
     }, 1000);
   }
 };

 countdown();