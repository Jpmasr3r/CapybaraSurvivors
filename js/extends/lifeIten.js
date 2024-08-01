import Coletable from "./coletable.js";

class LifeIten extends Coletable {
    lifeRestored;

    constructor(x,y,name,lifeRestored,spriteName) {
        super(x,y,name,spriteName);
        this.setLifeRestored(lifeRestored);
    }

    //setters
    setLifeRestored(lifeRestored) {
        this.lifeRestored = lifeRestored;
    }

    //getters
    getLifeRestored() {
        return this.lifeRestored;
    }

    //functions
    inColision(target) {
        target.setLife(target.getLife() + this.getLifeRestored());
        if(target.getLife() > target.getLifeMax()) {
            target.setLife(target.getLifeMax());
        }
    }
}

export default LifeIten;