const questions = {
    elektrotechnik: [
    { question: "Wie lautet die Einheit des elektrischen Stromes I?", answers: ["Ohm", "Ampere", "Volt", "Watt"], correct: 1 },
    { question: "Für welche Spannungsarten gelten die Abkürzungen AC und DC?", answers: ["Wechselspannung", "Dreieckspannung", "Gleichspannung", "Rechteckspannung"], correct: [0, 2] },
    { question: "Wie lautet die Einheit des elektrischen Widerstandes R?", answers: ["Watt", "Ampere", "Volt", "Ohm"], correct: 3 },
    { question: "In welcher Einheit wird die elektrische Leistung P angegeben?", answers: ["VA", "Ws", "W", "var"], correct: 2 },
    { question: "Welche Formeln geben das Ohmsche Gesetz wieder?", answers: ["R = I / U", "U = R / I", "U = R * I", "I = U / R"], correct: [1, 2] },
    { question: "Was passiert, wenn mehrere Widerstände in Reihe geschaltet werden?", answers: ["Der Gesamtwiderstand sinkt", "Bei konstanter Spannung U sinkt der Strom I", "Der Gesamtwiderstand ändert sich nicht", "Bei konstanter Spannung U steigt der Strom I"], correct: 1 },
    { question: "Welche Größe ist die gemeinsame Größe in einer Parallelschaltung?", answers: ["Spannung U", "Strom I", "Arbeit W", "Leistung P"], correct: 0 },
    { question: "Was passiert, wenn mehrere Widerstände parallel geschaltet werden?", answers: ["Der Gesamtwiderstand steigt", "Bei konstanter Spannung U sinkt der Strom I", "Der Gesamtwiderstand ändert sich nicht", "Bei konstanter Spannung U steigt der Strom I"], correct: 3 },
    { question: "Welche Größe ist die gemeinsame Größe in einer Reihenschaltung?", answers: ["Arbeit W", "Spannung U", "Leistung P", "Strom I"], correct: 3 },
    { question: "Welcher Formelbuchstabe wird für die Kapazität C eingesetzt?", answers: ["H", "L", "Q", "C"], correct: 3 },
    { question: "In welcher Einheit wird die Kapazität angegeben?", answers: ["H", "Vs", "F", "As"], correct: 2 },
    { question: "Welches elektrische Bauteil entspricht einer klassischen Kapazität?", answers: ["Spule", "Widerstand", "Kondensator", "Wicklung"], correct: 2 },
    { question: "Wie nennt man den Gesamtwiderstand im Wechselstromkreis?", answers: ["Scheinwiderstand", "Blindwiderstand", "Wirkwiderstand", "Hellwiderstand"], correct: 0 },
    { question: "Welcher Formelbustabe gilt für den Scheinwiderstand?", answers: ["P", "var", "S", "Ohm"], correct: 2 },
    { question: "Wie nennt man das Verhältnis zwischen mechanischer zur elektrischen Leistung?", answers: ["Wirkungsgrad", "Wirtschaftsgrad", "Windungsgrad", "Wellengrad"], correct: 0 },
    { question: "Steigt der Widerstandswert eines Leiters, wenn der Querschnitt größer gewählt wird?", answers: ["Nein, der Leiterwiderstand wird kleiner", "Ja, der Widerstandswert wird größer", "Wenn der Querschnitt sich nur um eine Stufe vergrößert, ändert sich der Wert nicht", "Wenn der Querschnitt sich nur um eine Stufe verringert, ändert sich der Wert nicht"], correct: 0 },
    { question: "Was passiert mit dem Leiterwiderstand, wenn die Umgebungstemperatur steigt?", answers: ["Die Umgebungstemperatur hat keinen Einfluss auf den Leiterwiderstand", "Der Leiterwiderstand wird größer", "Die Umgebungstemperatur hat einen Einfluss auf den Leiterwiderstand", "Der Leiterwiderstand wird kleiner"], correct: [2, 1] },
    { question: "Welches Material leitet den Strom am besten?", answers: ["Aluminium", "Silber", "Kupfer", "Gold"], correct: 1 },
    { question: "Welche Gefahr besteht bei fehlerhaften Verbindungen?", answers: ["Der Übergangswiderstand als auch die Temperatur sinken - Brandgefahr!", "Der Übergangswiderstand sinkt und die Temperatur steigt - Brandgefahr!", "Der Übergangswiderstand steigt und die Temperatur sinkt - Brandgefahr!", "Der Übergangswiderstand als auch die Temperatur steigt - Brandgefahr!"], correct: 3 },
    { question: "Vier Widerstände (18 Ohm, 35 Ohm, 22 Ohm und 25 Ohm liegen an U = 200 V. Wie groß sind R und I?", answers: ["200 Ohm und 2 A", "100 Ohm und 1 A", "100 Ohm und 2 A", "1000 Ohm und 2 A"], correct: 2 },
    { question: "Vier Widerstände (24 kOhm, 24 kOhm, 12 kOhm und 6 kOhm liegen an U = 120 V. Wie groß sind R und I?", answers: ["3 kOhm und 0,04 mA", "3 Ohm und 400 mA", "3 kOhm und 40 mA", "3 Ohm und 40 mA"], correct: 2 },
    { question: "Welche Aussage ist richtig?", answers: ["In einer Parallelschaltung steigt der Gesamtwiderstand mit steigender Anzahl von Teilwiderständen", "In einer Parallelschaltung sinkt der Gesamtwiderstand mit kleiner werdenden Anzahl von Teilwiderständen", "In einer Parallelschaltung sinkt der Gesamtwiderstand mit steigender Anzahl von Teilwiderständen", "In einer Parallelschaltung sinkt der Gesamtwiderstand mit kleiner werdenden Anzahl von Teilwiderständen"], correct: 2 },
    { question: "Welche Aussage ist falsch?", answers: ["In einer Parallelschaltung ist der Gesamtwiderstand stets kleiner, als der kleinste Teilwiderstand", "In einer Parallelschaltung fließt durch den größten Teilwiderstand der kleinste Teilstrom", "In einer Parallelschaltung ist der Gesamtwiderstand stets größer, als der kleinste Teilwiderstand", "Alle Teilwiderstände liegen an der selben Gesamtspannung U"], correct: 2 },
    { question: "Welche Aussage ist richtig?", answers: ["In einer Reihenschaltung ist der Gesamtwiderstand stets kleiner, als der größte Teilwiderstand", "In einer Reihenschaltung fließt durch den kleinsten Teilwiderstand der größte Teilstrom", "In einer Reihenschaltung ist der Gesamtwiderstand stets größer, als der größte Teilwiderstand", "Durch alle Teilwiderstände fließt der gleiche Strom I"], correct: 3 },
    { question: "Wie wird die Reihenschaltung noch bezeichnet?", answers: ["Stromteiler", "Spannungsteiler", "Stromreduzierschaltung", "Spannungsreduzierschaltung"], correct: 1 },
    { question: "Wie wird die Parallelschaltung noch bezeichnet?", answers: ["Spannungsreduzierschaltung", "Spannungsteiler", "Stromreduzierschaltung", "Stromteiler"], correct: 3 }
],
    arbeitsschutz: [
    { question: "Wer ist für die Umsetzung des Arbeitsschutzes verantwortlich?", answers: ["Der/Die Unternehmer*in", "Die Angestellten", "Der Staat", "Die Kommunen"], correct: [0, 1] },
    { question: "Was bedeutet PSA im arbeitsschutzrechtlichen Sinne?", answers: ["Plötzliche-Selbst-Auslösung", "Persönliche Schutzausrüstung", "ublic Service Announcement", "Professional Services Automation"], correct: [1] },
    { question: "Wer muss die PSA zur Verfügung stellen?", answers: ["Der/Die Unternehmer*in", "Die Angestellten selbst", "Je zur Hälfte beide Seiten", "Nur der Staat"], correct: [0] },
    { question: "Wann muss das Personal unterwiesen werden?", answers: ["Alle 4 Jahre", "Nach Ermessen des Unternehmers/der Unternehmerin", "Mindestens einmal jährlich", "Nach einem Unfall"], correct: [2] },
    { question: "Soll grundsätzlich unter Spannung (AuS) gearbeitet werden?", answers: ["Ja, wenn der Vorgesetze das erlaubt", "Ja, wenn die Arbeit dadurch schneller beendet werden kann", "Ja, aber nur Ingenieure", "Nein, grundsätzlich nicht"], correct: [3] },
    { question: "Wann gilt eine Anlage als spannungsfrei?", answers: ["Wenn das Messgerät 0 V anzeigt", "Wenn die Schutzeinrichtung abgeschaltet ist und das Messgerät 0 V anzeigt", "Wenn Anlage freigeschaltet und gegen Wiedereinschalten gesichert ist", "Wenn Anlage freigeschaltet, gegen Wiedereinschalten gesichert und messtechnisch geprüft ist"], correct: [3] },
    { question: "Was bedeutet EFK?", answers: ["Elektrische Führungskraft", "Elektriker für Kraftstrom", "Elektrofachkraft", "Elektrotechnisch unterwiesene Person"], correct: [2] },
    { question: "Was ist eine VEFK?", answers: ["Vorstehende Elektrische Führungskraft", "Verantwortliche Elektrotechnisch unterwiesene Person", "Verantwortliche Elektrofachkraft", "Verantwortlicher Elektriker für Kraftstrom"], correct: [2] },
    { question: "Worum handelt es sich um einen Qualifikationsstatus?", answers: ["EFK", "Ingenieur", "EffT", "Elektroniker"], correct: [0, 2] },
    { question: "Bis zu welchem Wert gilt der Niederspannungsbereich im DC-Bereich?", answers: ["Bis 50 V", "Bis 120 V", "Bis 1000 V", "Bis 1500 V"], correct: [3] },
    { question: "Bis zu welchem Wert gilt der Niederspannungsbereich im AC-Bereich?", answers: ["Bis 1 kV", "Bis 60 V", "Bis 1000 V", "Bis 1,5 kV"], correct: [2] },
    { question: "Wer ernennt später nach Theorie und Praxis die Person zur EffT?", answers: ["Der Eigentümer des Unternehmens", "Der Standortleiter des Unternehmens", "Eine VEFK (interne oder externe)", "Die disziplinarisch verantwortliche Person im Unternehmen"], correct: [2] },
    { question: "In welcher Form hat die Ernennung zu erfolgen?", answers: ["nur schriftlich, ohne Unterschrift", "nur mündlich", "nur schriftlich mit beiden Unterschriften und Datum", "nur schriftlich mit Datum"], correct: [2] },
    { question: "Muss vor Ernennung zur EffT eine Arbeitsanweisung vorliegen?", answers: ["Nein, das ist auf freiwilliger Basis", "Ja, diese ergibt sich schließlich aus einer vorgelagerten Gefährdungsbeurteilung", "Ja, eine Gefährdungsbeurteilung ist dagegen nicht notwendig", "Ja, aber nur im Hochspannungsbereich"], correct: [1] },
    { question: "Welche Qualifikation muss eine verantwortliche Elektrofachkraft (VEFK) haben?", answers: ["Eine Berufsausbildung reicht", "Meister im ET-Bereich", "Techniker*in oder Ingenieur*in im ET-Bereich", "Eigentümernachweis des Unternehmens reicht"], correct: [1, 2] },
    { question: "Wofür steht die engl. Abkürzung AC?", answers: ["Wechselspannung", "Gleichspannung", "Dreieckspannung", "Rechteckspannung"], correct: [0] },
    { question: "Wofür steht die engl. Abkürzung DC?", answers: ["Rechteckspannung", "Wechselspannung", "Dreieckspannung", "Gleichspannung"], correct: [3] },
    { question: "Was bedeuten die zwei übereinander stehenden Dreiecke auf Elektrowerkzeug und Schutzausrüstung?", answers: ["Werkzeug oder Hilfsmittel nicht stapeln", "Doppelte Vorsicht geboten", "Nur für private Zwecke einsetzbar", "Doppeldreieck-Symbol weist Eignung für das Arbeiten an unter Spannung stehenden Teilen aus"], correct: [3] },
    { question: "Wie heißt der Titel des Verbotszeichen P10?", answers: ["Schalten verboten", "Einschalten verboten", "Nicht betätigen", "Nicht schalten"], correct: [3] },
    { question: "Wie heißt der Titel des Verbotszeichen P031?", answers: ["Schalten verboten", "Einschalten verboten", "Nicht betätigen", "Nicht schalten"], correct: [0] },
    { question: "Darf zur Umsetzung der Regel 'Gegen Wiedereinschalten sichern' auch Isolierband genutzt werden?", answers: ["Ja, durchaus üblich", "Wenn nichts weiter da ist", "Keinesfalls. Es handelt sich um eine fahrlässige Handlung", "Wenn, dann nur rotes Isolierband"], correct: [2] }
],
    messtechnik: [
    { question: "Was passiert, wenn ich beim Multimeter DC statt AC einstelle und an einer Steckdose messe?", answers: ["Das Gerät zeigt 0 V an", "Das Gerät schwankt zwischen - 230 V und + 230 V", "Es zeigt einen Wert um 50 V an", "Das Messgerät gibt einen Piepton aus"], correct: [0] },
    { question: "Das Multmeter zeigt 0 V zwischen beiden Buchsen der Schuko-Steckdose an. Alles Okay?", answers: ["Nein, es müssen beide Buchsen noch gegen PE gemessen werden", "Ja, immerhin werden 0 V angezeigt", "Nein, es kann auch ein Verdrahtungsfehler vorliegen", "Ja, im schlimmsten Fall rettet mich noch der FI"], correct: [0, 2] },
    { question: "Was passiert, wenn man in den Strommesserbeich schaltet und an 230 V misst?", answers: ["Nix, Messgerät ist hochohmig genug", "Außer eine Anzeige von 0 V, passiert nicht viel", "Die Gerätesicherung knallt durch", "Ich erschrecke mich und könnte von der Leiter stürzen"], correct: [2, 3] },
    { question: "Mit welchem Messgerät misst man am sichersten die Spannungsfreiheit z.B. in der Haustechnik?", answers: ["Mit einem zweipoligen Spannungsprüfer", "Mit einem einpoligen Spannungsprüfer", "Mit berührungslosen Spannungsprüfern", "Mit einem Multimeter"], correct: [0] },
    { question: "Was muss getan werden, um Ströme messen zu können?", answers: ["Das Messgerät in Reihe schalten", "Strommessgerät paralle am Messobjekt halten", "Eine Stromzange einsetzen, wenn möglich", "Über Stromzähler Strom ausrechnen"], correct: [0, 2] },
    { question: "Was sagt die CAT-Kategorie von Messgeräten aus?", answers: ["Die Kategorien geben Aufschluss, in welchen Bereichen ein Messgerät gefahrlos eingesetzt werden kann", "Diese geben Aufschluss, wer in welchen Bereichen ein Messgerät gefahrlos einsetzen darf", "Sie gibt die maximale Spannungshöhe an, die man damit messen darf", "Sie gibt den maximalen Strom an, den man damit messen darf"], correct: [1] },
    { question: "Was muss vor jeder Verwendung des Messgerätes getan werden?", answers: ["Überprüfung auf Schäden", "Überprüfung auf Schäden, Eignung und Funktion", "Überprüfung auf Schäden und Eignung", "Überprüfung auf Funktion und Eignung", "Überprüfung auf Eignung"], correct: [1] },
    { question: "Was passiert, bei einer aktiven Anlage mit FI (0,3 A), wenn Sie L gegen Erde (PE) messen und den Druckknopf/die Druckknöpfe betätigen?", answers: ["Das Messgerät zeigt 0 V an", "Der FI fliegt raus", "Das Messgerät vibriert", "Das Messgerät vibriert und zeigt 230 V an"], correct: [3] },
    { question: "Was passiert, bei einer aktiven Anlage mit FI (0,5 A), wenn Sie L gegen Erde (PE) messen und den Druckknopf/die Druckknöpfe betätigen?", answers: ["Der FI fliegt raus", "Das Messgerät vibriert und zeigt 230 V an", "Das Messgerät zeigt 0 V an", "Das Messgerät vibriert"], correct: [1] },
    { question: "Was passiert, bei einer aktiven Anlage mit FI (0,03 A), wenn Sie L gegen Erde (PE) messen und den Druckknopf/die Druckknöpfe betätigen?", answers: ["Der FI fliegt raus", "Das Messgerät vibriert und zeigt 230 V an", "Das Messgerät zeigt 0 V an", "Das Messgerät vibriert"], correct: [0] },
    { question: "Welcher möglicher Fehler liegt vor, wenn Sie zwischen N und PE z.B. um die 50 V messen?", answers: ["Die Phase L ist nicht da", "Das Messgerät ist defekt", "Eine N-Leiterunterbrechung", "Die Einspeisung des Netzbetreibers funktioniert nicht"], correct: [2] },
    { question: "Welche Drehfeldrichtung muss netzseitig zur Verfügung gestellt werden?", answers: ["mindestens ein 4-poliges Netz mit Rechtsdrehfeld", "mindestens ein 5-poliges Netz mit Linksdrehfeld", "mindestens ein 4-poliges Netz mit Linksdrehfeld", "mindestens ein 5-poliges Netz mit Rechtsdrehfeld"], correct: [0] },
    { question: "Wie messe ich das Rechtsdrehfeld mit einem 2-poligen Spannungsprüfer?", answers: ["Eine Messpitze in L1, die andere in L2", "Die Messpitze mit der Kennzeichnung 'L1' in L1, die andere in L2", "Die Messpitze mit der Kennzeichnung 'L1' in L3, die andere mit 'L2' in L1", "Eine Messpitze in L1, die andere in L3"], correct: [1, 2] },
    { question: "Welche Phasenfolge ergibt ein Rechtsdrehfeld?", answers: ["L1  L2  L3", "L2  L1  L3", "L3  L2  L1", "L3  L1  L2"], correct: [0, 3] },
    { question: "Welche Farbe hatte früher der Schutzleiter PE?", answers: ["grün", "gelb", "rot", "grau"], correct: [2] },
    { question: "Welche Leiterfarben gelten für L1  L2 und L3?", answers: ["braun-schwarz-grau", "schwarz-braun-grau", "Normativ gibt es dafür keine expliziete Zuordnung", "grau-schwarz-braun"], correct: [0] },
    { question: "Welche Leiterfarbe galt früher für den N-Leiter?", answers: ["grau", "blau", "rot", "schwarz"], correct: [0] },
    { question: "Welcher Leiter wurde früher Nulleiter genannt?", answers: ["Die Phase L", "Der Schutzleiter PE", "Der N Leiter", "Der kombinierte Leiter aus N und PE"], correct: [3] },
    { question: "Spätesten wann muss eine Schutzeinrichtung im TN-S-Netz bei 230 V abschalten?", answers: ["innerhalb von 400 ms", "innerhalb von 0,4 s", "nach von 30 ms", "innerhalb von 0,2s"], correct: [0, 1] },
    { question: "Spätesten wann muss eine Schutzeinrichtung im TT-Netz bei 230 V abschalten?", answers: ["innerhalb von 0,2 s", "nach 200 ms", "spätestens nach 0,02 s", "nach 0,2 s"], correct: [0, 3] },
    { question: "Wie groß darf der maximale Differenzfehlerstrom für Personenschutz höchstens sein?", answers: ["0,3 mA", "0,03 A", "300 mA", "30 mA"], correct: [1, 3] },
    { question: "Was ist das besondere an einen RCD Typ B?", answers: ["Er kann auch glatte Gleichfehlerströme erfassen", "Ist träger als Typ A", "Gilt nicht für den Personenschutz", "Ist billiger als Typ A"], correct: [0] }
],
    betriebsmittel: [
    { question: "Was bedeutet die Abkürzung FI?", answers: ["Fehlerstromschutzschalter", "Stromschutzschalter", "Fuse-Ampere-Device", "Fehlerspannungsschutzschalter"], correct: [0] },
    { question: "Was ist ein RCD?", answers: ["Ein Fehlerspannungsschutzschalter", "Ein Überspannungsfehlerschutzschalter", "Ein Fehlerstromschutzschalter", "Ein Widerstandsschutzschalter"], correct: [2] },
    { question: "Welche Schutzeinrichtung ist für den Kurzschlussschutz zuständig?", answers: ["Ein LS-Schalter", "Ein Sicherungsautomat", "Ein Fehlerspannungsschutzschalter", "Ein Fehlerstromschutzschalter"], correct: [0] },
    { question: "Löst eine Überstromschutzeinrichtung (ÜSE) auch bei Erdschluss aus?", answers: ["Ja, immer.", "Nein, nie.", "Bedingt ja, wenn der Erdschlusstrom die Höhe eines Überlast- bzw. Kurzschlusstromes hat", "Bedingt ja, wenn der Erdschlusstrom kleiner ist als der Überlast- bzw. Kurzschlusstrom"], correct: [2] },
    { question: "Welche Aussage trifft auf LS-Schalter der Kategorie B zu?", answers: ["Es ist mindestens der 5-fache Sicherungsnennstrom notwendig, um den Kurzschlussfall sicher abzuschalten", "Ein B-Automat für 16 A benötigt somit maximal 80 A im Kurzschlussfall", "Es ist maximal der 5-fache Sicherungsnennstrom notwendig, um den Kurzschlussfall sicher abzuschalten", "Ein B-Automat für 16 A benötigt somit mindestens 80 A im Kurzschlussfall"], correct: [0, 1] },
    { question: "Wie lauten die produktneutralen Bezeichnung für Neozed und Diazed?", answers: ["D0 und D", "D und D0", "NH", "HH"], correct: [0] },
    { question: "Was bezeichnet die Abkürzung NH bei einer Sicherung?", answers: ["Niederspannungs-Hochleistungssicherung", "Niederstrom-Hochleistungssicherung", "Hochspannungssicherung", "Hochvoltsicherung"], correct: [0] },
    { question: "Welche Gemeinsamkeiten haben LS-Schalter und Motorschutzschalter?", answers: ["Beide schützen vor Kurzschluss und Überlast", "Beide schützen vor Unterspannung und Überlast", "Beide schützen vor Überspannung und Kurzschluss", "Beide schützen vor Überlast und minimalem Kurzschluss"], correct: [0] },
    { question: "Was ist der wesentliche Unterschied zwischen Motorschutzrelais und Motorschutzschalter ?", answers: ["Der Motorschutzschalter schütz gegen Überlast und Nennstrom", "Das Motorschutzrelais schützt nur gegen Überlast", "Das Motorschutzrelais schützt nur gegen Kurzschluss", "Beide sind ein und daselbe, nur eine andere Bezeichnung"], correct: [1] },
    { question: "Was ist der wesentliche Unterschied zwischen Kabel und Leitung?", answers: ["Leitungen dürfen nur unterirdisch verlegt werden", "Kabel dürfen nur oberirdisch verlegt werden", "Leitungen dürfen grundsätzlich nicht in Erde verlegt werden", "Kabel dürfen grundsätzlich nicht in Erde verlegt werden"], correct: [2] },
    { question: "Müssen feinst- und feindrähtige Leiter immer verzinnt werden?", answers: ["Ja, damit eine feste Verbindung entsteht", "Diese Leiterarten dürfen nicht (mehr) verzinnt werden", "Nur im Außenbereich ist diese Methode zulässig", "Im Innenbereich brauch nicht verzinnt werden"], correct: [1] },
    { question: "Dürfen fein- und feinstdrähtige Leiter auch ohne Aderendhülse verschraubt werden?", answers: ["Ja, wenn das Drehmoment nicht zu groß ist", "Ja, diese Methode ist immer noch zulässig", "Nein, definitiv nicht", "Wenn sie den gleichen Querschnitt besitzen, ja"], correct: [2] },
    { question: "Welche Schutzklassennummern gelten aktuell für elektrische Betriebsmittel?", answers: ["Schutzklassen 0, 1 und 2", "Schutzklassen A, B und C", "Schutzklassen 1, 2 und 3", "Schutzklassen 1, 2 und 4"], correct: [2] },
    { question: "Bei welcher Schutzklasse muss ein PE angeschlossen werden?", answers: ["Bei Schutzklasse 3", "Bei Schutzklasse 1", "Bei Schutzklasse 2", "Bei jeder Schutzklasse"], correct: [1] },
    { question: "Welche Schutzklasse liegt bei Betriebsmittel mit Schukosteckern vor?", answers: ["Schutzklasse 2", "Schutzklasse 0", "Schutzklasse 3", "Schutzklasse 1"], correct: [3] },
    { question: "Was bedeutet das 'J' in der Bezeichnung: NYM-J 3x1,5² ?", answers: ["Es liegt ein Schutzleiter vor", "Es liegt kein PE vor", "Es liegt kein Schutzleiter vor", "Es liegt ein PE vor"], correct: [0, 3] },
    { question: "Ist das NYM ein Kabel oder eine Leitung?", answers: ["Eine Leitung", "Ein Kabel", "weder noch", "Wenn es im Außenbereich liegt, ein Kabel, sonst Leitung"], correct: [0] },
    { question: "Ist das NYY eine Leitung oder ein Kabel?", answers: ["Eine Leitung", "Ein Kabel", "weder noch", "Wenn es im Innenbereich liegt, ein Kabel, sonst Leitung"], correct: [1] }
]
};

