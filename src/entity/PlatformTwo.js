import "phaser";

export default class PlatformTwo extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey);

    // << INITIALIZE PLAYER ATTRIBUTES HERE >>
    this.scene = scene;
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
    // this.body.setAllowGravity(false);
  }

  // Check which controller button is being pushed and execute movement & animation
  updateMovement() {
    this.play("coke");
  }

  update() {
    // << INSERT CODE HERE >>
    this.updateMovement();
  }
}
