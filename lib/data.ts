export interface ChallengeDay {
  day: number;
  title: string;
  description: string;
  type: 'text' | 'yesno';
}

export const challengeDays: ChallengeDay[] = [
  {
    day: 1,
    title: "今日の仕事でちょっと嬉しかったことを書いてみよう",
    description: "どんな小さなことでもOK！仕事の中で感じた嬉しさを振り返ってみましょう。",
    type: 'text'
  },
  {
    day: 2,
    title: "もし自由に働けるなら、どんな仕事してみたい？",
    description: "制約がないとしたら、どんな仕事に挑戦してみたいですか？",
    type: 'text'
  },
  {
    day: 3,
    title: "誰かの仕事のやり方をマネしてみる",
    description: "今日、誰かの良いやり方を真似してみましたか？",
    type: 'yesno'
  },
  {
    day: 4,
    title: "社外の情報（記事やSNS）で気になったこと",
    description: "今日見た記事やSNSで印象に残った情報はありますか？",
    type: 'text'
  },
  {
    day: 5,
    title: "今日、自分が少し成長したと思えた瞬間",
    description: "どんな小さな成長でも、自分で感じた瞬間を書き留めてみましょう。",
    type: 'text'
  },
  {
    day: 6,
    title: "モヤッとしたことをあえて言葉にしてみよう",
    description: "うまく整理できていないモヤモヤを、あえて言葉にしてみてください。",
    type: 'text'
  },
  {
    day: 7,
    title: "1週間をふりかえって、どんな変化があった？",
    description: "この1週間で感じた変化や気づきを振り返ってみましょう。",
    type: 'text'
  }
];

export const getChallengeDay = (day: number): ChallengeDay | undefined => {
  return challengeDays.find(challenge => challenge.day === day);
};

export const saveAnswer = (day: number, answer: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(`day${day}-answer`, answer);
  }
};

export const getAnswer = (day: number): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(`day${day}-answer`);
  }
  return null;
};

export const getAllAnswers = (): Record<number, string> => {
  const answers: Record<number, string> = {};
  for (let day = 1; day <= 7; day++) {
    const answer = getAnswer(day);
    if (answer) {
      answers[day] = answer;
    }
  }
  return answers;
};

export const getProgress = (): number => {
  const answers = getAllAnswers();
  return Math.round((Object.keys(answers).length / 7) * 100);
};

export const getPersonalityType = (answers: Record<number, string>): string => {
  const positiveWords = ['嬉しい', '楽しい', '成長', '良い', '好き', 'やりたい', 'YES'];
  const negativeWords = ['モヤモヤ', '難しい', 'NO', '嫌い', '疲れた'];
  
  let positiveCount = 0;
  let negativeCount = 0;
  
  Object.values(answers).forEach(answer => {
    const lowerAnswer = answer.toLowerCase();
    positiveWords.forEach(word => {
      if (lowerAnswer.includes(word.toLowerCase())) positiveCount++;
    });
    negativeWords.forEach(word => {
      if (lowerAnswer.includes(word.toLowerCase())) negativeCount++;
    });
  });
  
  if (positiveCount > negativeCount) {
    return "ポジティブ思考タイプ";
  } else if (negativeCount > positiveCount) {
    return "慎重思考タイプ";
  } else {
    return "バランス思考タイプ";
  }
}; 