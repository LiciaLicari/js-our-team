console.log("miao");

/*
    Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. 
    Ogni membro è caratterizzato dalle seguenti informazioni: 
    nome, ruolo e foto.

    MILESTONE 0:
    Creare l’array di oggetti con le informazioni fornite.
    MILESTONE 1:
    Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
    MILESTONE 2:
    Stampare le stesse informazioni su DOM sottoforma di stringhe
    BONUS 1:
    Trasformare la stringa foto in una immagine effettiva
    BONUS 2:
    Organizzare i singoli membri in card/schede


    Dati:
    Wayne Barnett
    Founder & CEO	
    wayne-barnett-founder-ceo.jpg
    Angela Caroll	
    Chief Editor	
    angela-caroll-chief-editor.jpg
    Walter Gordon
    Office Manager
    walter-gordon-office-manager.jpg
    Angela Lopez
    Social Media Manager	
    angela-lopez-social-media-manager.jpg
    Scott Estrada	
    Developer	
    scott-estrada-developer.jpg
    Barbara Ramos	
    Graphic Designer	
    barbara-ramos-graphic-designer.jpg
*/

/* 
    MILESTONE 0:
    Creare l’array di oggetti con le informazioni fornite. 
*/

const team = [
    {
        fullName: 'Wayne Barnett',
        position: 'Founder & CEO',
        image: './assets/img/wayne-barnett-founder-ceo.jpg'
    },
    {
        fullName: 'Angela Caroll',
        position: 'Chief Editor',
        image: './assets/img/angela-lopez-social-media-manager.jpg'
    },
    {
        fullName: 'Walter Gordon',
        position: 'Office Manager',
        image: './assets/img/walter-gordon-office-manager.jpg'
    },
    {
        fullName: 'Angela Lopez',
        position: 'Social Media Manager',
        image: './assets/img/angela-lopez-social-media-manager.jpg'
    },
    {
        fullName: 'Scott Estrada',
        position: 'Developer',
        image: './assets/img/scott-estrada-developer.jpg'
    },
    {
        fullName: 'Barbara Ramos',
        position: 'Graphic Designer',
        image: './assets/img/barbara-ramos-graphic-designer.jpg'
    },
]

/*
    MILESTONE 1:
    Stampare su console, per ogni membro del team, le informazioni di 
    nome, ruolo e la stringa della foto
*/

for (let i = 0; i < team.length; i++) {
    const member = team[i];

    for (const key in member) {
        console.log(`key - ${key} : value - ${member[key]}`);
    }
}

/*
    MILESTONE 2:
    Stampare le stesse informazioni su DOM sottoforma di stringhe
*/


const teamMembersElement = document.querySelector('.row');

for (let i = 0; i < team.length; i++) {
    const member = team[i];


    const memberMarkup = `<div class="col-4">
        <div class="card my-3">
            <div class="card-img">
            <img class="img-fluid card-img-top" src="${member.image}" alt>
            </div>
            <div class="card-body">
                <h4>Nome: ${member.fullName}</h4>
                <h5>Ruolo: ${member.position}</h5>
            </div>
        </div>
    </div>`

    teamMembersElement.insertAdjacentHTML('beforeend', memberMarkup);

    console.log(member);

    for (const key in member) {

        console.log(key, member[key]);
    }

}

/*
per il bonus aggiuntivo, puoi fare una form che ti permette di aggiungere un nuovo membro del team.
per l’immagine va bene usare semplicemente una url causale da picsum oppure anche la stessa immagine.
*/

