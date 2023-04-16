import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileProp } from '../../components/profile/type';

interface UserState {
  cards: ProfileProp[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  cards: [],
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    submitProfile: (state, action: PayloadAction<ProfileProp>) => {
      state.cards = [...state.cards, action.payload];
    },
  },
});

export default userSlice.reducer;
