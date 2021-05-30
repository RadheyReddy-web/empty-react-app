import * as actionTypes from '../constants/StoreConstants';

const initialState = {
  features: [
    {
      iconType: 'world',
      title: 'Explore the world',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    },
    {
      iconType: 'compass',
      title: 'Meet nature',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    },
    {
      iconType: 'map',
      title: 'Find your way',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    },
    {
      iconType: 'heart',
      title: 'Live a healthier life',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    },
  ],
  tours: [
    {
      header: 'The Sea Explorer',
      details: {
        days: 3,
        people: 30,
        guides: 2,
        sleepType: 'Sleep in cozy hotels',
        difficulty: 'easy',
      },
      price: '$297',
    },
    {
      header: 'The Forest Hiker',
      details: {
        days: 7,
        people: 40,
        guides: 6,
        sleepType: 'Sleep in provided in tents',
        difficulty: 'medium',
      },
      price: '$497',
    },
    {
      header: 'The Snow Adventurer',
      details: {
        days: 5,
        people: 15,
        guides: 3,
        sleepType: 'Sleep in provided tents',
        difficulty: 'hard',
      },
      price: '$897',
    },
  ],
  stories: [
    {
      src:'nat-9.jpg',
      userName: 'Mary Smith',
      title: 'I had the best week ever with my family',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
    ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
    repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.`,
    },
    {
      src:'nat-8.jpg',
      userName: 'Jack Wilson',
      title: 'WOW! My life is completely different now',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
      ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
      repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.`,
    },
  ],
};

const DetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FEATURES:
      const { features } = state;
      return {
        features,
      };
    case actionTypes.GET_TOURS:
      const { tours } = state;
      return {
        tours,
      };
    default:
      return state;
  }
};

export default DetailsReducer;
