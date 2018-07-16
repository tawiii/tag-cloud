import {LOAD_TAGS} from '../constants';
import {tags} from '../tagsCloud';

const defaultState = tags;        
     
export default (infoTable = defaultState, action) => {
  const {type} = action;
  switch (type) {
    case LOAD_TAGS: return infoTable
  }

  return infoTable
}

