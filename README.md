# node-red-contrib-skyway
<img width="400" alt="flowsample" src="https://user-images.githubusercontent.com/38904644/50626961-a0359580-0f74-11e9-8445-36d7edeabb4d.png">

![flowsample2](https://user-images.githubusercontent.com/38904644/50627864-d83ed780-0f78-11e9-9539-bcf883795933.png)

## 概要
SkyWayを利用したp2p videochatをweb上に構築します。  

## 前提条件
node-red-contrib-skywayを使用するには、Node-REDをインストールする必要があります。  
事前にSkyWayの<code>APIキー</code>を発行してください。  
また、SkyWayの<code>利用可能ドメイン</code>にデプロイ先のホスト名を追加してください。  

## インストール
現在npmライブラリに登録していないため、node-redの`パレットの管理`からはインストールできません。  
</br>
**step1.**  
リポジトリをクローンします。  
**step2.**  
Node-REDユーザーディレクトリ（通常 `~/.nodered`)に移動します。
```
cd ~/.nodered
```
**step3.**  
`npm i`でcloneしたリポジトリを指定します。
```
npm i <cloneしたディレクトリ>/node-red-contrib-skyway
```
