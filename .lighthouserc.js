module.exports = {
  ci: {
    collect: {
      url: [
        //
        'https://www.arcblock.io/en',
        'https://www.arcblock.io/en/about-us',
        'https://community.arcblock.io',
      ],
      settings: {
        chromeFlags: '--no-sandbox --headless --disable-gpu',
        preset: 'desktop',
      },
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: process.env.LHCI_SERVER_BASE_URL,
      token: process.env.LHCI_TOKEN,
    },
  },
};
