# [Issue] `@run-at context-menu` 実行後に右クリックメニューからスクリプトが消える問題

## 現象
`@run-at context-menu` を指定したスクリプトを実行すると、一度実行した後はページをリロードするまで右クリックメニュー（コンテキストメニュー）からスクリプト名が消えてしまい、同じページで再実行できない。

## 原因
Tampermonkeyの仕様（制限）によるものです。
`@run-at context-menu` は「メニュークリック時にスクリプトをページへ注入（インジェクト）する」ためのトリガーです。一度クリックするとスクリプトがページにロードされた状態になるため、二重ロードを防ぐ目的でコンテキストメニューから非表示になります。

---

## 解決策
他サイトとの競合リスクやパフォーマンスへの影響を完全に排除しつつ、右クリックメニューから何度でも実行できるようにするため、**「`GM_registerMenuCommand` 方式（常時ロード＋メニュー連動）」** へ移行します。

### 1. ユーザー側での設定変更（1回のみ必要）
`GM_registerMenuCommand` で登録したコマンドをブラウザの右クリックメニューに表示させるため、各利用者は以下の設定を行ってください。

1. ブラウザの Tampermonkey アイコンをクリックし、**「ダッシュボード」** を開きます。
2. **「設定」** タブを開きます。
3. 一番上の「設定モード」を **「初心者」** から **「上級者」** に変更します。
4. 下へスクロールし、**「コンテキストメニュー」** セクションにある **「メニューコマンドをコンテキストメニューに登録する」** にチェックを入れます。
5. ページ最下部で **「保存」** をクリックします。

これにより、右クリックメニューの「Tampermonkey」サブメニュー内にコマンドが常時表示され、何度でも実行可能になります。

---

### 2. スクリプトのコード修正内容（移行テンプレート）

#### 従来のコード (`@run-at context-menu` 方式)
```javascript
// ==UserScript==
// @name         CloudSearchで検索
// ...
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';
    const pcTM = new PCTamperMonkey();
    const selected = document.getSelection().toString();
    const url = pcTM.buildGoogleCloudSearchURL(selected);
    if (url.length > 0) {
        GM_openInTab(url, {active: true});
    }
})();
```

#### 修正後のコード (`GM_registerMenuCommand` 方式)
```javascript
// ==UserScript==
// @name         CloudSearchで検索
// ...
// @grant        GM_registerMenuCommand  // 追記
// @run-at       document-idle          // 常時ロードに変更
// ==/UserScript==

(function() {
    'use strict';
    
    // 右クリックメニューの「Tampermonkey」サブメニューにコマンドを登録
    GM_registerMenuCommand("CloudSearchで検索を実行", function() {
        const pcTM = new PCTamperMonkey();
        const selected = document.getSelection().toString();
        const url = pcTM.buildGoogleCloudSearchURL(selected);
        if (url.length > 0) {
            GM_openInTab(url, {active: true});
        } else {
            alert("テキストが選択されていません");
        }
    });
})();
```
