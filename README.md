# tampermonkey-scripts

Chrome 拡張機能である Tampermonkey （[Chrome Web Storeはこちら](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/related?hl=ja)）で使えるスクリプトの倉庫

## Tampermonkey とは

スクリプトを書くことでブラウザの挙動をカスタマイズする GreaseMonkey という仕組みを使うことができます。


## インストールと初期設定

### 拡張機能本体のインストール

[TampermonkeyのChromeWebStore](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/related?hl=ja) を新しいウィンドウで開き、「Chromeへ追加」ボタンを押してインストールします

### 初期設定

- [zipファイル](https://github.com/tetsunosuke/tampermonkey-scripts/raw/dev/resources/import.zip)をダウンロード
- [拡張機能のユーティリティ](chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/options.html#nav=utils) を新しいウィンドウで開く
- `ZIP` の `インポート` からファイルを選択してダウンロードしたファイルをインポートする

## 配布スクリプトの更新方法

こちらは初期インストール後にスクリプトの更新があった場合の手順です。更新の案内があった際に実行します。

- Chromeのメニュー `その他のメニュー` から `拡張機能`
- [拡張機能のユーティリティ](chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/options.html#nav=utils) を開く
- 画面下部`URL からインストール` に更新用にもらったURLを貼り付けてインストールを押す
- `再インストール`を押す
- （再読み込みが必要かも？）

## スクリプトの自作方法、修正方法

[Development How-To](./development_how_to.md) をごらんください


## その他

（何かあれば書く）

## 昔あった機能

移植するかどうかは要望の多さで決める

- イベントID検索(済)
- イベント名検索(済)
- 写真番号検索(済)
- 注文番号検索(済)
- Gmail検索（CloudSearch検索として移植済）
- 取引先検索
- Googleカレンダーに予定を追加
- カメラマン検索
- 学校検索
- その他のブックマークレット

