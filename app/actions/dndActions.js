import store from '../store';

export function Drop(item) {
  store.dispatch({ type: 'BLOCK_DROPPED', payload: item });
  return item;
}

export function AddPlaceholder() {
  store.dispatch({ type: 'BLOCK_ADDED' });
}

export function MovePlaceholder(newIndex) {
  store.dispatch({ type: 'BLOCK_HOVERED', payload: newIndex });
}

export function DragStart(draggedBlock, indexKey, sortAction) {
  store.dispatch({ type: 'DRAGGING_STARTED', payload: { draggedBlock, indexKey, sortAction } })
  return draggedBlock;
}

export function DragEnd() {
  store.dispatch({ type: 'DRAGGING_ENDED' })
}