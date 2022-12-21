import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Prueba sobre el GifItem Component', () => {

   const title = 'one punch GIF by Adult Swim';
   const url = 'https://giphy.com/gifs/adultswim-adult-swim-toonami-l3vRlt8kty8KKeHni'

   test('Debe de hacer math con el snapshot', () => {
      const { container } = render(<GifItem title={title} url={url} />);
      expect(container).toMatchSnapshot();
   })

   test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
      render(<GifItem title={title} url={url} />);
      const {src, alt} = screen.getByRole('img');
      expect(src).toBe(url);
      expect(alt).toBe(title);
   })

   test('Debe de mostrar el título en el componente', () => {
      render(<GifItem title={title} url={url} />);
      expect(screen.getByText(title)).toBeTruthy();
   })

})