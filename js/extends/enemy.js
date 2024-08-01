import Entity from "./entity.js";

class Enemy extends Entity {
    damage;

    constructor(x,y,lifemax,speed,spriteName,damage,target) {
        super(x,y,lifemax,speed,"enemy",spriteName);
        this.setDamage(damage);
        this.walkToTarget(target);
    }

    //setters
    setDamage(damage) {
        this.damage = damage;
    }

    //getters
    getDamage() {
        return this.damage;
    }

    //functions
    walkToTarget(target) {
        if(this.getX() > target.getX()) {
            this.setX(this.getX() - this.getSpeed());
            this.setMoveLeft(true);
        }else {
            this.setX(this.getX() + this.getSpeed());
            this.setMoveLeft(false);
        }

        if(this.getY() > target.getY()) {
            this.setY(this.getY() - this.getSpeed());
        }else {
            this.setY(this.getY() + this.getSpeed());
        }

        if(this.colision(target)) {
            this.damageToTarget(target);
        }

        setTimeout(() => this.walkToTarget(target), 200);
    }

    damageToTarget(target)  {
        target.setLife(target.getLife() - this.getDamage());
    }

}

export default Enemy;
