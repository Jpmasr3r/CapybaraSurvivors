import Enemy from "../extends/enemy.js";

class EnemyKnife extends Enemy {
    constructor(x,y,target) {
        super(x,y,100,4,"enemy-knife",10,target);
    }
}

export default EnemyKnife;