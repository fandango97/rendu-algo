const listTrack = ['Track1', 'Track2', 'Track3', 'Wejdene', 'Track5']

let trajet = {
    nb_changement: 5,
    feu_rouge: 100,
}

let perso = {
    prenom: 'Quentin',
    sante_mentale: 10,
}

function playMusic() {
    return Math.floor(Math.random() * 5);
  }


function exo_taxi() {
    while(trajet.feu_rouge > 0 && perso.sante_mentale > 0){
        if(listTrack[playMusic()] == 'Wejdene'){
            perso.sante_mentale = perso.sante_mentale - 1
            trajet.feu_rouge = trajet.feu_rouge - 1
            console.log("La musique jouée etait " + listTrack[playMusic()] + ". Il reste " + trajet.feu_rouge + " feu rouge(s)")
            console.log("La santé mentale de Quentin est de : " + perso.sante_mentale)
            if (perso.sante_mentale == 0){
                console.log("EXPLOSION")
            }
        }   
        else {
            trajet.feu_rouge = trajet.feu_rouge - 1
            console.log("La musique jouée etait " + listTrack[playMusic()] + ". Il reste " + trajet.feu_rouge + " feu rouge(s)")
            console.log("La santé mentale de Quentin est de : " + perso.sante_mentale)
            if (trajet.feu_rouge == 0){
                console.log("Quentin est rentré")
            }
        }
    }
}

exo_taxi()


