const scenario = {
    murderer: 'Kermit the Frog',
    room: "Shrek's Shack",
    weapon: 'Deadly Banjo'
};
  
const gameplay = function(game) {
    let murderer = game.murderer;
    let room = game.room;
    let weapon = game.room;

    if (murderer === 'Kermit the Frog') {
        console.log('Kermit is not good enough');
        murderer = 'James';
    }
      
    const changeWeapon = function() {
        if (murderer === 'Kermit the Frog') {
            weapon = 'Miss Piggy'
        } else if (murderer === 'James') {
            let weapon = 'CodeClan Duck'
        }
        if (room === 'Rainbow Road') {
            weapon = 'Nimbus 2000'
        }
    }
  
    changeWeapon()
      
    room = 'Rainbow Road';
  
    if (room === 'Rainbow Road') {
        murderer = 'Waluigi';
    }
  
    weapon = 'Lightsaber'
  
    changeWeapon()

    game.murderer = murderer;
    game.room = room;
    game.weapon = weapon;
  
    return game   
}
  
verdict = function(game) {
    gameplay(game)
    console.log(`Murderer is ${game.murderer}`);
    console.log(`Room is ${game.room}`);
    console.log(`Weapon is ${game.weapon}`);
}
console.log(verdict(scenario))