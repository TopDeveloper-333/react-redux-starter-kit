import { createSelector } from 'reselect';

import { ICategory } from 'shared/types/models';
import { ICommunicationState } from 'shared/helpers/redux';
import { IReduxState } from '../../namespace';

export function selectCategories(state: IReduxState): ICategory[] {
  return state.data.options;
}

export function selectChosenCategory(state: IReduxState): number | null {
  return state.data.selected;
}

export const selectChosenCategoryObject =
  createSelector<IReduxState, ICategory[], number | null, ICategory | undefined>(
    selectCategories,
    selectChosenCategory,
    (categories: ICategory[], uid: number | null) => {
      return categories.find((category: ICategory) => category.uid === uid);
    },
  );

export function selectCategoriesFetching(state: IReduxState): ICommunicationState {
  return state.communications.categoriesFetching;
}