/**
 * @typedef {{where: string, what: string, example1: string, example2?: string}} DataType
 */

/**
 * @type {string[]} a headerhez szukseges tomb
 */
const header = ['Ókori település', 'Ágazat', 'Példa']; // a fejlectomb deklaralasa

/**
 * @type {DataType[]} A tablazat torzset tartalmazo adattomb
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
 * @type {HTMLSpanElement} a fejlec elso span eleme
 */
const headCellTelep = document.createElement('span'); // letrehozok egy spant
tableHead.appendChild(headCellTelep); // hozzacsatolom a fejlechez
headCellTelep.innerText = header[0]; // beallitom a tartalmanak a header elso elemet

/**
 * @type {HTMLSpanElement} a fejlec masodik span eleme
 */
const headCellAgazat = document.createElement('span'); // letrehozok egy spant
tableHead.appendChild(headCellAgazat); // hozzacsatolom a fejlechez
headCellAgazat.innerText = header[1]; // beallitom a tartalmanak a header masodik elemet

/**
 * @type {HTMLSpanElement} a fejlec harmadik span eleme
 */
const headCellPelda = document.createElement('span'); // letrehozok egy spant
tableHead.appendChild(headCellPelda); // hozzacsatolom a fejlechez
headCellPelda.innerText = header[2]; // beallitom a tartalmanak a header harmadik elemet

/**
 * @type {HTMLDivElement} egy div a tablazat torzsenek
 */
const tableBody = document.createElement('div'); // letrehozok egy divet
table.appendChild(tableBody); // hozzacsatolom a tablazathoz

/**
 * 
 * A fuggveny kiir egy tablazatot konzolra.
 * 
 * @param {DataType[]} arr az adattombunk amin vegig fogunk iteralni
 * 
 * @returns {void}
 */
function renderByArray(arr){ // definialunk egy fuggvenyt egy parameterrel ami az adattombunk
    tableBody.innerHTML = ''; // uritem a tablebody div tartalmat
    // olyan ciklust hasznalsz amilyet akarsz
    for(const obj of arr){ // vegigiteralunk az adattombon
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
        cell1.innerText = obj.where; // beallitom tartalomnak az aktualis elem where tulajdonsaganak erteket

        /**
         * @type {HTMLSpanElement} a tablazatunk egy soranak masodik cellaja
         */
        const cell2 = document.createElement('span'); // letrehozok egy span-t az masodik cellanak
        row.appendChild(cell2); // hozzacsatolom a sor divjehez
        cell2.innerText = obj.what; // beallitom tartalomnak az aktualis elem what tulajdonsaganak erteket

        /**
         * @type {HTMLSpanElement} a tablazatunk egy soranak harmadik cellaja
         */
        const cell3 = document.createElement('span'); // letrehozok egy span-t a harmadik cellanak
        row.appendChild(cell3); // hozzacsatolom a sor divjehez
        cell3.innerText = obj.example1; // beallitom tartalomnak az aktualis elem example1 tulajdonsaganak erteket

        if(obj.example2){ // vizsgalom az aktualis elem example2 tulajdonsagat
            /**
            * @type {HTMLSpanElement} a tablazatunk egy soranak negyedik cellaja
            */
            const cell4 = document.createElement('span'); // ha definialva van, akkor letrehozok egy spant az example2 tulajdonsagnak
            row.appendChild(cell4); //hozzacsatolom a sorhoz
            cell4.innerText = obj.example2; // beallitom tartalmanak az aktualis elem example2 tulajdonsaganak erteket
        }else{ // egyebkent, ha az example2 tulajdonsag nincs definialva
            // colspan allitas helye
        }
    }
}

renderByArray(dataArray) // meghivjuk a fuggvenyt es kiiratjuk console-ra a tablazatunkat

/**
 * @type {HTMLButtonElement} a gomb ami hozzafuz egy szimpla sort az adattombhoz es kiirja a tablazatot
 */
const simpleButton = document.createElement('button'); // letrehozunk egy gombot
simpleButton.innerText = 'Szimpla sor'; // beallitjuk a gomb szoveget
document.body.appendChild(simpleButton); // hozzacsatoljuk a bodyhoz
simpleButton.addEventListener('click', function(){ // regisztralunk egy click esemenykezelot, mivel az e-t nem hasznaljuk, nem adjuk meg.
    console.log('##########################################') // console elvalaszto
    console.log('--------------- Clickeles utan -----------') // console elvalaszto
    console.log('##########################################') //console elvalaszto
    /**
     * @type {DataType} tartalmaz egy teszt adatot, amit hozzaadunk a tombhoz
     */
    const newRow = { // objektum deklaralasa
        where: 'TestWhere', // where tulajdonsag ertekadas
        what: 'TesztWhat', // what tulajdonsag ertekadas
        example1: 'TesztExample1' // example1 tulajdonsag ertekadas
    }
    dataArray.push(newRow); // hozzadjuk az objektumot az adattombhoz
    renderByArray(dataArray); // meghivjuk a frissitett adattombbel a tablazat kiirasat
})

/**
 * @type {HTMLButtonElement} a gomb ami hozzafuz egy dupla peldas sort az adattombhoz es kiirja a tablazatot
 */
const doubleButton = document.createElement('button'); //letrehozunk egy gombot
doubleButton.innerText = 'Dupla peldas sor'; // beallitjuk a gomb szoveget 
document.body.appendChild(doubleButton); // hozzacsatoljuk a bodyhoz
doubleButton.addEventListener('click', function(){ // regisztralunk egy click esemenykezelot, mivel az e-t nem hasznaljuk, nem adjuk meg.
    console.log('##########################################') // console elvalaszto
    console.log('--------------- Clickeles utan -----------') // console elvalaszto
    console.log('##########################################') // console elvalaszto
    
    /**
     * @type {DataType} tartalmaz egy teszt adatot, amit hozzaadunk a tombhoz
     */
    const newRow = { // objektum deklaralasa
        where: 'TestWhere', // where tulajdonsag ertekadas
        what: 'TesztWhat', // what tulajdonsag ertekadas
        example1: 'TesztExample1', // example1 tulajdonsag ertekadas
        example2: 'TesztEx2' // example2 tulajdonsag ertekadas
    }
    dataArray.push(newRow); // hozzadjuk az objektumot az adattombhoz
    renderByArray(dataArray); // meghivjuk a frissitett adattombbel a tablazat kiirasat
})