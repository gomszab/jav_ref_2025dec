- [Követelmények](#követelmények)
- [Javítás menete:](#javítás-menete)
- [Visszalépés](#visszalépés)
- [Így használd a referencia repót](#így-használd-a-referencia-repót)
- [Tesztelés menete (Tier B és Tier C)](#tesztelés-menete-tier-b-és-tier-c)
- [Beállítások](#beállítások)
- [Szintlépés](#szintlépés)
- [Feladatok](#feladatok)
  - [Tier Level A](#tier-level-a)
    - [Mit fogunk csinálni?](#mit-fogunk-csinálni)
    - [Mappastruktúra](#mappastruktúra)
    - [Feladat 1: Console Colspan (1-9 commit)](#feladat-1-console-colspan-1-9-commit)
    - [Feladat 2: Table colspan (10-13 commit)](#feladat-2-table-colspan-10-13-commit)
    - [Feladat 3: Console Rowspan (14-23 commit)](#feladat-3-console-rowspan-14-23-commit)
    - [Feladat 4: Table Rowspan (24-26 commit)](#feladat-4-table-rowspan-24-26-commit)
    - [Feladat 5: Table Html colspan (27-31 commit)](#feladat-5-table-html-colspan-27-31-commit)
    - [Feladat 6: Table Html rowspan (32-36 commit)](#feladat-6-table-html-rowspan-32-36-commit)
  - [Tier Level B](#tier-level-b)
    - [Mit fogunk csinálni?](#mit-fogunk-csinálni-1)
    - [Mappastruktúra](#mappastruktúra-1)
    - [Feladat 1: Feladatsor: A 1. feladat (1 commit)](#feladat-1-feladatsor-a-1-feladat-1-commit)
    - [Feladat 2: Select implementalas (2-3 commit)](#feladat-2-select-implementalas-2-3-commit)
    - [Feladat 3: Checkbox implementalas (4-6 commit)](#feladat-3-checkbox-implementalas-4-6-commit)
    - [Feladat 4: Feladatsor: A 2. feladat (7-8 commit)](#feladat-4-feladatsor-a-2-feladat-7-8-commit)
    - [Feladat 5: Feladatsor: A 4-5. feladat (9-15 commit)](#feladat-5-feladatsor-a-4-5-feladat-9-15-commit)
    - [Feladat 6: Feladatsor: B 1. feladat, B 2. feladat (16-17 commit)](#feladat-6-feladatsor-b-1-feladat-b-2-feladat-16-17-commit)
    - [Feladat 7: Feladatsor: B 1. feladat, B 2. feladat validáció (18-22 commit)](#feladat-7-feladatsor-b-1-feladat-b-2-feladat-validáció-18-22-commit)
    - [(opcionális) Feladat 8: Optimalizálás](#opcionális-feladat-8-optimalizálás)
  - [Tier Level C](#tier-level-c)
    - [Mit fogunk csinálni?](#mit-fogunk-csinálni-2)
- [GYIK](#gyik)
      - [Mennyi idő alatt lehet megcsinálni?](#mennyi-idő-alatt-lehet-megcsinálni)


# Követelmények
- Mind a 4 dolgozatfeladatsort kell megcsinálni, mindegyiket az aktuális tierleveleden. Repó elnevezési utmutató [itt](#beállítások)
- A munkádat addig nézem, amíg nem használsz olyan beépített függvényt, ami órán nem hangzott el.
- a függvényeidet úgy nevezed el, ahogyan akarod
- A commit_checker hookot kötelező használni, beállítási útmutató [itt](#beállítások)
- A kommitokat manuálisan is át fogom nézni
- Ha kész vagy az elsővel, írj rám Teamsen, átnézem manuálisan a kódodat, és döntök, hogy tudsz-e feljebb menni
- Ha bármelyik type bármelyik commitban hibás, akkor újra kell csinálnod az egészet egy új feladatsorral.
- Ha bármelyik commitban js syntax error van, akkor újra kell csinálnod az egészet
- Ha valakivel egyezik méretre és tartalomra a munkád, akkor bukik a javítás, és kapsz egy egyest
- A commitok szövege adott, commit elött mindig ellenőrízd, hogy az elvárt kimenet van.
- Ha utólag jössz rá, hogy valamelyik commitban valami hibásan működött, akkor minden utána lévő commitot visszavonsz, kijavítod, és újraírod a dolgot. A visszalépés guide [itt](#visszalépés), amennyiben ez nem történik meg, és összevissza commitokat látok miután végeztél, akkor újra kell csinálnod az egészet egy új feladatsorral
- Minden feladatsornak új repositoryt csinálsz (Tehát amikor végigértél egy Tier levelen, és új feladatsort választasz. Feladatsoronként 1 repó magyarán), a repo elnevezési guide [itt](#beállítások)
- A munkákon méretellenörzést fogok végezni és teljes tartalomra is checkolom. Ha teljes az egyezés 2 különböző diák között, mindketten 1-est kapnak.
- AI használata tiltott, ha felmerül a gyanu, akkor kérdés nélkül bevágom a karót.
- Ha 1-est kapsz, akkor újrakezded a feladatot, és a határidők továbbra is vonatkoznak rád
- A példakódban diveket és spanokat használok, neked természetesen táblázatokat kell csinálnod
- Határidők: január 14 16:00, január 28 16:00
- Ha kevesebb, mint 2 egész C van vissza (tehát egyet már elkezdtél), akkor kapsz 1 nap haladékot
- Ha bárhol kérdés van, szólsz, kérdezel. Ha kóddal kapcsolatos kérdésed van és nem megy a commit, akkor az index.js fájl tartalmát [pastebin.com](https://pastebin.com/) on beilleszted, kiválasztod a Syntax highlightingnál a javascriptet, és Create new paste, a linket meg elküldöd.
- Ha észreveszem a komment vagy a változónév egyezéseket (akár az én változóneveimel/kommentjeimmel), akár más pótlóval, akkor karó
- A commitok során meg van határozva, hogy használhatsz-e függvényt/változót/ciklust/etc. Ha az adott commitnál nem csinálok valamit, akkor te sem tehetsz olyant.
- A Tier level B és Tier Level C-t csak akkor fogadom el, ha a funkcionális teszten átment 100%-on.
- A lépések között az eljárások bevezetésének menetét kötelező követni. Kreatív megoldásokat alkalmazni csak azután lehet, miután a szükséges feladatok megvannak
- Neked nem DIV-eket kell használnod, hanem a table, thead, tr, stb...
- Ha kimaradt egy kommit, [lépj vissza](#visszalépés) addig ameddig folytonos
- A commitüzeneteket az adott cellából másold
- Ha olyat csinálnál, amit én nem csinálok, kérdezd meg, hogy szabad-e.
- Szakmai diskurzusra mindig nyitott vagyok, ha felmerül kérdés, hogy miért így csináltam a reg repóban, akkor bátran tedd fel a kérdés. A gyik szekcióba beleteszem a fontos kérdéseket
- A nem releváns kódot ne kommentezd ki, hanem töröld. Githubon commithistory-ban látni fogod minden commitodat visszamenőleg.
- Tier B és Tier C esetén amikor a feladatot kell megoldani, a dolgozat szövege a mérvadó (nem a ref repót kell másolni)

# Javítás menete:
Gombos Szabolcs vagyok, A tieres, szeretnék javítani.
1. Kiválasztom a kedvenc feladatsorom a [Beállítások](#beállítások)-ból pl.: xx_vilagirodalom
2. Létrehozom a repót a github accountomon xx_vilagirodalom néven
3. Cloneozom a repómat, letöltöm a scriptet a [Beállítások](#beállítások) szerint
4. Mivel A tieres vagyok, rám az [A tier](#tier-level-a) feladatai vonatkoznak, így a referencia repó szerint végighaladok azon a 36 lépésen
5. Kész vagyok, szólok a tanárnak, ő átnézi, megállapítja, hogy mehetek-e tovább vagy sem.

Gombos Szabolcs vagyok, a tanár azt mondta B tier (vagy mert A-s voltam, vagy mert alapból B-s).
1. Kiválasztom a kedvenc feladatsorom a [Beállítások](#beállítások)-ból pl.: nyugatosok (az xx_vilagirodalom témát nem választhatom, ha A-ban választottam)
2. Létrehozom a repót a github accountomon xx_vilagirodalom néven
3. Cloneozom a repómat, letöltöm a scriptet a [Beállítások](#beállítások) szerint
4. Mivel B tieres vagyok, rám az [B tier](#tier-level-b) feladatai vonatkoznak, így a referencia repó szerint végighaladok azon a 22 lépésen + ha van egyéb gondolatom, akkor hozzáteszem 23. ba azt
5. Kész vagyok, szólok a tanárnak, ő átnézi, megállapítja, hogy mehetek-e tovább vagy sem.

Gombos Szabolcs vagyok, a tanár azt mondta C tier
1. Kiválasztom a kedvenc feladatsorom (vagy ami maradt) pl.: irodalom_mufaj
2. A dolgozat feladatait követve megoldom a feladatsort (a commitjaim a doga commitjait követik)
3. Kész vagyok, szólok a tanárnak, ő átnézi, megállapítja, hogy mehetek-e tovább vagy sem.


# Visszalépés
Ha későn veszed észre, hogy már commitok óta hibás az implementációd, akkor vissza kell lépni az utolsó helyes commitra, és onnan előről kezdeni a feladat megoldását. Ha alakadsz, írj rám!
4 lépésre van szükségünk ehhez:
1. Megkeressük a commit history-ban az utolsó helyes commitot a repositorynknál
2. A commit sorainak jobb oldalán a kettő <> mellett balra van egy kis duplanégyzet, arra rákattintunk, ez vágólapra másolja a commit azonosítóját
3. kiadjuk a következő parancsot, a `(commitazonosito)` helyére illesszük be a vágólapon lévő commit azonosítót 
 ```bash 
git reset --hard (commitazonosito) 
```
1. A következő parancs visszavonja a commit azonosító utáni összes commitunkat a githubon is:
```bash
git push --force
```
például:
```bash
git reset --hard 17c53c25427ad2a1d721e1f556b33526947ad450
git push --force
```

# Így használd a referencia repót
Egyik legegyszerűbb módja a referenciarepó használatának, ha clone-ozod magadhoz. Minden commitnál az utolsó oszlopban található a demó commit azonosító (a link utáni oszlop). Miután clone-oztad, belelépsz a mappába, és kiadod a következő parancsot:
```bash
git checkout (commitazonosito)
```
A commitazonosito helyére beilleszted pl ezt:
```bash
git checkout 17c53c25427ad2a1d721e1f556b33526947ad450
```
ez a ```console col object bev``` commitra visz, ahol látod a kódot, és böngészőben meg tudod nyitni a html-t is, ha meg akarod nézni hogyan működik a referenciamegoldás.
Ha végeztél, vissza tudsz menni az eredeti commitra:
```bash
git checkout main
```
Ha véletlenül módosítottál valamelyik fájlon, akkor nem fogja engedni az ugrálást a commitok között.
Ekkor add ki a következő parancsot:
```bash
git reset --hard
```
Ha alakadsz, írj rám!

# Tesztelés menete (Tier B és Tier C)
1. Csinálj egy mappát valahol. (ne a repó mappájába!)
2. Töltsd le a legutóbbi verzióját a [tesztelő alkalmazásnak](https://github.com/gomszab/table_functional_tester/releases/tag/v0.0.6ae)
3. Másold bele a mappába (ne a meghajtó gyökerébe)
4. Csinálj egy config.json-t a feladatsor mappába az index.html mellé, és másold be a tartalmát a config.jsonnak, amit a [táblázatban](#beállítások) megtalálsz
5. git-bash-el navigálj a tablefunctionaltester alkalmazáshoz
6. Kezd el gépelni a ./table_functional_tester majd tab-al egészítsd ki, tegyél egy aposztrófot és add meg az abszolút elérését az index.html fájlodnak
(Az első futtatás lassabb lesz, mert letölt egy chrome-ot a háttérben, ezt a program mappája feletti mappában fogod látni headless_chrome néven, ne töröld)

pl.: ``` ./table_functional_tester-windows-latest.exe "..\xx_vilagirodalom\feladatsor\index.html" ``` a konzolon ilyesmit kell keress:
```
*********************************************************
29 tesztből 24 sikeres, 0 sikertelen, 5 kihagyott
*********************************************************
```
ha 0 sikertelen van, akkor miután én is futtattam magamnál, megnézem a tartalmi részt, egyébként megírom a bukó tesztek számát, és hogy mi bukott.
Ha alakadsz, írj rám!


# Beállítások
Miután kiválasztottad melyik feladatot szeretnéd csinálni, csinálsz egy új repót (lehet privát is), az alábbi táblázat alapján:
| doga csoport | repository neve | teszt config |
| :-----------: |:-------------:|:--------:|
| [A csoport](./Acsoport.pdf) | xx_vilagirodalom | [config.json](./configA.json)|
| [B csoport](./Bcsoport.pdf) | nyugatosok |[config.json](./configB.json)|
| [C csoport](./Ccsoport.pdf) | irodalom_mufaj |[config.json](./configC.json)|
| [D csoport](./Dcsoport.pdf) | irodalom_temakor |[config.json](./configD.json)|

Cloneozod a repositoryt, majd belenavigálsz git-bash segítségével és kiadod az alábbi parancsot (az egész parancs egy sor, egyben másold ki):
```bash
curl -fsSL "https://gist.githubusercontent.com/gomszab/56aa1947132d2be70e48fcea2e606a1a/raw/b8d43cc8fb4c0f45e2e2186a135ed5c6133deeb4/setup.sh" | tr -d '\r' | bash -c "bash"
```
Elképzelhető, hogy [CRYPT_E_NO_REVOCATION_CHECK](https://github.com/gomszab/jav_ref_2025okt/blob/main/hiba.md) hibát kapsz. Ebben az esetben a következő parancsal próbálkozz:
```bash
curl --ssl-no-revoke -fsSL "https://gist.githubusercontent.com/gomszab/56aa1947132d2be70e48fcea2e606a1a/raw/06958e9539e631d06b8b103be4f78ec0ee0dea9d/setup.sh" | tr -d '\r' | bash -c "bash"
```
A script csakis a git repó mappában adható ki. Miután feltelepült a script minden commit előtt ellenőrzi, hogy az index.js fájl változtatásai megfelelnek-e a [követelményeknek](#követelmények). A program forráskódját [itt](https://github.com/gomszab/commit_checker), a scriptet [itt](https://gist.githubusercontent.com/gomszab/56aa1947132d2be70e48fcea2e606a1a/raw/b8d43cc8fb4c0f45e2e2186a135ed5c6133deeb4/setup.sh), a hookot windows esetén [itt](https://gist.githubusercontent.com/gomszab/60aabe61ecf5009afd4f43f1d5533658/raw/4b3dce68dc7397aaefd04b5a56f239481a838391/pre-commit.windows.sh), linux esetén [itt](https://gist.githubusercontent.com/gomszab/60aabe61ecf5009afd4f43f1d5533658/raw/4b3dce68dc7397aaefd04b5a56f239481a838391/pre-commit.linux.sh) találod. Nem tartalmaz sem keyloggert, sem virust, és aktív internetkapcsolat sem kell hozzá (miután persze a scriptet futtattad). Elvileg "Kész vagyunk" feliratot kell látnod miután ez lefutott.

# Szintlépés
- Ha sikeresen végigmentél a tier levelednek megfelelő feladatsoron, akkor feljebb léphetsz (ezt a kiértékelés alapján fogod megtudni)
- Ha rámírsz, hogy készen vagy, két napon belül elbírálom, hogy tovább léphetsz-e (funkcionálisan tesztelem commitonként, elolvasom a commentjeidet stb.). Pontosan akkor tudom megmondani, hogy mikorra fogom elbírálni, amikor rámírsz, hogy készen vagy
- Előreláthatólag a következő előremenetellel lehet számolni azoknak, akik a legjobb (A tierbe) kerültek: 1 A, 1 B, 2 C, de ez egyénileg eltérhet.

# Feladatok
Szeretnélek megkérni (nem kötelező jelleggel), hogy a munkám segítése érdekében jegyezz nagyságrendi időket a feladatok során. Mire gondolok? Elolvasod a feladatot, becsülsz rá egy időt pl.: 5 óra. Ha elkészítetted a feladatot, akkor nagyságrendi időt szintén felirod pl.: 3 óra 25 perc volt, akkor 3-4 óra. Ez neked is hasznos, mert gyakran kell becsülni a szakmában 3 mondat alapján, hogy mennyi időt fogsz a feladattal tölteni. Ha nagyon nagyot becsülsz, akkor szólni fognak, hogy túl sok (tanulásnál mondjuk ilyen nincs), ha keveset, akkor meg meg fogsz szakadni.
## Tier Level A
### Mit fogunk csinálni?
A programozástechnikai alapokat (vezérlési szerkezetek, deklarációk) egy console.log-os alkalmazáson keresztül ismerjük meg. Mindeközben átvesszük a kódduplikációt csökkentő elemeket, és folyamatosan szépítjük a kódunkat.
A kiiratott cellák határolói egyszerű függőleges vonalak. Tetszés szerint formázhatod szóközökkel.  
pl.:  
colspanos:
```
Ókori település | Ágazat | Példa | |
Athén | politika | demokrácia |  |
Athén | tudomány | filozófia |  |
Egyiptom | mezőgazdaság | csatornák | gátak |
Spárta | neveléstudomány | agogé |  |
Spárta | harcászat | hoplita | phalanx |
```
ez megformázva így is kinézhet:
```
Ókori település |  Ágazat         | Példa      |         |
Athén           | politika        | demokrácia |         |
Athén           | tudomány        | filozófia  |         |
Egyiptom        | mezőgazdaság    | csatornák  |  gátak  |
Spárta          | neveléstudomány | agogé      |         |
Spárta          | harcászat       | hoplita    | phalanx |
```
rowspanos:  
```
Ókori település | Ágazat | Példa |
Athen | politika | demokrácia |
 |_ | tudomány | filozófia |
Egyiptom | mezőgazdaság | gátak |
Spárta | neveléstudomány | agogé |
 |_ | harcászat | hoplita |
```
megformázva szóközökkel:
```
Ókori település | Ágazat          | Példa      |
    Athen       | politika        | demokrácia |
       |_       | tudomány        | filozófia  |
   Egyiptom     | mezőgazdaság    | gátak      |
    Spárta      | neveléstudomány | agogé      |
       |_       | harcászat       | hoplita    |
```
A console.log-os táblázatunkat átalakítjuk ezután rendes táblázatokká átismételve a Web API fontosabb függvényeit.  
Az utolsó lépésben megnézzük hogyan működik a html elemek manipulációja javascriptben úgy, hogy maga a táblázat htmlben van implementálva. Itt még nem csináljuk meg a feladatsort, kizárólag az alapok gyakorlása a cél, hogy a következő szinten a táblázatok megjelenítése és módosítása már gördülékenyen menjen. Tier Level B-n amit most csinálunk, az 1 feladat lesz összesen.
### Mappastruktúra
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
└── README.md
```


### Feladat 1: Console Colspan (1-9 commit)  
Hozz létre egy mappát colspanjs néven, és készíts egy olyan alkalmazást, amely a táblázatot console-ra iratja ki. A táblázat "oszlop összevonást" tartalmaz.
Adj hozzá a html oldalhoz két gombot, ami emulálja az elem hozzáadást, és kiírja a megváltozott táblázatot console-ra.
Ezekre figyelj: Mi a változók típusa, hogyan ismerjük fel az ismétlődő tevékenységeket, amelyeket ciklusba tudunk szervezni.
| Commit szám | Commit szövege        | Mit használhatok?           | Hogy néz ki?  | példa commit url | demo |
|:-----------|:------:|:-------------:| :-----:|----:|----------------| 
| 1. | console col tablazat | console.log | Kiírod konzolra a táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/bce3b6f592bc3657a904f4a9fe6349ce4e968e13) | bce3b6f592bc3657a904f4a9fe6349ce4e968e13 |
| 2. | console col valtozo bev | változó deklarálás | Kiírod konzolra a táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/363632830afbd352f107073bd03315d15d37869d)| 363632830afbd352f107073bd03315d15d37869d |
| 3. | console col object bev | változó lehet objektum is | Kiírod konzolra a tablazatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/17c53c25427ad2a1d721e1f556b33526947ad450)| 17c53c25427ad2a1d721e1f556b33526947ad450 |
| 4. | console col array bev | változó lehet tömb is | Kiírod konzolra a táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/5d7142d079594705eadb13b92ff9f6fe1d4f8fda) | 5d7142d079594705eadb13b92ff9f6fe1d4f8fda |
| 5. | console col elagazas | elágazást lehet használni egy adott sor kiírására | Kiírod konzolra a táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/f961555651c11fda95e7d4317fe16d674d08603e) | f961555651c11fda95e7d4317fe16d674d08603e |
| 6. | console col ciklus | ciklust lehet használni a táblázat kiírására | Kiírod konzolra a táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/38a0c9af0b1fbdb95bf02234e560100556c9e634) | 38a0c9af0b1fbdb95bf02234e560100556c9e634 |
| 7. | console col fuggveny | létrehozol egy függvényt, és meghívod | Kiírod konzolra a táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/38d4cf4c69fe353403eb40c54953d466f89e244f) | 38d4cf4c69fe353403eb40c54953d466f89e244f |
| 8. | console col simple gomb | létrehozol egy gombot és hozzáadod a htmlhez | Kiírod konzolra a táblázatot, van egy gomb a htmlen, amire ha clickelsz, akkor hozzáad egy új objektumot tömbhöz, és kiírja a frissített táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/09a39ff5ba0eb5901a53c7ef3a4f05444318f309) | 09a39ff5ba0eb5901a53c7ef3a4f05444318f309 |
| 9. | console col double gomb | létrehozol egy újabb gombot és hozzáadod a htmlhez | Kiírod konzolra a táblázatot, van két gomb a htmlen. Ha az újonnan létrehozottra klikkelsz, akkor hozzáad egy új objektumot a tömbhöz, és kiírja a frissített táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/572c44a05a9210b5553285fc003fae811f4ed43f) | 572c44a05a9210b5553285fc003fae811f4ed43f |

### Feladat 2: Table colspan (10-13 commit)  
Az elöző feladatban implementált táblázat kiírást írd át úgy, hogy egy tényleges táblázat jelenjen meg a weboldalon.
Ezekre figyelj: Figyeld meg, hogy a console-os megoldáshoz képest mennyit változott a logika.
| Commit szám | Commit szövege        | Mit használhatok?           | Hogy néz ki?  | példa commit url | demo |
|:-----------|:------:|:-------------:| :-----:|----:|-------|
| 10. | table col | A konzolos kiírás "celláit és sorait" lecseréled createElementekre  | Renderelsz egy táblázatot, a gombok a táblázatot frissítik | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/259a94c160c753ce561573ab802a75f5baaf07e7) | 259a94c160c753ce561573ab802a75f5baaf07e7 |
| 11. | table col header render | a header render függvényt létrehozod  | A táblázat fejléce szét can csúszva, mivel a törzsben 1 oszloppal több van | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/8a5ed79cb1a9f6ffaba39914ee2d272f8a7bb943) | 56f509c5c20f29a4a1bdd6ad184192d411c86e60 |
| 12. | table col header update | a header tömbjét frissíted, hogy string helyett objektumokat tartalmazzon aminek van colspan tulajdonsága is. Frissíted a headerrenderen belül található ciklus ciklusmagját| A táblázat újra jól néz ki, mert van colspan a fejlécben is | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/56f509c5c20f29a4a1bdd6ad184192d411c86e60) | 56f509c5c20f29a4a1bdd6ad184192d411c86e60 |
| 13. | table col render update | eddig globális változó volt a render függvénybe, ehelyett bevezetsz egy paramétert a függvénybe a tbody-nak, és átvezeted a függvényhívásoknál is (gombok eseménykezelője, és global).| Nem változik a működés | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/53c275e30b4951c8c8dfaede1937ab82b3dfa760) | 53c275e30b4951c8c8dfaede1937ab82b3dfa760 |

### Feladat 3: Console Rowspan (14-23 commit)
Hozz létre a repository gyökérkönyvtárában egy rowspanjs mappát, majd készíts egy olyan alkalmazást, amely a táblázatot console-ra iratja ki. A táblázat "sor összevonást" tartalmaz.
Adj hozzá a html oldalhoz két gombot, ami emulálja az elem hozzáadást, és kiírja a megváltozott táblázatot console-ra.
Ezekre figyelj: Hasonlítsd össze a rowspan és a colspanos console táblázatos implementációt.
| Commit szám | Commit szövege        | Mit használhatok?           | Hogy néz ki?  | példa commit url | demo |
|:-----------|:------:|:-------------:| :-----:|----:| ------- |
| 14. | console row tablazat | console.log | Kiírod konzolra a táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/3d96c1ff847e069593b82fc701ae85debdd03271) | 3d96c1ff847e069593b82fc701ae85debdd03271 |
| 15. | console row valtozo bev | változó deklarálás | Kiírod konzolra a táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/17ae7d16e8e5e519e0f5440bc13ee876eb2ffab8) | 17ae7d16e8e5e519e0f5440bc13ee876eb2ffab8 |
| 16. | console row object bev | változó lehet objektum is | Kiírod konzolra a tablazatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/65768195cc669a11ff2d3d1d21f7c3f42f0668d1) | 65768195cc669a11ff2d3d1d21f7c3f42f0668d1 |
| 17. | console row merge cell  | az összevont celláknál bevezetsz egy `\|_` jelet | Kiírod konzolra a tablazatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/c3e4270490940a020d5bf3f819111ebfa78878c4) | c3e4270490940a020d5bf3f819111ebfa78878c4 |
| 18. | console row array bev | változó lehet tömb is | Kiírod konzolra a táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/54c898f0886a2455549ec9993e6bd7c6eab154fc) | 54c898f0886a2455549ec9993e6bd7c6eab154fc |
| 19. | console row elagazas | elágazást lehet használni egy adott sor kiírására | Kiírod konzolra a táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/7e934fc8ba98d0ede3985883ada4e2e1a8580d43) |  7e934fc8ba98d0ede3985883ada4e2e1a8580d43 |
| 20. | console row ciklus | ciklust lehet használni a táblázat kiírására | Kiírod konzolra a táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/a3fd22077980378cb894530114dd2f0645e4820a) | a3fd22077980378cb894530114dd2f0645e4820a |
| 21. | console row fuggveny | létrehozol egy függvényt, és meghívod | Kiírod konzolra a táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/d9a4669f372c91c229f272ee566e77f6b42bd076) | d9a4669f372c91c229f272ee566e77f6b42bd076 |
| 22. | console row simple gomb | létrehozol egy gombot és hozzáadod a htmlhez | Kiírod konzolra a táblázatot, van egy gomb a htmlen, amire ha clickelsz, akkor hozzáad egy új objektumot tömbhöz, és kiírja a frissített táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/6986e2f3a17a988c570a3a1468eb1ba5d5bf01c8) | 6986e2f3a17a988c570a3a1468eb1ba5d5bf01c8 |
| 23. | console row double gomb | létrehozol egy újabb gombot és hozzáadod a htmlhez | Kiírod konzolra a táblázatot, van két gomb a htmlen. Ha az újonnan létrehozottra klikkelsz, akkor hozzáad egy új objektumot a tömbhöz, és kiírja a frissített táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/9d592cda8563f580c84d66e18cbb1343d7573fa5) | 9d592cda8563f580c84d66e18cbb1343d7573fa5 |

### Feladat 4: Table Rowspan (24-26 commit)
Írd át az elöző feladatban implementált alkalmazást úgy, hogy rendereljen ki egy táblázatot, amely rowspant tartalmaz. Frissítsd a gombokat is, hogy a táblázatot renderelje újra.
Ezekre figyelj: Figyeld meg, hogy a console-os megoldáshoz képest mennyit változott a logika.
| Commit szám | Commit szövege        | Mit használhatok?           | Hogy néz ki?  | példa commit url | demo |
|:-----------|:------:|:-------------:| :-----:|----:|--------|
| 24. | table row | A konzolos kiírás "celláit és sorait" lecseréled createElementekre  | Renderelsz egy táblázatot, a gombok a táblázatot frissítik | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/296c8efb91ee4fc75a5a011264e46a0d1d952e16) | 296c8efb91ee4fc75a5a011264e46a0d1d952e16 |
| 25. | table row header render | a header render függvényt létrehozod  | A táblázat fejléce rendesen megjelenik | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/109271ee9eb1692256c947f6e16aba5c9842bd95) | 109271ee9eb1692256c947f6e16aba5c9842bd95 |
| 26. | table row render update | eddig globális változó volt a render függvénybe, ehelyett bevezetsz egy paramétert a függvénybe a tbody-nak, és átvezeted a függvényhívásoknál is (gombok eseménykezelője, és global).| Nem változik a működés | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/57b1405ce3f6891992be1c507f504ea1e6917219) | 57b1405ce3f6891992be1c507f504ea1e6917219 |

### Feladat 5: Table Html colspan (27-31 commit)
Készíts egy htmlcolspan mappát, amelyben az index.html tartalmazza a táblázat colspanos verzióját. Adj a tbody-hoz egy id-t, valamint ágyazz be egy index.js fájlt, majd hozd is létre. A javascript fájlban hozz létre az elöző két feladathoz hasonló gombot, majd kattintásukra a html táblázat tbody-jához id alapján fűzz hozzá új sort. 
Ezekre figyelj: Mi a közös kódrész ebben a feladatban és a 2. feladatban?
| Commit szám | Commit szövege        | Mit használhatok?           | Hogy néz ki?  | példa commit url | demo |
|:-----------|:------:|:-------------:| :-----:|----:|------------|
| 27. | init html col | Létrehozod html-ben colspanos táblázatot illetve a két gombot és beágyazod az index.js-t.| Látod a htmlben implementált táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/0f4b877f323819fd4e6319f5fcd03e69dece38db) | 0f4b877f323819fd4e6319f5fcd03e69dece38db |
| 28. | col html simple esemeny reg | Regisztrálsz egy eseménykezelőt a simplebutton-ra és kiírsz egy console.logot, hogy lásd működik-e | Megjelenik az console kiírás a consoleon klikkelés után | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/4779d0d4aa24f13f742db12dd01eb49e75619a07) | 4779d0d4aa24f13f742db12dd01eb49e75619a07 |
| 29. | col html simple esemeny impl | Implementálod az colspanos elem hozzáadást a gombra | Ha kattintasz a gombra akkor megjelenik az új sor a táblázatban | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/a074dd17add4be7bb13676f900068f5193b504cc) | a074dd17add4be7bb13676f900068f5193b504cc |
| 30. | col html double esemeny impl | Beregisztrálsz és implementálsz egy eseménykezelőt a colspan nélküli elem hozzáfűzésére | Ha kattintasz, akkor hozzáfűz egy két elemes sort a táblázathoz | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/c824486a6daaa32a2a080fdb75655d3d0efcda1a) | c824486a6daaa32a2a080fdb75655d3d0efcda1a |
| 31. | col html esemeny fuggveny bev | Függvény bevezetésével csökkénted a kódismétlést | Nem változik a működés, mindkét gomb működik | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/a5dbe84af3294d66d2fa5c9ac0be68894da712c7) | a5dbe84af3294d66d2fa5c9ac0be68894da712c7 |


### Feladat 6: Table Html rowspan (32-36 commit)
Készíts egy htmlrowspan mappát, amelyben az index.html tartalmazza a táblázat colspanos verzióját. Adj a tbody-hoz egy id-t, valamint ágyazz be egy index.js fájlt, majd hozd is létre. A javascript fájlban hozz létre az elöző két feladathoz hasonló gombot, majd kattintásukra a html táblázat tbody-jához id alapján fűzz hozzá új sort. 
Ezekre figyelj: Mi a közös kódrész ebben a feladatban és a 4. feladatban?

| Commit szám | Commit szövege        | Mit használhatok?           | Hogy néz ki?  | példa commit url | demo |
|:-----------|:------:|:-------------:| :-----:|----:|--------|
| 32. |init html row | Létrehozod html-ben colspanos táblázatot illetve a két gombot és beágyazod az index.js-t. | Látod a htmlben implementált táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/263d4cb1da17e5259cbf9f1e170b8668f4a860e9) | 263d4cb1da17e5259cbf9f1e170b8668f4a860e9 |
| 33. | row html simple esemeny impl | Beregisztrálsz és implementálsz egy eseménykezelőt a szimplasoros gombra | Kattintásra létrejön egy új rowspan nélküli sor | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/fc98f063c4d8c8d0a373e7ab6c99946bf17877ea) | fc98f063c4d8c8d0a373e7ab6c99946bf17877ea |
| 34. | row html double esemeny impl | Beregisztrálsz és implementálsz egy eseménykezelőt a duplasoros gombra | Kattintásra létrejön egy új rowspanos sor | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/15a6f70805ba9f9f876fe82492110acc855835be)  | 15a6f70805ba9f9f876fe82492110acc855835be |
| 35. | row html ujsor | Kiszervezed függvénybe az új sor(ok) hozzáfűzésének logikáját | Nem változik a működés, mindkét gomb működik | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/de0c8f94a576b9bb2eeaf6cd9dd3a2fbfaf84c42) | de0c8f94a576b9bb2eeaf6cd9dd3a2fbfaf84c42 |
| 36. | row html cella letreh | Kiszervezed függvénybe a cellalétrehozásokat (fejléc cella, és táblázattörzs cellát is kezelje) | Nem változik a működés, mindkét gomb működik | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/af878b4e953588c237d437448058ec39b7d85dbb) | af878b4e953588c237d437448058ec39b7d85dbb |


## Tier Level B
### Mit fogunk csinálni?
Nekiállunk a feladatsornak. Megnézzük extraként a checkbox és a dropdownlist működését, valamint az "elrejtő logikát". Ezzel le tudjuk fedni a dolgozat variánsok 50%-át. Ami sajnos nem kerül bele a gyakorlásba külön, az az alapértelmezett értékek beállítása, de teljes értékűnek mondható a feladatsor is, hiszen a cél a Tier Level B végére a 100%-os dolgozat, bizonyítva, hogy meg tudod csinálni.

### Mappastruktúra
```
.
├── feladatsor - itt csinálod Feladat1 Feladat4, Feladat 5, Feladat 6 Feladat 7, Feladat 8
│   ├── index.html
│   └── index.js
├── select - itt csinálod Feladat 2
│   ├── index.html
│   └── index.js
├── checkbox - itt csinálod Feladat 3
│   ├── index.html
│   └── index.js
└── README.md
```

### Feladat 1: Feladatsor: A 1. feladat (1 commit)
Hozz létre egy feladatsor mappát és implementáld a feladatkiírás szerint a colspanos és rowspanos táblázatot. A táblázatok alatt legyen 2-2 gomb, ami hozzáfűz egy objektumot a táblázathoz megjelenítve új sor(oka)t a táblázatokban. A javascriptnél a tömbhöz fűzünk hozzá elemet és újrarendereljüj a táblázatokat, a html-nél a html-hez csatolunk új sort. 
| Commit szám | Commit szövege        | Mit használhatok?           | Hogy néz ki?  | példa commit url | demo |
|:-----------|:------:|:-------------:| :-----:|----:|--------|
| 1. | feladatsor 1 feladat | Implementálod a feladatsor szerint html és javascript táblázatot valamint 2 gombot ami 1-1 elemet hozzáad | Látod a 2 táblázatot a 2 gombbal, amelyek az adott táblázathoz hozzáfűznek sort| [commit](https://github.com/gomszab/jav_ref_2025dec/tree/b1cad168c8e042617afe0d280e2b7d6c0623630d) | b1cad168c8e042617afe0d280e2b7d6c0623630d |

### Feladat 2: Select implementalas (2-3 commit)
Hozz létre egy select mappát, és másold bele az elöző feladatban implementált alkalmazást. Hozz létre a html-en egy dropdownlist elemet, amelynek 3 eleme van: "Válassz elemet", "js", "html". A táblázatokat tedd bele egy divbe, majd a kiválasztott dropdown opció alapján jelenítsd meg a megfelelő div-et, és rejtsd el a másikat a hide osztály segítségével. Az oldal betöltésekor nem jelenítjük meg egyik táblázatot sem.
| Commit szám | Commit szövege        | Mit használhatok?           | Hogy néz ki?  | példa commit url | demo |
|:-----------|:------:|:-------------:| :-----:|----:|--------|
| 2. | select section def | létrehozol 1-1 divet a táblázatoknak + gomboknak, és azokat ellátod id-vel, valamint létrehozol egy select-et 3 opcióval a html-en | Látod a selectet | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/3b945897edff9e43d724a2c06eefc60c5d94b310) | 3b945897edff9e43d724a2c06eefc60c5d94b310 |
| Commit szám | Commit szövege        | Mit használhatok?           | Hogy néz ki?  | példa commit url | demo |
|:-----------|:------:|:-------------:| :-----:|----:|--------|
| 3. | select esemeny impl | implementálod az eseménykezelőt a selectnek | ha változtatod a selectet, más táblázat jelenik meg | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/0d9e4c6886603f15379eeb497df0c167f7fa71f1) | 0d9e4c6886603f15379eeb497df0c167f7fa71f1 |

### Feladat 3: Checkbox implementalas (4-6 commit)
Hozz létre egy checkbox mappát, és másold bele az 1. feladatban implementált alkalmazást. Hozz létre a html-en egy checkbox elemet, valamint tedd bele 1-1 divbe a megfelelő táblázatot. A checkbox értéke alapján, ha igaz, akkor jelenítsd meg a html-ben implementált div-et, és rejtsd el a másikat. Oldal betöltésekor a javascript táblázat jelenik meg.
| Commit szám | Commit szövege        | Mit használhatok?           | Hogy néz ki?  | példa commit url | demo |
|:-----------|:------:|:-------------:| :-----:|----:|--------|
| 4. | checkbox section def | létrehozol 1-1 divet a táblázatoknak + gomboknak, és azokat ellátod id-vel, valamint létrehozol egy checkboxot a html-en | Látod a checkboxot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/1495628e174c9880e7614e7938f2039c6ff8b0e2) | 1495628e174c9880e7614e7938f2039c6ff8b0e2 |
| 5. | checkbox esemenykezelo impl | implementálod a checkbox eseménykezelőjét, ami elrejti és megjeleníti a diveket | ha változtatod a checkboxot másik táblázat jelenik meg | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/8a38ad747d9721f799004ebe65b41d0969ecd025) | 8a38ad747d9721f799004ebe65b41d0969ecd025 |
| 6. | checkbox kezeles betolteskor | oldal betöltés után is ellenőrzöd a checkbox értékét, és az értéke alapján jelenítesz meg táblázatot | oldalbetöltéskor a megfelelő táblázat jelenik meg |[commit](https://github.com/gomszab/jav_ref_2025dec/tree/23f704a48968a5496bee8b11523c183572e095d3) | 23f704a48968a5496bee8b11523c183572e095d3 |
### Feladat 4: Feladatsor: A 2. feladat (7-8 commit)
A feladatsor mappában implementáld a dolgozat 2-es feladatát.
| Commit szám | Commit szövege        | Mit használhatok?           | Hogy néz ki?  | példa commit url | demo |
|:-----------|:------:|:-------------:| :-----:|----:|--------|
| 7. | feladatsor section init | A feladatsor alapján hozzáadod a diveket és a selectet/checkboxot | látod mindkét táblázatot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/1495628e174c9880e7614e7938f2039c6ff8b0e2) | 02ddb103abb976eadb4991b178dfebf86748e538 |
| 8. | feladatsor 2 feladat | implementálod a checkbox eseménykezelőjét, ami elrejti és megjeleníti a diveket | ha változtatod a checkboxot másik táblázat jelenik meg | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/4a7f1c0ea0514edfc0fa0717a9830480a15264a2) | 4a7f1c0ea0514edfc0fa0717a9830480a15264a2 |

### Feladat 5: Feladatsor: A 4-5. feladat (9-15 commit)
A feladatsor mappában töröld a gombokat, szervezd ki a függvényeket, és implementáld a dolgozat 4-5-ös feladatát.
| Commit szám | Commit szövege        | Mit használhatok?           | Hogy néz ki?  | példa commit url | demo |
|:-----------|:------:|:-------------:| :-----:|----:|--------|
| 9. | gombok torlese | Törlöd a gombokat az oldalról, valamint js-ből, valamint a hozzájuk tartozó eseménykezelőket | nem látod a gombokat | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/3bda41d81eedf20d36b4453f2b885f2096f0d3af) | 3bda41d81eedf20d36b4453f2b885f2096f0d3af |
| 10. | functions.js bevezetese | Létrehozhatsz egy functions.js-t ahova átteszed a függvénydefiniciókat, és a typedefiniciót | nem változik semmi | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/7b1716c93a26ee544fbe4ca78c507e71d33052bc) | 7b1716c93a26ee544fbe4ca78c507e71d33052bc |
| 11. | feladatsor 4 feladat | Htmlen megcsinálod a formot a feladatsor alapján | látod a html táblázathoz tartozó formot | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/5b4349437b5e672152fc3c8b178456dece23bbee) | 5b4349437b5e672152fc3c8b178456dece23bbee |
| 12. | feladatsor 5 feladat | Jsen megcsinálod a formot a feladatsor alapján (nem használhatsz sem függvényt, sem formot ehhez) | látod js táblázathoz tartozó formot  | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/2e5f8156671f7f348f9b34bd26bf7cf153178a9f) | 2e5f8156671f7f348f9b34bd26bf7cf153178a9f |
| 13. | forminput fuggveny bev | Bevezetsz egy függvényt, ami 1 form fieldet a divvel csinál, és lecseréled a korábbi kódot  | nincs változás | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/20106314d8d1bc14eaba890b35a9b2bceede3f5a) | 20106314d8d1bc14eaba890b35a9b2bceede3f5a |
| 14. | forminput array bev | Bevezetsz egy tömböt, azon iterálsz végig és hívod a függvényt | nincs változás | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/140193cb5fda20c7fcb492557439208858517ab3) | 140193cb5fda20c7fcb492557439208858517ab3 |
| 15. | formgenerate fuggveny bev | a functions.js-be áthelyezed a függvényt amit csináltál, és definiálsz egy generateForm függvényt, amit meghívsz az index.js-ben | nincs változás | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/6f16909daa6c1c90758f8ddd11cb11ba30590478) | 6f16909daa6c1c90758f8ddd11cb11ba30590478 |


### Feladat 6: Feladatsor: B 1. feladat, B 2. feladat (16-17 commit)
A feladatsor mappában implementáld az eseménykezelőket az ürlapokhoz validáció nélkül
| Commit szám | Commit szövege        | Mit használhatok?           | Hogy néz ki?  | példa commit url | demo |
|:-----------|:------:|:-------------:| :-----:|----:|--------|
| 16. | js form submit implementalasa | Implementálod az eseménykezelést a jsfromnál validáció nélkül a feladatsor alapján | Hozzá tudsz adni elemet a js táblázathoz | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/d57dd9a1bb4899191916798839c9ef371ca90757) | d57dd9a1bb4899191916798839c9ef371ca90757 |
| 17. | html form submit implementalasa | Implementálod az eseménykezelést a htmlfromnál validáció nélkül a feladatsor alapján | Hozzá tudsz adni elemet a html táblázathoz | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/e467ae5173b6e68cae0dc041e863bda13e10713c) | e467ae5173b6e68cae0dc041e863bda13e10713c |

### Feladat 7: Feladatsor: B 1. feladat, B 2. feladat validáció (18-22 commit)
Implementáld a validációt az ürlap eseménykezelőihez.
| Commit szám | Commit szövege        | Mit használhatok?           | Hogy néz ki?  | példa commit url | demo |
|:-----------|:------:|:-------------:| :-----:|----:|--------|
| 18. | js form validacio | Implementálod a validációt a js formhoz feladatsor alapján | nem tudsz üres elemet hozzáadni a js táblázathoz | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/deab3a578cf73a0d4f3ae7435fd6b95ef8e79de5) | deab3a578cf73a0d4f3ae7435fd6b95ef8e79de5 |
| 19. | html form validacio | Implementálod a validációt a htmlh formhoz feladatsor alapján  | nem tudsz üres elemet hozzáadni a html táblázathoz | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/2a0e7374b0004b4209a8644f506b37600192590f) | 2a0e7374b0004b4209a8644f506b37600192590f |
| 20. | form error uzenetek torlese | Implementálod a hibaüzenetek törlését az eseménykezelőn belül | ha írsz valamit a beviteli mezőbe, eltünik a hibaüzenet törléskor | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/e919cbc451c113d8d8faf8692c4f6ada057c3d49) | e919cbc451c113d8d8faf8692c4f6ada057c3d49 |
| 21. | form error fuggveny bev | bevezetsz egy függvényt, amivel helyettesíted a validációt | nincs változás | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/7c70c357bbc433b60e1fb3ab62f1ffb8bf4e7920) | 7c70c357bbc433b60e1fb3ab62f1ffb8bf4e7920 |
| 22. | feladatsor kesz | bevezetsz egy függvényt, amivel mind a 3 validációt helyettesíted | nincs változás | [commit](https://github.com/gomszab/jav_ref_2025dec/tree/1eada1cfc8b449b8c0420bde67732555740ac16e) | 1eada1cfc8b449b8c0420bde67732555740ac16e |


### (opcionális) Feladat 8: Optimalizálás 
Ha van saját megoldásod, vagy tudnál egyszerűsíteni az alkalmazás kódján, akkor itt megteheted.

## Tier Level C
### Mit fogunk csinálni?
Implementáld a feladatsort a dolgozat kiírása szerint.

# GYIK
#### Mennyi idő alatt lehet megcsinálni?  
Nem tudom
