import { Scene } from 'phaser';

export class LoadingScene extends Scene {
  constructor() {
    super('loading-scene');
  }

  preload(): void {
    let progressBar = this.add.graphics();
    let progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    let width = this.cameras.main.width;
    let height = this.cameras.main.height;
    let loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    let percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);

    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', function (value: number) {
      console.log(value);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
      percentText.setText(parseInt((value * 100).toString()) + '%');
    });

    this.load.on('fileprogress', function (file) {
      console.log(file.src);
      assetText.setText('Loading asset: ' + file.src);
    });
    this.load.on('complete', function () {
      console.log('complete');
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });
    this.load.baseURL = 'assets/';

    // PLAYER LOADING
    this.load.image('player', 'sprites/player.png');
    this.load.atlas('a-player', 'spritesheets/PlayerChan-0.png', 'spritesheets/PlayerChan.json');

    // MAP LOADING
    // this.load.image({
    //   key: 'tiles',
    //   url: 'tilemaps/tiles/dungeon-16-16.png'
    // });
    this.load.image({
      key: 'tileSpriteChan',
      url: 'tilemaps/tiles/SpriteChan.png'
    });
    this.load.image({
      key: 'tileInterior',
      url: 'tilemaps/tiles/Interior.png'
    });
    this.load.image({
      key: 'tileInteriorChan',
      url: 'tilemaps/tiles/InteriorChan.png'
    });
    this.load.image({
      key: 'tileSports',
      url: 'tilemaps/tiles/Sports.png'
    });
    this.load.image({
      key: 'tileRoomChan',
      url: 'tilemaps/tiles/RoomChan.png'
    });
    this.load.image({
      key: 'tileGoodyChan',
      url: 'tilemaps/tiles/thegoodsheet.png'
    });
    this.load.image({
      key: 'tileBigTreeChan',
      url: 'tilemaps/tiles/BigTreeChan.png'
    });
    // this.load.image({
    //   key: 'tileUI',
    //   url: 'spritesheets/UI.png'
    // });
    // this.load.tilemapTiledJSON('dungeon', 'tilemaps/json/dungeon.json');
    this.load.tilemapTiledJSON('try5', 'tilemaps/json/try5.json');

    // CHEST LOADING
    this.load.spritesheet('tiles_spr', 'tilemaps/tiles/dungeon-16-16.png', {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet('tiles_ui', 'spritesheets/UI.png', {
      frameWidth: 32,
      frameHeight: 16
    });
    this.load.spritesheet('tiles_sports', 'tilemaps/tiles/Sports.png', {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.audio('attack', 'music/attack.ogg');
    this.load.audio('hit', 'music/hit.ogg');
    this.load.audio('teleport', 'music/teleport.ogg');
    this.load.audio('cafebg', 'music/cafebg.ogg');
    this.load.audio('campusbg', 'music/campusbg.ogg');
    // this.load.spritesheet('tiles_Interior', 'tilemaps/tiles/Interior.png', {
    //   frameWidth: 16,
    //   frameHeight: 16
    // });
  }

  create(): void {
    this.scene.start('campus');
    this.scene.start('ui-scene');
  }
}
