import Object from "./objcet.js";

class Coletable extends Object{
    name;
    spriteName;

    constructor(x,y,name,spriteName) {
        super(x,y)
        this.setName(name + " coletable");
        this.setSpriteName(spriteName);
    }

    setName(name) {
        this.name = name
    }
    
    setSpriteName(spriteName) {
        this.spriteName = spriteName;
    }

    getName() {
        return this.name;
    }

    getSpriteName() {
        return this.spriteName;
    }

}

export default Coletable;