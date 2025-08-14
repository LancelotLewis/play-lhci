module.exports = {
  ci: {
    collect: {
      url: [
        //
        'https://www.arcblock.io/en',
        'https://www.arcblock.io/en/about-us',
      ],
      settings: {
        chromeFlags: '--no-sandbox --headless --disable-gpu',
        preset: 'desktop',
      },
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lhci.invictus.ac.cn',
      token: '2a83349a-f494-444c-98dd-ee1ec44180dd',
    },
  },
};
