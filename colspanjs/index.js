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
 * 
 * A fuggveny kiir egy tablazatot konzolra.
 * 
 * @param {DataType[]} arr az adattombunk amin vegig fogunk iteralni
 * 
 * @returns {void}
 */
function renderByArray(arr){ // definialunk egy fuggvenyt egy parameterrel ami az adattombunk
    // A string konkatenaciora olyan szintaxist hasznalsz amilyet akarsz
    console.log(header[0] +" | "+ header[1] +" | " + header[2] +" |"); // Kiirom konzolra a tablazat fejlecet
    // olyan ciklust hasznalsz amilyet akarsz
    for(const obj of arr){ // vegigiteralunk az adattombon
        /**
         * @type {string} Athen elso soranak osszeallitott tartalmat fogjuk ebben tarolni
         */
        let firstAthenRow = `${obj.where} | ${obj.what} |`; // beletesszuk az alapertelmezett ertekeket
        if(obj.example2 != undefined){ // vizsgaljuk, hogy az example2 erteke definialva van-e
            firstAthenRow += `${obj.example1} | ${obj.example2} |`; // ha definialva van, akkor 2 cellat fuzunk hozza
        }else{ // egyebkent
            firstAthenRow += `${obj.example1}      |`; // egy cellat fuzunk hozza
        }
        console.log(firstAthenRow) // kiiratjuk az osszeallitott stringet
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