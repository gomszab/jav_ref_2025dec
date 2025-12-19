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

/**
 * @type {HTMLInputElement} a checkboxelem
 */
const checkboxHtml = document.getElementById('tableselector'); // elkerjuk a checkboxot
handleCheckbox(checkboxHtml) //meghivjuk a checkbox kezelo fuggvenyt miutan betoltott minden elem
checkboxHtml.addEventListener('change', checkboxEvtHandler); // regisztralom az esemenykezelo fuggvent az eventlistenerre a fuggveny nevenek segitsegevel

/**
 * @type {HTMLFormElement} letrehozott form a javascript tablazatnak
 */
const jsform = document.createElement('form'); // letrehozunk egy formot
jsform.id = 'jsform'; // beallitunk neki id-t
sectionDiv.appendChild(jsform); // hozzacsatoljuk a formot a jssectionhoz

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
for(const formField of formFields){ // vegigiteralok a tombon
 createInputForm(formField.label, formField.id, formField.name, jsform); // letrehozom a divet az aktualis elem alapjan
}

/**
 * @type {HTMLButtonElement} a letrehozott gomb az urlap elkuldesehez
 */
const formButton = document.createElement('button'); // letrehozunk egy gombot
formButton.innerText = 'Hozzáadás' // beallitunk szoveget a gombra
jsform.appendChild(formButton); // hozzacsatoljuk a formhoz

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