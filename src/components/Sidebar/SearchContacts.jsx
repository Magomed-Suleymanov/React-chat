import { useDispatch, useSelector } from 'react-redux';
import { setFilterText } from '../../redux/ducks/contacts';
import { useHotkeys } from 'react-hotkeys-hook';
import { AiOutlineSearch, MdClear } from 'react-icons/all';
import style from './style.module.css';

function SearchContacts() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  const handleDeleteText = () => {
    dispatch(setFilterText(''));
  };

  const handleSearch = (e) => {
    dispatch(setFilterText(e.target.value));
  };

  useHotkeys('shift+t', () => {
    dispatch(setFilterText(''));
  });

  return (
    <div className={style.inputBlock}>
      <div className={style.search}>
        <div className="icon">
          <AiOutlineSearch />
        </div>
        <input
          type="text"
          placeholder="Search contact"
          onChange={handleSearch}
          value={filter}
        />
        <div className={style.deleteSearch} onClick={handleDeleteText}>
          {filter ? <MdClear /> : ''}
        </div>
      </div>
    </div>
  );
}

export default SearchContacts;
