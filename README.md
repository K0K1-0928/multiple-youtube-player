# multiple-youtube-player

指定したYouTube動画のYouTube Playerをページ内に生成するプログラムです。  
Playerは複数生成できるため、複数動画の同時視聴などにご活用ください。

## How To Use

現在はローカル環境での実行のみに対応しています。

1. 本リポジトリからファイル一式をダウンロードします。
2. `index.html` を任意のブラウザで開きます。
3. 入力欄にYouTubeのURLまたはIDを入力し、Viewボタンを押下します。
4. 指定したYouTube動画のPlayerが生成され、ミュート状態で自動再生されます。

## FAQ

### Q. 入力欄はどのようなURLに対応していますか？

A. 以下の形式に対応しています。

- `https://www.youtube.com/watch?v=xxxxxxxxxxx`
- `https://www.youtube.com/live/xxxxxxxxxxx`
- `https://youtu.be/xxxxxxxxxxx`
- `xxxxxxxxxxx`

### Q. 自動再生時にミュート状態になるのはどうしてですか？

A. YouTubeIframeAPIの仕様です。
