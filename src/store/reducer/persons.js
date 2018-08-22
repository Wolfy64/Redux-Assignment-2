import * as actionType from '../actions'

const initialState = {
  persons: []
}

const reducer = ( state = initialState, action ) => {
  console.log('​reducer -> action', action);
  console.log('actionType.ADD', actionType.ADD);

  console.log('state',state)
  
  switch (action.type) {
    case actionType.ADD:
      console.log('hello')
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: 'Max',
        age: Math.floor( Math.random() * 40 )
      }
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      }
    case actionType.DELETE:
        return{
          ...state,
          persons: state.persons.filter(person => person.id !== action.personId)
        }
    default:
    return state;
  }
}

export default reducer;