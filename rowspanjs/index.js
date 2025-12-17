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
 * @type {{where: string, what1: string, example1: string, what2?:string, example2?:string}} Athenhoz tartozo tulajdonsagok
 */
const telepAthen = { // objektum definialisa athennak
    where: 'Athen', // telepulest tartalmazo tulajdonsag beallitasa
    what1: 'politika', // agazat beallitasa
    example1: 'demokrácia', // pelda beallitasa
    what2: 'tudomány', // masik agazat beallitasa
    example2: 'filozófia' // masik agazathoz tartozo pelda beallitasa
}

/**
 * @type {{where: string, what1: string, example1: string, what2?:string, example2?:string}} Egyiptomhoz tartozo tulajdonsagok
 */
const telepEgyiptom = { // objektum definialisa egyiptomnak
    where: 'Egyiptom', // telepulest tartalmazo tulajdonsag beallitasa
    what1: 'mezőgazdaság', // agazat beallitasa
    example1: 'gátak', // pelda beallitasa
}
/**
 * @type {{where: string, what1: string, example1: string, what2?:string, example2?:string}} Spartahoz tartozo tulajdonsagok
 */
const telepSparta = { // objektum definialisa spartanak
    where: 'Spárta', // telepulest tartalmazo tulajdonsag beallitasa
    what1: 'neveléstudomány',// agazat beallitasa
    example1: 'agogé', // pelda beallitasa
    what2: 'harcászat',  // masik agazat beallitasa
    example2: 'hoplita' // masik agazathoz tartozo pelda beallitasa
}


// A string konkatenaciora olyan szintaxist hasznalsz amilyet akarsz
console.log(`${headTelepules} | ${headAgazat} | ${headPelda} |`); // Kiirom konzolra a tablazat fejlecet
console.log(`${telepAthen.where} | ${telepAthen.what1} | ${telepAthen.example1} |`) // Kiirom konzolra a tablazat 1. sorat
console.log(`${telepAthen.where} | ${telepAthen.what2} | ${telepAthen.example2} |`) // Kiirom konzolra a tablazat 2. sorat
console.log(`${telepEgyiptom.where} | ${telepEgyiptom.what1} | ${telepEgyiptom.example1} |`) // Kiirom konzolra a tablazat 3. sorat
console.log(`${telepSparta.where} | ${telepSparta.what1} | ${telepSparta.example1} |`) // Kiirom konzolra a tablazat 4. sorat
console.log(`${telepSparta.where} | ${telepSparta.what2} | ${telepSparta.example2} |`) // Kiirom konzolra a tablazat 5. sorat