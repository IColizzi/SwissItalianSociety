import RisorseLayout from "./dd_RisorseLayout";
import { StyledPage } from "../../components/StyledComponents";
import Link from "next/link";

const Sanita = () => {
  return (
    <>
      <StyledPage>
        <h1>Sanita'</h1>
        <h3>Devo avere una assicurazione sanitaria? </h3>
        <p1>
          Si e no. Tutte le persone in svizzera devono avere una assicurazione
          sanitaria valida. Come studente europeo hai la tua assicurazione
          italiana che è valida anche in svizzera per max 5 anni. Per questo
          devi cheidere un esenzione al cantone di zurigo e rinnovarla dopo 3
          anni. Il sito per chiederla in uno dei due siti:
          https://svazurich.ch/unsere-produkte/weitere-produkte/krankenversicherung--kvg-/compulsory-health-insurance/krankenversicherungspflicht-wer-hat-anspruch.html
          https://www.kvg.org/en/ <br /> <br />
          Ma se stai lavorando (come dottarando o come TA all&apos;ETH) devi
          avere insieme alla tua assicurazione italiana anche un&apos;
          assicurazione diversa. La lista di assicuarazioni per studenti che
          hanno l&apos;esenzione è qui:
          https://ethz.ch/en/studies/international/after-arrival/health-insurance/eu.html
          La piu&apos; economica se sei under 30 è swisscare.
        </p1>
        <h3>Confuso su cosa siano deduttibile e premi?</h3>
        <p1>
          Il massimo deducibile in un&apos;assicurazione si riferisce alla somma
          massima che l&apos;assicurato deve pagare di tasca propria prima che
          l&apos;assicurazione inizi a coprire le spese. I premi sono quanto
          devi pagare mese per mese. Quindi se non vai spesso dal medico ti
          conviene avere un deduttibile alto e un basso premio
        </p1>

        <h3>Informazioni pratiche</h3>
        <h5>Andare dal medico</h5>
        <p1>
          Se devi andare dal medico puoi cercare online un dottore e andare da
          lui. La cosa migliore è andare in centri come Sanacare gruppenpraxis
          dove hanno un grande team e con grande probabilità qualcuno che sa
          l&apos;inglese o l&apos;italiano. <br />
          In Svizzera non è comune andare al pronto soccorso come in Italia, ed
          è consigliato recarvicisi solo in casi di emergenza e di andare
          normalmente nelle Arztpraxis. Anche in caso di ricovero in pronto
          soccorso/ospedale è valida la regola dei 92 CHF al mese.
        </p1>
        <h5>Come avviene il pagamento dopo che sono andato dal medico?</h5>
        <p1>
          Di solito devi pagare subito o ti arriva per posta una lettera con
          scritto quanto devi pagare. Dopo averlo fatto devi mandare una foto
          del pagamento e della lettera alla tua assicurazione per studenti (se
          ne hai una) oppure a https://www.kvg.org/en/ (per email a:
          info@kvg.org). Il rimborso sarà uguale al totale speso a meno di 92
          CHF, ogni 30 giorni (ex: facendo 2 altre visite nei 30 giorni
          successivi alla prima visita, si pagheranno in totale 92 CHF).
        </p1>
        <h5>Comprare medicine</h5>
        <p1>
          Putroppo l&apos;assicurazione sanitaria per studenti non le copre e
          devi pagarle ti tasca tua. Consiglio: fai rifornimenti di medicinali
          senza ricetta in italia
        </p1>
        <h5>Visite ginecologiche</h5>
        <p1>
          Puoi farne una all&apos;anno e ricevere il rimborso come spiegato
          sopra. Prenotala direttamente all&apos;USZ e chiedi di avere qualcuno
          che parla inglese o italiano.
        </p1>
        <h5>Hai bisgno di altre informazioni?</h5>
        <p1>
          Visita il seguente
          sito: https://www.kvg.org/it/cittadini-privati/diritto-di-prestazioni/domicilio-nellue-aels/
        </p1>
      </StyledPage>
    </>
  );
};

export default Sanita;
