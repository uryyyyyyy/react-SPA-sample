# react-boilerplate
react with webpack, jest, gulp, 6to5

## pre setup

install node v0.10.XX

global install gulp

## setup

npm install


## build

gulp build

## develop

gulp develop

## feature

- bower_componentsも使えるようにしてる。

- タスクはgulpで管理。
  - webpackやテストを複数試したいから。
  - 開発用と完全ビルド用で分けたい。



## メモ

webpackはモジュールの管理のみを行う。

cssとかjQueryPluginなどのライブラリはbowerから読み込む。
（まとめてもメリットが無いばかりか、ビルド、表示がハンパなく遅くなるから。
ソースマップOffにすれば多少マシになるけど開発に向かない。）

config.testFileExtensionsでファイル名を変えれば一ファイルのテストができる？
