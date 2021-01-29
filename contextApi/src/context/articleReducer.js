export const articleReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ARTICLE":
        return [
          ...state,
          {
            id: Math.random(), // not really unique but it's just an example
            title: action.payload.title,
            body: action.payload.body
          }
        ];
      default:
        return state;
    }
  };