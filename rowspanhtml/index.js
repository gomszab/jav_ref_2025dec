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
    cell1.innerText = newRow.where; // beallitom tartalomnak az aktualis elem where tulajdonsaganak erteket

    /**
     * @type {HTMLSpanElement} a tablazatunk egy soranak masodik cellaja
     */
    const cell2 = document.createElement('span'); // letrehozok egy span-t az masodik cellanak
    row.appendChild(cell2); // hozzacsatolom a sor divjehez
    cell2.innerText = newRow.what1; // beallitom tartalomnak az aktualis elem what1 tulajdonsaganak erteket

    /**
     * @type {HTMLSpanElement} a tablazatunk egy soranak harmadik cellaja
     */
    const cell3 = document.createElement('span'); // letrehozok egy span-t a harmadik cellanak
    row.appendChild(cell3); // hozzacsatolom a sor divjehez
    cell3.innerText = newRow.example1; // beallitom tartalomnak az aktualis elem example1 tulajdonsaganak erteket
});