# ngrx-practice

## ボイラープレートの生成

### Store

- `src/app/counter/state` 直下に生成するため `--statePath` オプションを指定する
- カウント処理関連モジュールに登録したいので `--module` オプションを指定する

```bash
$ ng g store counter/counter --statePath state --module counter.module.ts
```
