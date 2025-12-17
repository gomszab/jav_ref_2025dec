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

    /**
     * @type {HTMLSpanElement} a tablazatunk egy soranak elso cellaja
     */
    const cell1 = document.createElement('span'); // letrehozok egy span-t az elso cellanak
    row.appendChild(cell1); // hozzacsatolom a sor divjehez
    cell1.innerText = newRow.where; // beallitom tartalomnak az uj elem where tulajdonsaganak erteket

    /**
     * @type {HTMLSpanElement} a tablazatunk egy soranak masodik cellaja
     */
    const cell2 = document.createElement('span'); // letrehozok egy span-t az masodik cellanak
    row.appendChild(cell2); // hozzacsatolom a sor divjehez
    cell2.innerText = newRow.what1; // beallitom tartalomnak az uj elem what1 tulajdonsaganak erteket

    /**
     * @type {HTMLSpanElement} a tablazatunk egy soranak harmadik cellaja
     */
    const cell3 = document.createElement('span'); // letrehozok egy span-t a harmadik cellanak
    row.appendChild(cell3); // hozzacsatolom a sor divjehez
    cell3.innerText = newRow.example1; // beallitom tartalomnak az uj elem example1 tulajdonsaganak erteket

    if(newRow.what2 && newRow.example2){ // vizsgalom, hogy a newRow objektum what2 es example2 tulajdonsaga definialva van-e
         // rowspan allitas helye
        /**
         * @type {HTMLDivElement} a masodik sora az aktualis elemnek
         */
        const row2 = document.createElement('div') // letrehozok egy divet
        tbody.appendChild(row2); // hozzacsatolom tbodyhoz

        /**
         * @type {HTMLSpanElement} a masodik sor elso cellaja
         */
        const cell4 = document.createElement('span'); // letrehozok egy spant
        row2.appendChild(cell4); // a sorhoz csatolom
        cell4.innerText = newRow.what2; // beallitom az uj elem what2 tulajdonsagat

        /**
         * @type {HTMLSpanElement} a masodik sor masodik cellaja
         */
        const cell5 = document.createElement('span'); // letrehozok egy spant
        row2.appendChild(cell5); // a sorhoz csatolom
        cell5.innerText = newRow.example2; // beallitom az uj elem example2 tulajdonsagat
    }
   

}