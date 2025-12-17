/**
 * @type {string[]} Az Okori telepulesek oszlopfejlecenek
 */
const headerList = ["Ókori település", "Ágazat", "Példa"] // tomb valtozo deklaralasa a fejlecnek

/**
 * @type {{where: string, what1: string, example1: string, what2?:string, example2?:string}[]} Az adattomb ami alapjan generaljuk a tablazatot
 */
const dataArray = [ // tomb definialasa 
    { // objektum definialisa athennak
        where: 'Athen', // telepulest tartalmazo tulajdonsag beallitasa
        what1: 'politika', // agazat beallitasa
        example1: 'demokrácia', // pelda beallitasa
        what2: 'tudomány', // masik agazat beallitasa
        example2: 'filozófia' // masik agazathoz tartozo pelda beallitasa
    },{ // objektum definialisa egyiptomnak
        where: 'Egyiptom', // telepulest tartalmazo tulajdonsag beallitasa
        what1: 'mezőgazdaság', // agazat beallitasa
        example1: 'gátak', // pelda beallitasa
    },{ // objektum definialisa spartanak
        where: 'Spárta', // telepulest tartalmazo tulajdonsag beallitasa
        what1: 'neveléstudomány',// agazat beallitasa
        example1: 'agogé', // pelda beallitasa
        what2: 'harcászat',  // masik agazat beallitasa
        example2: 'hoplita' // masik agazathoz tartozo pelda beallitasa
    }]


// A string konkatenaciora olyan szintaxist hasznalsz amilyet akarsz
console.log(`${headerList[0]} | ${headerList[0]} | ${headerList[0]} |`); // Kiirom konzolra a tablazat fejlecet
console.log(`${dataArray[0].where} | ${dataArray[0].what1} | ${dataArray[0].example1} |`) // Kiirom konzolra a tablazat 1. sorat
console.log(` |_ | ${dataArray[0].what2} | ${dataArray[0].example2} |`) // Kiirom konzolra a tablazat 2. sorat
console.log(`${dataArray[1].where} | ${dataArray[1].what1} | ${dataArray[1].example1} |`) // Kiirom konzolra a tablazat 3. sorat
console.log(`${dataArray[2].where} | ${dataArray[2].what1} | ${dataArray[2].example1} |`) // Kiirom konzolra a tablazat 4. sorat
console.log(` |_ | ${dataArray[2].what2} | ${dataArray[2].example2} |`) // Kiirom konzolra a tablazat 5. sorat