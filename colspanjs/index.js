/**
 * @type {string} Az Okori telepulesek oszlopfejlecenek
 */
const headTelepules = "Ókori település" // valtozo deklaralasa a fejlec elso cellajanak
/**
 * @type {string} Az Agazat oszlopfejlecenek
 */
const headAgazat = "Ágazat" // valtozo deklaralasa a fejlec masodik cellajanak
/**
 * @type {string} A Pelda oszlopfejlecenek
 */
const headPelda = "Példa" // valtozo deklaralasa a fejlec harmadik cellajanak

/**
 * @type {string} Az elso sor elso oszlop ertekenek: Athén
 */
const rowFirstAthenTelep = "Athén" // valtozo deklaralasa Athen elso soranak elso cellajara
/**
 * @type {string} Az elso sor masodik oszlop ertekenek: politika
 */
const rowFristAthencellAgazat = "politika" // valtozo deklaralasa Athen elso soranak masodik cellajara
/**
 * @type {string} Az elso sor harmadik oszlop ertekenek: demokrácia
 */
const rowFristAthencellPelda = "demokrácia" // valtozo deklaralasa Athen elso soranak harmadik cellajara

/**
 * @type {string} A masodik sor elso oszlop ertekenek: Athén
 */
const rowSecondAthenTelep = "Athén" // valtozo deklaralasa Athen masodik soranak elso cellajara
/**
 * @type {string} A masodik sor masodik oszlop ertekenek: tudomány
 */
const rowSecondAthenAgazat = "tudomány" // valtozo deklaralasa Athen masodik soranak masodik cellajara
/**
 * @type {string} A masodik sor harmadik oszlop ertekenek: filozófia
 */
const rowSecondAthenPelda = "filozófia" // valtozo deklaralasa Athen masodik soranak harmadik cellajara

/**
 * @type {string} A harmadik sor elso oszlop ertekenek: Egyiptom
 */
const rowEgyiptomTelep = "Egyiptom" // valtozo deklaralasa Egyiptom soranak elso cellajara
/**
 * @type {string} A harmadik sor masodik oszlop ertekenek: mezőgazdaság
 */
const rowEgyiptomAgazat = "mezőgazdaság" // valtozo deklaralasa Egyiptom soranak masodik cellajara
/**
 * @type {string} A harmadik sor harmadik oszlop ertekenek: csatornák
 */
const rowEgyiptomPeldaA = "csatornák" // valtozo deklaralasa Egyiptom soranak harmadik cellajara
/**
 * @type {string} A harmadik sor harmadik oszlop ertekenek: gátak
 */
const rowEgyiptomPeldaB = "gátak" // valtozo deklaralasa Egyiptom soranak negyedik cellajara

/**
 * @type {string} A negyedik sor elso oszlop ertekenek: Spárta
 */
const rowFirstSpartaTelep = "Spárta" // valtozo deklaralasa Sparta elso soranak elso cellajara
/**
 * @type {string} A negyedik sor masodik oszlop ertekenek: neveléstudomány
 */
const rowFirstSpartaAgazat = "neveléstudomány" // valtozo deklaralasa Sparta elso soranak masodik cellajara
/**
 * @type {string} A negyedik sor harmadik oszlop ertekenek: agogé
 */
const rowFirstSpartaPelda = "agogé" // valtozo deklaralasa Sparta elso soranak harmadik cellajara

/**
 * @type {string} Az otodik sor elso oszlop ertekenek: Spárta
 */
const rowSecondSpartaTelep = "Spárta" // valtozo deklaralasa Sparta masodik soranak elso cellajara
/**
 * @type {string} Az otodik sor masodik oszlop ertekenek: harcászat
 */
const rowSecondSpartaAgazat = "harcászat" // valtozo deklaralasa Sparta masodik soranak masodik cellajara
/**
 * @type {string} Az otodik sor harmadik oszlop ertekenek: hoplita
 */
const rowSecondSpartaPeldaA = "hoplita" // valtozo deklaralasa Sparta masodik soranak harmadik cellajara
/**
 * @type {string} Az otodik sor negyedik oszlop ertekenek: phalanx
 */
const rowSecondSpartaPeldaB = "phalanx" // valtozo deklaralasa Sparta masodik soranak negyedik cellajara


// A string konkatenaciora olyan szintaxist hasznalsz amilyet akarsz
console.log(headTelepules +" | "+ headAgazat +" | " + headPelda +"| |"); // Kiirom konzolra a tablazat fejlecet
console.log(`${rowFirstAthenTelep} | ${rowFristAthencellAgazat} | ${rowFristAthencellPelda} | |`) // Kiirom konzolra a tablazat 1. sorat
console.log(`${rowSecondAthenTelep} | ${rowSecondAthenAgazat} | ${rowSecondAthenPelda} | |`) // Kiirom konzolra a tablazat 2. sorat
console.log(`${rowEgyiptomTelep} | ${rowEgyiptomAgazat} | ${rowEgyiptomPeldaA} | ${rowEgyiptomPeldaB} |`) // Kiirom konzolra a tablazat 3. sorat
console.log(`${rowFirstSpartaTelep} | ${rowFirstSpartaAgazat} | ${rowFirstSpartaPelda} | |`) // Kiirom konzolra a tablazat 4. sorat
console.log(`${rowSecondSpartaTelep} | ${rowSecondSpartaAgazat} | ${rowSecondSpartaPeldaA} | ${rowSecondSpartaPeldaB} |`) // Kiirom konzolra a tablazat 5. sorat