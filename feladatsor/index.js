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
tableBody.id = 'jstbody'; // beallitunk azonositot a tablazat torzsenek
table.appendChild(tableBody); // hozzacsatolom a tablazathoz
renderTable(dataArray, tableBody); // meghivom a fuggvenyt ami kiirja a tablazatot consolera

/**
 * @type {HTMLInputElement} a checkboxelem
 */
const checkboxHtml = document.getElementById('tableselector'); // elkerjuk a checkboxot
handleCheckbox(checkboxHtml) //meghivjuk a checkbox kezelo fuggvenyt miutan betoltott minden elem
checkboxHtml.addEventListener('change', checkboxEvtHandler); // regisztralom az esemenykezelo fuggvent az eventlistenerre a fuggveny nevenek segitsegevel

/**
 * @type {HTMLFormElement} a javascriptben generált formot tartalmazó változó
 */
const jsform = generateForm(sectionDiv); // generalunk egy formot

jsform.addEventListener('submit', function(e){ // regisztralunk egy esemenykezelot a form submit esemenyere
    e.preventDefault(); // megakadalyozzuk az alapertelmezett mukodest az urlap submit esemenye soran

    /**
     * @type {HTMLFormElement} a submit esemeny targetje, a formelement
     */
    const target = e.target; // beleteszem valtozoba az esemeny targetjet

    // esetunkben a getElementById nem mukodne, hiszen mindket formon van elso id-val rendelkezo elem, es a getElementbyid csak az elso elofordulast adja vissza
    /**
     * @type {HTMLInputElement} az elso id-val rendelkezo input
     */
    const inputTelep = target.querySelector('#elso'); // elkerjuk queryselectorral az elso id-ju elemet az urlapon belul. lekerheted name tulajdonsag alapjan is, ha szeretned
    /**
     * @type {HTMLInputElement} az masodik id-val rendelkezo input
     */
    const inputAgazat = target.querySelector('#masodik'); // elkerjuk queryselectorral az masodik id-ju elemet az urlapon belul
    /**
     * @type {HTMLInputElement} az harmadik id-val rendelkezo input
     */
    const inputPelda = target.querySelector('#harmadik'); // elkerjuk queryselectorral az harmadik id-ju elemet az urlapon belul
    /**
     * @type {HTMLInputElement} az negyedik id-val rendelkezo input
     */
    const inputMasikAgazat = target.querySelector('#negyedik'); // elkerjuk queryselectorral az negyedik id-ju elemet az urlapon belul
    /**
     * @type {HTMLInputElement} az negyedik id-val rendelkezo input
     */
    const inputMasikPelda = target.querySelector('#otodik'); // elkerjuk queryselectorral az negyedik id-ju elemet az urlapon belul

    /**
     * @type {boolean} a valtozo aminek az erteke addig igaz, amig minden kotelezo input ki van toltve
     */
    let valid = true; // definialunk egy valid valtozot


    if(inputTelep.value == ""){ // vizsgaljuk ures-e a telepulest tartalmazo input
        /**
         * @type {HTMLDivElement} a telepules inputnak a parentdivje
         */
        const inputParent = inputTelep.parentElement; // elkerjuk azt az elemet amiben benne van az input a htmlen
        /**
         * @type {HTMLDivElement} a telepules inputhoz tartozo erroros div
         */
        const errorDiv = inputParent.querySelector('.error'); // a diven beluli elso error classal rendelkezo elemet lekerdezzuk
        errorDiv.innerText = 'Település kitöltése kötelező' // beallitjuk a div ertekenek a hibauzenetunket
        valid = false; // a valid valtozot hamisra allitjuk
    }

    if(inputAgazat.value == ""){ // vizsgaljuk ures-e az elso agazatot tartalmazo input
        /**
         * @type {HTMLDivElement} az agazat inputnak a parentdivje
         */
        const inputParent = inputAgazat.parentElement; // elkerjuk azt az elemet amiben benne van az input a htmlen
        /**
         * @type {HTMLDivElement} az agazat inputhoz tartozo erroros div
         */
        const errorDiv = inputParent.querySelector('.error'); // a diven beluli elso error classal rendelkezo elemet lekerdezzuk
        errorDiv.innerText = 'Ágazat1 kitöltése kötelező' // beallitjuk a div ertekenek a hibauzenetunket
        valid = false; // a valid valtozot hamisra allitjuk
    }

    if(inputPelda.value == ""){ // vizsgaljuk ures-e az elso példát tartalmazo input
        /**
         * @type {HTMLDivElement} az pelda inputnak a parentdivje
         */
        const inputParent = inputPelda.parentElement; // elkerjuk azt az elemet amiben benne van az input a htmlen
        /**
         * @type {HTMLDivElement} a pelda inputhoz tartozo erroros div
         */
        const errorDiv = inputParent.querySelector('.error'); // a diven beluli elso error classal rendelkezo elemet lekerdezzuk
        errorDiv.innerText = 'Példa1 kitöltése kötelező' // beallitjuk a div ertekenek a hibauzenetunket
        valid = false; // a valid valtozot hamisra allitjuk
    }

    if(valid){ // ha a valid valtozo igaz
        /**
         * @type {string} a telep inputba beirt ertek
         */
        const telepVal = inputTelep.value // beleteszem egy valtozoba az input mezobe irt tartalmat
        /**
         * @type {string} az agazat inputba beirt ertek
         */
        const agazatVal = inputAgazat.value // beleteszem egy valtozoba az input mezobe irt tartalmat
        /**
         * @type {string} a pelda1 inputba beirt ertek
         */
        const peldaVal = inputPelda.value // beleteszem egy valtozoba az input mezobe irt tartalmat
        /**
         * @type {string} az agazat2 inputba beirt ertek
         */
        const masikAgazatVal = inputMasikAgazat.value // beleteszem egy valtozoba az input mezobe irt tartalmat
        /**
         * @type {string} a pelda2 inputba beirt ertek
         */
        const masikPeldaVal = inputMasikPelda.value // beleteszem egy valtozoba az input mezobe irt tartalmat

        /**
         * @type {DataType} az uj objektum amit letrehozunk az inputok ertekeinek segitsegevel
         */
        const newObj ={} // definialunk egy ures objektumot
        newObj.where = telepVal; // where tulajdonsag megadasa
        newObj.what1 = agazatVal; // what1 tulajdonsag megadasa
        newObj.example1 = peldaVal; // example1 tulajdonsag megadasa
        if(masikAgazatVal && masikPeldaVal){ // viszgaljuk, hogy a masik 2 input ki van e toltve
            newObj.example2 = masikPeldaVal; //  ha ki van toltve, akkor beallitjuk az example2-t
            newObj.what2= masikAgazatVal; // es a what2-t
        }

        /**
         * @type {HTMLDivElement} a tablazat torzse
         */
        const tbody = document.getElementById('jstbody'); // elkerjuk azonosito alapjan a javascript tabla torzset
        dataArray.push(newObj); // az uj objektumot hozzaadjuk az adattombhoz
        renderTable(dataArray, tbody); // kirendereljuk az uj tablazattorzset a megvaltozott tomb segitsegevel
        target.reset(); // visszaallitjuk a formot alapertelmezettre. (toroljuk az inputokat)
    }
    

});


