  // Task 3
 const fs = require('fs')
 fs.readFile("Task.txt", (error, data) => {
  if (error) {
     console.log(error);
     return;
   }

  console.log(data.toString());
 })





