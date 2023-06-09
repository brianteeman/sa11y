const { readdir, mkdir, copyFile, readFile, writeFile } = require('fs').promises;
const { join } = require('path');

const copyDirectory = async (src, dest) => {
  const [entries] = await Promise.all([
    readdir(src, { withFileTypes: true }),
    mkdir(dest, { recursive: true }),
  ]);

  await Promise.all(
    entries.map((entry) => {
      const srcPath = join(src, entry.name);
      const destPath = join(dest, entry.name);
      return entry.isDirectory()
        ? copyDirectory(srcPath, destPath)
        : copyFile(srcPath, destPath);
    }),
  );
};

(async () => {
  copyDirectory('./dist/js', './docs/assets/js');
  copyDirectory('./dist/css', './docs/assets/css');

  const scriptSource = await readFile('./docs/demo/script.js', 'utf8');
  await writeFile('./docs/demo/script.js', scriptSource.replace(/\.\.\/dist\//g, 'assets/'), 'utf8');
})();

// Automatically update Sa11y version number within docs.
(async () => {
  const packageJson = require('./package.json');
  const version = packageJson.version;
  const fileContent = `
    const version = '${version}';
    const webV = document.getElementById("v");
    webV.innerHTML = version;
  `;
  await writeFile('./docs/demo/version.js', fileContent);
})();