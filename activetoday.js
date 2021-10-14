let {playPool, cards, foosball, videoGames, playTT} = require('./food')

// Write your code below:
async function activitiesToday(){
  let activityArray = await Promise.all([playPool(), cards(), foosball(), videoGames(), playTT()]); 
  
  console.log(`The activities for today are: ${activityArray[0]}, ${activityArray[1]}, ${activityArray[2]}, and ${activityArray[3]}.`);
}

activitiesToday();

