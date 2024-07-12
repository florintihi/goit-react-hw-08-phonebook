import { createSelector } from 'reselect';

export const selectContacts = state => state.contacts.items;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, getFilter],
  (contacts, filterQuery) => {
    return contacts.filter(
      contact =>
        filterQuery === '' ||
        contact.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
  }
);
