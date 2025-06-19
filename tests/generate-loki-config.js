const fs = require('fs');
const path = require('path');

const taskId = process.argv[2];

if (!taskId) {
  console.error('❌ Не указан taskId. Пример: node scripts/generate-loki-config.js BLOCK2-6');
  process.exit(1);
}

const config = `
module.exports = {
  configurations: {
    chrome: {
      target: 'chrome.app',
      width: 1280,
      height: 800
    }
  },
  chromeFlags: ['--no-sandbox'],
  scenarios: {
    default: {
      url: 'file:build/${taskId}/index.html'
    }
  },
  referenceDir: '.loki/reference/${taskId}',
  diffDir: '.loki/difference/${taskId}',
  outputDir: '.loki/output/${taskId}'
};
`;

const configPath = path.resolve(__dirname, '../loki.config.js');
fs.writeFileSync(configPath, config);
console.log(`✅ loki.config.js сгенерирован для ${taskId}`);
