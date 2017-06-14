1，首先需要安装node 以及npm
2，使用npm install 安装相应的依赖
3，若使用未压缩版本时，微信开发工具的目录为weapp
4，若最后提交时候需要将项目压缩，使用 npm run build 命令来压缩，将会生成一个weapp_dist 目录，该文件为压缩后的项目
4，若想在开发的过程中，直接使用压缩版本，可以通过运行npm run dev命令，将会生成一个weapp_dist 目录，需要将微信开发工具的目录为weapp_dist