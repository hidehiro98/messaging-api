# xhack-bot

勉強会用のBOTソースコードです。

# 開発環境が必要な場合

codenvyアカウント登録
- [codenvy](https://codenvy.io/site/login)のアカウント登録

## codenvyでワークスペース作成

- サイドバーからcreate workspaceを選択

![CREATE_WORKSPACE](https://raw.githubusercontent.com/x-hack-git/messaging-api/master/image/create_workspace.png "CREATE_WORKSPACE")

### STEP-1 STACKを選択する

- 今回はNodeを選択してください

![SELECT STACK](https://raw.githubusercontent.com/x-hack-git/messaging-api/master/image/select_node.png "SELECT STACK")

### STEP-2 PROJECTSでGitURLを指定する

- 以下のURLをコピペして貼り付けましょう
`git@github.com:x-hack-git/messaging-api.git`
`https://github.com/x-hack-git/messaging-api.git`

![SELECT Git URL](https://raw.githubusercontent.com/x-hack-git/messaging-api/master/image/select_repo.png "SELECT Git URL")

### STEP-3 heroku CLI のインストール

- 以下のコマンドを実行してみましょう
`$ curl https://cli-assets.heroku.com/install.sh | sh`

![INSTALL HEROKU](https://raw.githubusercontent.com/x-hack-git/messaging-api/master/image/install_heroku_cli.png "INSTALL HEROKU")

# 事前準備

```
LINE Messaging API の利用登録
https://developers.line.me/ja/

Heroku アカウントの利用登録
https://id.heroku.com/login
```

# クイックスタート（herokuにデプロイする場合）

```
git clone this
git remote add heroku <Your_heroku_app_git_url>
heroku config:set LINE_CHANNEL_SECRET="<Your LINE_CHANNEL_SECRET>"
heroku config:set LINE_CHANNEL_ACCESS_TOKEN="<Your LINE_CHANNEL_ACCESS_TOKEN>"
git push heroku master
```
