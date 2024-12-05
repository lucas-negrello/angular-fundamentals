import {IFilterOptions} from "../interfaces/filter-options.interface";
import {IUser} from "../interfaces/user/user.interface";
import {isWithinInterval} from 'date-fns';

const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filterOptions.name, usersList);
  filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
  filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

  return filteredList;
}
const filterUsersListByName = (name: string|null, usersList: IUser[]): IUser[] => {
  const NAME_NOT_TYPED = name === null;
  if(NAME_NOT_TYPED) return usersList;
  return usersList.filter((user) => user.nome.toLowerCase().includes(name?.toLowerCase()));
}
const filterUsersListByStatus = (status: boolean | null, usersList: IUser[]): IUser[] => {
  const STATUS_NOT_SELECTED = status === null;
  if(STATUS_NOT_SELECTED) return usersList;
  return usersList.filter((user) => user.ativo === status);
}
const filterUsersListByDate = (startDate: Date | null, endDate: Date | null, usersList: IUser[]): IUser[] => {
  const DATES_NOT_SELECTED = startDate === null || endDate === null;
  if(DATES_NOT_SELECTED) return usersList;
  return usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {start: startDate, end: endDate}));
}

export { filterUsersList }
