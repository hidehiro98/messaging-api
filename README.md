# xhack-bot

勉強会用のBOTソースコードです。

# 必要なアカウント

## Heroku アカウント
Heroku アカウントの利用登録
https://id.heroku.com/login

今回利用するクラウドサーバーです。
自分が書いたプログラムを、クラウド上で実行してくれるサービスです。

### やること
- アプリを作成する
- アプリのURLを取得する

## LINE Developer アカウント
LINE Messaging API の利用登録
https://developers.line.me/ja/

LINE Messaging APIを利用するために必要です。
Botアカウントを作成し、herokuサーバーと連携します。

### やること
- 友達追加する
- LINE_CHANNEL_SECRETの取得
- LINE_CHANNEL_ACCESS_TOKENの取得
- Webhook URLをセットする(後述)

アプリケーションを一つ作成します。

## codenvy アカウント
codenvyアカウント登録
https://codenvy.io/site/login

### やること
- herokuと連携する
- LINE Messaging APIを利用するための準備をする

## githubアカウント
ソースコードを公開するためのサービスです。
複数人で同じプロジェクトを開発するときにお互いの編集作業を連携するのに便利です。
また、クラウドサーバーにソースコードをアップするのにも使えます。

### やること
特になし

## codenvyでワークスペース作成

- サイドバーからcreate workspaceを選択
<img src="https://raw.githubusercontent.com/x-hack-git/messaging-api/master/image/create_workspace.png" height="320px">

### STEP-1 STACKを選択する

- 今回はNodeを選択してください
<img src="https://raw.githubusercontent.com/x-hack-git/messaging-api/master/image/select_node.png" height="320px">

### STEP-2 PROJECTSでGitURLを指定する

- 以下のURLをコピペして貼り付けましょう
`https://github.com/x-hack-git/messaging-api.git`
<img src="https://raw.githubusercontent.com/x-hack-git/messaging-api/master/image/select_repo.png" max-height="320px">

### STEP-3 heroku CLI のインストール

- 以下のコマンドを実行してみましょう
`$ curl https://cli-assets.heroku.com/install.sh | sh`
<img src="https://raw.githubusercontent.com/x-hack-git/messaging-api/master/image/install_heroku_cli.png" height="320px">

# LINE Developersで取得した値をherokuにセットする

```
$ heroku config:set LINE_CHANNEL_SECRET=""
$ heroku config:set LINE_CHANNEL_ACCESS_TOKEN=""
```

# herokuにpushする

```
$ git push heroku master
```

