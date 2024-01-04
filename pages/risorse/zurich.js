import { StyledPage } from "../../components/StyledComponents";
import styled from "styled-components";
import Link from "next/link";

const Zurich = () => {
  return (
    <>
      <StyledPage>
        <h1>Vita a Zurigo</h1>

        <h3>Dove fare la spesa?</h3>
        <p1>
          Ricordati che domenica è tutto chiuso! (Tranne qualcosa in HB) Non
          andare alla coop che è cara. Non avere avere paura dei discount, Lidl
          è tuo amica, cosi&apos; come Denner. La migros ha anche prodotti
          economici in relatà. SPAR invece non ho proprio capito perchè esiste…{" "}
          <br />
          Anche qui funziona
          <Link href="https://toogoodtogo.com/de-ch"> too Good to go </Link>
          (e davvero conviene)
        </p1>
        <h3>Amazon non esiste</h3>
        <p1>
          Non comprare cose su amazon perchè hai dei prezzi di spedizione
          altissime. La cosa migliore è fare aquisti in italia, oppure se
          proprio vuoi usa galaxus.{" "}
          <Link href="https://galaxus.ch/en"> Galaxus </Link> e’ davvero geniale
          perche’ il pacchetto ti arriva il giorno stesso…
        </p1>
        <h3>Second Hand</h3>
        <p1>
          In svizzera il second hand è praxis. Qui la gente va e viene e lascia
          spesso cio’ che ha comprato a disposizione dei prossimi. Non parlo
          solo di mobili ma anche di vestiti, piante, sci, monitors… diciamo
          tutto. Ci sono diverse piattaforme online ma a volte trovi dei
          pacchetti anche per strada con scritto “free to take”!
          <br /> Qui aluni siti interessanti:
          <br />- <Link href="https://tutti.ch/de"> Tutti.ch</Link>
          <br />- <Link href="https://ricardo.ch/ "> Ricardo</Link>
          <br /> Se cerchi vestiti ci sono tanti negozietti in centro oppure
          puoi guardare online su siti tipo
          <Link href="https://secondhandkiste.ch/"> SecondhandKiste</Link>
          <br />
          All’ETH ci sono 2 eventi all&apos;anno, uno in inverno e uno in estate
          dove rivendono o vendono materiale sportivo a basso prezzo.
        </p1>

        <h3>Non comprare Laser pointer</h3>
        <p1>
          Non tutti i laser pointers sono consentiti in svizzera. Puoi solo
          comprare quelli disponibili su galaxus. Stai atteno che puoi pagare
          una multa fino a 700chf altreimenti …
        </p1>
        <h3>Come imparare il tedesco...serve?</h3>
        <p1>
          In realtà se vieni per il master puoi sopravvivere senza, anche perchè
          a zurigo non si parla tedesco ma dialetto… Se vuoi e devi impararlo ci
          sono un po&apos; di possibità
          <br />- Sprachzentrum ETH - 80chf a semestre
          <br />- Sprachzentrum Clubschule Migros
          <br />- Sprachzentrum Kanton Zurich
          <br />- Tandem partner (c&apos;è anche una mobile app per questo) -
          free
          <br />- Fatti amici tedeschi :)
        </p1>
        <h3>Lavoretti a Zurigo</h3>
        <p1>
          E&apos; semplice trovare qualcosa da fare a zurigo per avere qualche
          piccolo income.
          <br />- Ripetizioni (tutor24, nachilfeAkademie, tutoroo, techy, )
          <br />- Babysitting (ci sono un sacco di mamme italiane …)
          <br />- Bar, ristoranti e catering:{" "}
          <Link href="https://tempstaff.ch">clicca qui!</Link>
          <br />- UberEats and JustEat
          <br />- ….
        </p1>
      </StyledPage>
    </>
  );
};

export default Zurich;
