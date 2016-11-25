import { combineReducers } from 'redux';

import blocks from './blocksReducer';
import previews from './previewsReducer';

export default combineReducers({
  blocks,
  previews
});