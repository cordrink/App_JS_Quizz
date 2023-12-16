const form = document.querySelector('.form-quizz');
const reponses = ['c', 'a', 'b', 'a', 'c'];
const emoji = ['✔️', '🎉', '👀', '😭', '👎'];
const titreResultat = document.querySelector('.resultats h2');
const texteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');

let verifTableau = [];
let tableaResultats = [];


form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(document.querySelector("input[name='q1']:checked").value);

    for (let i = 1; i < 6; i++) {
        tableaResultats.push(document.querySelector(`input[name='q${i}']:checked`).value);
    }
    // console.log(tableaResultats);
    verifFunc(tableaResultats);
    tableaResultats = [];
});

function verifFunc(tabResultats) {
    for (let i = 0; i < 5; i++) {
        if (tabResultats[i] === reponses[i]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }

    // console.log(tabResultats);
    afficherResultats(verifTableau);
    couleursFunction(verifTableau);
    verifTableau = [];
}

function afficherResultats(tabcheck) {
    const nbDeFautes = tabcheck.filter(el => el !== true).length;
    // console.log(nbDeFautes);
    switch (nbDeFautes) {
        case 0:
            titreResultat.innerText = "✔️ Bravo, c'est un sans faute ! ✔️";
            aideResultat.innerText = '';
            texteResultat.innerText = '5/5';
        break;

        case 1:
            titreResultat.innerText = "🎉 Vous y êtes presque 🎉";
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez';
            texteResultat.innerText = '4/5';
            break;

        case 2:
            titreResultat.innerText = "🎉 Encore un effort ...  👀";
            aideResultat.innerText = 'Retentez une autre reponse dans les case rouges, puis re-validez';
            texteResultat.innerText = '3/5';
            break;

        case 3:
            titreResultat.innerText = "👀 Il reste quelques erreur. 😭";
            aideResultat.innerText = 'Retentez une autre reponse dans les case rouges, puis re-validez';
            texteResultat.innerText = '2/5';
            break;

        case 4:
            titreResultat.innerText = "😭 Peux mieux faire ! 😭";
            aideResultat.innerText = 'Retentez une autre reponse dans les case rouges, puis re-validez';
            texteResultat.innerText = '1/5';
            break;
        case 5:
            titreResultat.innerText = "👎 Peux mieux faire ! 👎";
            aideResultat.innerText = 'Retentez une autre reponse dans les case rouges, puis re-validez';
            texteResultat.innerText = '0/5';
            break;
        default:
            "Wops, cas inatendu.";
    }
}

function couleursFunction(tabBool) {
    console.log(tabBool);
    for (let j = 0; j < tabBool.length; j++) {
        if (tabBool[j] === true) {
            toutesLesQuestions[j].style.backgroundColor = 'lightgreen';
        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec');
            }, 500);
        }
    }
}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = 'white';
    })
})