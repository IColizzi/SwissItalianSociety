import Link from "next/link";

const Trasporti = () => {
  return (
    <>
      <h1>Trasporti</h1>
      <h3>Swisspass</h3>
      <p1>
        Per utilizzare l&apos;abbonamento dei mezzi è necessario avere uno
        Swisspass, sul quale potrai caricare l&apos;abbonamento stesso. Per
        avere più informazioni consulta il seguente sito:
        <Link href=" https://www.sbb.ch/it/abbonamenti-e-biglietti/swisspass.html">
          {" "}
          sbb.ch{" "}
        </Link>
      </p1>
      <h3> SBB app</h3>
      <p1>
        {" "}
        Prima cosa da fare è scaricare l&apos;app dell&apos;SBB. Google maps non
        e&apos; sempre aggiornato! Con l&apos;app puoi pianificare viaggi,
        comprare biglietti, usare easy ride (un opzione che ti permette di non
        dover comprare piu&apos; nessun biglietto, semplicemente attivala prima
        di partire e fermala quando sei arrivato, l&apos;app calcolerà
        automaticamente il prezzo).
      </p1>
      <h3>Muoversi a Zurigo </h3>
      <p1>
        La rete di trasporti di Zurigo è divisa in zone; la maggior parte dei
        punti di interesse (inclusi entrambi i campus universitari) ricade
        all’interno della zona 110, dove alloggia il maggior numero di studenti.
        Per maggiori informazioni sulle diverse zone, puoi consultare questo{" "}
        <Link href="https://www.zvv.ch/zvv/en/timetable/network-maps">
          sito
        </Link>
        .
        <br />
        Per avere informazioni sull&apos;abbonamento mensile o annuale per i
        mezzi a Zurigo, puoi consultare questo:
        <Link href="   https://www.zvv.ch/zvv/en/travelcards-and-tickets/travelcards/networkpass.html">
          link
        </Link>
        . Nota: Per la città di Zurigo, è necessario scegliere l&apos;opzione
        1-2 zone - la zona 110 conta doppio. Se hai meno di 25 anni, puoi
        acquistare l&apos;abbonamento a un prezzo ridotto!
      </p1>
      <h3>ETH and UZH free Shuttlebus</h3>
      <p1>
        Servizio di trasporto gratuito che collega i vari campus dell’UZH e
        dell’ETH (Hönggerberg, Zentrum, Oerlikon). La circolazione è garantita
        dal lunedì al venerdì. Si tratta sicuramente della soluzione più comoda
        per muoversi tra i due campus. <br />
        <br />
        Puoi consultare gli orari dell&apos;ETH link:
        <Link href="https://ethz.ch/students/en/campus/transport-mobility/science-city-link.html">
          qui.
        </Link>
        <br /> e dell&apos;UZH{" "}
        <Link href=" https://www.students.uzh.ch/de/dates/shuttle.html">
          qui.
        </Link>
      </p1>
      <h3>Viaggiare fuori da Zurigo</h3>
      <p1>
        Il sistema di trasporti pubblici svizzeri è molto efficiente e può
        tranquillamente sostituire l&apos;utilizzo di una macchina. Ci sono
        degli abbonamenti che ti consentono di risparmiare un po&apos;
        <br /> - GA night: dopo le 7 ti puoi muovere senza biglietto in tutta la
        svizzera (conviene se vivi vicino al confine).
        <br /> - Halbtax: tutto costa piu&apos; o meno la matà. Conviene se ti
        piace fare gite nel weekend ogni tanto. Se hai un abbonamento telefonico
        della Sunrise costa la metà.
        <br /> - GA: abbonamento generale che ti permette di viaggiare in tutta
        la svizzera senza comprare il biglietto. E&apos; un po&apos; caro ...
      </p1>
      <h3>Guidare in svizzera</h3>
      <p1>
        Puoi guidare in svizzera per un anno senza problemi. Passato un anno
        devi per forza cambiare la tua patente in una patente svizzera. Ci sono
        leggende che dicono che hai solo un anno per farlo. Non è vero. Lo puoi
        fare quando vuoi ma non puoi guidare nel frattempo. Per cambiare la
        patente devi pagare circa 30chf + 10chf per la nuova foto tessera +
        20chf per il test dall&apos;ottico. Info
        <Link href="  https://www.zh.ch/de/mobilitaet/fuehrerausweis-fahren-lernen/auslaendischer-fuehrerausweis.html.">
          qui.
        </Link>
        La tua patente italiana verrà rimandata in italia e ne riceverai una
        nuova svizzera. Se hai fatto la patente poco prima di esserti trasferito
        in svizzera (meno di un anno) devi fare in aggiunta un corso di guida
        (WAB) dal modico costo di 500chf.
      </p1>
      <h3>Mobilty - car sharing</h3>
      <p1>
        Per essere sincera a zurigo non serve la macchina perchè i mezzi
        pubblici sono davvero ottimi. La gente va anche a sciare in giornata
        prendendo il treno. Se hai bisogno di una macchina a noleggio o di un
        mezzo per il trasloco c&apos;è{" "}
        <Link href=" https://www.mobility.ch/en/private-customers">
          Mobilty
        </Link>
        - con l&apos;ETH hai un account gratis per 3 mesi (
        <Link href=" https://ethz.ch/staffnet/en/service/eth-card/functions/mobility-car-sharing-offers.html">
          info qui.
        </Link>
        ) e dopo puoi continuare con l&apos;account under 30. E&apos; un
        po&apos; caro ma ha senso se la devi usare solo ogni tanto.
      </p1>
    </>
  );
};

export default Trasporti;
