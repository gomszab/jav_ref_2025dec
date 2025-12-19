/**
 * @typedef {{where: string, what1: string, example1: string, what2?:string, example2?:string}} DataType
 */


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

/**
 * 
 * kiirja konzolra a tablazatot
 * 
 * @param {DataType[]} arr az adattomb ami a tablazat torzst tartalmazza
 * @param {HTMLDivElement} tbody a tablazat torzse 
 * 
 * @returns {void}
 */
function renderTable(arr, tbody){ // definialom a rendertable fuggvenyt 1 parameterrel
    tbody.innerHTML = ''; // uritem a tablebody div tartalmat
    for(const key in arr){ // vegigiteralok a dataarray tulajdonsagain, amik jelen esetben az indexek
        
        
         /**
         * @type {HTMLDivElement} a tablazatunk egy sora
         */
        const row = document.createElement('div') // letrehozok egy divet a sornak
        tbody.appendChild(row); // hozzacsatolom a tablazat torzsehez

        createCell(arr[key].where, row) // meghivjuk a cellacsinalast a where tulajdonsaggal
        createCell(arr[key].what1, row) // meghivjuk a cellacsinalast a what1 tulajdonsaggal
        createCell(arr[key].example1, row) // meghivjuk a cellacsinalast a example1 tulajdonsaggal

        if(arr[key].what2 && arr[key].example2){ // vizsgaljuk what2 es example2 definialva van-e
            // rowspan allitas helye
            /**
             * @type {HTMLDivElement} a masodik sora az aktualis elemnek
             */
           const row2 = document.createElement('div') // letrehozok egy divet
           tbody.appendChild(row2); // hozzacsatolom tbodyhoz

           createCell(arr[key].what2, row2) // meghivjuk a cellacsinalast a what2 tulajdonsaggal
           createCell(arr[key].example2, row2) // meghivjuk a cellacsinalast a example2 tulajdonsaggal
          
        }
    }
}

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

    createCell(newRow.where, row); // letrehozok egy cellat az where tartalommal (ezt el kene tarolni, hogy coslpant tudjunk allitani)

    createCell(newRow.what1, row); // letrehozok egy cellat az what1 tartalommal

    createCell(newRow.example1, row); // letrehozok egy cellat az example1 tartalommal

    if(newRow.example2){ // vizsgaljuk, hogy az example2 tulajdonsag definialva van-e
        /**
         * @type {HTMLSpanElement} a tablazatunk uj soranak negyedik cellaja
         */
        createCell(newRow.example2, row); //  letrehozunk egy cellat az example2 tulajdonsaggal
    }else{ //egyebkent
        // colspan allitas helye
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

/**
 * 
 * A bemeneti checkbox elem checked tulajdonsaga alapjan rejti el vagy jeleneti meg a jssection/htmlsectiont
 * 
 * @param {HTMLInputElement} checkboxinputelement a checkbox elem, amit vizsgalunk
 * @returns {void}
 */
function handleCheckbox(checkboxinputelement){ // definialunk egy segedfuggvenyt a checkbox kezelesere

    /**
     * @type {HTMLDivElement} a jssection divet tartalmazo valtozo
     */
    const jsSection = document.getElementById('jssection'); // lekerjuk a jssectiont id alapjan
    /**
     * @type {HTMLDivElement} a htmlsection divet tartalmazo valtozo
     */
    const htmlSection = document.getElementById('htmlsection'); // lekerjuk a htmlsectiont id alapjan 
    if(checkboxinputelement.checked){ // ha be van pipalva
       jsSection.classList.remove('hide'); // akkor toroljuk a hide osztalyt a jssectionhoz
       htmlSection.classList.add('hide'); // es hozzadjuk a hide osztalyt a htmlsectionrol
    }else{ //egyebkent
       jsSection.classList.add('hide'); // akkor hozzadjuk a hide osztalyt a jssectionrol
       htmlSection.classList.remove('hide'); // es toroljuk a hide osztalyt a htmlsectionhoz
    }
}

/**
 * 
 * Az esemenykezelo fuggveny amit definialunk
 * 
 * @param {Event} e az esemeny 
 * @returns {void}
 */
function checkboxEvtHandler(e){ // definialok egy fuggvenyt a checkbox esemenykezelojenek
     /**
     * @type {HTMLInputElement} a change esemeny targetje, a checkboxelem
     */
    const target = e.target; // beletesszuk egy valtozoba a targetet
    handleCheckbox(target); // meghivjuk a checkboxkezelo fuggvent az esemeny targetjevel
}