/**
 * @type {HTMLFormElement} a htmlformot tartozo valtozo, aminek a submit esemenyere esemenykezelot definialunk
 */
const htmlForm = document.getElementById('htmlform'); // elkerjuk a htmlformot azonosito alapjan
htmlForm.addEventListener('submit', function(e){ // definialunk egy submit esemenykezelot a html formhoz
    e.preventDefault(); // megakadalyozzuk az alapertelmezett mukodest az urlap submit esemenye soran

    /**
     * @type {HTMLFormElement} a submit esemeny targetje, a formelement
     */
    const target = e.target; // beleteszem valtozoba az esemeny targetjet

    /**
     * @type {HTMLInputElement} az elso id-val rendelkezo input
     */
    const inputTelep = target.querySelector('#elso'); // elkerjuk queryselectorral az elso id-ju elemet az urlapon belul. lekerheted name tulajdonsag alapjan is, ha szeretned
    /**
     * @type {HTMLInputElement} az masodik id-val rendelkezo input
     */
    const inputAgazat = target.querySelector('#masodik'); // elkerjuk queryselectorral az masodik id-ju elemet az urlapon belul
    /**
     * @type {HTMLInputElement} az harmadik id-val rendelkezo input
     */
    const inputPelda = target.querySelector('#harmadik'); // elkerjuk queryselectorral az harmadik id-ju elemet az urlapon belul
    /**
     * @type {HTMLInputElement} az negyedik id-val rendelkezo input
     */
    const inputMasikPelda = target.querySelector('#negyedik'); // elkerjuk queryselectorral az negyedik id-ju elemet az urlapon belul

    /**
     * @type {boolean} a valtozo aminek az erteke addig igaz, amig minden kotelezo input ki van toltve
     */
    let valid = true; // definialunk egy valid valtozot


    if(inputTelep.value == ""){ // vizsgaljuk ures-e a telepulest tartalmazo input
        /**
         * @type {HTMLDivElement} a telepules inputnak a parentdivje
         */
        const inputParent = inputTelep.parentElement; // elkerjuk azt az elemet amiben benne van az input a htmlen
        /**
         * @type {HTMLDivElement} a telepules inputhoz tartozo erroros div
         */
        const errorDiv = inputParent.querySelector('.error'); // a diven beluli elso error classal rendelkezo elemet lekerdezzuk
        errorDiv.innerText = 'Település kitöltése kötelező' // beallitjuk a div ertekenek a hibauzenetunket
        valid = false; // a valid valtozot hamisra allitjuk
    }

    if(inputAgazat.value == ""){ // vizsgaljuk ures-e az elso agazatot tartalmazo input
        /**
         * @type {HTMLDivElement} az agazat inputnak a parentdivje
         */
        const inputParent = inputAgazat.parentElement; // elkerjuk azt az elemet amiben benne van az input a htmlen
        /**
         * @type {HTMLDivElement} az agazat inputhoz tartozo erroros div
         */
        const errorDiv = inputParent.querySelector('.error'); // a diven beluli elso error classal rendelkezo elemet lekerdezzuk
        errorDiv.innerText = 'Ágazat1 kitöltése kötelező' // beallitjuk a div ertekenek a hibauzenetunket
        valid = false; // a valid valtozot hamisra allitjuk
    }

    if(inputPelda.value == ""){ // vizsgaljuk ures-e az elso példát tartalmazo input
        /**
         * @type {HTMLDivElement} az pelda inputnak a parentdivje
         */
        const inputParent = inputPelda.parentElement; // elkerjuk azt az elemet amiben benne van az input a htmlen
        /**
         * @type {HTMLDivElement} a pelda inputhoz tartozo erroros div
         */
        const errorDiv = inputParent.querySelector('.error'); // a diven beluli elso error classal rendelkezo elemet lekerdezzuk
        errorDiv.innerText = 'Példa1 kitöltése kötelező' // beallitjuk a div ertekenek a hibauzenetunket
        valid = false; // a valid valtozot hamisra allitjuk
    }

    if(valid){ // vizsgaljuk, hogy a valid valtozo erteke igaz-e
        /**
         * @type {string} a telep inputba beirt ertek
         */
        const telepVal = inputTelep.value // beleteszem egy valtozoba az input mezobe irt tartalmat
        /**
         * @type {string} az agazat inputba beirt ertek
         */
        const agazatVal = inputAgazat.value // beleteszem egy valtozoba az input mezobe irt tartalmat
        /**
         * @type {string} a pelda1 inputba beirt ertek
         */
        const peldaVal = inputPelda.value // beleteszem egy valtozoba az input mezobe irt tartalmat
        /**
         * @type {string} a pelda2 inputba beirt ertek
         */
        const masikPeldaVal = inputMasikPelda.value // beleteszem egy valtozoba az input mezobe irt tartalmat

        /**
         * @type {HtmlDataType} az objektum amit az inputok ertekei alapjan eloallitodik
         */
        const newObj ={} // definialunk egy ures objektumot.
        newObj.where = telepVal // beallitjuk a telepulest
        newObj.what = agazatVal // beallitjuk az agazatot
        newObj.example1 = peldaVal; // beallitjuk a peldat
        if(masikPeldaVal){ // ha van definialva masik pelda
            newObj.example2 = masikPeldaVal; // beallitjuk a masikpelda tulajdonsag erteket is
        }
        
        /**
         * @type {HTMLDivElement} a html tablazatunk torzse
         */
        const tbody = document.getElementById('htmltbody'); // elkerjuk a html tablazat torzset

        newRowAppend(newObj, tbody); // hozzafuzzuk a htmlhez az uj objektum alapjan a sorokat
        target.reset(); // alapertelmezettre allitjuk a formot (toroljuk az inputokat)
    }
    
})