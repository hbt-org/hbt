# HBTPlugin starter

使用这个模板仓库创建属于你的 HBT 插件。

## 开始

1.  **Git clone the repo.**
    ```shell
    git clone git@github.com:hbt-org/hbt-plugin-starter.git
    ```
    
1.  **安装依赖**
    ```shell
    cd hbt-plugin-starter/
    yarn
    ```
    
1.  **开始调试**
    ```shell
    yarn dev
    ```
    
1.  **打包**
    ```shell
    yarn build
    ```

## 目录结构

快速浏览 **hbt plugin** 项目的目录结构。

    .
    ├── node_modules
    ├── src
    ├── .editorconfig
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierrc
    ├── LICENSE
    ├── package.json
    ├── README.md
    ├── rollup.config.js
    └── tsconfig.json

1.  **`/node_modules`**: 该目录包含所有代码依赖模块。

2.  **`/src`**: 该目录将包含 **hbt plugin** 的代码。src 是“source code”的约定。

3.  **`.editorconfig`**: 这是文件格式和文本编辑器插件的集合，用于在不同的编辑器和 IDE 之间保持一致的编码样式。

4.  **`.eslintrc.js`**: 这是 [Eslint](https://eslint.org/) 的配置文件。Eslint 可用于查找和修复 JavaScript 代码中的问题。

5.  **`.gitignore`**: 这个文件告诉 git 不跟踪 / 不维护哪个版本历史的文件。

6.  **`.prettierrc`**: 这是 [Prettier](https://prettier.io/) 的配置文件。Prettier 是一种帮助保持代码格式一致的工具。

7.  **`LICENSE`**: **hbt-plugin-starter** 根据 MIT 许可授权。

8. **`package.json`**: 此文件告知 npm 为您的项目安装哪些软件包。

9.  **`README.md`**: 此文件包含与本项目有关的说明文档、参考信息等。
