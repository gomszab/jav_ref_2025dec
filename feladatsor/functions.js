/**
 * @typedef {{where: string, what1: string, example1: string, what2?:string, example2?:string}} DataType
 * @typedef {{where: string, what: string, example1: string, example2?: string}} HtmlDataType
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
 * @param {HtmlDataType} newRow a hozzafuzendo sor adatai
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

    createCell(newRow.what, row); // letrehozok egy cellat az what1 tartalommal

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

/**
 * 
 * Letrehoz egy divet inputtal, labellel, es error divvel, majd hozzacsatolja a formhoz
 * 
 * @param {string} labelText a label szoveget tartalmazza 
 * @param {string} id az input id-jet tartalmazza
 * @param {string} name az input name-jet tartalmazza
 * @param {HTMLFormElement} form az urlapot tartalmazza
 * 
 * @returns {void}
 */
function createInputForm(labelText, id, name, form){ // definialunk egy fuggvenyt a kodismetles csokkentesenek erdekeben

    /**
     * @type {HTMLDivElement} letrehozott div elem, ami tartalmazni fogja a labelt, inputot, errort
     */
    const divForForm = document.createElement('div'); // letrehozunk egy divet a agazatnak
    form.appendChild(divForForm); // hozzacsatoljuk a formhoz a divet.
    /**
     * @type {HTMLLabelElement} letrehozott label az inputhoz
     */
    const labelForInput = document.createElement('label') // letrehozunk egy labelt
    labelForInput.htmlFor = id; // beallitjuk a for tulajdonsagba, hogy milyen id-hoz tartozik
    labelForInput.innerText = labelText // beallitjuk a label szoveget
    divForForm.appendChild(labelForInput); // hozzacsatoljuk a div-hez a labelt
    divForForm.appendChild(document.createElement('br')); // beszurunk egy sortorest
    /**
     * @type {HTMLInputElement} letrehozott input
     */
    const inputElement = document.createElement('input') // letrehozunk egy inputot
    inputElement.id=id; // beallitunk neki egy id-t
    inputElement.name=name; // beallitunk nev tulajdonsagot az inputnak
    divForForm.appendChild(inputElement); // hozzacsatoljuk az inputot a divhez
    /**
     * @type {HTMLDivElement} letrehozott div az errornak
     */
    const errorForInput = document.createElement('div');// letrehozunk egy divet az errornak
    errorForInput.classList.add('error'); // hozzaadjuk az error osztalyt
    divForForm.appendChild(errorForInput); // hozzacsatoljuk az error divet az elején létrehozott divhez

}

/**
 * 
 * Letrehoz egy formot es visszater vele
 * 
 * @param {HTMLDivElement} section ahova letrehozzuk a formunkat
 * 
 * @returns {HTMLFormElement}
 */
function generateForm(section){ // definialunk egy fuggvenyt ami legeneralja a fuggvenyt

    /**
     * @type {{label: string, id: string, name: string}} a formfieldek konfiguracioit tartalmazo tomb
     */
    const formFields = [ // definialunk egy tombot
        { // elso objektum
            label: 'Település', // label tulajdonsag
            id: 'elso', // id tulajdonsag
            name: 'telepules' // name tulajdonsag
        },
        {// masodik objektum
            label: 'Ágazat1',// label tulajdonsag
            id: 'masodik', // id tulajdonsag
            name: 'agazat1' // name tulajdonsag
        },
        {// harmadik objektum
            label: 'Példa',// label tulajdonsag
            id: 'harmadik',// id tulajdonsag
            name: 'pelda1' // name tulajdonsag
        },
        {// negyedik objektum
            label: 'Ágazat2',// label tulajdonsag
            id: 'negyedik',// id tulajdonsag
            name: 'agazat2' // name tulajdonsag
        },
        {// otodik objektum
            label: 'Példa2',// label tulajdonsag
            id: 'otodik',// id tulajdonsag
            name: 'pelda2'// name tulajdonsag
        },
    ]

    /**
     * @type {HTMLFormElement} letrehozott form a javascript tablazatnak
     */
    const jsform = document.createElement('form'); // letrehozunk egy formot
    jsform.id = 'jsform'; // beallitunk neki id-t
    section.appendChild(jsform); // hozzacsatoljuk a formot a section parameterhez


    for(const formField of formFields){ // vegigiteralok a tombon
        createInputForm(formField.label, formField.id, formField.name, jsform); // letrehozom a divet az aktualis elem alapjan
    }

    /**
     * @type {HTMLButtonElement} a letrehozott gomb az urlap elkuldesehez
     */
    const formButton = document.createElement('button'); // letrehozunk egy gombot
    formButton.innerText = 'Hozzáadás' // beallitunk szoveget a gombra
    jsform.appendChild(formButton); // hozzacsatoljuk a formhoz
    return jsform; // visszaterunk a letrehozott formal
}