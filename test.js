const puppeteer = require('puppeteer');

test('Verificar título de la página', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('file:///ruta/a/tu/index.html'); // Reemplaza con la ruta real

    const title = await page.title();
    expect(title).toBe('Hola Mundo ');

    await browser.close();
});
