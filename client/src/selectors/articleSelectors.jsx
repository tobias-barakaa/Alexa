import { createSelector } from 'reselect';

// Assuming your state shape
const selectArticleState = (state) => state.article;

export const selectStepTwoData = createSelector(
  [selectArticleState],
  (article) => article.stepTwoData
);

export const selectTotalCost = createSelector(
  [selectArticleState],
  (article) => article.totalCost
);
