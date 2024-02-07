/**
 * Démo mon premier JavaScript
 * @author  Nathan Allemann
 * @version 2.0
 * @since   2024-02-07 (date de création)
 */

'use strict'; // Active le mode strict du JavaScript


const premierP = document.querySelector('p');

const premierUL=document.querySelector('ul');

const tousLesStrongs = document.querySelectorAll('strong');

console.log(premierP, premierUL, tousLesStrongs);

premierP.innerText='Bonjour le monde';
premierUL.style.backgroundColor ='yellow';

//Parcours le tables des touslesStrong
for (let i = 0; i < tousLesStrongs.length; i++){
    tousLesStrongs[i].style.color ='red';
    tousLesStrongs[i].innerText ='TOTO';
}

//meme chose avec for...of
for(let element of tousLesStrongs){
    element.style.textDecoration = 'overline';
}


//question de la liste des courses

const txtArticle = document.querySelector('#article');
const btAjouter = document.querySelector('button.ajouter');
const ulListe = document.querySelector('ul.liste');

console.log(txtArticle, btAjouter, ulListe);

//focntion ajouter

function ajouter(){
    //Affiche le texte saisi dans le champ
    // alert(txtArticle.value);

    //Ajouter au click du bouton le texte pour qu'il s'affiche le texte à la fin de la liste
    //ulListe.innerHTML += '<li>' + txtArticle.value + '</li>';
    ulListe.innerHTML += `<li> ${txtArticle.value} </li>`;
}

//Au clic du bouton appelle la fonction ajouter
//btAjouter.onclick = ajouter;

//btAjouter.addEventListener('click', ajouter);

btAjouter.addEventListener('click', function ajouter(){

    ulListe.innerHTML += `<li> ${txtArticle.value} </li>`;
});
