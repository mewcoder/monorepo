monorepo 实践

### lerna

- 总体版本采用`lerna publish`进行总体发布，此时会强行将各个 npm 包版本保持到和 lerna 发布的版本同步（因此 lerna 是进行统一 npm 包版本管理）
- npm 包独立版本由各个控件的开发人员自行维护，通过 npm publish 自行发布 PATCH 版本（不允许发布 MINOR 和 MAJOR 版本）
- lerna 总体版本在 lerna.json 的 version 字段说明
- lerna 发布版本不能是 PATCH 版本变动。
- 使用`lerna bootstrap`命令进行依赖安装和 npm 软链接
