function createDragon(name, rider, temperment) {
  return {
    name: name,
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    hungry: true
  }
}

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`
}

function eat(dragon) {
 dragon.timesEaten++
 if (dragon.timesEaten >= 3) {
  dragon.hungry = false
 }
 return dragon 
}

function findFireBreathers(dragon) {
  var fireBreathers = []
  for ( var i = 0; i < dragon.length; i++) {
    if (dragon[i].temperment === 'aggressive'){
      fireBreathers.push(dragon[i])
    }
  }
  return fireBreathers
}

//conditional to check temperment
//push that data into empty array called firebreathers 

//.length 
//for loop to find temperment 
//push that into new array and return array
// pass in dragon 


module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}