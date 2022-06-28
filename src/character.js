/* eslint-disable func-names */
function Character(config) {
  this.name = config.name;
  this.health = config.health;
  this.maxHealth = config.maxHealth;
  this.dialogue = config.dialogue;
}

Character.prototype = {
  get isAlive() {
    console.log("isAlive has been called")
    return this.health > 0;
  },


  _takeDamage: function (damage) {
    this.health = this.health - damage;
    if (this.health < 0) {
      this.health = 0;
    }
  },
  _heal: function (potion) {
    this.health = this.health + potion;
    if (this.health > this.maxHealth) {
      this.health = this.maxHealth;
    }
  },
  speak: function () {
    return this.dialogue;
  },
};

module.exports = Character;
