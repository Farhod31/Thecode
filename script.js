
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}
// start ();

const personaMoviewlDB = {
    count: numberOfFilms,
    movies: [],
    actors: [],
    genres: {},
    privet:false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personaMoviewlDB.movies[a] = [b];
            console.log("Done");
        }else{
            console.log("Error");
            i--;
        }
    }
}

// rememberMyFilms ();


function detectLevelPerson() {
    if (personaMoviewlDB.count <= 10) {
        console.log('Просмотренно довольно мало фильмов', '');
    }else if (personaMoviewlDB.count >= 10 && personaMoviewlDB.count <= 30) {
        console.log('Вы классический зритель', '');
    }else if (personaMoviewlDB.count >= 30) {
        console.log('Вы киноман', '');
    }else {
        console.log('Error');
    }
}

// detectLevelPerson();




function showDB(hidden) {
    if (!hidden) {
        console.log(personaMoviewlDB);
    }
}

showDB(personaMoviewlDB.privet);


function writeYourGeneres() {
    for (let i = 1; i <= 3; i++) {
        personaMoviewlDB.genres [i - 1] = prompt(`Ваш любимый жанр ${i}`);
    }
}

writeYourGeneres();

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его', '');

// personaMoviewlDB.movies[a] = [b],
// personaMoviewlDB.movies[c] = [d];

// console.log(personaMoviewlDB);


// const num = 50;

// switch (num) {
//     case 55:
//         console.log('Error');
//         break;
//     case 98:
//         console.log('This is wrong!!');
//         break;
//     case 50:
//         console.log('True');
//         break; 
//     default:
//         console.log('It is not time');
//         break;
// }

