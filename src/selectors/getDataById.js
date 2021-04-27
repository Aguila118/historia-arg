import { datos } from '../data/data';

export const getDataById =( tipoData ) => {

  
  
  const validId = ['figura','hecho'];

  if ( !validId.includes(tipoData)) {
    throw new Error(`nombre "${tipoData}" no es correcto`);
  } else {
        
    return datos.filter( dato => dato.id === tipoData );
  }

}