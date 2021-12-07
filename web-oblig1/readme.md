# Oblig 1

[https://itstud.hiof.no/~mariubeg/oblig1/](https://itstud.hiof.no/~mariubeg/oblig1/)

## Oppgave 1

### 1.1

Først må du validere HTML-dokumentet. Det kan du gjøre her.

Du kan enten legge inn URL til hjemmeområdet ditt, eller laste opp HTML-filen.

### 1.2

Du vil mest sannsynlig få opp et par feil. Fiks disse feilene og valider siden/filen på nytt.

Når du ikke lenger har feil, går du videre til oppgave 2.


## Oppgave 2

Det er nå mange div-er i index.html-dokumentet. Mange av dem har blitt brukt til å markere og strukturere innholdet. Dette vet vi er fy-fy! Derfor skal du i denne oppgaven strukturere dokumentet på nytt ved å bytte ut div-ene med semantiske tagger, der det passer seg.

Dokumentet ditt skal inneholde EN div når du er ferdig!
Det er forventet at du bruker følgende tagger:

- header
- nav
- main
- aside
- footer

Under er et eksempel på hva du skal gjøre.

Før endring:

```html
<div>
    <h1>Hello World</h1>
        <p>
            Lucas ipsum dolor sit amet baba moff ponda twi'lek zabrak sebulba Chewbacca moff darth luke. Gamorrean skywalker moff dooku.

            Hutt antilles mandalore endor. Gonk aayla skywalker fisto luke. Yavin moff kenobi darth k3po sidious luuke antilles jinn.

            Dagobah jango luke kit owen.
        </p>
</div>
```

Etter endring:

```html
<main>
    <h1>Hello World</h1>
        <p>
            Lucas ipsum dolor sit amet baba moff ponda twi'lek zabrak sebulba Chewbacca moff darth luke. Gamorrean skywalker moff dooku.

            Hutt antilles mandalore endor. Gonk aayla skywalker fisto luke. Yavin moff kenobi darth k3po sidious luuke antilles jinn.

            Dagobah jango luke kit owen.
        </p>
</main>
```

## Oppgave 3

Nå som du har byttet ut de overflødige div-ene med semantiske tagger, begynner du få bedre struktur i filen.

### 3.1

Valider siden/filen på nytt. Fikk du et par warnings på bruken av h1? Hvis ja, fiks disse.

Hvis du ikke fikk warnings, skal du fortsatt fikse på antall h1. «Best practice» er å kun bruke h1 til den viktigste overskriften.

### 3.2

Identifiser hvilken overskrift du anser som viktigst, la den være h1. Resten skal endres til h2-h6. Hvilken av disse du skal bruke kommer an på hvor viktig du tenker overskriften er.

Valider siden/filen igjen.

## Oppgave 4

Hvis du ikke allerede har gjort det, skal du nå åpne filen i en nettleser, slik at du ser den som en nettside. Nettsiden er ikke særlig lesbar eller pen.

### 4.1

Du skal ha en fil som heter styles.css i mappen du lastet ned. Referer med link til styles.css i HTML-filen.

Når du refresher nettsiden nå, skal det skje noen endringer. Hvis ikke kan det hende du linket feil.

Se her for hint til hvordan du linker til en ekstern CSS fil.

## Oppgave 5

Nå som du har linket til CSS-filen vil nettsiden se litt rar ut, spesielt hvis du byttet ut div-ene med riktige tagger (dette kan du få bekreftet av en studass i øvingstimene).

Nå skal du ordne det som ser rart ut.

### 5.1

Gjør deg kjent med CSS-filen. Se på hva som er koblet til elementene i HTML-filen, og hva de forskjellige verdiene i CSS-filen gjør.

### 5.2

Finn body i CSS-filen. Legg til verdien «auto» etter 0px i margin. Hva skjer på nettsiden når du lagrer filen? Body skal ha sentrert seg.

### 5.3

Vi vil ikke ha så mye CSS på body-elementet. Finn div-en `<div class='container'>`? Hvis du endret eller fjernet denne i oppgave 2, kan du endre den tilbake til div. Vi vil heller ha CSS-en som nå er på body, til denne div-en, så flytt alt til klassen container.

Div-en skal starte før header og avsluttes etter footer.

Hvis du sjekker nettsiden din nå så skal den se helt lik ut, med unntak av at det har kommet litt luft over/rundt headeren. Dette er default margin som ligger på body, sett margin på body til 0 (denne skal ligge på body)

### 5.4

Menypunktene på nettsiden ser ut som en punkt liste, og det vil vi ikke ha. Fjern «liste-stilen» fra listen og legg elementene på en linje.

Nå begynner det å se ut som en ordentlig meny, men elementene ser fortsatt litt merkelige ut. Nå kan du fjerne understrekene fra lenkene i listen.

### 5.5

Bruk inspektør verktøyet i nettleseren og hover over logoen (#headerLogo) og menyen. Legg merke til at de ligger over og under hverandre. Vi vil ha elementene på samme linje.

Klikk på ul-elementet (listen din) og se på CSS-verdiene som ligger på elementet. Hvis du hovrer over verdiene kan du se avkrysningsbokser. Fjern krysset i boksen til float. Hva skjer?

Hvis du klikker på HTML-elementet til logoen kan du se at mangler litt CSS. Prøv å stilsett denne slik at den flyter til venstre og havner på lik linje som menyen. Når du har fått til dette kan du fjerne marginen som ligger på logoen. (Logo til venstre og meny til høyre)

### 5.6

Fortsett med inspektørverktøyet og klikk på main og aside. Hva er bredden på disse to? Få disse til å ligge ved siden av hverandre. Tenk på hvordan du brukte float i forrige oppgave.

Når main og aside er ved siden av hverandre, legg merke til at footer ikke ligger på bunnen av nettsiden, men under aside. Her skal den ikke ligge. Dette må vi fikse.

Gå tilbake til inspektørverktøyet og hover over main og aside igjen. Legg merke til høyden. Hover over div-en vi har kalt container. Legg merke til hvordan den ikke dekker innholdet på siden.

Fordi vi har brukt float på barneelementene, har denne div-en kollapset. Hvis du legger til property clear med verdien both på footer i CSS, vil kollapsen bli borte og footeren havne der vi vil ha den.

### 5.7

Lenkene i aside ligger ved siden av hverandre og gjør det vanskelig å skille dem. Gå inn i HTML-filen og legg de i en uordnet liste.

### 5.8

Vi er straks i mål, alle elementene er der vi vil ha dem, men de er plassert litt vel ut i kantene på siden. Vi vil at elementene skal ha mer innvendig luft/polstring. Dette gjelder elementene:

- header
- main
- aside
- footer

Hvis du ser i CSS-filen er disse listet opp nederst, men uten noen verdier. Her skal du bruke css egenskapen padding og sette en ønsket verdi. Legg merke til at aside nå har flyttet seg litt ned.
For å fikse dette skal vi legge til en siste egenskap og verdi i CSS-filen.

På toppen av filen, skriv:

```css
* {
    box-sizing: border-box;
}
```

Når vi skriver * i CSS, legger vi CSS på alle HTML-elementer. Dette må brukes med omhu.

Hva box-sizing gjør kan du lese om her, eller se videoen i box-model serien.

### 5.9

I denne oppgaven skal du kopiere index.html og lagre den som mal.html. Denne malen skal du bruke for å lage en ny side som du skal kalle innholdvsdesign.html. I innholdvsdesign.html skal du skrive en artikkel som handler om hvorfor det er viktig å skille mellom innhold og design. Du kan IKKE copy paste en artikkel du finner om temaet, det er meningen du skal lese deg opp på temaet og skrive selv. Du skal også legge til et bilde ved å bruke figure.

### 5.10

Opprett enda en ny side ved bruk av malen og skriv en artikkel som handler om semantiske tagger, hva de er og hvorfor vi skal bruke de. Skriv også hvorfor vi byttet ut divéne med semantiske tagger.

### 5.11

Nå som du sitter med litt flere siden skal disse linkes til hverandre. I den aller første fila di (div.html) skal du nå endre innholdet og legge til artikkel elementer som skal linke til artiklene dine. Disse artikkel elementene skal inneholde:

- en header med en overskrift,
- en forklarende intro tekst til hva artikkelsiden inneholder
- en les mer link som linker til artikkel siden, denne linken skal se ut som en knapp

Hvis du sjekker nå så kan du se at headeren i artikkel elementet har samme bakgrunnsfarge som side headeren. Gi side headeren et klasse navn, typ “page-header”. Oppdater dette på alle sidene + oppdater CSSén, slik at den også blir riktig.

### 5.12

Nå er vi snart i mål, men Times new roman er litt kjedelig font? Bytt font til noe som er mer lesbart og som er websafe, sett også sans serif som fallback.

### 5.13

Helt til slutt må div.html omdøpes til index.html. Koble deg til serverområdet og lag en mappe med navnet «webutvikling». Mappen skal ligge inni mappen htdocs. Legg index.html og style.css inn i mappen webutvikling.

PS. pass på å oppdatere alle linkene i alle dokumentene så de peker til riktig fil. Sjekk at lenken fungerer.

Den skal se slik ut: https://itstud.hiof.no/~brukernavn/webutvikling/

Mappestrukturen skal se slik ut:

    htdocs
        |_ webutvikling
            |_index.html
            |_innholdVsDesign.html
            |_semantikk.html
            |_style.css
