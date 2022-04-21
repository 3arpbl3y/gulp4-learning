//основной модуль ГАЛП
import gulp from "gulp";
//импорт всех путей
import { path } from "./gulp/config/path.js";

global.app = {
  path: path,
  gulp: gulp,
};

import { copy } from "./gulp/tasks/copy.js"; //импорт задач

//выполнение сценариев по умолчанию
gulp.task("default", copy);
