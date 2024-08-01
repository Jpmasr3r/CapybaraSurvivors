class Object {
    x;
    y;
    thisObject;

    constructor(x,y) {
        this.setX(x);
        this.setY(y);
    }

    //setters
    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    setThisObject(thisObject) {
        this.thisObject = thisObject;
    }

    //getters
    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getThisObject() {
        return this.thisObject;
    }

    //functions

    colision(target) {
        let minX = target.getX() - (target.spriteWidth() / 2);
        let maxX = target.getX() + (target.spriteWidth() / 2);
        let minY = target.getY() - (target.spriteHeight() / 2);
        let maxY = target.getY() + (target.spriteHeight() / 2);

        if((this.getX() > minX && this.getX() < maxX) && (this.getY() > minY && this.getY() < maxY)) {
            return true;
        }else {
            return false;
        }
    }

    spriteWidth() {
        return this.thisObject.offsetWidth;
    }

    spriteHeight() {
        return this.thisObject.offsetHeight;
    }

}

export default Object