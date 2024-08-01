import Object from "./objcet.js";

class Entity extends Object{
    lifeMax;
    life;
    speed;
    name;
    spriteName;
    moveLeft;

    constructor(x,y,lifeMax,speed,name,spriteName) {
        super(x,y);
        this.setLifeMax(lifeMax);
        this.setLife( this.getLifeMax() );
        this.setSpeed(speed);
        this.setName(name)
        this.setSpriteName(spriteName);
        this.setMoveLeft(false);
    }

    //setters
    setLife(life) {
        this.life = life;    
    }

    setLifeMax(lifeMax) {
        this.lifeMax = lifeMax;    
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    setName(name) {
        this.name = name;
    }

    setSpriteName(spriteName) {
        this.spriteName = spriteName;
    }

    setMoveLeft(moveLeft) {
        this.moveLeft = moveLeft;
    }

    //getters
    getLife() {
        return this.life;
    }

    getLifeMax() {
        return this.lifeMax;
    }

    getSpeed() {
        return this.speed;
    }

    getName() {
        return this.name;
    }

    getSpriteName() {
        return this.spriteName;
    }

    getMoveLeft() {
        return this.moveLeft;
    }
}

export default Entity;