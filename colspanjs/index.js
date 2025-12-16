/**
 * @type {string} Az Okori telepulesek oszlopfejlecenek
 */
const headTelepules = "Ókori település" // valtozo deklaralasa a fejlec elso cellajanak
/**
 * @type {string} Az Agazat oszlopfejlecenek
 */
const headAgazat = "Ágazat" // valtozo deklaralasa a fejlec masodik cellajanak
/**
 * @type {string} A Pelda oszlopfejlecenek
 */
const headPelda = "Példa" // valtozo deklaralasa a fejlec harmadik cellajanak

/**
 * @type {{where: string, what: string, example1: string, example2?: string}} Athen elso sorahoz tartozo cellak tartalma
 */
const firstAthenRow = { // elso sor objektumanak deklaralasa
    where: 'Athén', // elso sor elso oszlop tartalma
    what: 'politika', // elso sor masodik oszlop tartalma
    example1: 'demokrácia', // elso sor harmadik oszlop tartalma
}

/**
 * @type {{where: string, what: string, example1: string, example2?: string}} Athen masodik sorahoz tartozo cellak tartalma
 */
const secondAthenRow = { // masodik sor objektumanak deklaralasa
    where: 'Athén', // masodik sor elso oszlop tartalma
    what: 'tudomány', // masodik sor masodik oszlop tartalma
    example1: 'filozófia', // masodik sor harmadik oszlop tartalma
}

/**
 * @type {{where: string, what: string, example1: string, example2?: string}} Egyiptom sorahoz tartozo cellak tartalma
 */
const egyiptomRow = { // harmadik sor objektumanak deklaralasa
    where: 'Egyiptom', // harmadik sor elso oszlop tartalma
    what: 'mezőgazdaság', // harmadik sor masodik oszlop tartalma
    example1: 'gátak', // harmadik sor harmadik oszlop tartalma
    example1: 'csatornák', // harmadik sor negyedik oszlop tartalma
}

/**
 * @type {{where: string, what: string, example1: string, example2?: string}} Sparta elso sorahoz tartozo cellak tartalma
 */
const firstSpartaRow = { // negyedik sor objektumanak deklaralasa
    where: 'Spárta', // negyedik sor elso oszlop tartalma
    what: 'neveléstudomány', // negyedik sor masodik oszlop tartalma
    example1: 'agogé', // negyedik sor masodik oszlop tartalma
}

/**
 * @type {{where: string, what: string, example1: string, example2?: string}} Sparta masodik sorahoz tartozo cellak tartalma
 */
const secondSpartaRow = { // otodik sor objektumanak deklaralasa
    where: 'Spárta', // otodik sor elso oszlop tartalma
    what: 'harcászat', // otodik sor masodik oszlop tartalma
    example1: 'hoplita', // otodik sor harmadik oszlop tartalma
    example1: 'phalanx',  // otodik sor negyedik oszlop tartalma
}

// A string konkatenaciora olyan szintaxist hasznalsz amilyet akarsz
console.log(headTelepules +" | "+ headAgazat +" | " + headPelda +"| |"); // Kiirom konzolra a tablazat fejlecet
console.log(`${firstAthenRow.where} | ${firstAthenRow.what} | ${firstAthenRow.example1} | |`) // Kiirom konzolra a tablazat 1. sorat
console.log(`${secondAthenRow.where} | ${secondAthenRow.what} | ${secondAthenRow.example1} | |`) // Kiirom konzolra a tablazat 2. sorat
console.log(`${egyiptomRow.where} | ${egyiptomRow.what} | ${egyiptomRow.example1} | ${egyiptomRow.example2} |`) // Kiirom konzolra a tablazat 3. sorat
console.log(`${firstSpartaRow.where} | ${firstSpartaRow.what} | ${firstSpartaRow.example1} | |`) // Kiirom konzolra a tablazat 4. sorat
console.log(`${secondSpartaRow.where} | ${secondSpartaRow.what} | ${secondSpartaRow.example1} | ${secondSpartaRow.example2} |`) // Kiirom konzolra a tablazat 5. sorat