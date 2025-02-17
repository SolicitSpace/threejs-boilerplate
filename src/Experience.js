import * as THREE from "three";

import Camera from "./Camera.js";
import Renderer from "./Renderer.js";

// utils
import Debug from "./utils/Debug.js";
import Sizes from "./utils/Sizes.js";
import Mouse from "./utils/Mouse.js";
import Time from "./utils/Time.js";
import Resources from "./utils/Resources.js";

// config
import assets from "./constants/assets.js";

// world
import World from "./scenes/World.js";
import World2 from "./scenes-2/World.js";
import World3 from "./scenes-3/World.js";
import World4 from "./scenes-4/World.js";

export default class Experience {
  static instance;

  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance;
    }

    Experience.instance = this;

    // setup
    this.canvas = canvas;
    this.debug = new Debug();
    this.sizes = new Sizes();
    this.time = new Time();
    this.mouse = new Mouse();
    this.scene = new THREE.Scene();

    this.resources = new Resources(assets);
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();

 
    this.addBtnsListener();

    this.sizes.on("resize", () => {
      this.resize();
    });
    this.time.on("update", () => {
      this.update();
    });
  }


  addBtnsListener() {
    document.getElementById("scene-1-btn").addEventListener("click", () => {
      console.log("Scene 1");

      this.scene = new THREE.Scene();
      this.resources = new Resources(assets);
      this.camera = new Camera();
      this.renderer = new Renderer();

      this.world = new World();
    });
    document.getElementById("scene-2-btn").addEventListener("click", () => {
      console.log("Scene 2");

      this.scene = new THREE.Scene();
      this.resources = new Resources(assets);
      this.camera = new Camera();
      this.renderer = new Renderer();

      this.world = new World2();
    });
    document.getElementById("scene-3-btn").addEventListener("click", () => {
      console.log("Scene 3");

      this.scene = new THREE.Scene();
      this.resources = new Resources(assets);
      this.camera = new Camera();
      this.renderer = new Renderer();

      this.world = new World3();
    });
    document.getElementById("scene-4-btn").addEventListener("click", () => {
      console.log("Scene 4");

      this.scene = new THREE.Scene();
      this.resources = new Resources(assets);
      this.camera = new Camera();
      this.renderer = new Renderer();

      this.world = new World4();
    });

  }


  resize() {
    this.camera.resize();
    this.renderer.resize();
    this.world.resize();
  }

  update() {
    this.camera.update();
    this.renderer.update();
    this.world.update();
  }
}
