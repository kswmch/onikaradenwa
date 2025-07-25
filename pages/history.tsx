import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllAnswers, challengeDays } from '@/lib/data';

export default function History() {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    const allAnswers = getAllAnswers();
    setAnswers(allAnswers);
  }, []);

  const completedDays = Object.keys(answers).length;

  return (
    <>
      <Head>
        <title>履歴 - キャリア習慣チャレンジ</title>
        <meta name="description" content="キャリア習慣チャレンジの履歴" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* ヘッダー */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                📚 チャレンジ履歴
              </h1>
              <p className="text-lg text-gray-600">
                これまでの回答を振り返ってみましょう
              </p>
            </div>

            {/* 統計情報 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  📊 統計情報
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">{completedDays}</div>
                    <div className="text-sm text-gray-600">完了日数</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">
                      {Math.round((completedDays / 7) * 100)}%
                    </div>
                    <div className="text-sm text-gray-600">完了率</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">
                      {7 - completedDays}
                    </div>
                    <div className="text-sm text-gray-600">残り日数</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 履歴一覧 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  📝 回答履歴
                </CardTitle>
                <CardDescription className="text-center">
                  日付順に並んでいます
                </CardDescription>
              </CardHeader>
              <CardContent>
                {completedDays === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">📝</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      まだ回答がありません
                    </h3>
                    <p className="text-gray-600 mb-6">
                      チャレンジを始めて、あなたの回答を記録しましょう！
                    </p>
                    <Link href="/day/1">
                      <Button size="lg">
                        🎯 チャレンジを始める
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {challengeDays.map((challenge) => (
                      <div key={challenge.day} className="border rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              Day {challenge.day}: {challenge.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {challenge.description}
                            </p>
                          </div>
                          {answers[challenge.day] ? (
                            <span className="text-green-600 text-sm font-medium">✅ 完了</span>
                          ) : (
                            <span className="text-gray-400 text-sm">未回答</span>
                          )}
                        </div>
                        
                        {answers[challenge.day] ? (
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-2">あなたの回答：</h4>
                            <p className="text-gray-700 whitespace-pre-wrap">{answers[challenge.day]}</p>
                          </div>
                        ) : (
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-400 italic">まだ回答していません</p>
                            <Link href={`/day/${challenge.day}`}>
                              <Button variant="outline" size="sm" className="mt-2">
                                回答する
                              </Button>
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* アクションボタン */}
            <div className="space-y-4">
              <Link href="/" className="block">
                <Button className="w-full h-12 text-lg" size="lg">
                  🏠 ホームに戻る
                </Button>
              </Link>
              
              {completedDays > 0 && (
                <Link href="/summary" className="block">
                  <Button variant="outline" className="w-full h-12 text-lg" size="lg">
                    📊 振り返りを見る
                  </Button>
                </Link>
              )}
              
              {completedDays < 7 && (
                <Link href={`/day/${completedDays + 1}`} className="block">
                  <Button variant="secondary" className="w-full h-12 text-lg" size="lg">
                    ➡️ 続きをやる
                  </Button>
                </Link>
              )}
            </div>

            {/* フッター */}
            <div className="mt-12 text-center text-sm text-gray-500">
              <p>過去の回答を参考に、今後のキャリアに活かしてください！</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 