/**
 * @typedef {{where: string, what: string, example1: string, example2?: string}} DataType
 */

/**
 * @type {HTMLButtonElement} a szimpla sor feliratu gomb
 */
const simpleButton = document.getElementById('simplebutton') // elkerem a szimplasort hozzaado gombot
simpleButton.addEventListener('click', function(){ // regisztralok egy esemenykezelot a szimplasor gomb click esemenyere

    /**
     * @type {DataType} tartalmaz egy teszt adatot, amit hozzaadunk a tombhoz
     */
    const newRow = { // objektum deklaralasa
        where: 'TestWhere', // where tulajdonsag ertekadas
        what: 'TesztWhat', // what tulajdonsag ertekadas
        example1: 'TesztExample1' // example1 tulajdonsag ertekadas
    }

    /**
     * @type {HTMLDivElement} a tablazat torzse ahova az uj sort fuzom
     */
    const tbody = document.getElementById('tablebody') // elkerem a tablazat torzset

    addNewRow(newRow, tbody); // meghivom az uj sor hozzafuzest

})

/**
 * @type {HTMLButtonElement} a szimpla sor feliratu gomb
 */
const doubleButton = document.getElementById('doublebutton') // elkerem a dupla peldas sort hozzaado gombot
doubleButton.addEventListener('click', function(){ // regisztralok egy esemenykezelot a szimplasor gomb click esemenyere

    /**
     * @type {DataType} tartalmaz egy teszt adatot, amit hozzaadunk a tombhoz
     */
    const newRow = { // objektum deklaralasa
        where: 'TestWhere', // where tulajdonsag ertekadas
        what: 'TesztWhat', // what tulajdonsag ertekadas
        example1: 'TesztExample1', // example1 tulajdonsag ertekadas
        example2: 'TesztExample2' // example2 tulajdonsag ertekadas
    }

    /**
     * @type {HTMLDivElement} a tablazat torzse ahova az uj sort fuzom
     */
    const tbody = document.getElementById('tablebody') // elkerem a tablazat torzset

    addNewRow(newRow, tbody); // meghivom az uj sor hozzafuzest

})

/**
 * 
 * Hozzafuz egy sort a tablazat torzsehez
 * 
 * @param {DataType} newRow az uj hozzaadando objektum
 * @param {HTMLDivElement} tableBody a tablazattorzs ahova hozzafuzzuk az uj sort
 * 
 * @returns {void}
 */
function addNewRow(newRow, tableBody){ // definialunk egy fuggvenyt ket parameterrel
    /**
     * @type {HTMLDivElement} a tablazatunk uj sora
     */
    const row = document.createElement('div') // letrehozok egy divet a sornak
    tableBody.appendChild(row); // hozzacsatolom a tablazat torzsehez

    /**
     * @type {HTMLSpanElement} a tablazatunk uj soranak elso cellaja
     */
    const cell1 = document.createElement('span'); // letrehozok egy span-t az elso cellanak
    row.appendChild(cell1); // hozzacsatolom a sor divjehez
    cell1.innerText = newRow.where; // beallitom tartalomnak a newRow where tulajdonsaganak erteket

    /**
     * @type {HTMLSpanElement} a tablazatunk uj soranak masodik cellaja
     */
    const cell2 = document.createElement('span'); // letrehozok egy span-t az masodik cellanak
    row.appendChild(cell2); // hozzacsatolom a sor divjehez
    cell2.innerText = newRow.what; // beallitom tartalomnak a newRow  what tulajdonsaganak erteket

    /**
     * @type {HTMLSpanElement} a tablazatunk uj soranak harmadik cellaja
     */
    const cell3 = document.createElement('span'); // letrehozok egy span-t a harmadik cellanak
    row.appendChild(cell3); // hozzacsatolom a sor divjehez
    cell3.innerText = newRow.example1; // beallitom tartalomnak a newRow example1 tulajdonsaganak erteket

    if(newRow.example2){ // vizsgaljuk, hogy az example2 tulajdonsag definialva van-e
        /**
         * @type {HTMLSpanElement} a tablazatunk uj soranak negyedik cellaja
         */
        const cell4 = document.createElement('span'); // letrehozok egy span-t a harmadik cellanak
        row.appendChild(cell4); // hozzacsatolom a sor divjehez
        cell4.innerText = newRow.example2; // beallitom tartalomnak a newRow example2 tulajdonsaganak erteket
    }else{ //egyebkent
        // colspan allitas helye
    }
    
}