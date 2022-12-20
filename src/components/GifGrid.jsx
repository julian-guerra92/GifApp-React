import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

   const { images, isLoading } = useFetchGifs(category);

   return (
      <>
         <h3>{category}</h3>
         {
            isLoading && (<h2>Cargando...</h2>)
         }
         <div className='card-grid'>
            {
               images.map((image) => (
                  <GifItem
                     key={image.id}
                     {...image}
                  />
               ))
            }
         </div>
      </>
   )
}

/*
 - El useEffect hace que los elementos especificados se rendericen una única vez cuando el componente es creado. Así se evita renderizar o hacer peticiones nuevamente de funcionalidades de nuestra aplicación.
*/