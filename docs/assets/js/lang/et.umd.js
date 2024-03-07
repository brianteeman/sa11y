
/*!
  * Sa11y, the accessibility quality assurance assistant.
  * @version 3.1.2
  * @author Adam Chaboryk, Toronto Metropolitan University
  * @license GPL-2.0-or-later
  * @copyright © 2020 - 2024 Toronto Metropolitan University.
  * @contact adam.chaboryk@torontomu.ca
  * GitHub: git+https://github.com/ryersondmp/sa11y.git | Website: https://sa11y.netlify.app
  * For all acknowledgements, please visit: https://sa11y.netlify.app/acknowledgements/
  * The above copyright notice shall be included in all copies or substantial portions of the Software.
**/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Sa11yLangEt = factory());
})(this, (function () { 'use strict';

  /*! WARNING: This is a machine-generated translation and may contain errors or inaccuracies. */
  var et = {
    // Estonian
    strings: {
      LANG_CODE: 'et',
      MAIN_TOGGLE_LABEL: 'Kontrollida ligipääsetavust',
      CONTAINER_LABEL: 'Ligipääsetavuse kontrollija',
      ERROR: 'Viga',
      ERRORS: 'Vead',
      WARNING: 'Hoiatus',
      WARNINGS: 'Hoiatused',
      GOOD: 'Hea',
      ON: 'Veebilehel',
      OFF: 'Väljaspool',
      ALERT_TEXT: 'Hoiatus',
      ALERT_CLOSE: 'Sulge',
      OUTLINE: 'Lehekülje ülevaade',
      PAGE_ISSUES: 'Lehekülje probleemid',
      SETTINGS: 'Seaded',
      CONTRAST: 'Kontrast',
      FORM_LABELS: 'Vormimärgised',
      LINKS_ADVANCED: 'Lingid (Täiustatud)',
      DARK_MODE: 'Tume režiim',
      SHORTCUT_SCREEN_READER: 'Hüpake väljaandele. Klaviatuuri otsetee: S',
      SHORTCUT_TOOLTIP: 'Väljundi juurde hüpata',
      NEW_TAB: 'Avab uue vahekaardi',
      PANEL_HEADING: 'Ligipääsetavuse kontroll',
      PANEL_STATUS_NONE: 'Vigu ei leitud.',
      PANEL_ICON_WARNINGS: 'leitud hoiatused.',
      PANEL_ICON_TOTAL: 'kõik leitud probleemid kokku.',
      NOT_VISIBLE_ALERT: 'Objekt, mida üritate vaadata, ei ole nähtav; see võib olla peidetud või olla akordioni või vahekaardikomponendi sees. Siin on eelvaade:',
      ERROR_MISSING_ROOT_TARGET: 'Täielik lehekülg kontrolliti ligipääsetavuse osas, sest sihtala <code>%(root)</code> ei ole olemas.',
      HEADING_NOT_VISIBLE_ALERT: 'Pealkiri ei ole nähtav; see võib olla peidetud või olla akordioni või vahekaardikomponendi sees.',
      SKIP_TO_PAGE_ISSUES: 'Skip to Page Issues (lehekülje probleemid)',
      CONSOLE_ERROR_MESSAGE: 'Vabandame, kuid selle lehekülje ligipääsetavuse kontrolliga on probleem. Kas te saaksite <a href="%(link)">teavitada sellest selle vormi kaudu</a> või <a href="%(link)">GitHubis</a>?',

      // Dismiss
      PANEL_DISMISS_BUTTON: 'Show %(dismissCount) dismissed warnings',
      DISMISS: 'Lase lahti',
      DISMISSED: 'Kõrvaldatud hoiatused',
      DISMISS_REMINDER: 'Pange tähele, et hoiatused lükatakse tagasi ainult <strong>vähemalt</strong>. Brauseri ajaloo ja küpsiste kustutamine taastab kõik varem tühistatud hoiatused kõigil lehekülgedel.',

      // Export
      DATE: 'Kuupäev',
      PAGE_TITLE: 'Lehe pealkiri',
      RESULTS: 'Tulemused',
      EXPORT_RESULTS: 'Ekspordi tulemused',
      GENERATED: 'Tulemused genereeritud %(tool) abil.',
      PREVIEW: 'Eelvaade',
      ELEMENT: 'Element',
      PATH: 'Rada',

      // Colour filters
      COLOUR_FILTER: 'Värvifilter',
      PROTANOPIA: 'Protanopia',
      DEUTERANOPIA: 'Deuteranopia',
      TRITANOPIA: 'Tritanopia',
      MONOCHROMACY: 'Ühevärvilisus',
      COLOUR_FILTER_MESSAGE: 'Kontrollige, kas on raske tajuda või teistest värvidest eristada elemente.',
      RED_EYE: 'Punane pime.',
      GREEN_EYE: 'Roheline pime.',
      BLUE_EYE: 'Sinine pime.',
      MONO_EYE: 'Punane, sinine ja roheline pime.',
      COLOUR_FILTER_HIGH_CONTRAST_MESSAGE: 'Värvifiltrid ei tööta kõrge kontrastsusega režiimis.',

      // Alternative text stop words
      SUSPICIOUS_ALT_STOPWORDS: [
        'pilt',
        'graafiline',
        'foto',
        'photo',
        'image',
        'graphic',
      ],
      PLACEHOLDER_ALT_STOPWORDS: [
        'alt',
        'pilt',
        'foto',
        'dekoratiivsed',
        'platsihoidja',
        'kohaomaniku pilt',
        'distantsi',
        'photo',
        'image',
        'graphic',
      ],
      PARTIAL_ALT_STOPWORDS: [
        'kliki',
        'kliki siia',
        'kliki siia rohkem',
        'kliki siia, et rohkem teada saada',
        'klõpsates siin',
        'kontrollida',
        'üksikasjalikult siin',
        'lae alla',
        'alla laadida siit',
        'teada saada',
        'lisateave',
        'vorm',
        'siin',
        'info',
        'teave',
        'link',
        'õppida',
        'rohkem teada',
        'lisateave',
        'õppida',
        'rohkem',
        'lehekülg',
        'paber',
        'loe edasi',
        'loe',
        'loe seda',
        'see',
        'see lehekülg',
        'see veebileht',
        'vaadata',
        'vaadata meie',
        'veebileht',
      ],
      WARNING_ALT_STOPWORDS: [
        'kliki siia',
      ],
      NEW_WINDOW_PHRASES: [
        'väline',
        'uus vahekaart',
        'uus aken',
        'pop-up',
        'hüpata',
      ],
      FILE_TYPE_PHRASES: ['dokument', 'arvutustabel', 'arvutusleht', 'tihendatud fail', 'arhiveeritud fail', 'tööleht', 'powerpoint', 'esitlus', 'install', 'video', 'audio', 'pdf'],
      LANG_READABILITY: 'Loetavus',
      LANG_AVG_SENTENCE: 'Keskmine sõna ühe lause kohta:',
      LANG_COMPLEX_WORDS: 'Keerulised sõnad:',
      LANG_TOTAL_WORDS: 'Sõnad:',
      LANG_VERY_DIFFICULT: 'Väga raske',
      LANG_DIFFICULT: 'Raske',
      LANG_FAIRLY_DIFFICULT: 'Üsna raske',
      LANG_GOOD: 'Hea',
      READABILITY_NO_P_OR_LI_MESSAGE: 'Ei saa arvutada loetavuse skoori. Ei leitud lõiget <code>&lt;p&gt;</code> või loetelu sisu <code>&lt;li&gt;</code>.',
      READABILITY_NOT_ENOUGH_CONTENT_MESSAGE: 'Loetavuse hinde arvutamiseks ei ole piisavalt sisu.',
      HEADING_NON_CONSECUTIVE_LEVEL: 'Kasutatakse mittejärjepideva pealkirja tasandit. Pealkirjad ei tohiks kunagi taset vahele jätta ega minna <strong>pealkirjast %(prevLevel)</strong> kuni <strong {r}>pealkirjast %(level)</strong>.',
      HEADING_EMPTY: 'Tühi rubriik leitud! Parandamiseks kustutage see rida või muutke selle vorming <strong {r}>pealkiri %(level)</strong> <strong>normaalseks</strong> või <strong>paragrahviks</strong>.',
      HEADING_LONG: 'Pealkiri on pikk! Pealkirju tuleks kasutada sisu korrastamiseks ja struktuuri edastamiseks. Need peaksid olema lühikesed, informatiivsed ja unikaalsed. Palun hoidke pealkirjad alla 160 tähemärgi (mitte rohkem kui üks lause). <hr> Märkide arv: <strong {r}>%(headingLength)</strong>',
      HEADING_FIRST: 'Lehekülje esimene pealkiri peaks tavaliselt olema pealkiri 1 või 2. Pealkiri 1 peaks olema peamise sisuosa algus ja on peamine pealkiri, mis kirjeldab lehe üldist eesmärki. Lisateave <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">pealkirjade struktuuri kohta.</a>',
      HEADING_MISSING_ONE: 'Puudub pealkiri 1. Pealkiri 1 peaks olema peamise sisuala algus ja on peamine pealkiri, mis kirjeldab lehe üldist eesmärki. Lisateave <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">pealkirja struktuur.</a>',
      HEADING_EMPTY_WITH_IMAGE: 'Pealkiri ei sisalda teksti, kuid sisaldab pilti. Kui see ei ole pealkiri, muutke selle formaat <strong {r}>pealkiri %(level)</strong>-st <strong>normaalseks</strong> või <strong>paragrahviks</strong>. Vastasel juhul lisage pildile alt-tekst, kui see ei ole dekoratiivne.',
      PANEL_HEADING_MISSING_ONE: 'Puudub rubriik 1!',
      PANEL_NO_HEADINGS: 'Pealkirju ei leitud.',
      LINK_EMPTY: 'Eemaldage tühjad lingid ilma tekstita.',
      LINK_EMPTY_LINK_NO_LABEL: 'Lingil ei ole eristatavat teksti, mis oleks nähtav ekraanilugejatele ja muudele abivahenditele. Parandada: <ul><li>Lisandage lühike tekst, mis kirjeldab, kuhu link viib.</li><li>Kui tegemist on <a href="https://a11y-101.com/development/icons-and-links">ikoonilink või SVG,</a> puudub tõenäoliselt kirjeldav märgistus.</li><li>Kui arvate, et see link on kopeerimis-/liidevigast tingitud viga, kaaluge selle kustutamist.</li></ul>Kui arvate, et tegemist on kopeerimis-/liidevigast tingitud veaga, kaaluge selle kustutamist.</li></ul>',
      LINK_LABEL: '<strong>Linki silt:</strong> %(sanitizedText)',
      LINK_STOPWORD: 'Linkide tekst ei pruugi olla piisavalt kirjeldav kontekstiväliselt: <strong {r}>%(error)</strong><hr><strong>Tipp!</strong> Linkide tekst peaks alati olema selge, unikaalne ja sisukas. Vältige tavalisi sõnu nagu &quot;kliki siia&quot; või &quot;õpi rohkem&quot;',
      LINK_BEST_PRACTICES: 'Kaaluge lingi teksti asendamist: <strong {r}>%(error)</strong><hr><ul><li>&quot;Click here&quot; keskendub hiire mehaanikale, kui paljud inimesed ei kasuta hiirt või võivad vaadata seda veebisaiti mobiilseadmega. Kaaluge teise, ülesandega seotud verbi kasutamist.</li><li>Vältige HTML-sümbolite kasutamist üleskutsena, välja arvatud juhul, kui need on abistava tehnoloogia jaoks varjatud.</li></ul>',
      LINK_URL: 'Pikemad, vähem arusaadavad URL-aadressid, mida kasutatakse linkide tekstina, võivad olla raskesti mõistetavad, kui neid kasutatakse abivahendi abil. Enamasti on parem kasutada URL-i asemel inimesele loetavat teksti. Lühikesed URL-aadressid (näiteks saidi koduleht) on okei. <hr><strong>Nipp!</strong> Linkide tekst peaks alati olema selge, unikaalne ja sisukas, et see oleks kontekstiväliselt arusaadav.',
      LINK_DOI: 'Veebilehtede või ainult veebipõhiste ressursside puhul soovitab <a href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/accessibility/urls#:~:text=descriptive%20links">APA stiilijuhend</a> kasutada kirjeldavaid linke, ümbritsedes teose URL-i või DOI-d selle pealkirja ümber. Pikemad, vähem arusaadavad URL-aadressid, mida kasutatakse linkide tekstina, võivad olla raskesti mõistetavad, kui neid kasutatakse abivahendi abil.',
      NEW_TAB_WARNING: 'Link avaneb uues vahekaardis või aknas ilma hoiatuseta. See võib olla häiriv, eriti inimestele, kellel on raskusi visuaalse sisu tajumisega. Teiseks ei ole alati hea tava kontrollida kellegi kogemust või teha otsuseid tema eest. Märkige lingi tekstis, et link avaneb uues aknas<hr><strong>Nipp!</strong> Õppige ära parimad tavad: <a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">Linkide avamine uues brauseriaknas ja vahekaardis.</a>',
      FILE_TYPE_WARNING: 'Link viitab ilma hoiatuseta PDF- või allalaaditavale failile (nt MP3, Zip, Word Doc). Märkige faili tüüp lingi tekstis. Kui tegemist on suure failiga, kaaluge faili suuruse lisamist.<hr><strong>Näide:</strong> Juhtkonna aruanne (PDF, 3MB)',
      LINK_IDENTICAL_NAME: 'Lingi tekst on identne teise lingiga, kuigi see viitab teisele lehele. Mitu sama tekstiga linki võib tekitada segadust inimestele, kes kasutavad ekraanilugejaid.<hr>Võtke arvesse, et järgmine link oleks kirjeldavam, et aidata seda teistest linkidest eristada: <strong {r}>%(sanitizedText)</strong>',
      MISSING_ALT_LINK_BUT_HAS_TEXT_MESSAGE: 'Pilti kasutatakse lingina koos ümbritseva tekstiga, kuigi alt-atribuut peaks olema märgitud dekoratiivseks või null.',
      MISSING_ALT_LINK_MESSAGE: 'Pilti kasutatakse lingina, kuid puudub alt-tekst! Palun veenduge, et alt-tekst kirjeldab, kuhu link viib.',
      MISSING_ALT_MESSAGE: 'Puuduv alt-tekst! Kui pilt edastab lugu, meeleolu või olulist teavet - kirjeldage kindlasti pilti.',
      LINK_ALT_HAS_FILE_EXTENSION: 'Alt-tekstis olev faililaiend leitud. Veenduge, et alt-tekst kirjeldab lingi sihtkohta, mitte pildi sõna-sõnalist kirjeldust. Eemaldage: <strong {r}>%(error)</strong>.<hr><strong>Alt tekst:</strong> %(altText)',
      LINK_IMAGE_PLACEHOLDER_ALT_MESSAGE: 'Leitud lingitud pildi sees olev mittekirjeldav või paigutatud alt-tekst. Veenduge, et alt-tekst kirjeldab lingi sihtkohta, mitte pildi sõna-sõnalist kirjeldust. Asendage järgmine alt-tekst: <strong {r}>%(altText)</strong>',
      LINK_IMAGE_SUS_ALT_MESSAGE: 'Abitehnoloogiad näitavad juba, et tegemist on pildiga, seega võib &quot;<strong {r}>%(error)</strong>&quot; olla üleliigne. Veenduge, et alt-tekst kirjeldab lingi sihtkohta, mitte pildi sõna-sõnalist kirjeldust. <hr> <strong>Alt tekst:</strong> %(altText)',
      ALT_HAS_FILE_EXTENSION: 'Alt-tekstis olev faililaiend leitud. Kui pilt edastab lugu, meeleolu või olulist teavet - kirjeldage kindlasti pilti. Eemaldage: <strong {r}>%(error)</strong>.<hr><strong>Alt tekst:</strong> %(altText)',
      ALT_PLACEHOLDER_MESSAGE: 'Leitud mittekirjeldav või paigutatud alt-tekst. Asendage järgmine alt-tekst millegi sisukamaga: <strong {r}>%(altText)</strong>',
      ALT_HAS_SUS_WORD: 'Abitehnoloogiad näitavad juba, et tegemist on pildiga, seega &quot;<strong {r}>%(error)</strong>&quot; võib olla üleliigne. <hr> <strong>Alt tekst:</strong> %(altText)',
      LINK_HIDDEN_FOCUSABLE: 'Lingil on <code>aria-hidden=&quot;true&quot;</code>, kuid see on ikkagi klaviatuuriga fookuses. Kui kavatsete peita ülearuse või topeltlingi, lisage ka <code>tabindex=&quot;-1&quot;</code>.',
      LINK_IMAGE_NO_ALT_TEXT: 'Linki sees olev pilt on märgitud dekoratiivseks ja lingi tekst puudub. Palun lisage pildile alt-tekst, mis kirjeldab lingi sihtkohta.',
      LINK_IMAGE_HAS_TEXT: 'Pilt on märgitud dekoratiivseks, kuigi link kasutab ümbritsevat teksti kirjeldava märgisena.',
      LINK_IMAGE_LONG_ALT: 'Lingitud pildi Alt-teksti kirjeldus on <strong>liiga pikk</strong>. Lingitud piltide alt-tekst peaks kirjeldama, kuhu link viib, mitte pildi sõna-sõnaline kirjeldus. <strong>Võta arvesse, et kasuta alt-tekstina selle lehekülje pealkirja, millele see viitab.</strong> <hr> <strong>Alt-tekst (<span {r}>%(altLength)</span> tähemärki):</strong> %(altText)',
      LINK_IMAGE_ALT_WARNING: 'Pildilink sisaldab alternatiivset teksti. <strong>Kas alternatiivne tekst kirjeldab, kuhu link viib?</strong> Kaaluge alternatiivse tekstina selle lehekülje pealkirja kasutamist, millele link viitab. <hr> <strong>Alt-tekst:</strong> %(altText)',
      LINK_IMAGE_ALT_AND_TEXT_WARNING: 'Pildilink sisaldab <strong>sellise alt-teksti ja ümbritseva lingi teksti.</strong> Kui see pilt on dekoratiivne ja seda kasutatakse funktsionaalse lingina teisele lehele, kaaluge pildi märkimist dekoratiivseks või nullina - ümbritsevast lingi tekstist peaks piisama. <hr> <strong>Alt tekst:</strong> %(altText) <hr> <strong>Linki silt:</strong> %(sanitizedText)',
      IMAGE_FIGURE_DECORATIVE: 'Pilt on märgitud kui <strong>dekoratiivne</strong> ja abitehnoloogiad ignoreerivad seda. <hr> Kuigi on esitatud <strong>caption</strong>, peaks pildil olema enamasti ka alt-tekst. <ul><li>Alt-tekst peaks andma lühikese kirjelduse selle kohta, mis on pildil.</li><li>Tekstis peaks tavaliselt olema kontekst, et seostada pilt ümbritseva sisuga või juhtida tähelepanu konkreetsele teabele.</li></ul>Lisaks: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a>',
      IMAGE_FIGURE_DUPLICATE_ALT: 'Ärge kasutage täpselt samu sõnu nii alt- kui ka tiiteltekstis. Ekraanilugejad annavad teavet kaks korda teada.<ul><li>Alt-tekst peaks andma lühikese kirjelduse selle kohta, mis on pildil.</li><li>Tekstis peaks tavaliselt olema kontekst, et seostada pilt ümbritseva sisuga või juhtida tähelepanu konkreetsele teabele.</li></ul> Lisateave: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a> <hr> <strong>Alt tekst:</strong> %(altText)',
      IMAGE_DECORATIVE: 'Pilt on märgitud kui <strong>dekoratiivne</strong> ja abitehnoloogiad ignoreerivad seda. Kui pilt edastab lugu, meeleolu või olulist teavet - lisage kindlasti alt-tekst.',
      IMAGE_ALT_TOO_LONG: 'Alt-teksti kirjeldus on <strong>liiga pikk</strong>. Alt-tekst peaks olema lühike, kuid sisukas nagu <em>tweet</em> (umbes 100 tähemärki). Kui tegemist on keerulise pildi või graafikuga, kaaluge pildi pika kirjelduse paigutamist allolevasse teksti või akordionikomponenti. <hr> <strong>Alt tekst (<span {r}>%(altLength)</span> tähemärki):</strong> %(altText)',
      IMAGE_PASS: '<strong>Alt tekst:</strong> %(altText)',
      LABELS_MISSING_IMAGE_INPUT_MESSAGE: 'Pildi nupul puudub alt-tekst. Palun lisage alt-tekst, et anda ligipääsetav nimi. Näiteks: <em>Search</em> või <em>Submit</em>.',
      LABELS_INPUT_RESET_MESSAGE: 'Reset-nuppe ei tohiks <strong>ei</strong> kasutada, kui see pole spetsiaalselt vajalik, sest neid on lihtne kogemata aktiveerida. <hr> <strong>Nipp!</strong> Lugege, miks <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/">Reset ja Cancel nupud tekitavad kasutatavusprobleeme.</a>',
      LABELS_ARIA_LABEL_INPUT_MESSAGE: 'Sisendil on juurdepääsetav nimi, kuigi palun veenduge, et ka silt on nähtav. <hr> <strong>Sisendmärgis:</strong> %(sanitizedText)',
      LABELS_NO_FOR_ATTRIBUTE_MESSAGE: 'Selle sisendiga ei ole seotud mingit märgistust. Lisage sildile <code>for</code> atribuut, mis vastab selle sisendi <code>id</code>. <hr> Selle sisendi ID on: <strong>id=&#34;%(id)&#34;</strong>',
      LABELS_MISSING_LABEL_MESSAGE: 'Selle sisendiga ei ole seotud mingit märgistust. Palun lisage sellele sisendile <code>id</code> ja lisage sildile vastav <code>for</code> atribuut.',
      EMBED_VIDEO: 'Palun veenduge, et <strong>kõik millisel videol on kinnised subtiitrid.</strong> Kogu heli- ja videosisu puhul on subtiitrite esitamine kohustuslik A-taseme nõue. Üleskirjutused toetavad kurte ja vaegkuuljaid inimesi, kes on kurdid või vaegkuuljad.',
      EMBED_AUDIO: 'Veenduge, et kõigi podcastide kohta esitatakse <strong>transkriptsioon.</strong> Audiosisu transkriptsiooni esitamine on kohustuslik A-taseme nõue. Transkriptsioonid toetavad kurte ja vaegkuuljaid, kuid neist on kasu kõigile. Kaaluge transkriptsiooni paigutamist allapoole või akordionpaneeli sisse.',
      EMBED_DATA_VIZ: 'Sellised andmete visualiseerimise vidinad on sageli problemaatilised inimestele, kes kasutavad navigeerimiseks klaviatuuri või ekraanilugejat, ning võivad tekitada märkimisväärseid raskusi inimestele, kellel on madal nägemine või värvipimedus. Soovitatav on esitada sama teave alternatiivses (teksti või tabeli) vormis vidina all. <hr> Lisateave <a href="https://www.w3.org/WAI/tutorials/images/complex">komplekspiltide kohta.</a>',
      EMBED_MISSING_TITLE: 'Varjatud sisu vajab juurdepääsetavat nime, mis kirjeldab selle sisu. Andke <code>iframe</code> elemendile <code>tiitle</code> või <code>aria-label</code> atribuut unikaalne <code>tiitle</code> või <code>aria-label</code>. Lisateave <a href="https://web.dev/learn/accessibility/more-html#iframes">iFrame\'i kohta.</a>',
      EMBED_GENERAL_WARNING: 'Ei saa kontrollida varjatud sisu. Palun veenduge, et piltidel on alt-tekst, videote pealkirjad, tekst on piisavalt kontrastne ja interaktiivsed komponendid on <a href="https://webaim.org/techniques/keyboard/">tahvlile juurdepääsetavad.</a>.',
      EMBED_UNFOCUSABLE: '<code>&lt;iframe&gt;</code> koos fookustamata elementidega ei tohiks olla <code>tabindex="-1"</code>. Manustatud sisu ei ole klaviatuuriga juurdepääsetav.',
      QA_BAD_LINK: 'Leitud halb link. Link näib viitavat arenduskeskkonnale. <hr> See link viitab: <br> <strong {r}>%(el)</strong>',
      QA_BAD_ITALICS: 'Paks ja kursiivne märgistus on semantilise tähendusega ja neid ei tohiks <strong>ei</strong> kasutada tervete lõigete esiletõstmiseks. Häälestatud teksti tuleks kasutada selleks, et rõhutada sõna või fraasi tugevalt <strong>kõrge</strong>. Kursiivkirjas tuleks kasutada pärisnimede (st raamatute ja artiklite pealkirjade), võõrsõnade, jutumärkide esiletõstmiseks. Pikad tsitaadid tuleks vormistada plokktsitaatidena.',
      QA_PDF: 'Ei saa kontrollida PDF-failide juurdepääsetavust. PDF-failid loetakse veebisisuks ja need tuleb samuti juurdepääsetavaks muuta. PDF-failid sisaldavad sageli probleeme inimeste jaoks, kes kasutavad ekraanilugejaid (puuduvad struktuurilised märgised või vormiväljade märgised) ja inimeste jaoks, kellel on vaegnägemine (tekst ei voola suurendatud kujul tagasi). <ul><li>Kui tegemist on vormiga, kaaluge alternatiivina ligipääsetava HTML-vormi kasutamist.</li><li>Kui tegemist on dokumendiga, kaaluge selle teisendamist veebileheks.</li></ul>Muudel juhtudel kontrollige <a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">PDF-i ligipääsetavust Acrobat DC-s.</a>.',
      QA_DOCUMENT: 'Ei saa kontrollida dokumendi juurdepääsetavust. Lingitud dokumente loetakse veebisisuks ja need tuleb samuti juurdepääsetavaks muuta. Palun vaadake see dokument käsitsi üle. <ul><li>Muuta oma <a href="https://support.google.com/docs/answer/6199477?hl=et">Google Workspace\'i dokument või esitlus ligipääsetavamaks.</a></li></li><li>Muuta oma <a href="https://support.microsoft.com/et/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155">Office\'i dokumendid ligipääsetavamaks.</a></li></ul>',
      QA_PAGE_LANGUAGE: 'Lehekülje keel ei ole deklareeritud! Palun <a href="https://www.w3.org/International/questions/qa-html-language-declarations">deklareerige keel HTML-sildil.</a>',
      QA_PAGE_TITLE: 'Puudub lehekülje pealkiri! Palun sisestage <a href="https://developer.mozilla.org/et/docs/Web/HTML/Element/title">lehe pealkiri.</a>.',
      QA_BLOCKQUOTE_MESSAGE: 'Kas see on pealkiri? <strong {r}>%(sanitizedText)</strong> <hr> Plokkviiteid tuleks kasutada ainult jutumärkide jaoks. Kui see on mõeldud pealkirjaks, muutke see plokktsitaat semantiliseks pealkirjaks (nt pealkiri 2 või pealkiri 3).',
      QA_FAKE_HEADING: 'Kas see on pealkiri? <strong {r}>%(boldtext)</strong> <hr> Raske või suur tekstirida võib tunduda pealkirjana, kuid keegi, kes kasutab ekraanilugejat, ei saa aru, et see on oluline või ei saa selle sisu juurde hüpata. Paks või suur tekst ei tohiks kunagi asendada semantilisi pealkirju (rubriik 2 kuni rubriik 6).',
      QA_SHOULD_BE_LIST: 'Kas püüate koostada nimekirja? Võimalik nimekiri on leitud: <strong {r}>%(firstPrefix)</strong> <hr> Veenduge, et kasutate semantilisi nimekirju, kasutades selle asemel bullet- või numbrivormingu nuppe. Kui kasutate semantilist loetelu, saavad abivahendid edastada teavet, näiteks elementide koguarvu ja iga elemendi suhtelise positsiooni loetelus. Lisateave <a href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists">semantiliste loetelude kohta.</a>',
      QA_UPPERCASE_WARNING: 'Leidsin kõik suurtähed. Mõned ekraanilugejad võivad tõlgendada täistähti akronüümina ja lugeda iga tähte eraldi. Lisaks sellele on mõnedel inimestel raskem lugeda ja see võib jätta mulje, nagu oleks see HÄÄLETUS.',
      QA_DUPLICATE_ID: 'Leiti <strong>korduv ID</strong>. Teadaolevalt põhjustavad dubleeritud ID-vead probleeme tugitehnoloogiatele, kui need üritavad sisuga suhelda. <hr> Palun eemaldage või muutke järgmine ID: <strong {r}>%(id)</strong>.',
      QA_TEXT_UNDERLINE_WARNING: 'Allakriipsutatud teksti võib segi ajada linkidega. Kaaluge teistsuguse stiili kasutamist, näiteks <code>&lt;strong&gt;</code><strong>tugev tähtsus</strong><code>&lt;/strong&gt;</code> või <code>&lt;em&gt;</code><em>emphasis</em><code>&lt;/em&gt;</code>.',
      QA_SUBSCRIPT_WARNING: 'Alam- ja ülaindeksite vormindamise võimalusi tuleks kasutada ainult teksti asukoha muutmiseks tüpograafiliste konventsioonide või standardite alusel. Seda ei tohiks <strong>ei</strong> kasutada ainult esitlus- või välimuseesmärkidel. Tervete lausete vormindamine tekitab probleeme loetavusega. Asjakohased kasutusjuhud on näiteks eksponentide, ordinaalarvude, näiteks 4<sup>th</sup> asemel 4<sup>, ja keemiliste valemite (nt H<sub>2</sub>O) kuvamine.',
      TABLES_MISSING_HEADINGS: 'Puuduvad tabeli päised! Kättesaadavad tabelid vajavad HTML-märgistust, mis tähistab päise- ja andmerakke, mis määratleb nende omavahelise seose. See teave annab konteksti inimestele, kes kasutavad abivahendeid. Tabeleid tuleks kasutada ainult tabeliandmete jaoks. <hr> Lisateave <a href="https://www.w3.org/WAI/tutorials/tables/">juurdepääsetavate tabelite kohta.</a>',
      TABLES_SEMANTIC_HEADING: 'Semantilisi pealkirju, nagu pealkiri 2 või pealkiri 3, tuleks kasutada ainult sisulõikudes; <strong>ei</strong> HTML-tabelites. Märkige tabelipealkirjad hoopis elemendi <code>&lt;th&gt;</code> abil. <hr> Lisateave <a href="https://www.w3.org/WAI/tutorials/tables/">juurdepääsetavate tabelite kohta.</a>',
      TABLES_EMPTY_HEADING: 'Leitud on tühi tabeli päis! Tabeli päised ei tohiks <strong>ei tohiks</strong> kunagi</strong> olla tühjad. Oluline on määrata rea ja/või veeru päised, et anda edasi nende seos. See teave annab konteksti inimestele, kes kasutavad abivahendeid. Pidage meeles, et tabeleid tuleks kasutada ainult tabeliandmete jaoks. <hr> Lisateave <a href="https://www.w3.org/WAI/tutorials/tables/">juurdepääsetavate tabelite kohta.</a>',
      CONTRAST_ERROR: 'See tekst ei ole taustaga piisavalt kontrastne. Kontrastsuse suhe peaks olema tavalise teksti puhul vähemalt 4,5:1 ja suure teksti puhul 3:1. <hr> Kontrastsuse suhe on <strong {r}>%(cratio)</strong> järgmise teksti puhul: <strong {r}>%(sanitizedText)</strong>',
      CONTRAST_WARNING: 'Selle teksti kontrastsus on teadmata ja see tuleb käsitsi üle vaadata. Veenduge, et teksti ja tausta värvid oleksid tugevalt kontrastsed. Kontrastsuse suhe peaks olema tavalise teksti puhul vähemalt 4,5:1 ja suure teksti puhul 3:1. <hr> <strong>Palun kontrollige:</strong> %(sanitizedText)',
      CONTRAST_INPUT_ERROR: 'Selle sisendi tekst ei ole taustaga piisavalt kontrastne. Kontrastsuse suhe peaks olema tavalise teksti puhul vähemalt 4,5:1 ja suure teksti puhul 3:1. <hr> Kontrastsuse suhe: <strong {r}>%(cratio)</strong>',
    },
  };

  return et;

}));
