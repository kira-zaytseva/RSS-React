import { GalleryService } from './galleryService';

describe('GalleryService', () => {
  beforeEach(() => {
    const mockResponse = {
      data: [
        {
          id: 1,
          title: 'Artwork 1',
          image_id: 'image1',
          artist_title: 'Artist 1',
          place_of_origin: 'Place 1',
          department_title: 'Department 1',
          date_end: '2022-01-01',
        },
        {
          id: 2,
          title: 'Artwork 2',
          image_id: 'image2',
          artist_title: 'Artist 2',
          place_of_origin: 'Place 2',
          department_title: 'Department 2',
          date_end: '2023-01-01',
        },
      ],
    };

    global.fetch = async () => {
      const json = async () => mockResponse;
      return new Response(JSON.stringify(await json()));
    };
  });

  afterEach(() => {
    global.fetch = window.fetch;
  });

  it('should return an array of artworks', async () => {
    const { data: art, ...rest } = await GalleryService.getArts('');
    console.log(rest);
    expect(Array.isArray(art)).toBe(true);
    expect(art[0]).toHaveProperty('id', 1);
    expect(art[0]).toHaveProperty('title', 'Artwork 1');
    expect(art[0]).toHaveProperty('image_id', 'image1');
    expect(art[0]).toHaveProperty('artist_title', 'Artist 1');
    expect(art[0]).toHaveProperty('place_of_origin', 'Place 1');
    expect(art[0]).toHaveProperty('department_title', 'Department 1');
    expect(art[0]).toHaveProperty('date_end', '2022-01-01');
  });
});
