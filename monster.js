new Vue({
    el: '#app',
    data: {
      newGame: false,
      playerHealth: 100,
      monsterHealth: 100,
      turns: []
      },
    methods: {
      startGame: function() {
        this.newGame = true;
        this.playerHealth = 100;
        this.monsterHealth = 100;
      },
      attack: function() {
        //Player Damage Dealt
        var damage = this.calcDamage(3, 9);
        this.monsterHealth -= damage;
        this.turns.unshift({
          isPlayer: true,
          isHealing: false,
          text: `Player hits Monster ${damage}`
        })
        if(this.whoWon()) {
          return;
        }
        //Monster Damage Dealt
        this.monsterAttacks();
        this.whoWon();
      },
      specialAtk: function() {
        //Player Damage Dealt
        let damage = this.calcDamage(13, 29);
        this.monsterHealth -= damage;
        this.turns.unshift({
          isPlayer: true,
          isHealing: false,
          text: `Player hits Monster Hard ${damage}`
        })
        if(this.whoWon()) {
          return;
        }
        //Monster Damage Dealt
        this.monsterAttacks();
        this.whoWon();
      },
      heal: function() {
        if(this.playerHealth <= 90) {
          this.playerHealth += 10;
        } else {
          this.playerHealth = 100;
        }
        this.turns.unshift({
          isPlayer: true,
          isHealing: true,
          text: `Player drank a health potion +10`
        })
        this.monsterAttacks();
      },
      giveUp: function() {
        this.newGame = false;
      },
      calcDamage: function(min, max) {
        return Math.max(Math.ceil(Math.random() * max), min);
      },
      whoWon: function() {
        if(this.monsterHealth <= 0) {
          if(confirm('You won! New Game?')) {
            this.startGame();
          } else {
            this.newGame = false;
          }
          return true;
        }
        if(this.playerHealth <= 0) {
          if(confirm('You lost! New Game?')) {
            this.startGame();
          } else {
            this.newGame = false;
          }
          return true;
        }
        return false;
      },
      checkLevel: function(monHealth, pHealth) {
        if(this.monHealth <= 60 || this.pHealth <= 60) {
          //Change background color to yellow
        }

        if(this.monHealth <= 30 || this.pHealth <= 30) {
          //Change color to red
        }
      },
      monsterAttacks: function() {
        let damage = this.calcDamage(5, 10);
        this.playerHealth -= damage;
        this.whoWon();
        this.turns.unshift({
          isPlayer: false,
          text: `Monster hits Player ${damage}`
        })
      }
      }
});