let killer = {
    nom: "Jason",
    hp: 100
}

class personnages {
    name
    carac

    constructor(name, carac){
        this.name = name
        this.carac = carac
    }

}

const nom = ['Victor', "Chad", "MC", "Quentine", "Oumar-Aplha-Male", "Zidane", "Alexis"]
const carac = ['nerd', 'sportif', 'cheerleader', 'normie']

let Survivor1 = new personnages(nom[Math.floor(Math.random() * 7)], carac[Math.floor(Math.random() * 4)])

let Survivor2 = new personnages(nom[Math.floor(Math.random() * 7)], carac[Math.floor(Math.random() * 4)])

let Survivor3 = new personnages(nom[Math.floor(Math.random() * 7)], carac[Math.floor(Math.random() * 4)])

let Survivor4 = new personnages(nom[Math.floor(Math.random() * 7)], carac[Math.floor(Math.random() * 4)])

let Survivor5 = new personnages(nom[Math.floor(Math.random() * 7)], carac[Math.floor(Math.random() * 4)])

console.log(Survivor1)
console.log(Survivor2)
console.log(Survivor3)
console.log(Survivor4)
console.log(Survivor5)

tabSurvivants = [Survivor1, Survivor2, Survivor3, Survivor4, Survivor5]

console.log(Math.floor(Math.random()*3))

for (i=0;i<tabSurvivants.length+1;i++){
    let proba = Math.floor(Math.random()*3)
    if(killer.hp>0){
        switch (proba) {
            case 0:
                console.log(tabSurvivants[i].name + " le " + tabSurvivants[i].carac + " est mort")
            case 1: 
                killer.hp = killer.hp - 10
                console.log(tabSurvivants[i].name + " le " + tabSurvivants[i].carac + " a esquivé et infligé 10dmg")
            case 2:
                killer.hp = killer.hp - 15
        }
    }
    else {
        console.log("Jason est mort")
        break
    }
}


