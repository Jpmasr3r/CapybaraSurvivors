import Entity from "./extends/entity.js";

class Player extends Entity {
    kills;
    coins;
    upgrades = [];
    weapons= [];

    constructor(x, y, lifeMax, speed,spriteName) {
        super(x, y, lifeMax, speed, "player",spriteName);
        this.setKills(0);
        this.setCoins(0);
    }

    //setters
    setKills(kills) {
        this.kills = kills;
    }

    setCoins(coins) {
        this.coins = coins;
    }

    //getters
    getKills() {
        return this.kills;
    }

    getCoins() {
        return this.coins;
    }

    //functions

    movement() {
        document.addEventListener("keydown", (event) => {
            switch (event.key.toLowerCase()) {
                case "d":
                    this.setX(this.getX() + this.getSpeed());
                    this.setMoveLeft(false);
                    break;

                case "a":
                    this.setX(this.getX() - this.getSpeed());
                    this.setMoveLeft(true);
                    break;

                case "w":
                    this.setY(this.getY() - this.getSpeed());
                    break;

                case "s":
                    this.setY(this.getY() + this.getSpeed());
                    break;
            }
        })
    }
}

export default Player;