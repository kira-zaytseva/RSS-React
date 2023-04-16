import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArtWork } from '../../API/types';

interface GalleryState {
  arts: ArtWork[];
  isLoading: boolean;
  error: string;
}

const initialState: GalleryState = {
  arts: [],
  isLoading: false,
  error: '',
};

export const artSlice = createSlice({
  name: 'arts',
  initialState,
  reducers: {
    artsFetching(state) {
      state.isLoading = true;
    },
    artsFetchingSuccess(state, action: PayloadAction<ArtWork[]>) {
      state.isLoading = false;
      state.error = '';
      state.arts = action.payload;
    },
    artsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default artSlice.reducer;
