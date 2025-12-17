A munkákon méretellenörzést fogok végezni és teljes tartalomra is checkolom. Ha teljes az egyezés 2 különböző diák között, mindketten 1-est kapnak.


# Tier level A:
## Mappastruktura
```
.
├── colspanjs - itt csinálod Feladat1 Feladat2
│   ├── index.html
│   └── index.js
├── rowspanjs - itt csinálod Feladat3 Feladat4
│   ├── index.html
│   └── index.js
├── colspanhtml - itt csinálod Feladat 5
│   ├── index.html
│   └── index.js
├── rowspanhtml - itt csinálod Feladat 6
│   ├── index.html
│   └── index.js
├── feladatsor - itt csinálod a többit
│   ├── index.html
│   ├── functions.js
│   └── index.js
└── README.md
```
## Feladatok
Gyakorlás (kitérő)
Feladat 1: Console Colspan (1-9 commit)
Hozz létre egy mappát colspanjs néven, és készíts egy olyan alkalmazást, amely a táblázatot console-ra iratja ki. A táblázat "oszlop összevonást" tartalmaz.
Adj hozzá a html oldalhoz két gombot, ami emulálja az elem hozzáadást, és kiírja a megváltozott táblázatot console-ra.
Ezekre figyelj: Mi változók típusa, hogyan ismerjük fel az ismétlődő tevékenységeket, amelyeket ciklusba tudunk szervezni.

Feladat 2: Table colspan (10-13 commit)
Írd át az első feladatban implementált alkalmazást úgy, hogy rendereljen ki egy táblázatot, amely colspant tartalmaz. Frissítsd a gombokat is, hogy a táblázatot renderelje újra.
Ezekre figyelj: Figyeld meg, hogy a console-os megoldáshoz képest mennyit változott a logika.
Ha kész vagy, készíts egy másolatot indexcoltable.js néven az index.js-ről

Feladat 3: Console Rowspan (14-22 commit)
Hozz létre a repository gyökérkönyvtárában egy rowspanjs mappát, majd készíts egy olyan alkalmazást, amely a táblázatot console-ra iratja ki. A táblázat "sor összevonást" tartalmaz.
Adj hozzá a html oldalhoz két gombot, ami emulálja az elem hozzáadást, és kiírja a megváltozott táblázatot console-ra.
Ezekre figyelj: Hasonlítsd össze a rowspan és a colspanos console táblázatos implementációt.

Feladat 4: Table Rowspan (23-25 commit)
Írd át az első feladatban implementált alkalmazást úgy, hogy rendereljen ki egy táblázatot, amely rowspant tartalmaz. Frissítsd a gombokat is, hogy a táblázatot renderelje újra.
Ezekre figyelj: Figyeld meg, hogy a console-os megoldáshoz képest mennyit változott a logika.
Ha kész vagy, készíts egy másolatot indexrowtable.js néven az index.js-ről

Feladat 5: Table Html colspan
Készíts egy htmlcolspan mappát, amelyben az index.html tartalmazza a táblázat colspanos verzióját. Adj a tbody-hoz egy id-t, valamint ágyazz be egy index.js fájlt, majd hozd is létre. A javascript fájlban hozzd létre az elöző két feladathoz hasonló gombot, majd kattintásukra a html táblázat tbody-jához id alapján fűzz hozzá új sort. 
Ezekre figyelj: Mi a közös kódrész ebben a feladatban és az elözőben?

Feladat 6: Table Html rowspan
Készíts egy indexrow.html fájlt, amely tartalmazza a táblázat rowspanos verzióját. Adj a tbody-hoz egy id-t, valamint ágyazz be egy indexcolhtml.js fájlt, majd hozd is létre. A javascript fájlban hozzd létre az elöző két feladathoz hasonló gombot, majd kattintásukra a html táblázat tbody-jához id alapján fűzz hozzá új sort. 
Ezekre figyelj: Mi a közös kódrész ebben a feladatban és az elözőben?

(Kitérő vége)

Feladat 7: Hozz létre egy mappát feladatsor néven. A mappán belül helyezz el egy index.html, valamint egy index.js-t. Implementáld az első feladatát a választott dolgozatnak, valamint a táblázatok alá hozz létre kettő kettő gombot, amelyeket az adott táblához fűznek hozzá sorokat hasonlóan az elöző feladathoz.
Ezekre figyelj: Mennyiben változott a kód a korábbi feladatokhoz képest?

Feladat 8: Implementáld a dolgozat 2-es feladatát.

Feladat 9: Hozz létre egy formot egy formot a html táblázat alá.

Feladat 10: Hozz létre egy formot javascriptben a javascript táblázat alá.

Feladat 11: Implementáld az eseménykezelőt a html formhoz (validáció nélkül)

Feladat 12: Implementáld az eseménykezelőt a javascript formhoz (validáció nélkül)

Feladat 13: Implementáld a validációt a html formhoz

Feladat 14: Implementáld a validációt a javascript formhoz

Feladat 15: Vond össze a validációt a javascript és a html form között

## Mappastruktura

