import { AiOutlineSearch } from 'react-icons/all';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  loadContacts, setFilterText } from '../../redux/ducks/contacts';
import { Route } from 'react-router-dom';
import Contact from './contact';


function Chats() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter)
  const dispatch = useDispatch();

  const filteredContacts = contacts
    .filter((contact) => contact.fullname?.toLowerCase().includes(filter.toLowerCase()))
  const handleSearch = (e) => {
    dispatch(setFilterText(e.target.value))
  }

  useEffect(() => {
    dispatch(loadContacts())
  }, [dispatch])

  return (
    <Route path="/:_id?">
      <div className={style.chats}>
      <div className={style.search}>
        <div className="icon">
          <AiOutlineSearch />
        </div>
        <input type="text"
               placeholder="Search contact"
               value={filter}
               onChange={handleSearch}
        />
      </div>
      <div>
        {filteredContacts.map((contact) => {
          return (
            <Contact contact={contact}  key={contact.id} />
          );
        })}
      </div>
    </div>
    </Route>
  );
}

export default Chats;
