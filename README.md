# tampermonkey-scripts

Chrome 拡張機能である Tampermonkey （[Chrome Web Storeはこちら](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/related?hl=ja)）で使えるスクリプトを活用して社内で便利であろうツールを作成したものです

みんなが使えそうなものを作ったり、そのアイデアがあればぜひ教えて下さい

## Tampermonkey とは

スクリプトを書くことでブラウザの挙動をカスタマイズする GreaseMonkey という仕組みを使うことができます。


## インストールと初期設定

### 拡張機能本体のインストール

[TampermonkeyのChromeWebStore](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/related?hl=ja) を新しいウィンドウで開き、「Chromeへ追加」ボタンを押してインストールします

### 初期設定


- [zipファイル](https://github.com/photocreate/tampermonkey-scripts/releases/download/v1.1/tampermonkey.zip)をダウンロードしておきます（解凍する必要はありません）
- 拡張機能のオプション画面を開きます
    - URLに `chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/options.html#nav=utils` を入力します
    - `ユーティリティ` タブを開きます
- `ZIP` の `インポート` から先程ダウンロードしたzipファイルを選択してダウンロードしたファイルをインポートします
- `インストール済みUserScript` タブにいろいろ出てきたら成功です


## 使い方

画面上で文字列を選択し、右クリックすると「Tampermonkey」というメニューが出てきます。有効にしている機能によって使い方は異なるので試してみてください。

### 不要な機能を無効化する

人によっては使わない拡張を誤って起動しないように無効化したい人もいると思います。下記の手順で無効化できます

- 拡張機能のオプション画面を開きます
    - URLに `chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/options.html#nav=utils` を入力します
    - `インストール済みUserScript` タブを開きます
    - `有効` 欄にあるスイッチで On/Off を切り替えます


### 配布スクリプトの更新方法

こちらは初期インストール後にスクリプトの更新があった場合の手順です。更新の案内があった際に実行します。

- Chromeのメニュー `その他のメニュー` から `拡張機能`
- [拡張機能のユーティリティ](chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/options.html#nav=utils) を開く
- 画面下部`URL からインストール` に更新用にもらったURLを貼り付けてインストールを押す
- `再インストール`を押す
- 下記の手順で再起動してください

### 再起動について

スクリプトの更新などがあった際に認識されない、うまく動かないという場合には下記の方法で再起動してください

- 拡張機能のオプション画面を開きます
    - URLに `chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/options.html#nav=settings` を入力します
    - 画面最下部 `Tampermonkey を再起動` を押します

## スクリプトの自作方法、修正方法

[Development How-To](./development_how_to.md) をごらんください


## その他

### 便利なスクリプト

下記のような便利なスクリプトが公開されています。自分でインストールしてみましょう

- [Zoom - Close Stupid Windows](https://gist.github.com/happiness801/9c8f63a473375b38e72a98fe3541c288/raw/6528bbd1c3188afa62ea4a8607657d6b6e58defe/zoom-remove-join-meeting-tabs.user.js) Zoomミーティングに参加した後の不要な画面を自動で閉じてくれます

他にも [UserScript.zone](https://www.userscript.zone/) などに便利なものが公開されているので探してみてください。（良いものが見つかったらぜひ共有してください）

### バグを見つけたら

動作上の不具合があった場合には下記をつけてもらえると助かります

- どの機能でバグがあったか
- 操作していた画面
- クリックした後に開かれたタブの画面
- クリックした後に開かれたタブのURL

    
