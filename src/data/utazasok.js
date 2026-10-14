// Lenyitható "Gyakorlati tudnivalók" doboz egy nap helyszíneihez
const gyakorlatiTudnivalok = (helyszinek) => `
            <details class="not-prose my-8 rounded-lg border border-slate-200 bg-slate-50">
                <summary class="cursor-pointer select-none px-5 py-4 font-semibold text-slate-800">Gyakorlati tudnivalók: belépődíjak, nyitvatartás</summary>
                <div class="space-y-6 px-5 pb-5 text-base text-slate-600">
                    ${helyszinek.map(h => `
                    <div>
                        <p class="font-semibold text-slate-800">${h.nev}</p>
                        <p>Telefon: ${h.telefon.map(t => `<a href="tel:${t.replace(/\s/g, '')}" class="text-teal-700 hover:underline">${t}</a>`).join(', ')}</p>
                        ${h.adatok.map(a => `<p>${a}</p>`).join('')}
                    </div>`).join('')}
                    <p class="text-sm text-slate-500">A belépődíjak és a nyitvatartási idők tájékoztató jellegűek, változhatnak.</p>
                </div>
            </details>`;

export const utazasok = [
    {
        celpont: "Kassától a Szepességig",
        leiras: "Kassa, Homonna, Tőketerebes, Késmárk, Szepes vára és Lőcse – három nap a Felvidék keleti részén.",
        kepUrl: "/images/slovakia.jpg",
        slug: "kassatol-a-szepessegig",
        idotartam: "3 nap / 2 éjszaka",
        kinek_ajanlott: "7. osztályosoknak",
        fo_helyszinek: "Kassa, Homonna, Tőketerebes, Késmárk, Szepesi vár, Lőcse",
        szallas: "Granárium, Szádalmás",
        reszletesLeiras: `
            <p class="lead">Háromnapos tanulmányi út a történelmi Felső-Magyarország keleti részén. Bejárjuk Kassa műemlékekben gazdag belvárosát, Zemplénben a Drugethek és az Andrássyak kastélyait, majd a Szepességben Késmárkot, Szepes várát és Lőcsét.</p>

            <h3>1. nap – Kassa</h3>
            <p>Kassa – Szlovákia legrégebbi városainak egyike – ott fekszik, ahol a Hernád folyó elhagyja a festői erdős völgyet és a széles síkságra folyik. A város a gazdag és dicső múlttal rendelkező városok közé tartozik. A város első írásos emléke 1230-ból való. Kassa ebben „Villa Cassa”-ként szerepel. 1369-ben Nagy Lajos király címert adományozott Kassának. Ez az első városi címer volt Európában, melyet királyi címerlevél erősített meg. A 15. században Kassa Magyarország második legnagyobb városa volt hétezer lakossal (Buda után, Pozsony előtt).</p>
            <p>A 16. és 17. században a török veszedelem és a rendi felkelések során a város gyakran cserélt gazdát a harcoló felek között. Ebben az időben lett egyetemváros és ekkor indult be a középfokú oktatás, rekatolizációval egybekötve. A 18. és 19. század a békét és a fokozatos fellendülést hozta el. Betelepült a városba az arisztokrácia, fejlődésnek indult a művészet, a színház, a társasági élet. A 19. század végére az egyik legjelentősebb ipari várossá nőtte ki magát Magyarországon. A 20. század radikális, nagyrészt politikai változásokat hozott a város számára. Kassa több új állam részévé is vált ebben a században. Ebben az időben nagy mértékben megváltoztak a város egyéb jellegzetességei is – főleg a város nagysága, nemzetiségi összetétele és arculata.</p>
            <p>Kassa gazdag történelme a város építészeti képét is meghatározta. Történelmi városközpontja nem mindennapi építészeti szépség, mely nagyon jó állapotban maradt fenn, és a lencse alakú főtérrel rendelkező várostípus tökéletesen kifejlődött alakját testesíti meg. 1983-ban a történelmi városközpontot műemlék-rezervátummá nyilvánították, mely Szlovákiában a legnagyobbnak számít. Az 1996–97-es években végzett széles körű felújítás értékes régészeti leleteket hozott, és visszaadta a történelmi épületek eredeti szépségét.</p>
            <p>A tér valójában egy állandóan nyüzsgő sétány, aminek domináns épülete a gótikus Szent Erzsébet-dóm, amely nemcsak Szlovákia legnagyobb temploma, hanem a nyugati keresztény egyház legkeletebben fekvő székesegyháza is. A kriptában helyezték örök nyugalomra 1906-ban a II. Rákóczi Ferenc fejedelem hamvait. A főtér különösen nyáron élénk, főleg a színház és a székesegyház közötti terület. Ez a rész valójában egy park, amelyet egy éneklő szökőkút díszít. Kassáról természetesen mindenkinek Márai Sándor jut eszébe, akinek a szobra a tér tőszomszédságában áll.</p>
            <p>Kassa egyik leglátogatottabb nevezetessége Rákóczi fejedelem rodostói házának a pontos másolata, mely a középkori városfal erődrendszerének legrégebben megmaradt részlete, a Hóhérbástya udvarában áll. 2006-ban, a fejedelem újratemetésének 100. évfordulóján Rákóczi emlékművet emeltek az udvaron, a büszke magas bronzszobor egy Brazíliából hozatott 8 tonnás kőtömbön áll. A Kassa főterétől pár perc sétára található emlékház részletes és méltó mementója történelmünk nagy alakjának.</p>
            <h4>Ajánlott látványosságok</h4>
            <p>Régi zsinagóga, Szent Mihály kápolna és szökőkút, Orbán torony és harang, Állami Színház, Régi városháza, Lőcsei-ház, Jezsuita kolostor, Bocskai emléktábla, Pestis szobor, Miklós-börtön, Tinódy Lantos Sebestyén emléktáblás háza, Radványi Géza emléktábla, Márai emlékház, Felvidéki főkapitányok háza, Vértanúk emléktáblája, Batsányi emléktábla stb.</p>
            ${gyakorlatiTudnivalok([
                {
                    nev: "Szent Erzsébet-dóm",
                    telefon: ["+421 908 957 692"],
                    adatok: [
                        "Belépődíj: 6 €, kedvezményes 4 € (önvezető túra a katedrális minden részén)",
                        "Nyári szezon (máj.–szept.): hétfő–szombat 9:00–14:45 és 15:45–17:30",
                        "Téli szezon (okt.–ápr.): hétfő–szombat 10:00–14:45 és 15:45–17:30",
                    ],
                },
                {
                    nev: "Rodostói ház – II. Rákóczi Ferenc emlékház",
                    telefon: ["+421 917 755 594"],
                    adatok: [
                        "Belépődíj: felnőtt 8 €, nyugdíjas 5 €, diák 2 €",
                        "Nyári szezon (ápr.–okt.): kedd–vasárnap 9:00–17:00",
                        "Téli szezon (nov.–márc.): kedd–szombat 9:00–17:00",
                    ],
                },
            ])}

            <h3>2. nap – Homonna és Tőketerebes</h3>
            <h4>Homonna</h4>
            <p>Homonna település neve először 1317-ben, I. Károly Drugeth Fülöpnek szóló adománylevelében tűnik fel. A középkorban egy kiterjedt földbirtok központja volt. Mivel a település a Magyarországot Lengyelországgal összekötő kereskedőút mentén feküdt, vásártartásra is sikerült jogot szereznie. A város a 17. és a 18. században kezdett gyorsabban fejlődni, ami a vásárok mellett a kereskedelem és a kézműipar fejlődésének volt köszönhető.</p>
            <p>A központ leglátványosabb része a homonnai várkastély, a Drugethek egykori székhelye. Eredetileg reneszánsz stílusban épült, majd az Andrássyak újbarokk stílusban átalakították. Ma a Vihorláti Múzeumnak ad helyet, 1963-tól Szlovákia kulturális örökségének része az épületet körülvevő parkkal együtt. A homonnai kastély az egyik legnagyobb és legkiterjedtebb kastély Szlovákiában.</p>
            <p>Jeszenő vára Homonnától délre, Várjeszenő szomszédságában állt, mára csak romjai maradtak meg. Jeszenő várát Gutkeled nembéli Joachim bán építhette 1277 előtt gótikus stílusban az adományul kapott „Gyapoly” birtokon a Homonnai-hegységben, 392 méteres tengerszint feletti magasságban.</p>
            <p>Barkó és Nagymihály környékét a Kaplyon nemzetség Nagymihályi ága szerezte meg a 13. század közepén. Barkó várát ők építették 1295 és 1307 között, a Laborc völgyében a Nagymihályról Homonnára vezető út ellenőrzésére. 1963-tól Szlovákia kulturális örökségének része, ugyanúgy, mint Jeszenő vára is.</p>
            <h4>Tőketerebes</h4>
            <p>Tőketerebesről a legrégebbi fennmaradt írásos feljegyzés egy 1254-es okirat. Bizonyos azonban, hogy a város mai területén már sokkal korábban létezett folyamatosan lakott település. A 14. században a Drugeth, később a Perényi, majd a Csáky és Andrássy család birtokához tartozott. 1439-ben korlátozott városi jogokat kapott, és jobbágyvárosként fejlődött tovább. A 19. században a várost és tágabb környékét számos kivándorlási hullám érintette. A kerület gazdasági helyzete a 20. században javult.</p>
            <p>Sétát tehet a látogató a városi parkban, amelyet erre a célra már a 18. században kialakítottak. A park mellett állnak a középkori Parics vára romjai. Az Andrássy-kastély 1786-ban épült nagyrészt a vár anyagából, a 19. század végén fényűző módon, empire-neoreneszánsz stílusban építették át. A parkban álló Mária-oszlop 1800 körül készült, a felduzzasztott várárokból pedig csónakázó tavat létesítettek. Itt áll az Andrássy család neogótikus mauzóleuma (épült 1893-ban). Andrássy Gyula grófot – elhunyta után – a lerombolt vár külső bástyáján kialakított mauzóleumban helyezték végső nyugalomra.</p>
            ${gyakorlatiTudnivalok([
                {
                    nev: "Homonnai várkastély",
                    telefon: ["+421 57 775 2240"],
                    adatok: [
                        "Belépődíj: felnőtt 6 €, nyugdíjas 3 €, diák 3 €",
                        "Nyári szezon (máj.–aug.): kedd–péntek 9:00–18:00, szombat–vasárnap 14:00–18:00",
                        "Téli szezon (szept.–ápr.): kedd–péntek 10:00–16:00",
                    ],
                },
                {
                    nev: "Tőketerebesi Andrássy-kastély",
                    telefon: ["+421 56 672 2234", "+421 905 212 621"],
                    adatok: [
                        "Belépődíj: felnőtt 5 €, nyugdíjas 2,50 €, diák 2,50 €",
                        "Nyári szezon (jún.–szept.): hétfő, szerda, péntek 8:00–15:30; kedd, csütörtök 8:00–18:00; szombat–vasárnap 14:00–18:00",
                    ],
                },
            ])}

            <h3>3. nap – Késmárk, Szepes, Lőcse</h3>
            <h4>Késmárk</h4>
            <p>A középkori Késmárk három település egyesüléséből született. Az új település 1269-ben városi jogot kapott IV. Bélától, és 1368-ban már városfalak védték. A város a 13.–14. században sorra kapta szabadalmait és kiváltságait. A 15. század közepén husziták dúlták fel, majd a 16. század vége felé került a Thököly családhoz, és csak 1655-ben vált szabad királyi várossá. A 19. században szövő- és posztógyárai, valamint lenfeldolgozója épült.</p>
            <p>Késmárk büszkeségei közé tartozik az evangélikus fatemplom, amely tiszafából és vörösfenyőből épült egyetlen fém alkatrész felhasználása nélkül. A barokk jellegű belső tere is fából készült, különösen érdekes és értékes az orgona a hozzá tartozó fasípokkal. Az új evangélikus templomhoz épített mauzóleumban temették el Thököly Imre felső-magyarországi és erdélyi fejedelmet. A sírboltban látható eredeti sírköve, palástja és zászlói. A reneszánsz harangláb pedig a legrégebbi és a legszebb az egész Szepességben.</p>
            <p>Az óváros északi részén, szinte a Ljubica folyó bal partján fekszik a késmárki vár. A Thököly-család ősi fészkének számító épület az egyik legszebb felvidéki reneszánsz épületnek számít. A havas Magas-Tátra ölelésében, a vár előtt áll Thököly Imre bronz lovasszobra, amit Győrfi Lajos szobrászművész alkotott.</p>
            <h4>Szepesvár</h4>
            <p>Következő állomásunk Szepesvár, mely a szepesi főispánok székhelye volt a 17. század végéig. Talán az egyik leglátványosabb erődítmény a Magyar Királyság egykori területén. Mind méreteiben, mind állapotában, mind környezetében a legszebb várromok között lehet említeni, és a Világörökség része. Ebben a várban született utolsó magyar származású királyunk, Szapolyai János.</p>
            <h4>Lőcse</h4>
            <p>Utazásunk utolsó megállója a Szepesség leghíresebb városa, Lőcse. A tatárjárás után, a pusztító hordák elől a Menedékkőre menekült szepességiek alapították Lőcse városát a Lőcse-patak feletti magaslaton. Az 1271-ben V. István által kiadott oklevél Lőcsét már városnak írja, és 1772-ig a szepesi szász kamaragrófság székhelye. Falai a 13. században épültek, majd a 15–16. században alakították ki ma is látható védműveit.</p>
            <p>A történelmi belváros, együtt a Szent Jakab-templommal, annak főoltárával és kegytárgyaival a Világörökség részét képezi, s melyeknek látványa felejthetetlen élményt nyújt. A főoltár Lőcsei Pál mester alkotása 1502-ből, 18,62 m magasságával a világ egyik legszebb és legnagyobb gótikus oltára. A város történelmi és kulturális nevezetességeit a csaknem teljesen épségben fennmaradt városfalak ölelik körbe. A régi Városházát és a szégyenketrecet látva megelevenednek majd előttünk irodalmunk remekei, a „Fekete város” és a „Lőcsei fehér asszony”.</p>
            ${gyakorlatiTudnivalok([
                {
                    nev: "Késmárki vár",
                    telefon: ["+421 918 742 726", "+421 52 428 0072"],
                    adatok: [
                        "Belépődíj: felnőtt 10 €, nyugdíjas 5 €, diák 5 €",
                        "Nyári szezon (máj.–szept.): hétfő–vasárnap 10:00–17:00",
                        "Téli szezon (okt.–ápr.): hétfő–péntek 10:00–15:00 (ebédszünet 12:00–13:00 között)",
                    ],
                },
                {
                    nev: "Szepesi vár",
                    telefon: ["+421 53 454 1336", "+421 53 245 4100"],
                    adatok: [
                        "Belépődíj: felnőtt 12 €, nyugdíjas 8 €, diák 6 €",
                        "Nyári szezon (máj.–szept.): hétfő–vasárnap 9:00–19:00",
                        "Téli szezon (október): hétfő–vasárnap 9:00–18:00",
                    ],
                },
                {
                    nev: "Lőcsei Szent Jakab-templom",
                    telefon: ["+421 908 489 194"],
                    adatok: [
                        "Belépődíj: felnőtt 4 €, diák 2 €",
                        "Látogatási időpontok április 1-jétől június 30-ig: hétfő 11:30, 13:00, 14:00, 15:00, 16:00; kedd–szombat 8:30, 9:30, 10:30, 11:30, 13:00, 14:00, 15:00, 16:00; vasárnap 12:00, 13:00, 14:00, 15:00, 16:00",
                        "Július 1-jétől augusztus 31-ig félóránként: hétfő 11:00–17:30, kedd–szombat 9:00–17:30, vasárnap 12:00–17:30",
                    ],
                },
            ])}
        `
    },
    {
        celpont: "Nyitra vidéke és a Vágmente",
        leiras: "Nyitra, Trencsén, Beckó, Nagytapolcsány, Bajmóc és Zsére – két nap a Felvidék nyugati részén.",
        kepUrl: "/images/slovakia.jpg",
        slug: "nyitra-videke-es-a-vagmente",
        idotartam: "2 nap / 1 éjszaka",
        kinek_ajanlott: "7. osztályosoknak",
        fo_helyszinek: "Nyitra, Trencsén, Beckó, Nagytapolcsány, Bajmóc, Zsére",
        szallas: "Paulisz rancs, Alsóbodok",
        reszletesLeiras: `
            <p class="lead">Kétnapos tanulmányi út a Felvidék nyugati részén. Az első napon Nyitra, Trencsén és Beckó várait keressük fel, a második napon Nagytapolcsányt, Bajmóc pompás várkastélyát és a zoboraljai Zsérét.</p>

            <h3>1. nap – Nyitra, Trencsén, Beckó</h3>
            <h4>Nyitra</h4>
            <p>Nyitra hét zöld dombon fekszik, és az ősi történelmet a természettel ötvözi. Az első írásos említése 871–873-ból származik, a bajorok és karintiaiak megtéréséről szóló krónikában. Valószínűleg a X. század első éveiben került a magyarok kezére a Kárpát-medence északnyugati része, Nyitra környéke is, mivel a frankokkal vívott küzdelemben és testvérharcban meggyengült, széthullott Morva Fejedelemség nem tudott ellenállni a harcos lovas-nomád nép támadásának. Két fontos európai kulturális útvonalon fekszik: a Szent Jakab útján és a Cyril–Methodiusz útvonalon. Szent Cirill és Metód tradíciója a város történelmén átível egészen napjainkig. A város jelképei – a nyitrai vár, a nyitrai kálvária zarándokhely és az egyedülálló Zobor-kolostor a természet ölelésében.</p>
            <p>Vára az Árpád vezette törzs szállásterületéhez tartozott, később Taksony és Géza fejedelmek, majd I. Szent István király egyik hatalmi központjának számított a felvidéki területeken. A várban vakíttatta meg és őriztette István a rokonát, Vazult. Rabságának helye, a várfal egyik bástyája ma is látható. I. László király, aki Vászoly unokája volt, a nyitrai várban halt meg. Holttestét innét vitték előbb Somogyvárra, majd Nagyváradra. Könyves Kálmán 1113-ban megalapította a nyitrai püspökséget, azóta a vár püspöki székhely és birtok.</p>
            <h4>Trencsén</h4>
            <p>Trencsén a Vágmente központja. A város egyik legrégebbi emléke a vár sziklájába vésett felirat, amelyben a római légiósok ünneplik a kvádok felett aratott győzelmüket 179-ben. Az első írásos emlék 1111-ből származik. A település leggyorsabban Csák Máté uralma alatt fejlődött. A középkorban a város több jogot és kiváltságot is szerzett, és Luxemburgi Zsigmond szabad királyi város rangot adományozott Trencsénnek. A város történelmi központja 1989 után éledt fel újra, ekkor ugyanis a műemlékek nagy része felújításra került.</p>
            <p>A vár az év folyamán különféle hangversenyeknek, várjátékoknak és vonzó éjszakai tárlatoknak ad helyet, és talán legismertebb látványossága a 80 méter mély Szerelem kútja. A vár és a városközpont között elterülő védett területet Mária dombnak nevezik. Ennek a területnek a része egy templom, amelytől egy 1568-ból származó fedett falépcső vezet a városközpontba.</p>
            <h4>Beckó</h4>
            <p>Beckó a Vág bal oldalán fekszik. Régi neve magyar fordításban Bolondóc. Területén a korai bronzkorban a lausitzi kultúra települése állt. Az i. e. 4. századból csontvázas temető került elő arany mellékletekkel. A vár, amelyet már 1200-ban említenek, eredetileg a királyé volt. A 13. század végén Csák Máté birtoka lett. A 14. és 15. század fordulóján a várat a Stibor-család előbb zálogba kapta, később megvásárolta. Utánuk a Bánffy-család birtokolta a várat, amely a gótikus várat reneszánsz lakhellyé alakította át. Erődítményét megjavították és megerősítették úgy, hogy a várat a 16. század végén még a törökök sem tudták bevenni. A Bánffy-család kihalta után Beckó vára több nemesi család birtoka volt, amelyek azonban a községben laktak. Az 1729-es tűzvész után pusztulásnak indult.</p>
            ${gyakorlatiTudnivalok([
                {
                    nev: "Nyitrai vár",
                    telefon: ["+421 910 842 991"],
                    adatok: [
                        "Belépődíj: 2 € és 7 € között, a választott kiállítástól vagy vezetéstől függően. A teljes komplexumra érvényes kombinált jegy 25% kedvezménnyel érhető el.",
                        "Nyári szezon (ápr.–okt.): kedd–vasárnap 10:00–18:00",
                        "Téli szezon (nov.–márc.): szombat–vasárnap 10:00–16:00",
                    ],
                },
                {
                    nev: "Trencséni vár",
                    telefon: ["+421 901 918 825"],
                    adatok: [
                        "Belépődíj: 3 € és 12 € között, a választott körúttól vagy vezetéstől függően.",
                        "Nyári szezon: hétfő–vasárnap 9:00–18:30",
                        "Téli szezon: hétfő–vasárnap 9:00–16:30",
                    ],
                },
                {
                    nev: "Beckói vár",
                    telefon: ["+421 32 774 2727"],
                    adatok: [
                        "Belépődíj: felnőtt 8 €, nyugdíjas 6 €, diák (15–26 év) 6 €, gyerek (6–15 év) 4,50 €",
                        "December és január: zárva; február: szombat–vasárnap 9:00–16:00; március: szombat–vasárnap 9:00–17:00",
                        "Április–szeptember: hétfő–vasárnap 9:00–18:00; október: kedd–vasárnap 9:00–17:00; november: szombat–vasárnap 9:00–16:00",
                    ],
                },
            ])}

            <h3>2. nap – Nagytapolcsány, Bajmóc, Zsére</h3>
            <h4>Nagytapolcsány</h4>
            <p>Nagytapolcsány területe már az őskorban lakott volt. Először 1173-ban említik Tupulchan néven. A királyi birtokhoz tartozott, és Károly Róbert emelte királyi város rangra 1342-ben. Fejlődését nagymértékben felgyorsította a raktározási és a vámszedési jog megszerzése. Sokat segített a postaállomás kiépítése is, a város ugyanis a Via Magna út mellett feküdt. Ezt 1550-ben építették ki, és a maga idejében Magyarország egyik leghosszabb útja volt. A Via Magna Bécset kötötte össze Kassával, Debrecennel és Nagyszebennel.</p>
            <p>Várának romja a várostól 15 km-re északnyugatra, Kővárhely falu határában áll. A vár a 13.–14. század fordulóján épülhetett, első birtokosai a Csákok voltak, majd királyi vár. Az 1440-es években a husziták egyik támaszpontja. A 17. század elején a Forgáchok megerősítették a várat. Báró Stummer Ágoston a 19–20. század fordulóján az omladozó várat romantikus stílusban helyreállította. Ezek a munkák leginkább az öregtornyot érintették, amely ekkor nyerte el a mai formáját. A vár romos falait konzerválták. 1925-ben voltak még javítások a váron.</p>
            <h4>Bajmóc</h4>
            <p>Bajmóc a honfoglalás előtt már várral megerősített hely volt, melyet a magyarok a 10. században foglaltak el. 1113-ban „Maimoz” néven említik először a zobori bencés apátság birtokainak határleírásában. Ekkor már ismert volt meleg vízű forrásairól és vásárairól.</p>
            <p>A Hontpázmány nemzetség Bényi ága, valószínűleg Kázmér ispán építette Bajmóc várát a 13. század második felében, amikor már vizesárokkal is körülvették. Először a középkori magyarországi végvárlánc tagja volt, később azé a Trencsénig húzódó, 30 várból álló védvonalé, amit Pozsonyból irányítottak. A múltban a leghíresebb nemesi családok birtokolták, miközben az utolsó tulajdonosa a Pálffy család volt. 1899-ben Pálffy János Ferenc gróf megbízásából a korábbi várat Hubert József budapesti műépítész a francia gótikus várakat mintául véve pompás kastéllyá alakította át. 17. századi állapotában csak a kápolna és a nagyterem maradt meg.</p>
            <p>A vár alatti, denevérek lakta és az épülettel egybefüggő kéttavas cseppkőbarlang látogatható, amely össze van kapcsolva a 26 m mély várkúttal. A parkjában gyógyvíz is található. A bejáratának közelében áll a 28 méter magas és 12 méter törzsátmérőjű, több mint 700 évesre becsült fa, melyet Mátyás király hársfájának neveznek, amit a hagyomány szerint még Csák Máté ültetett 1301-ben.</p>
            <h4>Zsére</h4>
            <p>Zsére Árpád-kori keletkezésű magyar település a Kisalföld északi peremén, Zoboralján. Az élet legősibb nyomát a mintegy félmillió évvel ezelőtt honos ősló maradványai és bölénycsontok tanúsítják, amelyek a falu feletti kőfejtőből kerültek felszínre. A Zsibrice csúcsán ma is látható a hallstatti korból származó várvédő sánc romja. A történelmi források szerint Marcus Aurelius római császár idejében e helyen római légió (legio fulminatrix) őrizte-védte ezt a vidéket a markomannok támadásaival szemben. Földesura a XII. században a zobori apátság volt, később pedig a nyitrai püspök, kinek itt ma is nagyobb birtoka van.</p>
            <p>A zsérei tájház 1977 óta őrzi a falu múltját, utána 2013-ban és később is megújult, időszaki rendezvényeknek és hagyományőrző találkozóknak is otthont adva.</p>
            ${gyakorlatiTudnivalok([
                {
                    nev: "Nagytapolcsányi vár",
                    telefon: ["+421 910 963 637"],
                    adatok: [
                        "A belépés ingyenes.",
                        "Szezon (ápr.–szept.): hétfő–péntek 10:00–17:00, szombat–vasárnap 9:00–18:00",
                        "A vár szezonon kívül nem látogatható.",
                    ],
                },
                {
                    nev: "Bajmóci várkastély",
                    telefon: ["+421 46 245 2107"],
                    adatok: [
                        "Alap belépő (kastély és barlang): felnőtt 16 €, nyugdíjas 10 €, gyerek (6–15 év) 8 €",
                        "November–március: szerda–vasárnap 10:00–15:00; április: kedd–vasárnap 10:00–16:00; május: kedd–vasárnap 9:00–17:00",
                        "Június–augusztus: hétfő–vasárnap 9:00–17:00; szeptember: kedd–vasárnap 9:00–17:00; október: kedd–vasárnap 10:00–15:00",
                    ],
                },
                {
                    nev: "Zsére községi hivatala",
                    telefon: ["+421 37 631 8841", "+421 37 631 8842"],
                    adatok: [],
                },
            ])}
        `
    },
    {
        celpont: "Erdélyi Körút",
        leiras: "Fedezze fel Székelyföld csodáit, a Gyilkos-tótól a Békás-szorosig.",
        kepUrl: "/images/erdely.jpg",
        slug: "erdelyi-korut",
        // --- Új, strukturált adatok ---
        idotartam: "4 nap / 3 éjszaka",
        kinek_ajanlott: "7. osztályosoknak",
        fo_helyszinek: "Nagyvárad, Gyilkos-tó, Békás-szoros, Segesvár, Kolozsvár",
        // --- Részletes leírás ---
        reszletesLeiras: `
            <h3>Erdélyi Körút: Történelem és legendák földjén</h3>
            <p><strong>Fedezze fel osztályával Székelyföld varázslatos tájait, járja be a történelem ösvényeit, és szerezzen életre szóló közös élményeket a Kárpátok szívében! Utazásunk során a diákok nem csupán tananyagot tanulnak, hanem a saját szemükkel látják a legendákat, megízlelik a helyi gasztronómiát, és megerősödik bennük a nemzeti összetartozás érzése.</strong></p>
            <p>Ez nem csupán egy kirándulás, hanem egy élményalapú időutazás, ahol a tankönyvek lapjai megelevenednek.</p>
            <hr class="my-6">
            <h4>Mit kínál ez az utazás?</h4>
            <ul class="list-disc pl-5">
                <li><strong>Élő Történelem:</strong> Középkori városok, várak és legendás történelmi helyszínek felfedezése.</li>
                <li><strong>Kulturális Merítkezés:</strong> Találkozás a székely népművészettel, irodalmi emlékhelyek látogatása.</li>
                <li><strong>Természeti Csodák:</strong> Lenyűgöző tájak bejárása a Gyilkos-tótól a Békás-szorosig.</li>
                <li><strong>Gasztronómiai Élmények:</strong> A hagyományos erdélyi konyha legfinomabb fogásainak megkóstolása.</li>
                <li><strong>Közösségépítés:</strong> A közös élmények garantáltan összekovácsolják az osztályt.</li>
            </ul>
            <hr class="my-6">
            <h3>Részletes Program</h3>
            <h4>1. nap: Indulás és Nagyvárad, a pezsgő "Körös-parti Párizs"</h4>
            <p>A kora reggeli órákban indulunk autóbusszal. Utunk első állomása <strong>Nagyvárad</strong>, ahol egy rövid séta keretében megcsodáljuk a szecessziós építészet remekeit. Az esti órákban érkezünk meg a Székelyföld szívében található szállásunkra, ahol bőséges vacsorával várnak minket.</p>
            <h4>2. nap: A Gyilkos-tó legendája és a Békás-szoros ereje</h4>
            <p>Reggeli után Erdély egyik leglátványosabb természeti csodája felé vesszük az irányt. Először a <strong>Gyilkos-tóhoz</strong> utazunk, ahol a diákok meghallgathatják a tó keletkezésének legendáját. Ezt követően átsétálunk a monumentális <strong>Békás-szoroson</strong>.</p>
            <h4>3. nap: Székely kultúra és középkori hangulat</h4>
            <p>Ezen a napon a székely kultúra központjaiba látogatunk. Ellátogatunk <strong>Farkaslakára</strong> Tamási Áron síremlékéhez, majd <strong>Korondra</strong>, a népi kerámia fellegvárába. Délután <strong>Segesvárra</strong>, az UNESCO Világörökség részét képező középkori városba látogatunk.</p>
            <h4>4. nap: Kolozsvár kincsei és hazautazás</h4>
            <p>Reggeli után Erdély fővárosa, <strong>Kolozsvár</strong> felé indulunk. A város főterén megtekintjük a Szent Mihály-templomot és Mátyás király lovas szobrát. Egy rövid szabadprogram után elindulunk hazafelé.</p>
            <hr class="my-6">
            <h3>Fontos Tudnivalók</h3>
            <ul class="list-none pl-0">
                <li><strong>Utazás:</strong> Kényelmes, modern, légkondicionált autóbusszal.</li>
                <li><strong>Szállás:</strong> Gondosan válogatott panziókban vagy szállodákban.</li>
                <li><strong>Ellátás:</strong> Félpanziós ellátás (reggeli és vacsora), helyi specialitásokkal.</li>
                <li><strong>Idegenvezetés:</strong> Az utat tapasztalt, helyismerettel rendelkező idegenvezető kíséri.</li>
            </ul>
        `
    },
    {
        celpont: "Felvidéki Várak",
        leiras: "Történelmi utazás a Felvidék legszebb várai és kastélyai között.",
        kepUrl: "/images/slovakia.jpg",
        slug: "felvideki-varak",
        // --- Új, strukturált adatok ---
        idotartam: "4 nap / 3 éjszaka",
        kinek_ajanlott: "7. osztályosoknak",
        fo_helyszinek: "Kassa, Betléri-kastély, Krasznahorka, Lőcse, Szepesi vár",
        // --- Részletes leírás ---
        reszletesLeiras: `
            <h3>Felvidéki Várak: A Rákócziak és Andrássyak nyomában</h3>
            <p><strong>Utazzon vissza az időben osztályával a történelmi Felső-Magyarország legszebb tájaira! A Felvidéki Várak túra során a diákok testközelből ismerhetik meg a magyar történelem meghatározó helyszíneit, bejárhatják a dicső múltat idéző erődítményeket, és megérthetik a régió kulturális sokszínűségét.</strong></p>
            <p>Ez a program tökéletesen ötvözi a történelmi ismeretek elmélyítését a felejthetetlen kirándulásokkal.</p>
            <hr class="my-6">
            <h4>Mit kínál ez az utazás?</h4>
            <ul class="list-disc pl-5">
                <li><strong>Történelmi Hitelesség:</strong> A Rákóczi-szabadságharc és a nagy nemesi családok emlékhelyeinek meglátogatása.</li>
                <li><strong>Építészeti Csodák:</strong> Gótikus katedrálisok, romantikus kastélyok és büszke várak felfedezése.</li>
                <li><strong>Irodalmi Kapcsolódás:</strong> Jókai Mór és Mikszáth Kálmán műveinek helyszínei elevenednek meg.</li>
            </ul>
            <hr class="my-6">
            <h3>Részletes Program</h3>
            <h4>1. nap: Érkezés Kassára, a Felvidék fővárosába</h4>
            <p>Utunk elsőként <strong>Kassára</strong> vezet. A városban tett séta során megtekintjük a Szent Erzsébet-dómot, ahol II. Rákóczi Ferenc síremlékénél rójuk le tiszteletünket. Felfedezzük a város főutcájának pezsgő hangulatát, majd elfoglaljuk a szállásunkat.</p>
            <h4>2. nap: Az Andrássy család öröksége</h4>
            <p>Ezen a napon a Gömöri-régióba látogatunk. Megcsodáljuk a <strong>betléri kastély</strong> eredeti, épen maradt berendezését. Ezt követően <strong>Krasznahorka</strong> büszke várához utazunk, melynek története és legendái megelevenednek idegenvezetőnk elbeszélésében.</p>
            <h4>3. nap: A Szepesség kincsei</h4>
            <p>Kirándulást teszünk a Szepességbe. Ellátogatunk <strong>Lőcsére</strong>, ahol a Szent Jakab-templomban megtekintjük a világ legmagasabb faoltárát, Lőcsei Pál mester alkotását. Innen a közeli <strong>Szepesi várhoz</strong>, Közép-Európa egyik legnagyobb várromjához utazunk.</p>
            <h4>4. nap: Rozsnyó és hazatérés</h4>
            <p>A délelőttöt <strong>Rozsnyó</strong> bányászvárosában töltjük, majd megkezdjük utunkat hazafelé, élményekkel feltöltődve.</p>
            <hr class="my-6">
            <h3>Fontos Tudnivalók</h3>
            <ul class="list-none pl-0">
                <li><strong>Utazás:</strong> Kényelmes, modern, légkondicionált autóbusszal.</li>
                <li><strong>Szállás:</strong> A régió hangulatos panzióiban vagy szállodáiban.</li>
                <li><strong>Ellátás:</strong> Félpanziós ellátás, ahol megkóstoljuk a helyi specialitásokat.</li>
                <li><strong>Idegenvezetés:</strong> Tapasztalt, a régió történelmét kiválóan ismerő idegenvezető kíséri.</li>
            </ul>
        `
    },
    {
        celpont: "Muravidék Kincsei",
        leiras: "Ismerje meg a szlovéniai magyar kultúra rejtett gyöngyszemeit.",
        kepUrl: "/images/slovenia.jpg",
        slug: "muravidek-kincsei",
        // --- Új, strukturált adatok ---
        idotartam: "3 nap / 2 éjszaka",
        kinek_ajanlott: "7. osztályosoknak",
        fo_helyszinek: "Lendva, Vinarium torony, Goričko Natúrpark, Dobronak",
        // --- Részletes leírás ---
        reszletesLeiras: `
            <h3>Muravidék Kincsei: Ismeretlen tájak, közös gyökerek</h3>
            <p><strong>Fedezze fel osztályával Szlovénia egyetlen, őshonos magyarok lakta vidékét, a Muravidéket! Ez a 3 napos út tökéletes lehetőséget nyújt a helyi magyar közösségek életének, kultúrájának és a régió természeti szépségeinek megismerésére.</strong></p>
            <p>A Muravidék egy igazi rejtett gyöngyszem, ahol a magyar nyelv és kultúra a mai napig élő valóság.</p>
            <hr class="my-6">
            <h4>Mit kínál ez az utazás?</h4>
            <ul class="list-disc pl-5">
                <li><strong>Élő Magyarság:</strong> Találkozás a helyi magyar közösségekkel, betekintés a kétnyelvű oktatásba.</li>
                <li><strong>Kulturális Felfedezés:</strong> A lendvai vár és a helyi néprajzi gyűjtemények megtekintése.</li>
                <li><strong>Természetjárás:</strong> Kirándulás a Goričko Natúrparkban és a híres Vinarium toronyban.</li>
                <li><strong>Hagyományőrzés:</strong> Látogatás helyi kézműveseknél, például fazekasoknál.</li>
            </ul>
            <hr class="my-6">
            <h3>Részletes Program</h3>
            <h4>1. nap: Érkezés Lendvára, a Muravidék központjába</h4>
            <p>A délutáni órákban érkezünk <strong>Lendvára</strong>. Első utunk a város fölé magasodó várhoz vezet, majd felmegyünk a modern <strong>Vinarium kilátótoronyba</strong>, ahonnan tiszta időben egyszerre négy országra is rálátni.</p>
            <h4>2. nap: Kézművesség és természet a Goričko parkban</h4>
            <p>A mai nap a hagyományoké és a természeté. Délelőtt ellátogatunk egy helyi, magyar tannyelvű iskolába, majd felkeresünk egy híres fazekasműhelyt. Délután a <strong>Goričko Natúrpark</strong> lankás tájain teszünk egy könnyed kirándulást.</p>
            <h4>3. nap: Dobronak és hazautazás</h4>
            <p>Reggeli után <strong>Dobronak</strong> felé vesszük az irányt, ahol meglátogatjuk a Bakonaki-tavat és az energiaparkot. A program végén elköszönünk a Muravidéktől, és elindulunk haza.</p>
            <hr class="my-6">
            <h3>Fontos Tudnivalók</h3>
            <ul class="list-none pl-0">
                <li><strong>Utazás:</strong> Kényelmes, modern, légkondicionált autóbusszal.</li>
                <li><strong>Szállás:</strong> Helyi, családias hangulatú panziókban.</li>
                <li><strong>Ellátás:</strong> Félpanziós ellátás, amely magában foglalja a híres helyi ételek kóstolását.</li>
                <li><strong>Idegenvezetés:</strong> A programot a Muravidéket kiválóan ismerő vezető kíséri.</li>
            </ul>
        `
    }
];