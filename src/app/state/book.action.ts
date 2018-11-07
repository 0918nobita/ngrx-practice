/*
  本に関するアクション
  (*) ISBN で本を検索する
    --> ローカル DB で検索する
    --> ローカルDB で見つからなければ Google Books API で検索する
    --> サムネイルが見つからなければ Firestore の resolvedBooks コレクションを確認する
  (*) スキルで本を検索する
  */

export enum BookActionTypes {
  SearchByIsbnAction = '[Book] Search by ISBN',
  SearchByIsbnSuccess = '[Book] Succeed in searching by ISBN',
  SearchByIsbnFailed = '[Book] Fail in searching by ISBN',
  SearchBySkillAction = '[Book] Search by skill',
  SearchBySkillSuccess = '[Book] Succeed in searching by skill',
  SearchBySkillFailed = '[Book] Fail in searching by skill'
}
