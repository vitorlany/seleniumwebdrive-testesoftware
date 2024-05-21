const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

describe('Google Search', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  }, 15000); // Aumente o tempo limite para 15 segundos

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  }, 15000); // Aumente o tempo limite para 15 segundos

  test('Deve pesquisar por Pucminas e verificar o título da página', async () => {
    try {
      await driver.get('http://www.google.com');
      
      // Aguarde até que o campo de busca esteja presente
      await driver.wait(until.elementLocated(By.name('q')), 5000);
      
      // Envie a consulta de pesquisa
      await driver.findElement(By.name('q')).sendKeys('Pucminas', Key.RETURN);
      
      // Garante que o título da página tenha o texto 'Pucminas - Pesquisa Google'
      await driver.wait(until.titleIs('Pucminas - Pesquisa Google'), 5000);

      // Obtenha o título da página
      const title = await driver.getTitle();

      // Verifique se o título está correto
      expect(title).toBe('Pucminas - Pesquisa Google');
    } catch (error) {
      console.error(error);
      throw error;  // Rejeite o teste em caso de erro
    }
  }, 15000); // Aumente o tempo limite para 15 segundos
});
