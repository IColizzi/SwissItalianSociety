import Link from "next/link";

const Universita = () => {
  return (
    <>
      <h1>Ammissione Universitaria</h1>
      In questa pagina troverai tutte le informazioni relative
      all&apos;ammissione universitaria. Se ti sei gia’ iscritto torverai tutte
      le informazioni riguardati lo studio e non solo qu questa pagina: (add
      link to page uni)
      <h3>ETH</h3>
      <h5>Bachelor (triennale)</h5>
      <p1>
        Tja. Il Bachelor è putroppo in tedesco ma non devi aver paura percheè
        troverai un grande numero di ticinesi che non lo sa. Pero&apos; per te
        italiano la vita è un pochino piu&apos; dura. <br /> <br />
        Infatti, devi:
        <br />- avere un certificato C1 di tedesco (il migliore è il DAF perchè
        basta avere il livello 4 che in realtà è B2-C1 e quindi un pochino
        piu&apos; semplice da passare ed e piu&apos; economico rispetto al
        Goethe). Stai attento/a perchè non ci sono tanti slots all&apos;anno e
        devi avere un margine nel caso tu debba rifare l&apos;esame…
        <br />- avere il certificato di maturità prima di aver concluso la
        maturità (basta un foglio scritto dalla tua scuola - di solito hai già i
        voti degli scritti + i tuoi crediti e riesci ad avere 60 prima di aver
        fatto l&apos;orale ..)
        <br />- se hai fatto una scuola diversa dal liceo scientifico devi fare
        anche un esame di ingresso all&apos;ETH. L&apos;esame è praticamente una
        seconda maturità in tedesco sulle seguenti materie: chimica, fisica,
        biologia e matematica - orale e scritto:
        <Link href="https://ethz.ch/de/studium/bachelor/bewerbung/auslaendische-reifezeugnisse/eth-aufnahmepruefung.html">
          (Reduzierte Aufnahmeprufung).
        </Link>
        Un amico di un mio amico ha raccolto molti vecchi esami su questo
        <Link href="https://janiks.me/projects/eth/entrance_exam/">sito.</Link>
        L’esame non è facile, se hai bisogno di suggerimenti su libri da
        comprare & co manda una email, non so quante persone si vogliono
        cosi&apos; male e vogliono venire all&apos;ETH dopo un liceo non
        scientifico… pero&apos; se hai voglia di rendere la tua vita complicata
        contattaci che l&apos;ho fatto anche io :)
        <br />
        <br />
        Per dettagli sull’application process e per avere una lista dei
        documenti necessati visita il
        <Link href="https://ethz.ch/en/studies/bachelor/application/non-swiss-matriculation-certificate/how-to-apply.html">
          sito.
        </Link>
        L&apos;application process è aperto dal 1. di Dicembre fino al 31 di
        Marzo , 23:59 CET.
      </p1>
      <h5>Master (magistrale)</h5>
      <p1>
        I requisiti per l&apos;ammissione sono:
        <br />- Certificato di inglese di livello C1: la lista delle
        certificazioni riconosciute è disponibile sul
        <Link href="https://ethz.ch/en/studies/master/application/language-requirements.html">
          sito.
        </Link>
        Se avete fatto o state facendo la triennale in inglese NON avete bisogno
        del certificato. Il risultato del certificato deve essere già pronto
        prima della scandeza dei termini per l&apos;ammissione. Considerando che
        i risultati di questi test arrivano ogni 3 mesi, meglio organizzarsi con
        largo anticipo in caso non lo si superi al primo tentativo.
        <br />- Transcripts of Records: lista degli esami sostenuti con
        rispettivi voti al momento della domanda. L&apos;ETH richiede un
        documento ufficiale che, solitamente, va richiesto alla Segreteria
        Studenti (uno screenshot della propria pagina sul portale di ateneo
        italiano non è sufficiente). La procedura può richiedere del tempo,
        variabile da università a univeristà.
        <br />- Reference Letters: è necessario richiedere a due docenti
        italiani una lettera di raccomandazione. L&apos;obiettivo è quello di
        spiegare per quale motivo l&apos;ETH dovrebbe selezionare voi come
        studenti meritevoli per essere ammessi. Il docente può scrivere la
        propria lettera anche dopo la scadenza della domanda di ammissione; è
        però necessario però che voi indicate il nome sul portale di ammissione
        entro la data di scadenza. A voi verrà notificato se la lettera del
        professore è stata ricevuta dall&apos; ETH o meno ma non vi verrà fatto
        sapere il suo contenuto, (a meno che il Prof non ve l&apos;abbia mandata
        privatamente).
        <br />- Lettera di motivazione: si tratta di una lettera (circa una
        pagina) in cui spiegate il vostro percorso e i motivi che vi spingono ad
        entrare all&apos;ETH. Si tratta, forse, del documento più importante
        insieme al Transcript of Records.
        <br />- Curriculum Vitae
      </p1>{" "}
      <br />
      <br /> Il procedimento e&apos; descritto in dettaglio
      <Link
        href="https://ethz.ch/en/studies/master/application/international-bachelor/prerequisites.html.
          "
      >
        qui.
      </Link>
      <br />
      Per studenti non iscritti all&apos;ETH in Triennale, la domanda scade a
      dicembre per essere ammessi a settembre dell&apos;anno dopo. Bisogna
      quindi muoversi in anticipo! Le date aggiornate di anno in anno sono
      disponibili sul
      <Link href="https://ethz.ch/en/studies/master/application/international-bachelor.html">
        sito.
      </Link>
      <br />
      Se vieni dall&apos; ETH non c’e’ deadline… basta de-immatricolarsi dal
      bachelor e iscriversi al master.
      <h5>Dottorato</h5>
      <p1>boh eppure lo sto facendo... </p1>
      <h3>UZH</h3>
      <p1>Help needed</p1>
    </>
  );
};

export default Universita;
