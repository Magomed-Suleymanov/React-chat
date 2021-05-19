import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../../redux/ducks/contacts';
import { useEffect } from 'react';
import SkeletonLoader from './SkeletonLoader';
import SearchContacts from './SearchContacts';
import style from './style.module.css';
import Contacts from './Contacts';

function Chats() {
  const loading = useSelector((state) => state.contacts.loading);

  const contacts = useSelector((state) => {
    const filter = state.contacts.filter;

    return state.contacts.items.filter((contact) => {
      return (
        contact.fullname?.toUpperCase().indexOf(filter.toUpperCase()) !== -1
      );
    });
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  return (
    <div className={style.chats}>
      <SearchContacts />
      {loading ? (
        <SkeletonLoader />
      ) : (
        contacts.map((contact) => {
          return <Contacts contact={contact} key={contact._id} />;
        })
      )}
    </div>
  );
}

export default Chats;
