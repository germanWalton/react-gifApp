import React from "react";
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';


describe('pruebas en <GifExpertApp />', () => {
  
  test('debe mostrar el componente correctamente', () => {
  
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  
})

test('debe mostrar la lista de categorias', () => {
  
  const categories = ['Beavis and Butthead', 'Daria']
  
  const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
  
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('GifGrid').length).toBe(categories.length);


})

})