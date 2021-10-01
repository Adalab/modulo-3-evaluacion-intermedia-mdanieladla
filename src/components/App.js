import '../styles/App.scss';
import clubsData from '../data/clubsData.json';
import { useState } from 'react';

function App() {
  const [clubs, setClubs] = useState(clubsData);
  const [newClubName, setNewClubName] = useState('');
  const [weekDayOpen, setWeekDayOpen] = useState(false);
  const [weekendOpen, setWeekendOpen] = useState(false);
  const [select, setSelect] = useState('all');

  //Coger el valor de los inputs
  const handleChangeClubName = (ev) => {
    setNewClubName(ev.target.value);
  };

  const handleChangeOpenDays = (ev) => {
    setWeekDayOpen(ev.target.checked);
  };

  const handleChangeWeekend = (ev) => {
    setWeekendOpen(ev.target.checked);
  };

  //cambiar select
  const handleSelectOption = (ev) => {
    setSelect(ev.target.value);
  };

  //Añadir nuevo club al hacer click y que no se refresque la página.
  const handleClick = (ev) => {
    ev.preventDefault();

    const newClub = {
      name: newClubName,
      openOnWeekdays: weekDayOpen,
      openOnWeekend: weekendOpen,
    };

    setClubs([...clubs, newClub]);
  };

  //Borrar clubs
  const handleDelete = (ev) => {
    const id = ev.currentTarget.id;
    clubs.splice(id, 1);
    setClubs([...clubs]);
  };

  //Pintar en el HTML las tarjetas
  const htmlClubsList = clubs
    .filter((club) => {
      if (select === 'openOnWeekdays') {
        return club.openOnWeekdays === true;
      } else if (select === 'openOnweekend') {
        return club.openOnWeekend === true;
      }
      return true;
    })
    .map((oneClub, index) => (
      <li key={index} className='list__container--li'>
        <h3>
          #{index} {oneClub.name}
        </h3>
        <p>
          Abierto entre semana : {oneClub.openOnWeekdays === true ? 'Si' : 'No'}
        </p>
        <p>
          Abierto los fines de semana :
          {oneClub.openOnWeekend === true ? 'Si' : 'No'}
        </p>
        <button className='delete-btn' onClick={handleDelete}>
          X
        </button>
      </li>
    ));

  return (
    <div className='page'>
      <header className='header'>
        <h1 className='header--title'>Mis clubs</h1>
        <form className='header--form'>
          <label className='header--form--label'>Mostrar </label>
          <select
            className='header--form--select'
            value={select}
            onChange={handleSelectOption}
          >
            <option value='all'>Todos</option>
            <option value='openOnWeekdays'>Abierto entre semana</option>
            <option value='openOnweekend'>Abierto en fin de semana</option>
          </select>
        </form>
      </header>
      <section>
        <ul className='list__container'>{htmlClubsList}</ul>
      </section>
      <h4 className='title--newClub'>Añadir un nuevo club</h4>
      <form className='form'>
        <label className='form--title'> Nombre del club </label>
        <input
          type='text'
          className='form__input--name'
          name='name'
          value={newClubName}
          onChange={handleChangeClubName}
        />
        <label>¿Abre entre semana?</label>
        <input
          type='checkbox'
          className='form__input--check'
          checked={weekDayOpen}
          onChange={handleChangeOpenDays}
        />
        <label>¿Abre los fines de semana?</label>
        <input
          type='checkbox'
          className='form__input--check'
          checked={weekendOpen}
          onChange={handleChangeWeekend}
        />
        <input
          type='submit'
          value='Añadir un nuevo club'
          className='form__input--btn'
          onClick={handleClick}
        />
      </form>
    </div>
  );
}

export default App;
