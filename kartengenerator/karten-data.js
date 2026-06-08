// karten-data.js

// Der Name der Variable muss EXAKT "kartenData" sein,
// damit das Skript in der index.html sie finden kann.
const kartenData = [
  {
    "set": "Szenario",
    "titel": "Gesundheit & Pflege",
    "beschreibung": "Ein Umfeld, in dem es um Diagnose, Behandlung, Prävention und die Unterstützung von Patient:innen und Pflegepersonal geht."
  },
  {
    "set": "Szenario",
    "titel": "Stadt & Verwaltung (Smart City)",
    "beschreibung": "Der urbane Raum und seine Verwaltung. Themen sind Bürger-Services, Infrastruktur, öffentliche Sicherheit und effiziente Prozesse im Rathaus."
  },
  {
    "set": "Szenario",
    "titel": "Bildung & Lernen",
    "beschreibung": "Kontexte wie Schulen, Universitäten oder berufliche Weiterbildung. Es geht um personalisiertes Lernen, Lehrmaterialien und Wissensmanagement."
  },
  {
    "set": "Szenario",
    "titel": "Mobilität & Logistik",
    "beschreibung": "Alles, was sich bewegt: Personenverkehr (ÖPNV, individuell), Gütertransport, Lieferketten und die Planung von Routen."
  },
  {
    "set": "Szenario",
    "titel": "Umwelt & Landwirtschaft",
    "beschreibung": "Der Schutz natürlicher Ressourcen, Monitoring von Umweltdaten, nachhaltige Landnutzung und die Optimierung von Ernten."
  },
  {
    "set": "Szenario",
    "titel": "Produktion & Industrie",
    "beschreibung": "Die \"smarte Fabrik\". Themen sind Qualitätskontrolle, vorausschauende Wartung (Predictive Maintenance), Robotik und Lieferketten-Management."
  },
  {
    "set": "Szenario",
    "titel": "Handel & E-Commerce",
    "beschreibung": "Das Einkaufserlebnis, online wie offline. Es geht um Kundenverhalten, personalisierte Empfehlungen, Lagerhaltung und Marketing."
  },
  {
    "set": "Szenario",
    "titel": "Energie & Versorgung",
    "beschreibung": "Die Erzeugung, Verteilung und Nutzung von Energie (Strom, Wärme, Wasser). Themen sind Netzstabilität, Einspar-Potenziale und erneuerbare Energien."
  },
  {
    "set": "Szenario",
    "titel": "Finanzen & Versicherung",
    "beschreibung": "Die Welt der Banken und Versicherungen. Fokus auf Betrugserkennung, Risikobewertung, Kundenberatung und automatisierte Prozesse."
  },
  {
    "set": "Szenario",
    "titel": "Medien & Kultur",
    "beschreibung": "Die Erstellung und Verbreitung von Inhalten. Journalismus, Unterhaltung (Filme, Musik), Museen und die Moderation von Online-Inhalten."
  },
  {
    "set": "Szenario",
    "titel": "Wohnen & Alltag (Smart Home)",
    "beschreibung": "Das private Umfeld. Es geht um Komfort, Sicherheit, Energiemanagement und Assistenzsysteme im eigenen Zuhause."
  },
  {
    "set": "Szenario",
    "titel": "Forschung & Wissenschaft",
    "beschreibung": "Der akademische Bereich. Es geht um die Analyse riesiger Datenmengen, die Beschleunigung von Experimenten und das Finden neuer Muster."
  },
  {
    "set": "Persona",
    "titel": "Die Pflegekraft",
    "beschreibung": "Steht unter hohem Zeitdruck. Sucht nach Entlastung bei administrativen Aufgaben, um mehr Zeit für Patient:innen zu haben."
  },
  {
    "set": "Persona",
    "titel": "Der/Die Patient:in",
    "beschreibung": "Möchte die eigene Gesundheit besser verstehen. Sucht nach verlässlichen Informationen, Unterstützung im Alltag oder schnellerer Diagnose."
  },
  {
    "set": "Persona",
    "titel": "Der/Die Stadtplaner:in",
    "beschreibung": "Muss komplexe Entscheidungen treffen. Benötigt fundierte Datengrundlagen, um die Stadt lebenswerter und nachhaltiger zu gestalten."
  },
  {
    "set": "Persona",
    "titel": "Der/Die Anwohner:in",
    "beschreibung": "Möchte sich im städtischen Umfeld sicher und wohl fühlen. Sucht nach einfachen Wegen, um mit der Verwaltung zu kommunizieren oder Probleme zu melden."
  },
  {
    "set": "Persona",
    "titel": "Die Lehrkraft",
    "beschreibung": "Möchte individuell auf Schüler:innen eingehen. Sucht nach Werkzeugen, um unterschiedliche Lernstände zu erkennen und passende Materialien bereitzustellen."
  },
  {
    "set": "Persona",
    "titel": "Der/Die Studierende",
    "beschreibung": "Navigiert durch eine Fülle von Informationen. Sucht nach effizienten Wegen zu lernen, Wissen zu organisieren und sich auf Prüfungen vorzubereiten."
  },
  {
    "set": "Persona",
    "titel": "Der/Die Landwirt:in",
    "beschreibung": "Möchte nachhaltig wirtschaften. Sucht nach präzisen Informationen (z.B. über Bewässerung, Düngung), um Ressourcen zu schonen und Erträge zu sichern."
  },
  {
    "set": "Persona",
    "titel": "Der/Die Disponent:in (Logistik)",
    "beschreibung": "Koordiniert komplexe Routen und Zeitpläne. Steht vor der Herausforderung, Verspätungen und Ausfälle in Echtzeit zu managen."
  },
  {
    "set": "Persona",
    "titel": "Der/Die Sachbearbeiter:in (Verwaltung)",
    "beschreibung": "Bearbeitet täglich repetitive Anträge. Sucht nach Wegen, Routineaufgaben zu beschleunigen, um sich auf komplexe Fälle konzentrieren zu können."
  },
  {
    "set": "Persona",
    "titel": "Der/Die Kundendienst-Mitarbeiter:in",
    "beschreibung": "Ist die erste Anlaufstelle für Probleme. Muss schnell auf Standardfragen antworten und gleichzeitig empathisch auf individuelle Anliegen eingehen."
  },
  {
    "set": "Persona",
    "titel": "Der/Die Facharbeiter:in (Produktion)",
    "beschreibung": "Überwacht komplexe Maschinen. Möchte frühzeitig gewarnt werden, bevor ein Defekt auftritt, um Ausfallzeiten zu minimieren."
  },
  {
    "set": "Persona",
    "titel": "Die Einsatzkraft (Rettungsdienst / Feuerwehr)",
    "beschreibung": "Muss in Stresssituationen schnelle Entscheidungen treffen. Benötigt in unübersichtlichen Lagen die wichtigsten Informationen auf einen Blick."
  },
  {
    "set": "Persona",
    "titel": "Der/Die Journalist:in",
    "beschreibung": "Steht unter Zeitdruck, Fakten zu prüfen. Sucht nach Werkzeugen, um große Mengen an Texten (z.B. Berichte, Social Media) schnell zu analysieren."
  },
  {
    "set": "Persona",
    "titel": "Die Ältere Person (Senior:in)",
    "beschreibung": "Möchte so lange wie möglich selbstständig leben. Sucht nach unauffälliger technischer Unterstützung, die Sicherheit gibt, ohne zu bevormunden."
  },
  {
    "set": "Datenquelle",
    "titel": "Bilder & Fotos",
    "beschreibung": "Statische visuelle Daten. (z.B. Porträts, medizinische Scans (MRT, Röntgen), Satellitenbilder, Produktfotos)."
  },
  {
    "set": "Datenquelle",
    "titel": "Video-Daten",
    "beschreibung": "Bewegtbilder. (z.B. Live-Streams von Überwachungskameras, aufgezeichnete Interviews, Drohnen-Aufnahmen)."
  },
  {
    "set": "Datenquelle",
    "titel": "Audio (Sprache)",
    "beschreibung": "Menschliche Sprache. (z.B. Aufnahmen von Telefonanrufen im Service-Center, Diktate, Podcasts, Sprachbefehle)."
  },
  {
    "set": "Datenquelle",
    "titel": "Audio (Geräusche & Töne)",
    "beschreibung": "Nicht-sprachliche Töne. (z.B. Maschinengeräusche in einer Fabrik, Umgebungsgeräusche in einer Stadt, Herzschläge)."
  },
  {
    "set": "Datenquelle",
    "titel": "Text (Dokumente & Web)",
    "beschreibung": "Geschriebene Inhalte. (z.B. E-Mails, PDF-Berichte, Social-Media-Posts, Webseiten-Inhalte, juristische Verträge)."
  },
  {
    "set": "Datenquelle",
    "titel": "Tabellendaten (Strukturierte Daten)",
    "beschreibung": "Klar strukturierte Informationen in Zeilen und Spalten. (z.B. Excel-Listen, Datenbank-Auszüge, Finanzreports, Kundenlisten)."
  },
  {
    "set": "Datenquelle",
    "titel": "Sensordaten (Zeitreihen)",
    "beschreibung": "Messwerte, die über die Zeit erfasst werden. (z.B. Temperaturverläufe, GPS-Positionen, Börsenkurse, Füllstände)."
  },
  {
    "set": "Datenquelle",
    "titel": "Geodaten (Räumliche Daten)",
    "beschreibung": "Informationen mit klarem Ortsbezug. (z.B. digitale Karten (GIS-Daten), Adresslisten, Standorte von Fahrzeugflotten)."
  },
  {
    "set": "Datenquelle",
    "titel": "Nutzer-Interaktionen (Logs)",
    "beschreibung": "Verhaltensdaten von Nutzer:innen. (z.B. Klickpfade auf einer Webseite, Verweildauer, Suchanfragen, App-Nutzungsstatistiken)."
  },
  {
    "set": "Datenquelle",
    "titel": "Umfragedaten",
    "beschreibung": "Gezielt erhobene Meinungen oder Fakten. (z.B. Antworten aus Kundenbefragungen, Mitarbeiter-Feedback, Marktforschungsstudien)."
  },
  {
    "set": "Datenquelle",
    "titel": "3D-Daten",
    "beschreibung": "Räumliche Modelle. (z.B. LIDAR-Scans von autonomen Fahrzeugen, 3D-Modelle von Gebäuden (BIM), 3D-Scans von Objekten)."
  },
  {
    "set": "KI-Lernziel",
    "titel": "Klassifikation (Etwas zuordnen)",
    "beschreibung": "Die KI lernt, Daten einer Kategorie zuzuordnen. (z.B. Ist diese E-Mail 'Spam' oder 'Kein Spam'?)."
  },
  {
    "set": "KI-Lernziel",
    "titel": "Prognose / Regression (Einen Wert vorhersagen)",
    "beschreibung": "Die KI lernt, einen zukünftigen Zahlenwert vorherzusagen. (z.B. Wie hoch wird der 'Umsatz' nächsten Monat sein?)."
  },
  {
    "set": "KI-Lernziel",
    "titel": "Generierung (Etwas Neues erschaffen)",
    "beschreibung": "Die KI lernt, auf Basis von Mustern neue, eigene Inhalte zu erstellen. (z.B. Einen 'Text' schreiben, ein 'Bild' malen)."
  },
  {
    "set": "KI-Lernziel",
    "titel": "Erkennung (Etwas finden & markieren)",
    "beschreibung": "Die KI lernt, Elemente innerhalb von Daten zu lokalisieren. (z.B. Alle 'Gesichter' in einem Video finden)."
  },
  {
    "set": "KI-Lernziel",
    "titel": "Empfehlung (Passendes vorschlagen)",
    "beschreibung": "Die KI lernt, basierend auf vergangenem Verhalten passende Vorschläge zu machen. (z.B. 'Welchen Film' solltest du als nächstes sehen?)."
  },
  {
    "set": "KI-Lernziel",
    "titel": "Clustering (Dinge gruppieren)",
    "beschreibung": "Die KI findet selbstständig verborgene Ähnlichkeiten in Daten und bildet Gruppen. (z.B. 'Kundensegmente' finden)."
  },
  {
    "set": "KI-Lernziel",
    "titel": "Transkription (Sprache in Text umwandeln)",
    "beschreibung": "Die KI lernt, gesprochene Sprache zu verstehen und als geschriebenen Text auszugeben. (z.B. Ein 'Diktat' verschriftlichen)."
  },
  {
    "set": "KI-Lernziel",
    "titel": "Übersetzung (Sprache zu Sprache)",
    "beschreibung": "Die KI lernt, Inhalte von einer Sprache in eine andere zu übertragen. (z.B. Eine 'Webseite' auf Englisch anzeigen)."
  },
  {
    "set": "KI-Lernziel",
    "titel": "Anomalie-Erkennung (Ungewöhnliches finden)",
    "beschreibung": "Die KI lernt den \"Normalzustand\", um seltene Abweichungen zu melden. (z.B. 'Betrugsversuch' bei Kreditkarten)."
  },
  {
    "set": "KI-Lernziel",
    "titel": "Zusammenfassung (Text kürzen)",
    "beschreibung": "Die KI lernt, die wichtigsten Kernaussagen aus langen Texten zu extrahieren. (z.B. 'Management Summary' eines Berichts)."
  },
  {
    "set": "Interaktion (Digital)",
    "titel": "Dashboard (Visualisierung)",
    "beschreibung": "Eine grafische Benutzeroberfläche, die KI-Erkenntnisse bündelt. (z.B. Diagramme, die Prognosen anzeigen)."
  },
  {
    "set": "Interaktion (Digital)",
    "titel": "Chatbot / Sprachassistent",
    "beschreibung": "Eine dialogbasierte Schnittstelle. Der Nutzer interagiert durch geschriebene oder gesprochene Sprache mit der KI."
  },
  {
    "set": "Interaktion (Digital)",
    "titel": "App-Benachrichtigung (Push)",
    "beschreibung": "Eine proaktive, kurze Mitteilung auf einem mobilen Gerät. (z.B. Eine Warnung, wenn ein Sensorwert kritisch ist)."
  },
  {
    "set": "Interaktion (Digital)",
    "titel": "Text-Zusammenfassung",
    "beschreibung": "Die KI präsentiert ihr Ergebnis als prägnanten, generierten Text. (z.B. Die Kernaussagen eines langen Dokuments)."
  },
  {
    "set": "Interaktion (Digital)",
    "titel": "Empfehlungs-Liste",
    "beschreibung": "Die KI zeigt eine sortierte Liste von Vorschlägen an. (z.B. \"Diese Produkte könnten Ihnen auch gefallen\")."
  },
  {
    "set": "Interaktion (Digital)",
    "titel": "Markierung / Overlay",
    "beschreibung": "Die KI hebt Informationen direkt im Quellmedium hervor. (z.B. Erkannte Objekte in einem Bild einkreisen)."
  },
  {
    "set": "Interaktion (Digital)",
    "titel": "E-Mail / Bericht",
    "beschreibung": "Ein automatisierter, ausführlicher Bericht, der von der KI erstellt und versendet wird. (z.B. Ein wöchentlicher Analyse-Report)."
  },
  {
    "set": "Interaktion (Digital)",
    "titel": "Score / Ampel-System",
    "beschreibung": "Ein vereinfachtes Bewertungssignal. (z.B. Ein Kredit-Score von 1-100; ein Risiko-Indikator 'Rot'/'Gelb'/'Grün')."
  },
  {
    "set": "Interaktion (Digital)",
    "titel": "Sortierte Arbeitsliste",
    "beschreibung": "Die KI priorisiert Aufgaben oder Informationen für einen Menschen. (z.B. \"Diese Kundenanfragen sind am dringendsten\")."
  },
  {
    "set": "Interaktion (Digital)",
    "titel": "API (Schnittstelle)",
    "beschreibung": "Die KI stellt ihr Ergebnis nicht einem Menschen, sondern einer anderen Software zur Verfügung. (z.B. Eine Prognose an ein ERP-System senden)."
  },
  {
    "set": "Interaktion (Physisch)",
    "titel": "Kamera (Visueller Input)",
    "beschreibung": "Die KI \"sieht\" die Welt durch eine Linse. (z.B. Eine Kamera an einer Maschine zur Qualitätskontrolle)."
  },
  {
    "set": "Interaktion (Physisch)",
    "titel": "Mikrofon (Audio-Input)",
    "beschreibung": "Die KI \"hört\" die Welt. (z.B. Ein Mikrofon zur Aufnahme von Sprachbefehlen oder Maschinengeräuschen)."
  },
  {
    "set": "Interaktion (Physisch)",
    "titel": "GPS-Modul (Standort-Input)",
    "beschreibung": "Die KI kennt ihre exakte Position oder die eines Objekts. (z.B. Standort-Tracking für Logistik-Fahrzeuge)."
  },
  {
    "set": "Interaktion (Physisch)",
    "titel": "Einfacher Sensor (Taster / Kontakt)",
    "beschreibung": "Die KI registriert eine simple Ja/Nein-Aktion. (z.B. Ein Taster, der einen Prozess startet; ein Türkontakt)."
  },
  {
    "set": "Interaktion (Physisch)",
    "titel": "Umwelt-Sensor (Messwert-Input)",
    "beschreibung": "Die KI misst physische Zustände. (z.B. Temperatur-, Feuchtigkeits- oder Luftqualitätssensoren)."
  },
  {
    "set": "Interaktion (Physisch)",
    "titel": "LED / Statuslicht (Visueller Output)",
    "beschreibung": "Die KI gibt ein einfaches visuelles Signal. (z.B. Ein Licht leuchtet 'Rot', wenn die KI einen Fehler erkennt)."
  },
  {
    "set": "Interaktion (Physisch)",
    "titel": "Lautsprecher (Audio-Output)",
    "beschreibung": "Die KI gibt ein akustisches Signal oder eine Sprachansage aus. (z.B. Ein Warnton bei Gefahr; eine generierte Durchsage)."
  },
  {
    "set": "Interaktion (Physisch)",
    "titel": "Display / Bildschirm (Detail-Output)",
    "beschreibung": "Die KI zeigt Text oder einfache Grafiken auf einem physischen Bildschirm an. (z.B. Die Anzeige einer Statusmeldung an einer Maschine)."
  },
  {
    "set": "Interaktion (Physisch)",
    "titel": "Motor / Aktor (Bewegungs-Output)",
    "beschreibung": "Die KI löst eine physische Bewegung aus. (z.B. Ein Motor öffnet oder schließt ein Ventil; ein Schloss wird verriegelt)."
  },
  {
    "set": "Interaktion (Physisch)",
    "titel": "Einfacher Greifer (Robotik-Output)",
    "beschreibung": "Die KI steuert eine simple Roboter-Aktion. (z.B. Ein Greifarm, der von der KI erkannte Objekte vom Band sortiert)."
  },
  {
    "set": "Ethik-Reflexion",
    "titel": "Fairness & Bias (Verzerrung)",
    "beschreibung": "Diskussion: Wen bevorzugt unsere KI-Lösung? Wen könnte sie benachteiligen? Basieren unsere Trainingsdaten auf historischen Vorurteilen?"
  },
  {
    "set": "Ethik-Reflexion",
    "titel": "Erklärbarkeit (XAI)",
    "beschreibung": "Diskussion: Können wir (oder der Nutzer) nachvollziehen, warum die KI zu einem bestimmten Ergebnis kommt? Oder ist es eine \"Black Box\"?"
  },
  {
    "set": "Ethik-Reflexion",
    "titel": "Datenschutz (DSGVO)",
    "beschreibung": "Diskussion: Welche Daten sammeln wir, insbesondere personenbezogene? Haben wir die Einwilligung? Sind die Daten sicher gespeichert?"
  },
  {
    "set": "Ethik-Reflexion",
    "titel": "Verantwortung & Haftung",
    "beschreibung": "Diskussion: Wer ist verantwortlich, wenn die KI einen Fehler macht, der Schaden verursacht? Der Entwickler, der Betreiber oder der Nutzer?"
  },
  {
    "set": "Ethik-Reflexion",
    "titel": "Sicherheit & Robustheit",
    "beschreibung": "Diskussion: Wie leicht kann unser System ausgetrickst oder manipuliert werden? Was passiert im Falle eines Systemausfalls?"
  },
  {
    "set": "Ethik-Reflexion",
    "titel": "Menschliche Aufsicht (Human-in-the-Loop)",
    "beschreibung": "Diskussion: Wo und wann muss ein Mensch die finale Entscheidung treffen oder die KI überstimmen können?"
  },
  {
    "set": "Ethik-Reflexion",
    "titel": "Transparenz (Für Nutzer)",
    "beschreibung": "Diskussion: Machen wir deutlich, dass der Nutzer gerade mit einer KI interagiert? Oder erwecken wir den Eindruck, es sei ein Mensch?"
  },
  {
    "set": "Ethik-Reflexion",
    "titel": "Ökologischer Fußabdruck",
    "beschreibung": "Diskussion: Wie viel Energie verbraucht unsere KI (im Training und im Betrieb)? Steht der Nutzen in einem gesunden Verhältnis zum Aufwand?"
  },
  {
    "set": "Ethik-Reflexion",
    "titel": "Gesellschaftliche Auswirkungen",
    "beschreibung": "Diskussion: Welche menschlichen Fähigkeiten oder Arbeitsplätze könnte unsere KI ersetzen? Dient sie der Unterstützung oder der reinen Automatisierung?"
  },
  {
    "set": "Ethik-Reflexion",
    "titel": "Datensouveränität",
    "beschreibung": "Diskussion: Wem \"gehören\" die Daten, die die KI nutzt? Wem \"gehören\" die Ergebnisse, die sie produziert? Haben Nutzer:innen die Kontrolle?"
  },
  {
    "set": "Szenario",
    "titel": "Recht & Justiz",
    "beschreibung": "Der Bereich der Rechtssprechung und -beratung. (z.B. KI-gestützte Vertragsanalyse, Recherche in Falldatenbanken, Betrugserkennung)."
  },
  {
    "set": "Szenario",
    "titel": "Personalwesen (HR)",
    "beschreibung": "Der Sektor rund um Mitarbeitermanagement. (z.B. Intelligentes Matching von Bewerber:innen, Analyse von Mitarbeiterfeedback, Skill-Management)."
  },
  {
    "set": "Szenario",
    "titel": "Cyber- & Physische Sicherheit",
    "beschreibung": "Schutz von digitalen und realen Systemen. (z.B. Eindringlingserkennung in Netzwerken, Auswertung von Sicherheitskamera-Streams, Phishing-Erkennung)."
  },
  {
    "set": "Persona",
    "titel": "Der/Die Manager:in",
    "beschreibung": "Trifft strategische Entscheidungen. Sucht nach datengestützten Einsichten (Business Intelligence), um KPIs zu verbessern und Risiken zu managen."
  },
  {
    "set": "Persona",
    "titel": "Der/Die Kreative (Designer:in / Autor:in)",
    "beschreibung": "Erschafft neue Inhalte. Sucht nach Inspiration, Unterstützung bei Routineaufgaben (z.B. Bildbearbeitung) oder Co-Kreation (z.B. Textentwürfe)."
  },
  {
    "set": "Persona",
    "titel": "Der/Die IT-Administrator:in",
    "beschreibung": "Hält Systeme am Laufen. Sucht nach Wegen, Systemausfälle vorherzusagen, Support-Tickets automatisch zu klassifizieren oder Sicherheitslücken zu finden."
  },
  {
    "set": "Datenquelle",
    "titel": "Software-Code",
    "beschreibung": "Geschriebener Quellcode in verschiedenen Programmiersprachen. (z.B. Code-Repositories zur Fehleranalyse oder Optimierung)."
  },
  {
    "set": "Datenquelle",
    "titel": "Biometrische Daten",
    "beschreibung": "Einzigartige physische Merkmale. (z.B. Fingerabdrücke, Iris-Scans, Gesichtserkennungsmerkmale, Herzfrequenzvariabilität)."
  },
  {
    "set": "Datenquelle",
    "titel": "Netzwerk-Verkehrsdaten (Logs)",
    "beschreibung": "Kommunikationsprotokolle zwischen Computern. (z.B. Server-Logs, IP-Adressen, Paketdaten zur Analyse von System-Gesundheit oder Angriffen)."
  },
  {
    "set": "KI-Lernziel",
    "titel": "Optimierung (Prozess-Steuerung)",
    "beschreibung": "Die KI lernt, das bestmögliche Ergebnis in einem System mit vielen Variablen zu finden. (z.B. Die effizienteste Route in Echtzeit; Steuerung eines Energienetzes)."
  },
  {
    "set": "KI-Lernziel",
    "titel": "Sentiment-Analyse (Stimmung erkennen)",
    "beschreibung": "Die KI lernt, die emotionale Tonalität in Texten zu bewerten. (z.B. 'Positive', 'Negative' oder 'Neutrale' Kundenbewertungen erkennen)."
  },
  {
    "set": "KI-Lernziel",
    "titel": "Simulation (Systeme modellieren)",
    "beschreibung": "Die KI lernt die Regeln eines komplexen Systems, um \"Was-wäre-wenn\"-Szenarien durchzuspielen. (z.B. Verkehrsfluss simulieren, Klima-Modelle)."
  },
  {
    "set": "Interaktion (Digital)",
    "titel": "Intelligente Eingabehilfe (Assistenz)",
    "beschreibung": "Die KI unterstützt den Nutzer während der Eingabe. (z.B. Autovervollständigung von Code (Co-Pilot), Textvorschläge beim E-Mail-Schreiben)."
  },
  {
    "set": "Interaktion (Digital)",
    "titel": "Automatisierter Workflow (Prozess-Bot)",
    "beschreibung": "Die KI arbeitet im Hintergrund und stößt Prozesse an. (z.B. Eine Rechnung wird erkannt, geprüft und automatisch zur Zahlung freigegeben)."
  },
  {
    "set": "Interaktion (Digital)",
    "titel": "Augmented Reality (AR) Einblendung",
    "beschreibung": "Die KI blendet kontextbezogene Infos über ein Live-Bild (z.B. via Smartphone-Kamera oder AR-Brille). (z.B. Wartungsanleitung an einer Maschine)."
  },
  {
    "set": "Interaktion (Physisch)",
    "titel": "RFID / NFC-Leser (Identifikations-Input)",
    "beschreibung": "Die KI erhält Input durch das Scannen eines Chips. (z.B. Identifikation eines Bauteils in der Produktion; Zutrittskontrolle)."
  },
  {
    "set": "Interaktion (Physisch)",
    "titel": "Haptisches Feedback (Fühlbarer Output)",
    "beschreibung": "Die KI gibt eine Rückmeldung durch Vibration oder Widerstand. (z.B. Ein vibrierendes Armband warnt den Nutzer; ein Controller gibt Widerstand)."
  },
  {
    "set": "Interaktion (Physisch)",
    "titel": "Physischer Druck (2D/3D-Output)",
    "beschreibung": "Die KI erstellt ein Design, das direkt an einen Drucker gesendet wird. (z.B. Ein generiertes 3D-Modell wird gedruckt; ein Bericht wird automatisch ausgedruckt)."
  },
  {
    "set": "Ethik-Reflexion",
    "titel": "Mentale Gesundheit (Suchtpotenzial)",
    "beschreibung": "Diskussion: Wie wirkt sich die KI auf das Wohlbefinden des Nutzers aus? Fördert sie Suchtverhalten (z.B. 'Doomscrolling') oder unnötigen Stress?"
  },
  {
    "set": "Ethik-Reflexion",
    "titel": "Dual Use (Missbrauchspotenzial)",
    "beschreibung": "Diskussion: Könnte unsere KI-Lösung (oder ihre Technologie) leicht für schädliche oder manipulative Zwecke missbraucht werden?"
  },
  {
    "set": "Ethik-Reflexion",
    "titel": "Barrierefreiheit (Accessibility)",
    "beschreibung": "Diskussion: Ist unsere KI-Lösung für Menschen mit körperlichen oder kognitiven Einschränkungen (z.B. Sehstörungen, motorische Einschränkungen) bedienbar?"
  }
]; // Stelle sicher, dass die Datei mit einem Semikolon endet.