export type AnswersType = {
  id: string
  answer: string
  variant: string
  right: boolean
}

export type QuestionType = {
  id: number
  question: string
  answers: Array<AnswersType>
}

export type QuestionListType = Array<QuestionType>

export type MoneyListType = Array<string>

export type ConfigType = {
  questions: Array<QuestionType>
  money: MoneyListType
}