const categoryNames = Object.keys(questions);

let currentCategory = '';
let score = 0;
let questionIndex = 0;
let categoryQuestions = [];
let selectedAnswers = [];
let multiChoiceTimer = null;

function loadCategory(category) {
    currentCategory = category;
    score = 0;
    questionIndex = 0;
    categoryQuestions = questions[category];
    document.getElementById('score-container').style.display = 'none';
    document.getElementById('progress-bar').value = 0;
    selectedAnswers = [];
    multiChoiceTimer = null;
    displayQuestion();
}

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    if (questionIndex >= categoryQuestions.length) {
        displayScore();
        return;
    }

    const questionData = categoryQuestions[questionIndex];

    const questionElement = document.createElement('div');
    questionElement.classList.add('question');

    const questionNumber = document.createElement('div');
    questionNumber.classList.add('question-number');
    questionNumber.textContent = `Frage ${questionIndex + 1} von ${categoryQuestions.length}`;
    questionElement.appendChild(questionNumber);

    const questionTitle = document.createElement('h3');
    questionTitle.textContent = questionData.question;
    questionElement.appendChild(questionTitle);

    const answersContainer = document.createElement('div');
    answersContainer.classList.add('answers-container');

    questionData.answers.forEach((answer, answerIndex) => {
        const answerButton = document.createElement('button');
        answerButton.textContent = answer;
        answerButton.onclick = function() {
            handleAnswerClick(answerIndex, answerButton);
        };
        answersContainer.appendChild(answerButton);
    });

    questionElement.appendChild(answersContainer);
    questionContainer.appendChild(questionElement);
}

