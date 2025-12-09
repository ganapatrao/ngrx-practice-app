export interface Attempt {
  _id?: string;
  fileType: 'audio' | 'video' | 'screen';
  fileUrl: string;
  date: Date;
}

export interface Question {
  _id: string;
  category: string;
  topic: string;
  questionText: string;
  answerText: string;
  attempts: Attempt[];
}
