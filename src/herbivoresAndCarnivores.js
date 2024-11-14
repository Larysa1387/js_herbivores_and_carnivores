'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // constructor(name) {
  //   super(name);
  // }
  bite(animal) {
    if (animal instanceof Carnivore) {
      return;
    }

    if (animal.hidden === false) {
      animal.health -= 50;

      if (animal.health <= 0) {
        const idx = Animal.alive.indexOf(animal);

        Animal.alive.splice(idx, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
