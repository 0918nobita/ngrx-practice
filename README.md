# ngrx-practice

## ボイラープレートの生成

### Store

- `src/app/counter/state` 直下に生成するため `--statePath` オプションを指定する
- カウント処理関連モジュールに登録したいので `--module` オプションを指定する

```bash
$ ng g store counter/counter --statePath state --module counter.module.ts
```

### Reducer

```bash
$ ng g reducer counter/state/counter --reducers index.ts
```

### Action

`src/app/counter/state` 直下に生成するため `--flat` オプションを指定する

```bash
$ ng g action counter/state/counter --flat
```