function handleAnswerClick(answerIndex, answerButton) {
    const questionData = categoryQuestions[questionIndex];

    if (Array.isArray(questionData.correct)) {
        if (selectedAnswers.includes(answerIndex)) {
            return;
        }
        selectedAnswers.push(answerIndex);

        if (questionData.correct.includes(answerIndex)) {
            answerButton.classList.add('selected');  // Grün für korrekte Antwort
        } else {
            answerButton.classList.add('wrong');     // Rot für falsche Antwort
        }

        // Feedback nur anzeigen, wenn noch nicht alle richtigen Antworten ausgewählt wurden
        if (selectedAnswers.length < questionData.correct.length) {
            updateTempFeedback("Da fehlt noch was!");
        } else if (selectedAnswers.length === questionData.correct.length) {
            removeTempFeedback(); // Temporäres Feedback entfernen, wenn alle richtigen Antworten ausgewählt wurden
            const allAnswerButtons = answerButton.parentElement.querySelectorAll('button');
            allAnswerButtons.forEach(btn => btn.disabled = true);

            const isCorrect = arraysEqualIgnoreOrder(selectedAnswers, questionData.correct);
            showFeedback(isCorrect);
        }
    } else { // Für Single-Choice-Fragen
        const answersContainer = answerButton.parentElement;
        const allAnswerButtons = answersContainer.querySelectorAll('button');
        allAnswerButtons.forEach(btn => btn.disabled = true);

        const isCorrect = (answerIndex === questionData.correct);
        if (isCorrect) {
            answerButton.classList.add('selected');  // Grün für korrekte Antwort
            score++;
        } else {
            answerButton.classList.add('wrong');     // Rot für falsche Antwort
        }
        showFeedback(isCorrect);
    }
}

