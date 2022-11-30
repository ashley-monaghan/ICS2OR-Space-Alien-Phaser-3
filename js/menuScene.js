/* global Phaser */

// Copyright (c) 2022 Ashley Monaghan all rights reserved
//
// Created by: Ashley Monaghan
// Created on: Nov 2022
// This us the Splash Scene

/**
* Thus class is the Splash Scene
*/
class MenuScene extends Phaser.Scene {
  /**
  * This method is the constructor.
  */
  constructor() {
    super({ key: "menuScene" })

    this.menuSceneBackgroundImage = null
    this.startButton = null
  }

  /**
  * Can be defined on your own Scene
  *This methos is called by the Scene Manager when the scene starts,
  *  before preload() and create().
  * 0param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
  */
  init(data) {
    this.cameras.main.setBackgroundColor("A020F0")
  }

  /**
  * Can be defined on your own Scenes.
  * Use it to load assests
  */
  preload() {
    console.log("Menu Scene")
    this.load.image("menuSceneBackground", "./assets/aliens_screen_image2.jpg")
    this.load.image("startButton", "./assets/start.png")
  }

  /**
  * Can be defined on your own Scenes.
  * Use it to create your game objects
  * 0param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
  */
  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, menuSceneBackground)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, "startButton")
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on("pointerdown", () => this.clickButton)
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

  clickButton() {
    this.scene.start("gameScene")
  }
}

export default MenuScene