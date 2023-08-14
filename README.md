# Atlar Assignment
Uppgiften är skriven i Angular och behöver Angular CLI för att köras.
Kör 'ng serve --proxy-config src/proxy.conf.js --open' i arbetsmappen.
Repot innehåller environment variables som jag inte har hunnit ställa in korrekt på github. Berörda parter vet vilka variabler som bör bytas ut och det är i service 'fetch.service.ts' där '${{user}}' och '${{pass}}' ska bytas ut.
Appen är tänkt att kunna lösa följande use cases:
- "I log in to each bank every morning to verify that we do not have any account with zero or negative balance"
- "I note the account balance for each account into my own excel sheet, than look at the trend of account balances over time to see that we're not trending aggressively downwards"
- "I go through transactions and see so that there are no, one, big fraudulent pay-out from our accounts past days (above ~5k EUR would be considered suspicious)"
- "I go through transactions every day and make sure our customers have paid us"

Kommer andra detaljer eller use cases upp är det sannolikt att jag bedömer att appen behöver designas om. Utgår jag från den information jag har idag är det såhär jag valt att strukturera och lösa problemen.
## Accounts
Den här komponenten listar alla bankkonton och nuvarande balans. Pilen uppe i högra hörnet på korten indikerar en trend över tid. Komponenten rödmarkerar de konton där balansen är eller understiger 0.
Ikonen för 'ladda ner' och 'kopiera' är tänkta att ge användaren möjlighet att kopiera alternativt ladda ner balansen i ett csv/tsv-format för att kunna hanteras enklare i Excel.
TODO:
- [ ] Funktionalitet för knappen för ladda ner
- [ ] Funktionalitet för knappen för kopiera
## Transactions
Komponenten listar alla transaktioner som skett. Headern med sina kategorier ska kunna sortera listan med transaktioner utifrån kategorierna som användaren ska kunna klicka på. Pilen som pekar åt höger är tänkt att kunna expandera transaktionen och ge mer detaljer. Till en början valde jag att rödmarkera transaktioner som understeg 5k EUR enligt use case tre men jag resonerar att filtreringsfunktionen bör kunna lösa både use case tre och fyra sålänge rätt kategorier/information visas i listan.
TODO:
- [ ] Funktionalitet för att filtrerar kategorierna
- [ ] Funktionalitet för knappen som ger mer detaljer för transaktionerna.

