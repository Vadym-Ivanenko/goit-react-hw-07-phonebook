import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts.items;

export const getFilter = state => state.contacts.filters;

export const selectVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filters) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filters.toLowerCase());
    });
  }
);
