class World {
    enemys = [];
    rootElement;

    constructor(rootElement) {
        this.setRootElement(rootElement);
    }

    setEnemy(enemy) {
        this.enemys.push(enemy);
    }

    setRootElement(rootElement) {
        this.rootElement = rootElement;
    }

    getEnemy() {
        return this.enemys;
    }

    getRootElement() {
        return this.rootElement;
    }

    instantiateObject(objectClass) {
        let object = document.createElement("div");
        object.className = "object " + objectClass.getName();
        object.style.animation = `${objectClass.getSpriteName()}-animation 1s infinite`
        this.getRootElement().appendChild(object);
        objectClass.setThisObject(object);

        let lifeBar = document.createElement("div");
        lifeBar.className = "lifeBar";
        object.appendChild(lifeBar);
        
        function updateMovement() {
            if(objectClass.getMoveLeft()) {
                object.style.transform = "rotateY(180deg)";
            }else {
                object.style.transform = "rotateY(0deg)";
            }
            
            object.style.left = objectClass.getX() + "px";
            object.style.top = objectClass.getY() + "px";
            
            lifeBar.style.width = objectClass.getLife() + "%";
            
            setTimeout(() => {updateMovement()},1);
        }
        updateMovement();
    }

    instanceColetable(objectClass) {
        let object = document.createElement("div");
        object.className = "coletable " + objectClass.getName();
        object.style.animation = `${objectClass.getSpriteName()}-animation 1s infinite`
        this.getRootElement().appendChild(object);

        function updateMovement() {
            object.style.left = objectClass.getX() + "px";
            object.style.top = objectClass.getY() + "px";            
        }
        updateMovement();
    }
}

export default World;
