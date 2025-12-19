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
 * @type {HTMLDivElement} letrehozott div elem, ami tartalmazza a telepuleshez tartozo labelt, inputot, errort
 */
const telepDiv = document.createElement('div'); // letrehozunk egy divet a telepulesnek
jsform.appendChild(telepDiv); // hozzacsatoljuk a formhoz a divet.
/**
 * @type {HTMLLabelElement} letrehozott label az inputhoz
 */
const labelTelep = document.createElement('label') // letrehozunk egy labelt
labelTelep.htmlFor = 'elso'; // beallitjuk a for tulajdonsagba, hogy milyen id-hoz tartozik
labelTelep.innerText = 'Település' // beallitjuk a label szoveget
telepDiv.appendChild(labelTelep); // hozzacsatoljuk a div-hez a labelt
telepDiv.appendChild(document.createElement('br')); // beszurunk egy sortorest
/**
 * @type {HTMLInputElement} letrehozott input
 */
const telepInput = document.createElement('input') // letrehozunk egy inputot a telepulesnek
telepInput.id='elso'; // beallitunk neki egy id-t
telepInput.name='telepules'; // beallitunk neki egy nev tulajdonsagot
telepDiv.appendChild(telepInput); // hozzacsatoljuk az inputot a divhez
/**
 * @type {HTMLDivElement} letrehozott div az errornak
 */
const telepError = document.createElement('div');// letrehozunk egy divet az errornak
telepError.classList.add('error'); // hozzaadjuk az error osztalyt
telepDiv.appendChild(telepError); // hozzacsatoljuk az error divet a telepules divjehez

/**
 * @type {HTMLDivElement} letrehozott div elem, ami tartalmazza a agazathoz tartozo labelt, inputot, errort
 */
const agazatDiv = document.createElement('div'); // letrehozunk egy divet a agazatnak
jsform.appendChild(agazatDiv); // hozzacsatoljuk a formhoz a divet.
/**
 * @type {HTMLLabelElement} letrehozott label az inputhoz
 */
const labelAgazat = document.createElement('label') // letrehozunk egy labelt
labelAgazat.htmlFor = 'masodik'; // beallitjuk a for tulajdonsagba, hogy milyen id-hoz tartozik
labelAgazat.innerText = 'Ágazat1' // beallitjuk a label szoveget
agazatDiv.appendChild(labelAgazat); // hozzacsatoljuk a div-hez a labelt
agazatDiv.appendChild(document.createElement('br')); // beszurunk egy sortorest
/**
 * @type {HTMLInputElement} letrehozott input
 */
const agazatInput = document.createElement('input') // letrehozunk egy inputot a agazatnak
agazatInput.id='masodik'; // beallitunk neki egy id-t
agazatInput.name='agazat1'; // beallitunk nev tulajdonsagot az inputnak
agazatDiv.appendChild(agazatInput); // hozzacsatoljuk az inputot a divhez
/**
 * @type {HTMLDivElement} letrehozott div az errornak
 */
const agazatError = document.createElement('div');// letrehozunk egy divet az errornak
agazatError.classList.add('error'); // hozzaadjuk az error osztalyt
agazatDiv.appendChild(agazatError); // hozzacsatoljuk az error divet az agazat divjehez

/**
 * @type {HTMLDivElement} letrehozott div elem, ami tartalmazza a pelda1hez tartozo labelt, inputot, errort
 */
const peldaDiv = document.createElement('div'); // letrehozunk egy divet a agazatnak
jsform.appendChild(peldaDiv); // hozzacsatoljuk a formhoz a divet.
/**
 * @type {HTMLLabelElement} letrehozott label az inputhoz
 */
const labelPelda = document.createElement('label') // letrehozunk egy labelt
labelPelda.htmlFor = 'harmadik'; // beallitjuk a for tulajdonsagba, hogy milyen id-hoz tartozik
labelPelda.innerText = 'Példa1' // beallitjuk a label szoveget
peldaDiv.appendChild(labelPelda); // hozzacsatoljuk a div-hez a labelt
peldaDiv.appendChild(document.createElement('br')); // beszurunk egy sortorest
/**
 * @type {HTMLInputElement} letrehozott input
 */
