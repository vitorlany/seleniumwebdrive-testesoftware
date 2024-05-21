const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com');
    
    // Aguarde até que o campo de busca esteja presente
    await driver.wait(until.elementLocated(By.name('q')), 5000);
    
    // Envie a consulta de pesquisa
    await driver.findElement(By.name('q')).sendKeys('Pucminas', Key.RETURN);
    
    // Garante que o título da página tenha o texto 'Pucminas - Pesquisa Google'
    await driver.wait(until.titleIs('Pucminas - Pesquisa Google'), 5000);

    // Obtenha e exiba o título da página 
    const title = await driver.getTitle();
    console.log('O título da página é:', title);

  } catch (error) {
    console.error(error);
  } finally {
    // Feche o navegador assim que o processo é finalizado
    await driver.quit();
  }
})();
