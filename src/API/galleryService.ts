import { getResponse } from './response';
import { ArtWork, RequestMethod } from './types';

export class GalleryService {
  static getArts = () =>
    getResponse<ArtWork[]>({
      url: 'artworks/?fields=id,title,image_id',
      method: RequestMethod.GET,
    });
  static getArt = (artId: number) =>
    getResponse<ArtWork>({
      url: `artworks/${artId}?fields=id,title,image_id`,
      method: RequestMethod.GET,
    });
}
