import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  //export нужен чтобы мы могли использовать эту константу в других файлах
  build: {
    files: `${buildFolder}/files`, //папка с результатом
  },
  src: {
    files: `${srcFolder}/files/**/*.*`, //проверяем файлы в любых вложенных папках с любым расширением.
  },
  watch: {},
  clean: buildEditor,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
