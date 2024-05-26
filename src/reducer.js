export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  token: null,
  //   remove the access token after the development
  // token:
  //   "BQC_DK_A74MujWkOhkL2T1-bvLzT4OINKLd1BTXbSp1JsCPorng9lLzEdzBPQCMFdPzsn9Nu90Kghe014Wnn-dvOlgqrd8wgOFadz312I3vQhbwdpjire6Tp_N3AagAGwtF6kepzRLojdenwMT0AquEDP_BcXG5yFSldpxK4mIE6mEiPB57bu_iRHDRW7iuBKedgqm6n4QyP-aG1G1PS",
};

const reducer = (state, action) => {
  //   Action --> type, [payload], payload is dynamic
  switch (action.type) {
    case `SET_USER`:
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
