import getGifs from "../../helpers/getGifs";


describe('Pruebas con getGifs fetch',() => {
  test('debe devolver 15 elementos', async() => {
    
    const gifs = await getGifs('One punch');
    expect(gifs.length).toBe(15)
  })
  
  test('debe devolver un array vacio', async() => {
    
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0)
  })
})