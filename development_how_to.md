# Development How-To

自身でUserScriptを作りたい方向けの内容です。

過去に作成したブックマークレットなどもこちらに移植しておくことで管理しやすくなると思います。
またブックマークレットと異なり圧縮等をする必要がないので見やすいコードのまま使えます。

# 概要

メニューから「新規スクリプトの追加」を押すと編集画面が出てきます。

予め最低限必要な内容が埋まっているので活用しましょう。

## 修正すべき項目

※ こちらの内容は検証中です

|項目|意味|
|----|----|
|@name|スクリプトの名前です。スクリプトの管理、右クリックからの呼び出しに使われるのでわかり易い名前にしましょう|
|@namespace|特にこれといった意味はないです。管理画面のURLまたは https://www.photocreate.co.jp を入れておくのが良いでしょう|
|@match|この拡張が起動するURLを正規表現で入れます。ここ直し忘れると右クリックしても出てこない？とかになるので忘れずに|
|@grant|GM_で始まる と言われる関数を呼び出す際はそれを追加してください|

その他は

```
(function() {
    'use strct':

    // Your code here...
})();
```

この `Your code here...` にJavaScriptのコードを書いていけばよいです。

## GM系関数について

（あとで書く）

## 作れる機能について

今回最初のリリースで提供しているのは主に下記の二種類です

- Context Menu(右クリックメニュー)の拡張
    - `@grant  GM_registerMenuCommand` を用いてメニューを追加しています
- Context Menuに直接機能を追加
    - `@run-at context-menu` を用いて実行タイミングを定義しています

`@run-at` のようなものを入れないと「常に実行」されてしまうので注意してください。
画面内へのリンクの追加など、クリックなどをトリガーとせずに実行させたいものなども作ることができます。

公開されている UserScript は [Userscript.Zone](https://www.userscript.zone/?utm_source=tm.net&utm_medium=scripts) などにたくさん便利なものがあります


