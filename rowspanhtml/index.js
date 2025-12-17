/**
 * @typedef {{where: string, what1: string, example1: string, what2?:string, example2?:string}} DataType
 */

/**
 * @type {HTMLButtonElement} a szimpla sort tartalmazo gomb
 */
const simplebutton = document.getElementById('simplebutton');  // elkerem a szimpla sort hozzaado gombot
simplebutton.addEventListener('click', function(){ // regisztralok egy esemenykezelot a szimplasor gomb click esemenyere
    /**
     * @type {DataType} az uj sor objektuma
     */
    const newRow = { // objektum definialasa
        where: 'TestWhere', // where tulajdonsag megadasa
        what1: 'TesztWhat', // what1 tulajdonsag megadasa
        example1: 'TesztExample1' // example1 tulajdonsag megadasa
    }

    /**
     * @type {HTMLDivElement} a tablazat torzse ahova az uj sort fuzom
     */
    const tbody = document.getElementById('tablebody') // elkerem a tablazat torzset    

    newRowAppend(newRow, tbody);// meghivom a sor hozzafuzest
});

/**
 * @type {HTMLButtonElement} a gomb ami egy dupla sort hozzaad
 */
const doubleButton = document.getElementById('doublebutton'); // elkerem a dupla sort hozzaado gombot
doubleButton.addEventListener('click', function(){ // gomb esemenyere click esemenyere valo feliratkozas
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

    /**
     * @type {HTMLDivElement} a tablazat torzse ahova az uj sort fuzom
     */
    const tbody = document.getElementById('tablebody') // elkerem a tablazat torzset  


    newRowAppend(newRow, tbody); // meghivom a sor hozzafuzest
        
})

/**
 * 
 * Hozzafuz uj sorokat az objektum alapjan a tablazathoz
 * 
 * @param {DataType} newRow a hozzafuzendo sor adatai
 * @param {HTMLDivElement} tbody a tablazat torzse
 * 
 * @returns {void}
 */
function newRowAppend(newRow, tbody){ // definialom a fuggvenyt ami hozzafuz uj sorokat a tablazathoz

    /**
     * @type {HTMLDivElement} a tablazatunk egy sora
     */
    const row = document.createElement('div') // letrehozok egy divet a sornak
    tbody.appendChild(row); // hozzacsatolom a tablazat torzsehez

    createCell(newRow.where, row); // letrehozok egy cellat az where tartalommal (ezt el kene tarolni, hogy rowspant tudjunk allitani)

    createCell(newRow.what1, row); // letrehozok egy cellat az what1 tartalommal

    createCell(newRow.example1, row); // letrehozok egy cellat az example1 tartalommal

    if(newRow.what2 && newRow.example2){ // vizsgalom, hogy a newRow objektum what2 es example2 tulajdonsaga definialva van-e
         // rowspan allitas helye
        /**
         * @type {HTMLDivElement} a masodik sora az aktualis elemnek
         */
        const row2 = document.createElement('div') // letrehozok egy divet
        tbody.appendChild(row2); // hozzacsatolom tbodyhoz
         createCell(newRow.what2, row2); // letrehozok egy cellat a what2 tartalommal

         createCell(newRow.example2, row2); // letrehozok egy cellat az example2 tartalommal
    }
}

/**
 * 
 * Hozzafuz egy uj cellat a sorhoz, es visszater az uj cellaval.
 * 
 * @param {string} content a cella tartalma
 * @param {HTMLDivElement} parent a sor amihez hozzafuzom
 * 
 * @returns {HTMLSpanElement}
 */
function createCell(content, parent){ // definialok egy uj fuggvenyt a cella letrehozasahoz
    /**
     * @type {HTMLSpanElement} a letrehozott span elem
     */
    const newCell = document.createElement('span'); // letrehozok egy spant
    parent.appendChild(newCell); // a sorhoz csatolom
    newCell.innerText = content; // beallitom az uj cellanak a tartalmat
    return newCell; // visszaterek a letrehozott uj cellaval (rowspanhoz kellene)
}