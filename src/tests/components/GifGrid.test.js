import React from "react";
import { shallow } from "enzyme";
import '@testing-library/jest-dom'
import GifGrid from "../../components/GifGrid";
import useFetchGifs from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs")


describe('Pruebas en <GifGrid />', () => {

  const category = 'Dragon Ball';

  test('debe mostrar el componente correctamente', () => {
  
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })

  const wrapper = shallow( <GifGrid category={ category } />)
  expect(wrapper).toMatchSnapshot()
})


  test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {

    const gifs = [{
      id: 'ABC',
      url: 'http://www.google.com',
      title:'Dragon Ball'
    }]

    useFetchGifs.mockReturnValue({
      data:gifs,
      loading:false
    })

    const wrapper = shallow(<GifGrid category={category} />)
    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  
})  

})