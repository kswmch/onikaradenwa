import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getProgress } from '@/lib/data';

export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  return (
    <>
      <Head>
        <title>1週間だけキャリア習慣チャレンジ</title>
        <meta name="description" content="Z世代〜若手社会人向けのキャリア習慣チャレンジアプリ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            {/* ヘッダー */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                1週間だけキャリア習慣チャレンジ
              </h1>
              <p className="text-lg text-gray-600">
                Z世代〜若手社会人向けの自己成長支援アプリ
              </p>
            </div>

            {/* メインカード */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  🚀 チャレンジ概要
                </CardTitle>
                <CardDescription className="text-center text-base">
                  1日1つだけ軽いキャリアにまつわるお題に取り組み、7日後に振り返りができる自己成長支援アプリです
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">7</div>
                    <div className="text-sm text-gray-600">日間</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">1</div>
                    <div className="text-sm text-gray-600">日1問</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">100%</div>
                    <div className="text-sm text-gray-600">無料</div>
                  </div>
                </div>

                {/* 進捗表示 */}
                {progress > 0 && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">進捗状況</span>
                      <span className="text-sm text-gray-500">{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">📋 チャレンジ内容</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 1日目：今日の仕事でちょっと嬉しかったことを書いてみよう</li>
                    <li>• 2日目：もし自由に働けるなら、どんな仕事してみたい？</li>
                    <li>• 3日目：誰かの仕事のやり方をマネしてみる</li>
                    <li>• 4日目：社外の情報で気になったこと</li>
                    <li>• 5日目：今日、自分が少し成長したと思えた瞬間</li>
                    <li>• 6日目：モヤッとしたことをあえて言葉にしてみよう</li>
                    <li>• 7日目：1週間をふりかえって、どんな変化があった？</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* アクションボタン */}
            <div className="space-y-4">
              <Link href="/day/1" className="block">
                <Button className="w-full h-12 text-lg" size="lg">
                  🎯 チャレンジをはじめる
                </Button>
              </Link>

              {progress > 0 && (
                <>
                  <Link href="/summary" className="block">
                    <Button variant="outline" className="w-full h-12 text-lg" size="lg">
                      📊 振り返りを見る
                    </Button>
                  </Link>
                  <Link href="/history" className="block">
                    <Button variant="secondary" className="w-full h-12 text-lg" size="lg">
                      📚 履歴を見る
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* フッター */}
            <div className="mt-12 text-center text-sm text-gray-500">
              <p>データはlocalStorageに保存され、プライバシーが保護されます</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 