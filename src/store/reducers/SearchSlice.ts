import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchValue: string;
  submittedSearch: string;
}

const initialState: SearchState = {
  searchValue: '',
  submittedSearch: '',
};

export const searchSlice = createSlice({
  name: 'searching',
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    submitSearch: (state, action: PayloadAction<string>) => {
      state.submittedSearch = action.payload;
    },
  },
});

export default searchSlice.reducer;
