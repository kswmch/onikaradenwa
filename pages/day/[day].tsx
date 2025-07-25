import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { getChallengeDay, saveAnswer, getAnswer } from '@/lib/data';

export default function ChallengeDay() {
  const router = useRouter();
  const { day } = router.query;
  const dayNumber = parseInt(day as string, 10);
  
  const [answer, setAnswer] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [challenge, setChallenge] = useState<any>(null);

  useEffect(() => {
    if (dayNumber && dayNumber >= 1 && dayNumber <= 7) {
      const challengeData = getChallengeDay(dayNumber);
      setChallenge(challengeData);
      
      const savedAnswer = getAnswer(dayNumber);
      if (savedAnswer) {
        setAnswer(savedAnswer);
        setIsSaved(true);
      }
    }
  }, [dayNumber]);

  const handleSave = () => {
    if (answer.trim()) {
      saveAnswer(dayNumber, answer.trim());
      setIsSaved(true);
    }
  };

  const handleNext = () => {
    if (dayNumber < 7) {
      router.push(`/day/${dayNumber + 1}`);
    } else {
      router.push('/summary');
    }
  };

  if (!challenge) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Day {dayNumber} - キャリア習慣チャレンジ</title>
        <meta name="description" content={`Day ${dayNumber}: ${challenge.title}`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            {/* ヘッダー */}
            <div className="flex items-center justify-between mb-8">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  ← ホームに戻る
                </Button>
              </Link>
              <div className="text-sm text-gray-500">
                Day {dayNumber} / 7
              </div>
            </div>

            {/* メインカード */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Day {dayNumber}
                </CardTitle>
                <CardDescription className="text-center text-base">
                  {challenge.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {challenge.title}
                  </h3>
                </div>

                {/* 回答エリア */}
                {challenge.type === 'yesno' ? (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">選択してください：</p>
                    <div className="flex gap-4">
                      <Button
                        variant={answer === 'YES' ? 'default' : 'outline'}
                        onClick={() => setAnswer('YES')}
                        className="flex-1"
                      >
                        ✅ YES
                      </Button>
                      <Button
                        variant={answer === 'NO' ? 'default' : 'outline'}
                        onClick={() => setAnswer('NO')}
                        className="flex-1"
                      >
                        ❌ NO
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">あなたの回答：</p>
                    <Textarea
                      placeholder="ここに回答を入力してください..."
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      className="min-h-[120px]"
                    />
                  </div>
                )}

                {/* 保存済み表示 */}
                {isSaved && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✅</span>
                      <span className="text-green-800 text-sm">回答が保存されました</span>
                    </div>
                  </div>
                )}

                {/* アクションボタン */}
                <div className="flex gap-4">
                  <Button
                    onClick={handleSave}
                    disabled={!answer.trim()}
                    className="flex-1"
                  >
                    💾 保存
                  </Button>
                  {isSaved && (
                    <Button
                      onClick={handleNext}
                      className="flex-1"
                    >
                      {dayNumber < 7 ? '次へ →' : '振り返りへ →'}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* ナビゲーション */}
            <div className="flex justify-between">
              {dayNumber > 1 && (
                <Link href={`/day/${dayNumber - 1}`}>
                  <Button variant="outline">
                    ← Day {dayNumber - 1}
                  </Button>
                </Link>
              )}
              {dayNumber < 7 && (
                <Link href={`/day/${dayNumber + 1}`}>
                  <Button variant="outline">
                    Day {dayNumber + 1} →
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 