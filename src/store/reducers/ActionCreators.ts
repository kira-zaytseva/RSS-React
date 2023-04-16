import { GalleryService } from '../../API/galleryService';
import { AppDispatch } from '../../store/store';
import { artSlice } from './GallerySlice';

export const getArts = (searchValue: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(artSlice.actions.artsFetching());
    const { data: art, errors } = await GalleryService.getArts(searchValue);
    if (errors) {
      return errors;
    }
    dispatch(artSlice.actions.artsFetchingSuccess(art));
  } catch (e) {
    if (e instanceof Error) {
      dispatch(artSlice.actions.artsFetchingError(e.message));
    }
  }
};
