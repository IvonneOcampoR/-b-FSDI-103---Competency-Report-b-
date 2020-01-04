class Character{
    constructor(name,energy,id){
    this.name=name;
    this.energy=energy;
    this.id=id;
    }
    display = function(){
    document.getElementById(this.id).innerHTML=`<p> Name: ${this.name}</p> <p> Energy: ${this.energy} </p> `;
    }
    attack = function(opponent,item){
    let newEnergy = opponent.energy - item.iHitPoints;
    opponent.energy = newEnergy;
    opponent.display();
    document.getElementById("console").innerHTML=`<p> ${this.name} is attacking ${opponent.name} with a ${item.iName} ${item.img} ... </p>`;
    
    if(opponent.energy <= 0){
    document.getElementById(opponent.id).innerHTML="<p> You Die <p>"
    document.getElementById("console").innerHTML=`<p>Game Over</p>`;
    }
    }
    }
    
    const character1 = new Character("Yoshi",100,"c1");
    const character2 = new Character("Toad",100,"c2");
    
    character1.display();
    character2.display();
    
    class Item{
    constructor(iName,iHitPoints,img){
    this.iName=iName;
    this.iHitPoints=iHitPoints;
    this.img=img;
    }
    }
    
    const item1 = new Item('Fireball',20,'<img class="imgItem" src="img/fireball.jpg">');
    const item2 = new Item('Banana',5,'<img class="imgItem" src="img/banana.png">');
    const item3 = new Item('Sword',10,'<img class="imgItem" src="img/sword.jpg">');

    const items = [item1,item2,item3];

    function selectItem(){
        let selection = Math.floor(Math.random()*3);
        return items[selection];
    }

    const restart = function(restart){
      location.reload();
    
    }
    