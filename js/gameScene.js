/* global Phaser */

// Copyright (c) 2022 Ashley Monaghan all rights reserved
//
// Created by: Ashley Monaghan
// Created on: Nov 2022
// This us the Game Scene

/**
* Thus class is the Splash Scene
*/
class GameScene extends Phaser.Scene {
  /**
  * This method is the constructor.
  */
  constructor() {
    super({ key: "gameScene" })
  }

  /**
  * Can be defined on your own Scene
  *This methos is called by the Scene Manager when the scene starts,
  *  before preload() and create().
  * 0param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
  */
  init(data) {
    this.cameras.main.setBackgroundColor("FFA500") 
  }

  /**
  * Can be defined on your own Scenes.
  * Use it to load assests
  */
  preload() {
    console.log("Game Scene")
  }

  /**
  * Can be defined on your own Scenes.
  * Use it to create your game objects
  * 0param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
  */
  create(data) {
  //pass
  }

  /** 
  * Should be overridden by your own Scenes.
  * This method is called once per game step while the scene is running.
  * @param {number} time - The current time.
  * @param {number} delta - The delta time in ms since the last frame.
  */
  update(time, delta) {
  //pass
  }
}

export default GameScene