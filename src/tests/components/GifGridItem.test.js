import React from 'react'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import GifGridItem from '../../components/GifGridItem'



describe('Pruebas en <GifGridItem />',()=> {

  const title = 'Goku';
  const url = 'http://www.google.com';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);


 test('debe mostrar el componente correctamente', () => {

   expect(wrapper).toMatchSnapshot();
 })
  
 test('debe mostrar un parrafo con el title', () => {

   const p = wrapper.find('p').text().trim();
   expect(p).toBe(title);
})

test('debe tener la imagen con la url y el alt de los props', () => {

  const img = wrapper.find('img');
  expect(img.prop('src')).toBe(url);
  expect(img.prop('alt')).toBe(title);
})
  
  
test('debe tener la clase animate__zoomIn', () => {

  const div = wrapper.find('div');
  const className = div.prop('className')
  expect(className.includes('animate__zoomIn')).toBe(true)
})

})