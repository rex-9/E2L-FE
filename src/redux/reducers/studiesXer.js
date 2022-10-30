const FETCH_STUDIES = 'e2l-fe/studies/FETCH_STUDIES';
const ADD_STUDIES = 'e2l-fe/studies/ADD_STUDIES';

const initialState = [
  {
    id: 1,
    tech: 'React',
    topic: 'Redux',
    hour: 2,
  },
  {
    id: 2,
    tech: 'Ruby',
    topic: 'Ruby On Rails',
    hour: 5,
  },
];

const studiesXer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDIES:
      return [...action.payload];

    case ADD_STUDIES:
      return [...action.payload];

    default:
      return state;
  }
};

export default studiesXer;
