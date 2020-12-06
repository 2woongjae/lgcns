# lgcns

## 준비하기

- Node.js 버전은 14.15.1 (LTS) 입니다.
- nvm 을 사용하는 경우 아래와 같이 입력해주세요.

```
cd lgcns

nvm install 14.15.1

nvm use
```

- TypeScript Compiler 설치를 위해 아래의 명령어를 실행합니다.

```
npm ci
```

- 프로젝트에서 사용하는 TypeScript 버전은 4.1.2 입니다.
- 아래 명령어로 버전 확인이 가능합니다.

```
npx tsc --version
```

## 문제 풀기

- 5개의 문제가 준비되어 있습니다.
- 각 문제는 한 파일에 작성하여 제출하시면 됩니다.
- 문제는 다음과 같은 경로에 있습니다.

```
lgcns/src/1_type_annotations.ts
lgcns/src/2_interface_class.ts
lgcns/src/3_type_guards.ts
lgcns/src/4_generic_conditional.ts
lgcns/src/5_.ts
```

- 파일 안의 주어진 조건에 따라 작성하세요.
- 로직을 완성하고 컴파일을 문제가 없을 때, 제출하세요.
- 컴파일 명령어는 다음과 같습니다.

```
npm run build
npm run build:watch
```

## 제출

- 5 문제 각각 제출이 가능합니다.
- 5 문제를 모두 압축하여 한꺼번에 제출이 가능합니다.
- 압축은 제출할 문제 파일들만 모아서 압축하여 제출해주세요.

```
ex) 2 번만 제출할 경우, 아래의 2번 파일을 압축해서 압축한 파일을 업로드 합니다.

- lgcns/src/2_interface_class.ts

ex) 모두 제출할 경우, 아래 5개의 파일을 압축해서 압축한 파일을 업로드 합니다.

- lgcns/src/1_type_annotations.ts
- lgcns/src/2_interface_class.ts
- lgcns/src/3_type_guards.ts
- lgcns/src/4_generic_conditional.ts
- lgcns/src/5_.ts
```
