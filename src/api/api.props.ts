export interface PetResult {
  id: number;
  name: string;
  image: string;
  breed: string;
  weight: string;
  description: string;
  location: {
    latitude: number;
    longitude: number;
  };
}
