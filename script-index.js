import Chicken from "./js/coletables/lifeItens/chicken.js";
import EnemyKnife from "./js/enemys/enemyKnife.js";
import Player from "./js/player.js";
import World from "./js/world.js";

const world = new World(document.querySelector("#game"));
const player = new Player(Number(document.body.offsetWidth/2),Number(document.body.offsetHeight/2),200,4,"capybara-default");

world.instantiateObject(player);
player.movement();

const enemyKnife1 = new EnemyKnife(0,0,player);
// const enemyKnife2 = new EnemyKnife(document.body.offsetWidth,0,player);
// const enemyKnife3 = new EnemyKnife(document.body.offsetWidth/2,document.body.offsetHeight,player);
// world.instantiateObject(enemyKnife1);    
// world.instantiateObject(enemyKnife2);
// world.instantiateObject(enemyKnife3);

const chicken = new Chicken(500,50,50,"chicken");
world.instanceColetable(chicken);

function reload() {
    if(player.getLife() <= 0) {
        location.href = "gameOver.php";
    }

    setTimeout(() => {
        reload()
    },1);
}
reload()
