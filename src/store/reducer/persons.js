import * as actionType from '../actions';

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.personData.name,
        age: action.personData.age
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      };
    case actionType.DELETE:
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.personId)
      };
    default:
      return state;
  }
};

export default reducer;
