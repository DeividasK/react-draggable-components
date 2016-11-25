import store from '../store';

export function Drop(item) {
  store.dispatch({ type: 'BLOCK_DROPPED', payload: item });
}

export function Add(block) {
  store.dispatch({ type: 'BLOCK_ADDED', payload: block });
}

export function MovePlaceholder(newIndex) {
  store.dispatch({ type: 'BLOCK_HOVERED', payload: newIndex });
}

export function DragStart(draggedBlock) {
  store.dispatch({ type: 'DRAGGING_STARTED', payload: draggedBlock })
}

export function DragEnd() {
  store.dispatch({ type: 'DRAGGING_ENDED' })
}