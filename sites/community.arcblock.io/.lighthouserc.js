module.exports = {
  ci: {
    collect: {
      url: [
        //
        'https://community.arcblock.io',
      ],
      settings: {
        chromeFlags: '--no-sandbox --headless --disable-gpu',
        preset: 'desktop',
      },
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lhci.invictus.ac.cn',
      token: 'aa03ea5c-53f4-43f4-b9fc-f18138eaa30d',
    },
  },
};
