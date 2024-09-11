import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/filter/filterSlice';
import { getFilter } from '../../redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const showFilteredContacts = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div>
      <label>
        <input
          type="text"
          placeholder="Find contacts by name..."
          value={filter}
          onChange={showFilteredContacts}
        />
      </label>
    </div>
  );
};
