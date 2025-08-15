module.exports = {
  ci: {
    collect: {
      url: [
        // www.arcblock.io
        'https://www.arcblock.io/en', // 首页
        'https://www.arcblock.io/blog/', // 博客列表页
        'https://www.arcblock.io/blog/en/arcblock-weekly-highlights-aug-4-8-2025', // 博客详情页

        // www.didnames.io
        'https://www.didnames.io/en', // 首页
        'https://www.didnames.io/app/', // 搜索页

        // launcher.arcblock.io
        'https://launcher.arcblock.io/en', // 首页
        'https://launcher.arcblock.io/app/?blocklet_meta_url=https%3A%2F%2Fstore.blocklet.dev%2Fapi%2Fblocklets%2Fz8ia3xzq2tMq8CRHfaXj1BTYJyYnEcHbqP8cJ%2F0.3.12%2Fblocklet.json&locale=en&product_type=serverless', // 应用启动页

        // community.arcblock.io
        'https://community.arcblock.io', // 首页
        'https://community.arcblock.io/discussions/9d735698-ae99-48ea-937c-486edd900ac2', // 帖子详情页

        // www.aigne.io
        'https://www.aigne.io/en', // 首页
        'https://www.arcsphere.io/en', // arcsphere 首页
        'https://www.aistro.io/en', // aistro 首页
        'https://www.aigne.io/en/code-smith', // code smith 首页
        'https://www.aigne.io/en/doc-smith', // doc smith 首页
        // 待补充 doc smith 列表页
        // 'https://www.aigne.io/en/web-smith', // coming soon
        'https://www.aigne.io/en/cli', // cli 首页
        'https://www.aigne.io/en/observability', // observability 首页
        'https://www.aigne.io/en/studio', // studio 首页
        'https://www.aigne.io/en/framework', // framework 首页
        'https://www.aigne.io/en/hub', // hub 首页

        // store.blocklet.dev
        'https://store.blocklet.dev', // 首页
        'https://store.blocklet.dev/blocklets/z8ia3xzq2tMq8CRHfaXj1BTYJyYnEcHbqP8cJ', // 应用详情页

        // www.didspaces.com
        'https://www.didspaces.com/en', // 首页
      ].slice(0, 1),
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
