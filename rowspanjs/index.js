/**
 * @typedef {{where: string, what1: string, example1: string, what2?:string, example2?:string}} DataType
 */

/**
 * @type {string[]} Az Okori telepulesek oszlopfejlecenek
 */
const headerList = ["Ókori település", "Ágazat", "Példa"] // tomb valtozo deklaralasa a fejlecnek

/**
 * @type {DataType[]} Az adattomb ami alapjan generaljuk a tablazatot
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

/**
 * @type {HTMLDivElement} a megjelenitendo tablazatunk
 */
const table = document.createElement('div'); // letrehozok egy divet
document.body.appendChild(table); // hozzacsatolom a bodyhoz
/**
 * @type {HTMLDivElement} a tablazatunk fejlece
 */
const tableHead = document.createElement('div'); // letrehozok egy divet a fejlecnek
table.appendChild(tableHead); // hozzacsatolom a tabla divhez

/**
 * 
 * Rendereli egy tomb alapjan a fejlecet es hozzacsatolja a headerhez
 * 
 * @param {string[]} hList a fejlec tartalmat tartalmazo tomb 
 * @param {HTMLDivElement} header a header
 * @returns {void}
 */
function renderHeader(hList, header){ // definialom a renderHeader fuggvenyt
    for(const head of hList){ // vegigiteralok a fuggveny elso bemeneti parameteren
        /**
         * @type {HTMLSpanElement} az aktualis fejlec elem
         */
        const headCellTelep = document.createElement('span'); // letrehozok egy spant
        header.appendChild(headCellTelep); // hozzacsatolom a fejlechez
        headCellTelep.innerText = head; // beallitom a tartalmanak a headerlist aktualis elemet
    }
}
renderHeader(headerList, tableHead); // kirenderelem a fejlecet a fuggveny meghivasanak segitsegevel
/**
 * @type {HTMLDivElement} egy div a tablazat torzsenek
 */
const tableBody = document.createElement('div'); // letrehozok egy divet
table.appendChild(tableBody); // hozzacsatolom a tablazathoz

/**
 * 
 * kiirja konzolra a tablazatot
 * 
 * @param {DataType[]} arr az adattomb ami a tablazat torzst tartalmazza
 * 
 * @returns {void}
 */
function renderTable(arr){ // definialom a rendertable fuggvenyt 1 parameterrel
    tableBody.innerHTML = ''; // uritem a tablebody div tartalmat
    for(const key in arr){ // vegigiteralok a dataarray tulajdonsagain, amik jelen esetben az indexek
        
         /**
         * @type {HTMLDivElement} a tablazatunk egy sora
         */
        const row = document.createElement('div') // letrehozok egy divet a sornak
        tableBody.appendChild(row); // hozzacsatolom a tablazat torzsehez

        /**
         * @type {HTMLSpanElement} a tablazatunk egy soranak elso cellaja
         */
        const cell1 = document.createElement('span'); // letrehozok egy span-t az elso cellanak
        row.appendChild(cell1); // hozzacsatolom a sor divjehez
        cell1.innerText = arr[key].where; // beallitom tartalomnak az aktualis elem where tulajdonsaganak erteket

        /**
         * @type {HTMLSpanElement} a tablazatunk egy soranak masodik cellaja
         */
        const cell2 = document.createElement('span'); // letrehozok egy span-t az masodik cellanak
        row.appendChild(cell2); // hozzacsatolom a sor divjehez
        cell2.innerText = arr[key].what1; // beallitom tartalomnak az aktualis elem what1 tulajdonsaganak erteket

        /**
         * @type {HTMLSpanElement} a tablazatunk egy soranak harmadik cellaja
         */
        const cell3 = document.createElement('span'); // letrehozok egy span-t a harmadik cellanak
        row.appendChild(cell3); // hozzacsatolom a sor divjehez
        cell3.innerText = arr[key].example1; // beallitom tartalomnak az aktualis elem example1 tulajdonsaganak erteket

        if(arr[key].what2 && arr[key].example2){ // vizsgaljuk what2 es example2 definialva van-e
            // rowspan allitas helye
            /**
             * @type {HTMLDivElement} a masodik sora az aktualis elemnek
             */
           const row2 = document.createElement('div') // letrehozok egy divet
           tableBody.appendChild(row2); // hozzacsatolom tbodyhoz

           /**
             * @type {HTMLSpanElement} a masodik sor elso cellaja
             */
           const cell4 = document.createElement('span'); // letrehozok egy spant
           row2.appendChild(cell4); // a sorhoz csatolom
           cell4.innerText = arr[key].what2; // beallitom az aktualis elem what2 tulajdonsagat

           /**
             * @type {HTMLSpanElement} a masodik sor masodik cellaja
             */
           const cell5 = document.createElement('span'); // letrehozok egy spant
           row2.appendChild(cell5); // a sorhoz csatolom
           cell5.innerText = arr[key].example2; // beallitom az aktualis elem example2 tulajdonsagat
        }
    }
}
renderTable(dataArray); // meghivom a fuggvenyt ami kiirja a tablazatot consolera

/**
 * @type {HTMLButtonElement} a gomb ami egy egyszeru sort hozzaad
 */
const simpleButton = document.createElement('button'); // gomb letrahozasa
simpleButton.innerText = 'Szimpla sor'; // gomb feliratanak beallitasa
document.body.appendChild(simpleButton); // gomb hozzacsatolasa az oldalhoz
simpleButton.addEventListener('click', function(){ // gomb esemenyere click esemenyere valo feliratkozas
    console.log('##########################################') // elvalaszto kiiratasa
    console.log('--------------- Clickeles utan -----------') // elvalaszto kiiratasa
    console.log('##########################################') // elvalaszto kiiratasa
    /**
     * @type {DataType} az uj sor objektuma
     */
    const newRow = { // objektum definialasa
        where: 'TestWhere', // where tulajdonsag megadasa
        what1: 'TesztWhat', // what1 tulajdonsag megadasa
        example1: 'TesztExample1' // example1 tulajdonsag megadasa
    }
    dataArray.push(newRow); // tablazathoz hozzaadjuk az uj objektumot
    renderTable(dataArray); // meghivjuk a tablazatot kiirato fuggvenyt
})

/**
 * @type {HTMLButtonElement} a gomb ami egy egyszeru sort hozzaad
 */
const doubleButton = document.createElement('button'); // gomb letrahozasa
doubleButton.innerText = 'Dupla sor'; // gomb feliratanak beallitasa
document.body.appendChild(doubleButton); // gomb hozzacsatolasa az oldalhoz
doubleButton.addEventListener('click', function(){ // gomb esemenyere click esemenyere valo feliratkozas
    console.log('##########################################') // elvalaszto kiiratasa
    console.log('--------------- Clickeles utan -----------') // elvalaszto kiiratasa
    console.log('##########################################') // elvalaszto kiiratasa
    /**
     * @type {DataType} az uj sor objektuma
     */
    const newRow = { // objektum definialasa
        where: 'TestWhere', // where tulajdonsag megadasa
        what1: 'TesztWhat', // what1 tulajdonsag megadasa
        example1: 'TesztExample1', // example1 tulajdonsag megadasa
        what2: 'TesztWhat2', // what2 tulajdonsag megadasa
        example2: 'TesztExample2' // example2 tulajdonsag megadasa
    }
    dataArray.push(newRow); // tablazathoz hozzaadjuk az uj objektumot
    renderTable(dataArray); // meghivjuk a tablazatot kiirato fuggvenyt
})
