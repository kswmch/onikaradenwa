# 1週間だけキャリア習慣チャレンジ

Z世代〜若手社会人向けの「1週間だけキャリア習慣チャレンジ」アプリです。

## 🎯 概要

1日1つだけ軽いキャリアにまつわるお題に取り組み、7日後に振り返りができる自己成長支援アプリです。データはlocalStorageで管理され、プライバシーが保護されます。

## ✨ 機能

- **7日間のチャレンジ**: 毎日異なるキャリアに関するお題
- **localStorage保存**: データはブラウザに保存され、プライバシー保護
- **進捗管理**: 完了状況をリアルタイムで表示
- **パーソナリティ診断**: 回答内容からタイプを分析
- **振り返り機能**: 1週間の回答を一覧表示
- **履歴管理**: 過去の回答をいつでも確認可能
- **モバイルファースト**: スマートフォンでも使いやすいUI

## 🚀 チャレンジ内容

1. **Day 1**: 今日の仕事でちょっと嬉しかったことを書いてみよう
2. **Day 2**: もし自由に働けるなら、どんな仕事してみたい？
3. **Day 3**: 誰かの仕事のやり方をマネしてみる（YES/NO）
4. **Day 4**: 社外の情報（記事やSNS）で気になったこと
5. **Day 5**: 今日、自分が少し成長したと思えた瞬間
6. **Day 6**: モヤッとしたことをあえて言葉にしてみよう
7. **Day 7**: 1週間をふりかえって、どんな変化があった？

## 🛠 技術スタック

- **Next.js 14**: Reactフレームワーク
- **TypeScript**: 型安全性
- **Tailwind CSS**: スタイリング
- **shadcn/ui**: UIコンポーネントライブラリ
- **localStorage**: データ保存

## 📦 セットアップ

### 前提条件

- Node.js 18以上
- npm または yarn

### インストール

1. リポジトリをクローン
```bash
git clone <repository-url>
cd career-challenge-app
```

2. 依存関係をインストール
```bash
npm install
```

3. 開発サーバーを起動
```bash
npm run dev
```

4. ブラウザで `http://localhost:3000` を開く

### ビルド

本番用ビルドを作成する場合：

```bash
npm run build
npm start
```

## 🌐 デプロイ

### Vercel（推奨）

1. [Vercel](https://vercel.com) にアクセス
2. GitHubリポジトリをインポート
3. 自動でデプロイされます

### その他のプラットフォーム

- Netlify
- AWS Amplify
- その他のVercel互換プラットフォーム

## 📁 プロジェクト構造

```
career-challenge-app/
├── components/
│   └── ui/              # shadcn/uiコンポーネント
│       ├── button.tsx
│       ├── card.tsx
│       └── textarea.tsx
├── lib/
│   ├── data.ts          # データ管理・チャレンジ内容
│   └── utils.ts         # ユーティリティ関数
├── pages/
│   ├── _app.tsx         # Appコンポーネント
│   ├── index.tsx        # ホーム画面
│   ├── day/[day].tsx    # チャレンジページ
│   ├── summary.tsx      # 振り返り画面
│   └── history.tsx      # 履歴画面
├── styles/
│   └── globals.css      # グローバルスタイル
├── public/              # 静的ファイル
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 UI/UX

- **モバイルファースト**: スマートフォンでの使用を最優先
- **直感的なナビゲーション**: 分かりやすい画面遷移
- **プログレス表示**: 進捗状況を視覚的に表示
- **レスポンシブデザイン**: デスクトップ・タブレット対応
- **アクセシビリティ**: キーボード・スクリーンリーダー対応

## 🔒 プライバシー

- データはlocalStorageに保存
- サーバーにデータを送信しません
- ブラウザを閉じてもデータは保持
- 個人情報は一切収集しません

## 🤝 貢献

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🙏 謝辞

- [shadcn/ui](https://ui.shadcn.dev) - 美しいUIコンポーネント
- [Tailwind CSS](https://tailwindcss.com) - 効率的なスタイリング
- [Next.js](https://nextjs.org) - 素晴らしいReactフレームワーク

## 📞 サポート

何か問題や質問があれば、GitHubのIssuesでお知らせください。 