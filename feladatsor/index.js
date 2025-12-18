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
 * @type {HTMLDivElement} az id-val rendelkezo szekcio, amit majd el tudunk rejteni
 */
const sectionDiv = document.createElement('div'); // szekcio div definialasa
sectionDiv.id = 'jssection'; // szekcio divnek adunk egy id-t
sectionDiv.classList.add('hide'); // hide osztaly hozzaadasa a css listahoz
document.body.appendChild(sectionDiv) // szekcio divet hozzacsatoljuk a bodyhoz

/**
 * @type {HTMLDivElement} a megjelenitendo tablazatunk
 */
const table = document.createElement('div'); // letrehozok egy divet
sectionDiv.appendChild(table); // hozzacsatolom a sectionhoz
/**
 * @type {HTMLDivElement} a tablazatunk fejlece
 */
const tableHead = document.createElement('div'); // letrehozok egy divet a fejlecnek
table.appendChild(tableHead); // hozzacsatolom a tabla divhez
renderHeader(headerList, tableHead); // kirenderelem a fejlecet a fuggveny meghivasanak segitsegevel
/**
 * @type {HTMLDivElement} egy div a tablazat torzsenek
 */
const tableBody = document.createElement('div'); // letrehozok egy divet
table.appendChild(tableBody); // hozzacsatolom a tablazathoz
renderTable(dataArray, tableBody); // meghivom a fuggvenyt ami kiirja a tablazatot consolera

// ################## fuggvenyecskek ##############
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
 * @type {HTMLInputElement} a checkboxelem
 */
const checkboxHtml = document.getElementById('tableselector'); // elkerjuk a checkboxot
handleCheckbox(checkboxHtml) //meghivjuk a checkbox kezelo fuggvenyt miutan betoltott minden elem
checkboxHtml.addEventListener('change', function(e){ // definialunk egy esemenykezelot a checkbox change esemenyere
    
    /**
     * @type {HTMLInputElement} a change esemeny targetje, a checkboxelem
     */
    const target = e.target; // beletesszuk egy valtozoba a targetet
    handleCheckbox(target); // meghivjuk a checkboxkezelo fuggvent az esemeny targetjevel
});

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