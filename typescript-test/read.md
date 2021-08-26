# 安装步骤
1)初始化 npm init --yes出现 package.json  

2)安装typescript  

  全局安装：cnpm i typescript -g 或  

  本地安装：cnpm i typescript -D  

3)生成tsconfig.json文件  

  tsc --init  

4)修改tsconfig.json文件  

  "outDir": "./dist" --outDir是ts编译后生成js文件保存的目录  

  "rootDir": "./src"  --rootDir是自己编写的ts源文件所在的目录  

  注意：dist src package.json必须在同一目录下  

5)编译src目录以及子目录下的ts文件  

  tsc[在src当前目录下：输入tsc 注意直接写tsc 命令即可，会把src目录以及子目录下的ts文件全部编译成js文件，并输出到dist目录中]  

6)安装 ts-node  

  ts-node让node能直接运行ts代码，无需使用tsc将ts代码编译成js代码。  

  全局安装  cnpm i ts-node -g 或  

  本地安装  cnpm i ts-node -D  

7)安装nodemon工具  

  nodemon可以自动监测到目录文件更改时通过重新启动应用程序来调试代码  

8)配置package.json  

"scripts": {
    "start": "nodemon --watch src/ -e ts --exec ts-node ./src/index.ts"
}  

9) npm install parcel-bundler --save-dev 安装parcel-bundler  

10）在根目录新建index.html文件，将index.ts引入  

11）配置package.json文件，并启动  

"scripts": {
    "startparcel": "parcel ./index.html",
    "start": "nodemon --watch src/ -e ts --exec ts-node ./src/index.ts"
  }  
  
