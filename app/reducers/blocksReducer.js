export default function reducer(state = {
    list: [
      { id: 1, name: "Maps", color: 'e67e22' },
      { id: 2, name: "Images", color: '3498db' },
      { id: 3, name: "Gallery", color: '9b59b6' },
      { id: 4, name: "Contacts", color: 'f1c40f' },
      { id: 5, name: "About", color: '2ecc71' },
      { id: 6, name: "Other", color: '95a5a6' }
    ]
  }, action) {

  let newState = Object.assign({}, state)

  switch(action.type) {
    case "ACTION": {
      
      break;
    }
  }

  return newState;
}