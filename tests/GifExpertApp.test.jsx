const { render, screen, fireEvent } = require("@testing-library/react")
const { GifExpertApp } = require("../src/GifExpertApp")

describe('Pruebas en <GifExpertApp/> ', () => {

   test('Debe de hacer math con el snapshot', () => {
      const { container } = render(<GifExpertApp />);
      expect(container).toMatchSnapshot();
   })

   test('Debe de mostrar los textos "One Punch" y "Dragon Ball"', () => {
      render(<GifExpertApp />);
      expect(screen.getByText('One Punch'));
      expect(screen.getByText('Dragon Ball'));
   })

   test('Se debe agregar una categoría si se ingresa una diferente a "One Punch" y "Dragon Ball"', () => {
      render(<GifExpertApp />);
      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');
      fireEvent.input(input, { target: { value: 'Witcher' } });
      fireEvent.submit(form);
      expect(screen.getByText('Witcher'));
   })

})