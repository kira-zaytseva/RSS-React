import { getResponse } from './response';
import { ArtWork, RequestMethod } from './types';

export class GalleryService {
  static getArts = (searchValue: string) =>
    !searchValue
      ? getResponse<ArtWork[]>({
          url: 'artworks/?fields=id,title,image_id,artist_title,place_of_origin,department_title,date_end',
          method: RequestMethod.GET,
        })
      : getResponse<ArtWork[]>({
          url: `artworks/search?q=${searchValue}&fields=id,title,image_id,artist_title,place_of_origin,department_title,date_end`,
          method: RequestMethod.GET,
        });
}