## Committáblázat
| Commit szám | Commit szövege        | Mit használhatok?           | Hogy néz ki?  | példa commit url |
|:-----------|:------:|:-------------:| :-----:|----:|
| 1. | console col tablazat | console.log | Kiírod konzolra a táblázatot | |
| 2. | console col valtozo bev | változó deklarálás | Kiírod konzolra a táblázatot | |
| 3. | console col object bev | változó lehet objektum is | Kiírod konzolra a tablazatot | |
| 4. | console col array bev | változó lehet tömb is | Kiírod konzolra a táblázatot | |
| 5. | console col elagazas | elágazást lehet használni egy adott sor kiírására | Kiírod konzolra a táblázatot | |
| 6. | console col ciklus | ciklust lehet használni a táblázat kiírására | Kiírod konzolra a táblázatot | |
| 7. | console col fuggveny | létrehozol egy függvényt, és meghívod | Kiírod konzolra a táblázatot | |
| 8. | console col simple gomb | létrehozol egy gombot és hozzáadod a htmlhez | Kiírod konzolra a táblázatot, van egy gomb a htmlen, amire ha clickelsz, akkor hozzáad egy új objektumot tömbhöz, és kiírja a frissített táblázatot | |
| 9. | console col double gomb | létrehozol egy újabb gombot és hozzáadod a htmlhez | Kiírod konzolra a táblázatot, van két gomb a htmlen. Ha az újonnan létrehozottra klikkelsz, akkor hozzáad egy új objektumot a tömbhöz, és kiírja a frissített táblázatot | |
| 10. | table col | A konzolos kiírás "celláit és sorait" lecseréled createElementekre  | Renderelsz egy táblázatot, a gombok a táblázatot frissítik| |
| 11. | table col header render | a header render függvényt létrehozod  | A táblázat fejléce szét can csúszva, mivel a törzsben 1 oszloppal több van| |
| 12. | table col header update | a header tömbjét frissíted, hogy string helyett objektumokat tartalmazzon aminek van colspan tulajdonsága is. Frissíted a headerrenderen belül található ciklus ciklusmagját| A táblázat újra jól néz ki, mert van colspan a fejlécben is | |
| 13. | table col render update | eddig globális változó volt a render függvénybe, ehelyett bevezetsz egy paramétert a függvénybe a tbody-nak, és átvezeted a függvényhívásoknál is (gombok eseménykezelője, és global).| Nem változik a működés | |
| 14. | console row tablazat | console.log | Kiírod konzolra a táblázatot | |
| 15. | console row valtozo bev | változó deklarálás | Kiírod konzolra a táblázatot | |
| 16. | console row object bev | változó lehet objektum is | Kiírod konzolra a tablazatot | |
| 17. | console row merge cell  | az összevont celláknál bevezetsz egy `|_` jelet | Kiírod konzolra a tablazatot | |
| 18. | console row array bev | változó lehet tömb is | Kiírod konzolra a táblázatot | |
| 19. | console row elagazas | elágazást lehet használni egy adott sor kiírására | Kiírod konzolra a táblázatot | |
| 20. | console row ciklus | ciklust lehet használni a táblázat kiírására | Kiírod konzolra a táblázatot | |
| 21. | console row fuggveny | létrehozol egy függvényt, és meghívod | Kiírod konzolra a táblázatot | |
| 22. | console row simple gomb | létrehozol egy gombot és hozzáadod a htmlhez | Kiírod konzolra a táblázatot, van egy gomb a htmlen, amire ha clickelsz, akkor hozzáad egy új objektumot tömbhöz, és kiírja a frissített táblázatot | |
| 23. | console row double gomb | létrehozol egy újabb gombot és hozzáadod a htmlhez | Kiírod konzolra a táblázatot, van két gomb a htmlen. Ha az újonnan létrehozottra klikkelsz, akkor hozzáad egy új objektumot a tömbhöz, és kiírja a frissített táblázatot | |
| 24. | table row | A konzolos kiírás "celláit és sorait" lecseréled createElementekre  | Renderelsz egy táblázatot, a gombok a táblázatot frissítik| |
| 25. | table row header render | a header render függvényt létrehozod  | A táblázat fejléce rendesen megjelenik | |
| 26. | table row render update | eddig globális változó volt a render függvénybe, ehelyett bevezetsz egy paramétert a függvénybe a tbody-nak, és átvezeted a függvényhívásoknál is (gombok eseménykezelője, és global).| Nem változik a működés | |

Tier Level B
Feladat 1: Hozz létre egy consolecol mappát, és implementálj egy olyan alkalmazást, amely console-on megjelenít egy "colspanos táblázatot". Fűzz hozzá a html oldalhoz két gombot, amelyek hozzáfűznek egy új objektumot a tömbhöz és újra megjelenítik console-on a táblázatot. 

Feladat 2: Hozz létre egy consolerow mappát, és implementálj egy olyan alkalmazást, amely console-on megjelenít egy "rowspanos táblázatot". Fűzz hozzá a html oldalhoz két gombot, amelyek hozzáfűznek egy új objektumot a tömbhöz és újra megjelenítik console-on a táblázatot.

Feladat 3: Hozz létre egy mappát feladatsor néven. Implementáld az első feladatot a feladatkiírás szerint, illetve adj mindkét táblázathoz 1-1 gombot, amelyek hozzáfűznek egy-egy sort a táblázatokhoz.

Feladat 4: Implementáld a dolgozat 2-es feladatát.

Feladat 5: Töröld a gombokat és implementáld a dolgozat 4-5-ös feladatát.

Feladat 6: Implementáld az eseménykezelőt validáció nélkül

Feladat 7: Implementáld a validációt

Tier Level C
Feladat 1: Hozz létre egy consolecol mappát, és implementálj egy olyan alkalmazást, amely console-on megjelenít egy "colspanos táblázatot". Fűzz hozzá a html oldalhoz két gombot, amelyek hozzáfűznek egy új objektumot a tömbhöz és újra megjelenítik console-on a táblázatot. 

Feladat 2: Hozz létre egy consolerow mappát, és implementálj egy olyan alkalmazást, amely console-on megjelenít egy "rowspanos táblázatot". Fűzz hozzá a html oldalhoz két gombot, amelyek hozzáfűznek egy új objektumot a tömbhöz és újra megjelenítik console-on a táblázatot.

Feladat 3: Hozz létre egy feladatsor mappát és implementáld a dolgozatot a feladatsor alapján.