/**
 * @type {string[]} a headerhez szukseges tomb
 */
const header = ['Ókori település', 'Ágazat', 'Példa']; // a fejlectomb deklaralasa

/**
 * @type {{where: string, what: string, example1: string, example2?: string}[]} A tablazat torzset tartalmazo adattomb
 */
const dataArray = [ // tomb deklaralasa
    { // elso sor objektumanak deklaralasa
        where: 'Athén', // elso sor elso oszlop tartalma
        what: 'politika', // elso sor masodik oszlop tartalma
        example1: 'demokrácia', // elso sor harmadik oszlop tartalma
    },
    { // masodik sor objektumanak deklaralasa
        where: 'Athén', // masodik sor elso oszlop tartalma
        what: 'tudomány', // masodik sor masodik oszlop tartalma
        example1: 'filozófia', // masodik sor harmadik oszlop tartalma
    },
    { // harmadik sor objektumanak deklaralasa
        where: 'Egyiptom', // harmadik sor elso oszlop tartalma
        what: 'mezőgazdaság', // harmadik sor masodik oszlop tartalma
        example1: 'gátak', // harmadik sor harmadik oszlop tartalma
        example2: 'csatornák', // harmadik sor negyedik oszlop tartalma
    },
    { // negyedik sor objektumanak deklaralasa
        where: 'Spárta', // negyedik sor elso oszlop tartalma
        what: 'neveléstudomány', // negyedik sor masodik oszlop tartalma
        example1: 'agogé', // negyedik sor masodik oszlop tartalma
    },
    { // otodik sor objektumanak deklaralasa
        where: 'Spárta', // otodik sor elso oszlop tartalma
        what: 'harcászat', // otodik sor masodik oszlop tartalma
        example1: 'hoplita', // otodik sor harmadik oszlop tartalma
        example2: 'phalanx',  // otodik sor negyedik oszlop tartalma
    }
]

// A string konkatenaciora olyan szintaxist hasznalsz amilyet akarsz
console.log(header[0] +" | "+ header[1] +" | " + header[2] +" |"); // Kiirom konzolra a tablazat fejlecet

/**
 * @type {string} Athen elso soranak osszeallitott tartalmat fogjuk ebben tarolni
 */
let firstAthenRow = `${dataArray[0].where} | ${dataArray[0].what} |`; // beletesszuk az alapertelmezett ertekeket
if(dataArray[0].example2 != undefined){ // vizsgaljuk, hogy az example2 erteke definialva van-e
    firstAthenRow += `${dataArray[0].example1} | ${dataArray[0].example2} |`; // ha definialva van, akkor 2 cellat fuzunk hozza
}else{ // egyebkent
    firstAthenRow += `${dataArray[0].example1}      |`; // egy cellat fuzunk hozza
}
console.log(firstAthenRow) // kiiratjuk az osszeallitott stringet

/**
 * @type {string} Athen masodik soranak osszeallitott tartalmat fogjuk ebben tarolni
 */
let secondAthenRow = `${dataArray[1].where} | ${dataArray[1].what} |`; // beletesszuk az alapertelmezett ertekeket
if(dataArray[1].example2 != undefined){ // vizsgaljuk, hogy az example2 erteke definialva van-e
    secondAthenRow += `${dataArray[1].example1} | ${dataArray[1].example2} |`; // ha definialva van, akkor 2 cellat fuzunk hozza
}else{ // egyebkent
    secondAthenRow += `${dataArray[1].example1}      |`; // egy cellat fuzunk hozza
}
console.log(secondAthenRow) // kiiratjuk az osszeallitott stringet

/**
 * @type {string} Athen masodik soranak osszeallitott tartalmat fogjuk ebben tarolni
 */
let egyiptomRow = `${dataArray[2].where} | ${dataArray[2].what} |`; // beletesszuk az alapertelmezett ertekeket
if(dataArray[2].example2 != undefined){ // vizsgaljuk, hogy az example2 erteke definialva van-e
    egyiptomRow += `${dataArray[2].example1} | ${dataArray[2].example2} |`; // ha definialva van, akkor 2 cellat fuzunk hozza
}else{ // egyebkent
    egyiptomRow += `${dataArray[2].example1}      |`; // egy cellat fuzunk hozza
}
console.log(egyiptomRow) // kiiratjuk az osszeallitott stringet

/**
 * @type {string} Athen masodik soranak osszeallitott tartalmat fogjuk ebben tarolni
 */
let firstSpartRow = `${dataArray[3].where} | ${dataArray[3].what} |`; // beletesszuk az alapertelmezett ertekeket
if(dataArray[3].example2 != undefined){ // vizsgaljuk, hogy az example2 erteke definialva van-e
    firstSpartRow += `${dataArray[3].example1} | ${dataArray[3].example2} |`; // ha definialva van, akkor 2 cellat fuzunk hozza
}else{ // egyebkent
    firstSpartRow += `${dataArray[3].example1}      |`; // egy cellat fuzunk hozza
}
console.log(firstSpartRow) // kiiratjuk az osszeallitott stringet

/**
 * @type {string} Athen masodik soranak osszeallitott tartalmat fogjuk ebben tarolni
 */
let secondSpartaRow = `${dataArray[4].where} | ${dataArray[4].what} |`; // beletesszuk az alapertelmezett ertekeket
if(dataArray[4].example2 != undefined){ // vizsgaljuk, hogy az example2 erteke definialva van-e
    secondSpartaRow += `${dataArray[4].example1} | ${dataArray[4].example2} |`; // ha definialva van, akkor 2 cellat fuzunk hozza
}else{ // egyebkent
    secondSpartaRow += `${dataArray[4].example1}      |`; // egy cellat fuzunk hozza
}
console.log(secondSpartaRow) // kiiratjuk az osszeallitott stringet
