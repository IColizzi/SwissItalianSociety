import RisorseLayout from "./_RisorseLayout";
import { StyledPage } from "../../components/StyledComponents";
import Link from "next/link";

const Universita = () => {
  return (
    <>
      <StyledPage>
        <h1>Ammissione Universitaria</h1>
        In questa pagina troverai tutte le informazioni relative all’ammissione
        universitaria. Se ti sei gia’ iscritto torverai tutte le informazioni
        riguardati lo studio e non solo qu questa pagina: (add link to page uni)
        <h3>ETH</h3>
        <h5>Bachelor (triennale)</h5>
        <p1>
          Tja. Il Bachelor e’ putroppo in tedesco ma non devi aver paura perche’
          troverai un grande numero di ticinesi che non lo sa. Pero’ per te
          italiano la vita e’ un pochino piu’ dura. <br /> <br />
          Infatti, devi:
          <br />- avere un certificato C1 di tedesco (il migliore e’ il DAF
          perche’ basta avere il livello 4 che in realtà e’ B2-C1 e quindi un
          pochino piu’ semplice da passare ed e piu’ economico rispetto al
          Goethe). Stai attento/a perche’ non ci sono tanti slots all’anno e
          devi avere un margine nel caso tu debba rifare l’esame…
          <br />- avere il certificato di maturità prima di aver concluso la
          maturita’ (basta un foglio scritto dalla tua scuola - di solito hai
          già i voti degli scritti + i tuoi crediti e riesci ad avere 60 prima
          di aver fatto l’orale ..)
          <br />- se hai fatto una scuola diversa dal liceo scientifico devi
          fare anche un esame di ingresso all’ETH. L’esame e’ praticamente una
          seconda maturità in tedesco sulle seguenti materie: chimica, fisica,
          biologia e matematica - orale e scritto:
          <Link href="https://ethz.ch/de/studium/bachelor/bewerbung/auslaendische-reifezeugnisse/eth-aufnahmepruefung.html">
            (Reduzierte Aufnahmeprufung).
          </Link>
          Un amico di un mio amico ha raccolto molti vecchi esami su questo
          <Link href="https://janiks.me/projects/eth/entrance_exam/">
            sito.
          </Link>
          L’esame non e’ facile, se hai bisogno di suggerimenti su libri da
          comprare & co manda una email, non so quante persone si vogliono cosi’
          male e vogliono venire all’ETH dopo un liceo non scientifico… pero’ se
          hai voglia di rendere la tua vita complicata contattaci che l’ho fatto
          anche io :)
          <br />
          <br />
          Per dettagli sull’application process e per avere una lista dei
          documenti necessati visita il
          <Link href="https://ethz.ch/en/studies/bachelor/application/non-swiss-matriculation-certificate/how-to-apply.html">
            sito.
          </Link>
          L’application process e’ aperto dal 1. di Dicembre fino al 31 di Marzo
          , 23:59 CET.
        </p1>
        <h5>Master (magistrale)</h5>
        <p1>
          I requisiti per l’ammissione sono:
          <br />- Certificato di inglese di livello C1: la lista delle
          certificazioni riconosciute è disponibile sul
          <Link href="https://ethz.ch/en/studies/master/application/language-requirements.html">
            sito.
          </Link>
          Se avete fatto o state facendo la triennale in inglese NON avete
          bisogno del certificato. Il risultato del certificato deve essere già
          pronto prima della scandeza dei termini per l'ammissione. Considerando
          che i risultati di questi test arrivano ogni 3 mesi, meglio
          organizzarsi con largo anticipo in caso non lo si superi al primo
          tentativo.
          <br />- Transcripts of Records: lista degli esami sostenuti con
          rispettivi voti al momento della domanda. L'ETH richiede un documento
          ufficiale che, solitamente, va richiesto alla Segreteria Studenti (uno
          screenshot della propria pagina sul portale di ateneo italiano non è
          sufficiente). La procedura può richiedere del tempo, variabile da
          università a univeristà.
          <br />- Reference Letters: è necessario richiedere a due docenti
          italiani una lettera di raccomandazione. L'obiettivo è quello di
          spiegare per quale motivo l'ETH dovrebbe selezionare voi come studenti
          meritevoli per essere ammessi. Il docente può scrivere la propria
          lettera anche dopo la scadenza della domanda di ammissione; è però
          necessario però che voi indicate il nome sul portale di ammissione
          entro la data di scadenza. A voi verrà notificato se la lettera del
          professore è stata ricevuta dall' ETH o meno ma non vi verrà fatto
          sapere il suo contenuto, (a meno che il Prof non ve l'abbia mandata
          privatamente).
          <br />- Lettera di motivazione: si tratta di una lettera (circa una
          pagina) in cui spiegate il vostro percorso e i motivi che vi spingono
          ad entrare all'ETH. Si tratta, forse, del documento più importante
          insieme al Transcript of Records.
          <br />- Curriculum Vitae
        </p1>{" "}
        <br />
        <br /> Il procedimento e' descritto in dettaglio
        <Link
          href="https://ethz.ch/en/studies/master/application/international-bachelor/prerequisites.html.
          "
        >
          qui.
        </Link>
        <br />
        Per studenti non iscritti all'ETH in Triennale, la domanda scade a
        dicembre per essere ammessi a settembre dell'anno dopo. Bisogna quindi
        muoversi in anticipo! Le date aggiornate di anno in anno sono
        disponibili sul
        <Link href="https://ethz.ch/en/studies/master/application/international-bachelor.html">
          sito.
        </Link>
        <br />
        Se vieni dall' ETH non c’e’ deadline… basta de-immatricolarsi dal
        bachelor e iscriversi al master.
        <h5>Dottorato</h5>
        <p1>boh eppure lo sto facendo... </p1>
        <h3>UZH</h3>
        <p1>Help needed</p1>
      </StyledPage>
    </>
  );
};

export default Universita;
