import '../styles/App.scss';
import clubsData from '../data/clubsData.json';
import { useState } from 'react';

function App() {
  const [clubs, setClubs] = useState(clubsData);
  const [newClubName, setNewClub] = useState('');
  const [weekDayOpen, setWeekDayOpen] = useState(false);
  const [weekendOpen, setWeekendOpen] = useState(false);
  const [select, setSelect] = useState('all');
  const [selectedRadio, setSelectedRadio] = useState(false);

  //Pintar en el HTML las tarjetas
  const htmlClubsList = clubs
    .filter((club) => {
      if (select === 'weekdays') {
        return club.openOnWeekDays === true;
      } else if (select === 'weekends') {
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
      </li>
    ));

  //Coger el valor de los inputs
  const handleChangeClubName = (ev) => {
    setNewClub(ev.currentTarget.value);
  };

  const handleChangeOpenDays = (ev) => {
    setWeekDayOpen(ev.currentTarget.checked);
  };

  const handleChangeWeekend = (ev) => {
    setWeekendOpen(ev.currentTarget.checked);
  };

  //Añadir nuevo club al hacer click y que no se refresque la página.
  const handleClick = (ev) => {
    ev.preventDefault();

    const newClub = {
      name: newClubName,
      openOnWeekDays: weekDayOpen,
      openOnWeekend: weekendOpen,
    };

    setClubs([...clubs, newClub]);
  };

  //cambiar select
  const handleSelectOption = (ev) => {
    setSelect(ev.target.value);
  };

  //
  const handleSelectRadio = (ev) => {
    setSelectedRadio(ev.target.checked);
  };

  return (
    <div className='page'>
      <header className='header'>
        <h1 className='header--title'>Mis clubs</h1>
        <form className='header--form'>
          <label>Mostrar </label>
          <select onChange={handleSelectOption}>
            <option value='all'>Todos</option>
            <option value='weekdays'>Abierto entre semana</option>
            <option value='weekends'>Abierto en fin de semana</option>
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
          value={newClubName}
          onChange={handleChangeClubName}
        />
        <label>¿Abre entre semana?</label>
        <input
          type='checkbox'
          className='form__input--check'
          checked={selectedRadio}
          onClick={handleSelectRadio}
          // onClick={handleChangeOpenDays}
        />
        <label>¿Abre los fines de semana?</label>
        <input
          type='checkbox'
          className='form__input--check'
          checked={selectedRadio}
          onClick={handleSelectRadio}
          // onClick={handleChangeWeekend}
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
