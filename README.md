# WEB-stories
Code for Project WEB, HvA

Ik weet eerlijk gezegd niet zo goed wat ik in een Readme moet beschrijven, maar 'here goes'...

Ik ben begonnen vanaf de mobiele layout, omdat dit het makkelijkst was om te coderen. De <articles> hebben een breedte van 85% en worden door de margins aan beide zijden automatisch gecentreert. 
  
Hetgeen waar ik het meest mee bezig ben geweest zijn de articles zelf. Ik was dingen aan het proberen met grid, maar als een titel dan langer wordt en zijn grid-area overschrijdt gaat dat weer door de war, zeker met het oog op de switch naar tablet (3-kolom layout), waar alles evenhoog moet zijn om er mooi uit te zien, was dit niet handig. Dus ben ik voor het 'interieur' van de <articles>  geswitched naar flexbox. Wat een uitvinding! Ik heb wat tijd erin gestoken om het te leren kennen (tnx to Flexbox Froggy) en even later had ik het voor elkaar, zoals ik het wilde hebben. 
  
Nu de switch naar 3-kolom. Hiervoor heb ik hetzelfde parcours gelopen, maar andersom. Ik ben begonnen met een display:flexbox voor mijn main. Dit zorgde voor totale chaos, en dus zat ik voor de zoveelste keer met mijn handen in het haar. Wat nu? Mijn laptop- en tablet-layout zijn 3-koloms, dus ik moet er wel iets op vinden. Toen kreeg ik een tip over grid, maar ik dacht dat dat niet zou werken, want dan zou je steeds elke article een eigen grid-area geven en elke article die er is apart vernoemen in je CSS. Schijnbaar hoeft dat niet en is er zoiets als fractions. grid-tempate-columns: 1fr 1fr 1fr; was genoeg om alle articles mooi in rijtjes van 3 te krijgen. Nu hoefde ik alleen nog wat margins toe te voegen om het zo veel mogelijk op de huisstijl van de RET te laten lijken. 

Ik wilde bij tablet een 3-kolom layout, wat een beetje krap is, maar wel het mooist, naar mijn eigen idee. En op laptop ook een 3-kolom layout, maar gemodificeerd. Ik wil namelijk niet dat mijn articles zo worden uitgerekt dat ze niet meer mooi zijn, dus ik maak het zo dat mijn main een vaste breedte heeft, de rijen van 3 articles naast elkaar blijven een vaste breedte, terwijl de margins aan de zijkanten groter worden. Dit vond ik verreweg het beste eruit zien en daar heb ik uiteindelijk ook voor gekozen. 

