import Experience from '../Experience.js';

// scenes
import Environment from './Environment.js';
import Track from './track.js';

export default class World2 {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resources.on('ready', () => {
      this.environment = new Environment();
      this.track = new Track();
    });
  }

  resize() {
    if (this.track) {
      this.track.resize();
    }
    if (this.environment) {
      this.environment.resize();
    }
  }

  update() {
    if (this.track) {
      this.track.update();
    }
    if (this.environment) {
      this.environment.update();
    }
  }
}
