import LifeIten from "../../extends/lifeIten.js";

class Chicken extends LifeIten {
    constructor(x,y,lifeRestored,spriteName) {
        super(x,y,"chicken",lifeRestored,spriteName);
    }
}

export default Chicken;