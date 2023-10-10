import Experience from '../Experience.js';

// scenes
import Environment from './Environment.js';
import Car from './car.js';

export default class World2 {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resources.on('ready', () => {
      this.environment = new Environment();
      this.car = new Car();
    });
  }

  resize() {
    if (this.car) {
      this.car.resize();
    }
    if (this.environment) {
      this.environment.resize();
    }
  }

  update() {
    if (this.car) {
      this.car.update();
    }
    if (this.environment) {
      this.environment.update();
    }
  }
}