function arraysEqualIgnoreOrder(a, b) {
    if (a.length !== b.length) return false;
    let sortedA = a.slice().sort();
    let sortedB = b.slice().sort();
    for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] !== sortedB[i]) return false;
    }
    return true;
}

function updateTempFeedback(message) {
    let questionContainer = document.getElementById('question-container');
    let tempFeedback = document.getElementById('temp-feedback');
    if (!tempFeedback) {
        tempFeedback = document.createElement('div');
        tempFeedback.id = 'temp-feedback';
        tempFeedback.classList.add('feedback');
        questionContainer.appendChild(tempFeedback);
    }
    tempFeedback.textContent = message;
}

function removeTempFeedback() {
    let tempFeedback = document.getElementById('temp-feedback');
    if (tempFeedback) {
        tempFeedback.remove();
    }
}

function showFeedback(isCorrect) {
    const feedbackElement = document.createElement('div');
    feedbackElement.classList.add('feedback');
    feedbackElement.textContent = isCorrect ? "Richtig!" : "Falsch!";
    
    feedbackElement.classList.add(isCorrect ? 'correct' : 'wrong');
    
    const questionContainer = document.querySelector('.answers-container');
    questionContainer.appendChild(feedbackElement);

    const nextButton = document.createElement('button');
    nextButton.textContent = "Weiter";
    nextButton.classList.add('next-btn');
    nextButton.onclick = function() {
        questionIndex++;
        selectedAnswers = [];
        displayQuestion();
    };

    questionContainer.appendChild(nextButton);
}

function displayScore() {
    const scoreContainer = document.getElementById('score-container');
    scoreContainer.innerHTML = "";
    scoreContainer.style.display = 'block';
    document.getElementById('score').textContent = `Du hast ${score} von ${categoryQuestions.length} Fragen richtig beantwortet.`;

    const newQuizButton = document.createElement('button');
    newQuizButton.textContent = 'Neues Quiz starten';
    newQuizButton.classList.add('restart-btn');
    newQuizButton.onclick = function() {
        resetQuiz();
        loadCategories();
    };
    scoreContainer.appendChild(newQuizButton);
}

function resetQuiz() {
    document.getElementById('question-container').innerHTML = '';
    document.getElementById('score-container').style.display = 'none';
}

function loadCategories() {
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML = '';
    categoryNames.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.classList.add('category-btn');
        categoryButton.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryButton.onclick = () => loadCategory(category);
        categoryContainer.appendChild(categoryButton);
    });
}

window.onload = function() {
    loadCategories();
};
