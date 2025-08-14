import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { $, fs, cd } from 'zx';

// 获取当前文件的路径信息
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 读取 sites 目录下的所有子目录
const sites = await fs.readdir(join(__dirname, '../sites'));

for (const site of sites) {
  cd(`${__dirname}/../sites/${site}`);
  await $`lhci autorun`;
}
