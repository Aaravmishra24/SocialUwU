type Action = {
  type: string;
  data?: any;
};

export const profile = (state = { profileData: null }, action: Action) => {
  switch (action.type) {
    case "GET_PROFILE":
      return { ...state, profileData: action?.data };
    default:
      return state;
  }
};
