//contacts
export const getContactsSelector = state => state.contacts;
export const getItemsSelector = state => state.contacts.item;
export const filterContactsSelector = state => state.contacts.filter;

//auth
export const isLoggedSelector = state => state.auth.isLogged;
export const getNameSelector = state => state.auth.user.name;
export const isRefreshUserSelectors = state => state.auth.isRefreshCurrentUser