const peldaInput = document.createElement('input') // letrehozunk egy inputot a pelda1nek
peldaInput.id='harmadik'; // beallitunk neki egy id-t
peldaInput.name='pelda1'; // beallitunk nev tulajdonsagot az inputnak
peldaDiv.appendChild(peldaInput); // hozzacsatoljuk az inputot a divhez
/**
 * @type {HTMLDivElement} letrehozott div az errornak
 */
const peldaError = document.createElement('div');// letrehozunk egy divet az errornak
peldaError.classList.add('error'); // hozzaadjuk az error osztalyt
peldaDiv.appendChild(peldaError); // hozzacsatoljuk az error divet a pelda1 divjehez

/**
 * @type {HTMLDivElement} letrehozott div elem, ami tartalmazza a masikagazathoz tartozo labelt, inputot, errort
 */
const masikAgazatDiv = document.createElement('div'); // letrehozunk egy divet a agazatnak
jsform.appendChild(masikAgazatDiv); // hozzacsatoljuk a formhoz a divet.
/**
 * @type {HTMLLabelElement} letrehozott label az inputhoz
 */
const labelMasikAgazat = document.createElement('label') // letrehozunk egy labelt
labelMasikAgazat.htmlFor = 'negyedik'; // beallitjuk a for tulajdonsagba, hogy milyen id-hoz tartozik
labelMasikAgazat.innerText = 'Ágazat2' // beallitjuk a label szoveget
masikAgazatDiv.appendChild(labelMasikAgazat); // hozzacsatoljuk a div-hez a labelt
masikAgazatDiv.appendChild(document.createElement('br')); // beszurunk egy sortorest
/**
 * @type {HTMLInputElement} letrehozott input
 */
const masikAgazatInput = document.createElement('input') // letrehozunk egy inputot a masikagazatnak
masikAgazatInput.id='negyedik'; // beallitunk neki egy id-t
masikAgazatInput.name='agazat2'; // beallitunk nev tulajdonsagot az inputnak
masikAgazatDiv.appendChild(masikAgazatInput); // hozzacsatoljuk az inputot a divhez
/**
 * @type {HTMLDivElement} letrehozott div az errornak
 */
const masikAgazatError = document.createElement('div');// letrehozunk egy divet az errornak
masikAgazatError.classList.add('error'); // hozzaadjuk az error osztalyt
masikAgazatDiv.appendChild(masikAgazatError); // hozzacsatoljuk az error divet a masikagazat divjehez

/**
 * @type {HTMLDivElement} letrehozott div elem, ami tartalmazza a pelda2hoz tartozo labelt, inputot, errort
 */
const masikPeldaDiv = document.createElement('div'); // letrehozunk egy divet a agazatnak
jsform.appendChild(masikPeldaDiv); // hozzacsatoljuk a formhoz a divet.
/**
 * @type {HTMLLabelElement} letrehozott label az inputhoz
 */
const labelMasikPelda = document.createElement('label') // letrehozunk egy labelt
labelMasikPelda.htmlFor = 'otodik'; // beallitjuk a for tulajdonsagba, hogy milyen id-hoz tartozik
labelMasikPelda.innerText = 'Példa2' // beallitjuk a label szoveget
masikPeldaDiv.appendChild(labelMasikPelda); // hozzacsatoljuk a div-hez a labelt
masikPeldaDiv.appendChild(document.createElement('br')); // beszurunk egy sortorest
/**
 * @type {HTMLInputElement} letrehozott input
 */
const masikPeldaInput = document.createElement('input') // letrehozunk egy inputot a peldanak
masikPeldaInput.id='otodik'; // beallitunk neki egy id-t
masikPeldaInput.name='pelda2'; // beallitunk nev tulajdonsagot az inputnak
masikPeldaDiv.appendChild(masikPeldaInput); // hozzacsatoljuk az inputot a divhez
/**
 * @type {HTMLDivElement} letrehozott div az errornak
 */
const masikPeldaError = document.createElement('div');// letrehozunk egy divet az errornak
masikPeldaError.classList.add('error'); // hozzaadjuk az error osztalyt
masikPeldaDiv.appendChild(masikPeldaError); // hozzacsatoljuk az error divet a pelda divjehez

/**
 * @type {HTMLButtonElement} a letrehozott gomb az urlap elkuldesehez
 */
const formButton = document.createElement('button'); // letrehozunk egy gombot
formButton.innerText = 'Hozzáadás' // beallitunk szoveget a gombra
jsform.appendChild(formButton); // hozzacsatoljuk a formhoz