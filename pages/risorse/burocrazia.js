import RisorseLayout from "./_RisorseLayout";
import { StyledPage } from "../../components/StyledComponents";
import Link from "next/link";

const Burocrazia = () => {
  return (
    <>
      <StyledPage>
        <h1>Burocrazia all'ingresso</h1>
        <h3>Cosa fare quando entri in svizzera? </h3>
        <p1>
          Entro 14 giorni dall’ingresso nel cantone, ci si deve assolutamente
          registrare nel Kreisbüro (il comune del quartiere) in cui vivi. Non
          importa se sei in affitto o da un amico che ti ospita, la prima cosa
          da fare è andare al Kreisbüro. Porta con te il documento di identità
          italiana, le fototessere (falle in Italia, costano meno; sennò puoi
          farle anche all’ufficio stesso del Kreisbüro per 10 CHF),
          l’immatricolazione e il contratto di locazione.  Ti verrà rilasciato
          il permesso di soggiorno di tipo B che dovrai rinnovare ogni
          anno/semestre. Il contratto di locazione non è obbligatorio per la
          registrazione: se ti appoggi ad un amico, puoi registrare il suo
          indirizzo come tuo recapito. Il prezzo per il permesso di soggiorno è
          di 85 CHF e ti verrà mandato per posta entro 10 giorni;  nel frattempo
          ti rilasceranno un foglio ufficiale con il quale potrai aprire il
          conto in banca e chiedere un numero di telefono svizzero.
        </p1>
        <h3>Iscrizione all'AIRE</h3>
        <p1>
          Non devi iscriverti se sei in svizzera per poco tempo. Sei inizi un
          dottorato o inizi a lavorare qui conviene per non complicarti la vita
          con la dichiarazione delle tasse e per poter votare per l’italia in
          svizzera. Sul sito dell’aire si legge: “I cittadini che trasferiscono
          la propria residenza all’estero per periodi superiori a 12 mesi
          consecutivi; la dichiarazione deve essere presentata entro 90 giorni
          dall’espatrio definitivo ed è possibile richiederla anche
          successivamente”. <br /> <br />
          Se vuoi iscriverti, su questo sito trovi tutto quello che ti serve:
          https://serviziconsolari.esteri.it/ScoFE/index.sco. Clicca su
          “registrazione”, usa SPID per fare login e compila i moduli richiesti!
          Ti verra’ richiesto di caricare: <br />
          - documento d’identità in corso di validità, oltre a quello degli
          eventuali familiari conviventi
          <br />- documentazione comprovante la residenza nella circoscrizione
          consolare (es. certificato di residenza rilasciato dall’autorità
          locale, bollette di utenze residenziali, ecc.)
        </p1>

        <h3>Votare per l'italia</h3>
        <p1>
          I cittadini italiani residenti all’estero ed iscritti all’AIRE possono
          esercitare il diritto di voto all’estero nel luogo di residenza per le
          elezioni dei membri della Camera e del Senato, per i referendum
          abrogativi e costituzionali di cui agli artt. 75 e 138 della
          Costituzione e per le elezioni dei membri del Parlamento europeo
          spettanti all’Italia. Ove costituiti, i cittadini possono partecipare
          anche all’elezione dei Comitati degli italiani residenti all’estero
          (COMITES). Il voto all’estero non è invece previsto per l’elezione dei
          Consigli regionali, comunali e provinciali, né per i referendum
          locali. (Fonte:
          https://www.esteri.it/it/servizi-consolari-e-visti/italiani-all-estero/votoestero/).
          Lo stesso vale per le elezioni europee.
        </p1>

        <h3>Conto in banca</h3>
        <p1>
          Non ci sono molte alternative… Le banche piu’ grandi sono: <br />- UBS
          (conto gratuito per studenti) <br />- ZKB (zurcher kantonalbank) -
          anche loro hanno pacchetti gratutiti per studenti <br />- POST FINANCE
          per scegliere guarda che sconti ti interessano… <br />
          io scelsi UBS perche’ un tempo faceva gli sconti per l’SBB… In
          generale poi qui tutti hanno TWINT (come paypal o satispay) - un modo
          per pagare con il telefono e per mandare/ricevere soldi ad/da amici.
          Attento che ti serve un numero svizzero Non serve avere soldi in
          contanti, qui si puo’ davvero sopravvivere solo con un telefono!
        </p1>

        <h3>Contratto telefonico</h3>
        <p1>
          i sono diverse possibilta’: sunrise, yallo, salt,… Yallo penso sia una
          delle piu’ economiche. Sunrise fa gli sconti per l’halbtax dell’SBB e
          le altre non lo so. Immagina che alla fine dovrai pagare qualcosa come
          20-30chf al mese. In realta’ ci sono anche Lidl, Aldi, Migros e Coop
          che fanno dei contratti abbastanza economici. <br />
          Se passi la vita a casa o all’ETH non ti serve davvero avere un
          contratto perche’ sei sempre sotto WIFI, ti consiglio di prendere una
          ricaricabile. Io sono sopravvissuta 4 anni cosi’…
        </p1>
      </StyledPage>
    </>
  );
};

export default Burocrazia;
