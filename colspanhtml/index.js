/**
 * @type {HTMLButtonElement} a szimpla sor feliratu gomb
 */
const simpleButton = document.getElementById('simplebutton') // elkerem a szimplasort hozzaado gombot
simpleButton.addEventListener('click', function(){ // regisztralok egy esemenykezelot a szimplasor gomb click esemenyere
    console.log('szimpla sor kattintas') // kiiratok valamit a console-ra esemeny eseten, hogy lassam lefut-e az esemenykezelo
})