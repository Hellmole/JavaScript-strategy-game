
    let year = 1852;
    let workers = 0;
    let workers_total = 10;
    let airship_total = 1;
    let airship_sel = 0;
    let airship_buy = 0;
    let airship_type = 1;
    let airship_price = 4000;
    let ticket_price = 1500;
    let money_pay = 0;
    let money_total = 7000;
    let airship_send = 0;
    let counter_error = 0;
    let event = 0;
    let havarie = 0;
    let expenses = 100;
    let inflace = 200;
    let bonus = 0;
    let workers_death = 0;

    function playTurn() {
       
     

      money_pay = parseInt(document.getElementById("money_pay").value);
      airship_buy = parseInt(document.getElementById("airship_buy").value);
      airship_sel = parseInt(document.getElementById("airship_sel").value);
      airship_send = parseInt(document.getElementById("airship_send").value);
      
      
      
      
      

      // Empty imput = 0

      if (isNaN(airship_buy)) { airship_buy = 0; }
      if (isNaN(airship_sel)) { airship_sel = 0; }
      if (isNaN(money_pay)) { money_pay = 0; }
      if (isNaN(airship_send)) { airship_send = 0; }

      // calculation money,airship for checking source and urther processing
      
      money = money_total - (airship_buy * airship_price) + (airship_sel * airship_price) -  money_pay  - (airship_send * expenses);
      airship = airship_total + airship_buy - airship_sel;
      
      // calculation workekrs (worker = 100 dolorars/year)
      workers_expenses = workers_total * 100 - money_pay;
      if (workers_expenses <= 0) { workers_expenses = 0; }
      
      new_workers = Math.floor(Math.random() * 3) + 0;
      workers = workers_total - workers_expenses / 100 +  new_workers;


      // 1 airship = 5 workers  
      workers_error = workers_total /5 ;
     
      
      // check source
      if (airship_send > workers_error ) { counter_error = counter_error + 1;  alert( "You don't have that many workers." ); }
      if (money < 0) { counter_error = counter_error + 1; alert( "You don't have that many dollars."); }
      if (airship_send > airship) {counter_error = counter_error + 1; alert( "You don't have that many airships."); }
      
      
      // if everything is OK, move on to the next year
      if (counter_error == 0) { next_year(); } 
      else { document.getElementById("form").reset(); airship_send = 0; airship_buy = 0; airship_sel = 0; money_pay = 0;}
      counter_error = 0;
    }


      function next_year() {
      
      // generating inflation,ticket_price, event
      inflace = Math.floor(Math.random() * 200) + 100;
      ticket_price = Math.floor(Math.random() * 3000) + 1;
      event = Math.floor(Math.random() * 5) + 1;
      

      // random event
      if (event == 3 && year > 1855 ) { havarie = 1;  alert( "Hydrogen exploded. Unfortunately, you've lost an airship a 5 workers!"); workers_death = 5;  }
      if (event == 2 && year > 1855 ) { alert( "You have received a $2000 bonus from sponsors"); bonus = 2000;  }
     
      
      // calculation money_total, airship_total , workers
      money_total = money - inflace + bonus + (airship_send * ticket_price);
      airship_total = airship -  havarie ;
      workers_total = Math.round(workers) - workers_death;

      // Game Over
      if (airship_total <= 0) {  alert( "You've lost all your airships. Game over!"); resetall(); }
      if (workers_total <= 0) {  alert( "You've lost all your workers. Game over!"); resetall(); }
      if (money_total  <= 0) {  alert( "Bankruptcy - you have no money.Game over!"); resetall(); }

      // END GAME
      if (year > 1922 ) { alert( "Congratulations!!! You've kept the company running for a total of 70 years. You started with 10 employees, $7000, and 1 airship. Now you have - Workers: " + workers_total + " , Dolars: " +  money_total + " ,Airships: " + airship_total ); resetall(); }
      
      
       // Gen airship_price 
      airship_price =  Math.floor(Math.random() * (3000)) + 3000;
      
       // Next year and reset val 
      year++;
      counter_error = 0;
      havarie = 0;
      bonus = 0;
      workers_death = 0;

      document.getElementById("ticket_price").textContent = ticket_price;
      document.getElementById("money_total").textContent = money_total;
      document.getElementById("workers_total").textContent = workers_total;
      document.getElementById("inflace").textContent = inflace;
      document.getElementById("year").textContent = year;
      document.getElementById("airship_total").textContent = airship_total;
      document.getElementById("airship_price").textContent = airship_price;
      document.getElementById("form").reset();
      
  // New game  
}
function resetall() {
  location.reload();
}