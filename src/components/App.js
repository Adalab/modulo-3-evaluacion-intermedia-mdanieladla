import '../styles/App.scss';
import clubsData from '../data/clubsData.json';
import { useState } from 'react';

function App() {
  const [clubs, setClubs] = useState(clubsData);
  const openWeeksDays = 'Abierto entre semana: Sí';
  const notOpenWeeksDays = 'Abierto entre semana: No';
  const openWeekends = 'Abierto el fin de semana: Sí';
  const notOpenWeekends = 'Abierto el fin de semana: No';

  const htmlClubsList = clubs.map((oneClub, index) => (
    <li key={index} className='list__container--li'>
      <h3>
        #{index} {oneClub.name}
      </h3>
      <p>{openWeeksDays} </p>
      <p>{openWeekends}</p>
    </li>
  ));

  return (
    <div className='page'>
      <header className='header'>
        <h1 className='header--title'>Mis clubs</h1>
      </header>
      <section>
        <ul className='list__container'>{htmlClubsList}</ul>
      </section>
      <h4 className='title--newClub'>Añadir un nuevo club</h4>
      <form className='form'>
        <label> Nombre del club </label>
        <input type='text' className='form__input--name' />
        <label>¿Abre entre semana?</label>
        <input type='checkbox' className='form__input--check' />
        <label>¿Abre los fines de semana?</label>
        <input type='checkbox' className='form__input--check' />
        <input
          type='submit'
          value='Añadir un nuevo club'
          className='form__input--btn'
        />
      </form>
    </div>
  );
}

export default App;
