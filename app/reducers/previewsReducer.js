export default function reducer(state = {
    list: [],
    placeholder: { id: 0, title: "Drag", subtitle: "a block here", textColor: "95a5a6" },
    indexKey: 0,
    defaultSize: 600,
    sortingEnabled: true,
    draggedBlock: null
  }, action) {

  let newState = { ...state, list: [ ...state.list] }

  switch(action.type) {
    case "BLOCK_DROPPED": {
      newState.list.splice(action.payload.key, 1, action.payload.block);
      break;
    }

    case "BLOCK_ADDED": {
      newState.list.push(newState.placeholder);
      newState.indexKey = newState.list.length - 1;
      newState.sortingEnabled = true;
      break;
    }

    case "BLOCK_HOVERED": {
      let placeholder = newState.list.splice(newState.indexKey, 1)[0];
      newState.list.splice(action.payload, 0, placeholder);
      newState.indexKey = action.payload;
      break;
    }

    case "DRAGGING_STARTED": {
      newState.sortingEnabled = false;
      if ( ! action.payload.sortAction) { break; }
      let placeholder = newState.list.splice(newState.indexKey, 1)[0];
      newState.list.splice(action.payload.indexKey, 1, placeholder);
      newState.indexKey = action.payload.indexKey;
      break;
    }

    case "DRAGGING_ENDED": {
      let lastItemIndex = newState.list.length - 1;
      newState.sortingEnabled = true;

      if (newState.indexKey === lastItemIndex) { break; }

      let placeholder = newState.list.splice(newState.indexKey, 1)[0];
      newState.list.push(placeholder);
      newState.indexKey = lastItemIndex;
      break;
    }
  }

  return newState;
}