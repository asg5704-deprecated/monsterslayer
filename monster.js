new Vue({
    el: '#app',
    data: {
      newGame: false,
      endOfGame: false,
      playerHealth: 100,
      monsterHealth: 100
      },
    methods: {
      attack: function() {
        let $this = this;

        return
          $this.monster.health -= 10,
          $this.player1.health -= 8

      },
      specialAtk: function() {
        let $this = this;
        return
          $this.monster.health - 35,
          $this.player1.health - 24
      },
      heal: function() {
        let $this = this;
        $this.player1.health += 15
      },
      giveUp: function() {
        endOfGame = true;
      }
      }
});