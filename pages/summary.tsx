import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllAnswers, getPersonalityType, challengeDays } from '@/lib/data';

export default function Summary() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [personalityType, setPersonalityType] = useState('');

  useEffect(() => {
    const allAnswers = getAllAnswers();
    setAnswers(allAnswers);
    setPersonalityType(getPersonalityType(allAnswers));
  }, []);

  const completedDays = Object.keys(answers).length;

  return (
    <>
      <Head>
        <title>振り返り - キャリア習慣チャレンジ</title>
        <meta name="description" content="1週間のキャリア習慣チャレンジの振り返り" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* ヘッダー */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                📊 1週間の振り返り
              </h1>
              <p className="text-lg text-gray-600">
                お疲れさまでした！1週間のチャレンジを振り返ってみましょう
              </p>
            </div>

            {/* 完了状況 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  🎉 チャレンジ完了状況
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-4">
                    {completedDays}/7
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                    <div 
                      className="bg-blue-600 h-4 rounded-full transition-all duration-500" 
                      style={{ width: `${(completedDays / 7) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-600">
                    {completedDays === 7 ? '完璧です！すべてのチャレンジを完了しました！' : `${7 - completedDays}日分が残っています`}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* パーソナリティ診断 */}
            {completedDays > 0 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    🧠 あなたのタイプ診断
                  </CardTitle>
                  <CardDescription className="text-center">
                    あなたの回答から分析した結果です
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {personalityType}
                    </div>
                    <p className="text-gray-600">
                      {personalityType === 'ポジティブ思考タイプ' && '前向きな思考で物事に取り組むタイプです。成長意欲が高く、新しいことに挑戦するのが得意です。'}
                      {personalityType === '慎重思考タイプ' && 'じっくりと考えて行動するタイプです。リスクを避け、確実な方法を選ぶ傾向があります。'}
                      {personalityType === 'バランス思考タイプ' && 'バランスの取れた思考で、状況に応じて柔軟に対応できるタイプです。'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 回答一覧 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  📝 あなたの回答一覧
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {challengeDays.map((challenge) => (
                    <div key={challenge.day} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">
                          Day {challenge.day}: {challenge.title}
                        </h3>
                        {answers[challenge.day] ? (
                          <span className="text-green-600 text-sm">✅ 完了</span>
                        ) : (
                          <span className="text-gray-400 text-sm">未回答</span>
                        )}
                      </div>
                      {answers[challenge.day] ? (
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="text-gray-700">{answers[challenge.day]}</p>
                        </div>
                      ) : (
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="text-gray-400 italic">まだ回答していません</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* アクションボタン */}
            <div className="space-y-4">
              <Link href="/" className="block">
                <Button className="w-full h-12 text-lg" size="lg">
                  🏠 ホームに戻る
                </Button>
              </Link>
              
              {completedDays < 7 && (
                <Link href={`/day/${completedDays + 1}`} className="block">
                  <Button variant="outline" className="w-full h-12 text-lg" size="lg">
                    ➡️ 続きをやる
                  </Button>
                </Link>
              )}
              
              <Link href="/history" className="block">
                <Button variant="secondary" className="w-full h-12 text-lg" size="lg">
                  📚 履歴を見る
                </Button>
              </Link>
            </div>

            {/* フッター */}
            <div className="mt-12 text-center text-sm text-gray-500">
              <p>この振り返りを参考に、今後のキャリアに活かしてください！</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 