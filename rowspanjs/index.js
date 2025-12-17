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
console.log(`${headerList[0]} | ${headerList[1]} | ${headerList[2]} |`); // Kiirom konzolra a tablazat fejlecet
for(const key in dataArray){ // vegigiteralok a dataarray tulajdonsagain, amik jelen esetben az indexek
    /**
     * @type {string} tartalmazza az aktualis sort
     */
    let currentRow = `${dataArray[key].where}    | ${dataArray[key].what1}    | ${dataArray[key].example1}    |` // szimplasor osszeallitasa
    if(dataArray[0].what2 && dataArray[key].example2){ // vizsgaljuk what2 es example2 definialva van-e
        currentRow += `\n  |_  | ${dataArray[key].what2}    | ${dataArray[key].example2}` // Ha definialva van a \n segitsegevel uj sorba kiirjuk azokat is
    }
    console.log(currentRow) // kiirjuk a 2 soros stringet
}

