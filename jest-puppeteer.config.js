module.exports = {
  launch: {
    dumpio: true,
    headless: false,
    args: ['--disable-infobars', '--window-size=1200,800', '--disable-gpu'],
    defaultViewport: null,
  },
  browserContext: 'default',
};
