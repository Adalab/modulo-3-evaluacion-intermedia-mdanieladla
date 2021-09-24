import '../styles/App.scss';

function App() {
  return (
    <div className='page'>
      <header className='header'>
        <h1 className='header--title'>Mis clubs</h1>
      </header>
      <section>
        <ul className='list__container'>
          <li className='list__container--li'>
            <h3>#0 Book club</h3>
            <p>Abierto entre semana: Sí</p>
            <p>Abierto el fin de semana: Sí</p>
          </li>
          <li className='list__container--li'>
            <h3>#1 Chess club</h3>
            <p>Abierto entre semana: No</p>
            <p>Abierto el fin de semana: Sí</p>
          </li>
          <li className='list__container--li'>
            <h3>#2 Escape room club</h3>
            <p>Abierto entre semana: No</p>
            <p>Abierto el fin de semana: No</p>
          </li>
          <li className='list__container--li'>
            <h3>#3 Debate club</h3>
            <p>Abierto entre semana: Sí</p>
            <p>Abierto el fin de semana: No</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
