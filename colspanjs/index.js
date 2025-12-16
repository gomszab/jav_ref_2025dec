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
console.log(header[0] +" | "+ header[1] +" | " + header[2] +"| |"); // Kiirom konzolra a tablazat fejlecet
console.log(`${dataArray[0].where} | ${dataArray[0].what} | ${dataArray[0].example1} | |`) // Kiirom konzolra a tablazat 1. sorat
console.log(`${dataArray[1].where} | ${dataArray[1].what} | ${dataArray[1].example1} | |`) // Kiirom konzolra a tablazat 2. sorat
console.log(`${dataArray[2].where} | ${dataArray[2].what} | ${dataArray[2].example1} | ${dataArray[2].example2} |`) // Kiirom konzolra a tablazat 3. sorat
console.log(`${dataArray[3].where} | ${dataArray[3].what} | ${dataArray[3].example1} | |`) // Kiirom konzolra a tablazat 4. sorat
console.log(`${dataArray[4].where} | ${dataArray[4].what} | ${dataArray[4].example1} | ${dataArray[4].example2} |`) // Kiirom konzolra a tablazat 5. sorat