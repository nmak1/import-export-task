// domain.js
export default class Character {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.health = 100;
  }

  attack() {
    console.log(`${this.name} attacks!`);
  }
}