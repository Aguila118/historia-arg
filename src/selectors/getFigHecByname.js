import { datos } from '../data/data';

export const getFigHecByName = ( name ) => {
  
  return datos.find( dato => dato.name === name );
  
}