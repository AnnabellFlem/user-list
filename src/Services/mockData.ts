import configGame from './configGame.json'
import mockConfigGame from './mockConfigGame.json'
import { ConfigType, MoneyListType, QuestionListType } from '../Types'

const configGameObj: ConfigType = configGame

const mockConfigGameObj: ConfigType = mockConfigGame

const isValidData = (
  moneyArr: MoneyListType,
  questionsArr: QuestionListType,
) => {
  return moneyArr.length === questionsArr.length
}

const getMoney = () => {
  return isValidData(configGameObj.money, configGameObj.questions)
    ? configGameObj.money
    : mockConfigGameObj.money
}

const getQuestions = () => {
  return isValidData(configGameObj.money, configGameObj.questions)
    ? configGameObj.questions
    : mockConfigGameObj.questions
}

export const questionArray = getQuestions()

export const moneyArray = getMoney()
