// Function to find the year the Denver Broncos won the Superbowl
function superbowlWin(record) {
    // Use find() to locate the record with a win
    const winRecord = record.find(game => game.result === "W");
    
    // Return the year of the win, or undefined if no win is found
    return winRecord ? winRecord.year : undefined;
  }
  
  // Export the function for use in tests
  module.exports = superbowlWin;
  



