import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el Hook useFetchGifs', () => {

   test('Debe de regresar el estado inicial', () => {
      const { result } = renderHook(() => useFetchGifs('One Punch'));
      const { images, isLoading } = result.current;
      expect(images.length).toBe(0);
      expect(isLoading).toBeTruthy();
   })

   test('Debe de retornar un arreglo de imágenes y isLoading en false', async () => {
      const { result } = renderHook(() => useFetchGifs('One Punch'));
      await waitFor(
         () => expect(result.current.images.length).toBeGreaterThan(0),
      )
      const { images, isLoading } = result.current;
      expect(images.length).toBeGreaterThan(0);
      expect(isLoading).toBeFalsy();
   })

})

/*
 - Se utiliza el awaitFor para esperar a que se obtenga un resultado en el proceso de renderizado del hook. Con esto logramos evaluar si este obtivo las imágenes deseadas.
*/