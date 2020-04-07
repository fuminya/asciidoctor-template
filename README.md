## 環境構築

1. Rubyのインストール

http://rubyinstaller.org/downloads

2. Asciidoctorのインストール
```
$ gem install asciidoctor
$ gem install coderay
```

## 初期利用設定

node環境がない場合はインストールする。
http://nodejs.org
バージョン10.16.0で動作確認を実施。

```
$ npm install
```

## 操作方法

* textlintの実行
```
$ npm run lint
```

* ドキュメント生成
```
$ npm run build
```

## 参考

* [Asciidoctor User Manual](https://asciidoctor.org/docs/user-manual/)
* [Asciidoctor文法クリックリファレンスの日本訳](https://takumon.github.io/asciidoc-syntax-quick-reference-japanese-translation/)