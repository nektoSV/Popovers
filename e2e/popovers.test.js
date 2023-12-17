import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);

describe('Popovers', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    // eslint-disable-next-line
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('Form should render on page start', async () => {
    await page.goto(baseUrl);

    await page.$('.btn-danger');
  });

  test('When you click on the add .popovers class button and popovers', async () => {
    await page.goto(baseUrl);

    await page.$('.btn-danger');

    const btn = await page.$('.btn');

    await btn.click();

    await page.$('.popovers');
    await page.$('.active-popovers');
  });
});
