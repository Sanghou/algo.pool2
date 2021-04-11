# Algo-Pool2 Front

Algo.Pool2의 프론트엔드 프로젝트 입니다.  
Algo-Pool2는 알고리즘 문제 풀이 방법을 자유롭게 공유하며 서로 성장하기 위한 플랫폼입니다.

Table of Contents

- [Get Started](#get-started)
- [Project Directory](#project-directory)
- [Development](#development)

## Get Started

```bash
$ cd algo.pool2/front
$ yarn
$ yarn start
```

## Project Directory

```bash
├── README.md                      - 리드미 파일
│
├── src/                           - 소스 폴더
│   ├── components/                - 컴포넌트 폴더
│   │   ├── dashboard/             - 캠페인 대시보드 페이지에 대한 컴포넌트
│   │   ├── detail/                - 캠페인 디테일 페이지에 대한 컴포넌트
│   │   ├── form/                  - 캠페인 생성 폼 컴포넌트
│   │   |    ├── atoms/            - 원자 단위 공통 컴포넌트
│   │   |    ├── campaigntypes/    - 캠페인 유형(page, banner, etc.) 별 컴포넌트
│   │   |    ├── modules/          - 캠페인 생성 폼에 대한 모듈
│   │   |    └── templatetypes/    - 캠페인 입력 폼 컴포넌트
│   │   |
│   │   └── navigation/            - Gnb, LnB 등 네비게이션 컴포넌트 폴더
│   │
│   ├── assets/                    - logo, image 등의 assets 폴더
│   │
│   ├── constant/                  - 테마 색깔, ... 등의 constant 폴더
│   │
│   ├── pages/                     - 페이지 폴더
│   │   ├── post/                  - 글쓰기 페이지
│   │   └── dashboard              - 대시보드 페이지
│   │
│   ├── stores/                    - 스토어 정의 폴더
│   │
│   ├── utils/                     - 유틸 폴더
│   │
│   └── App.js                     - 메인 앱 파일
│
├── docs/                          - 프로젝트 가이드 문서
├── public/                        - index.html 폴더
├── .eslistrc.json                 - esLint 설정 파일
├── .prettierrc.json               - prettier 설정 파일
└──  package.json                  - npm 설정
```

## Development

Table of Contents

- [기술 스택](#기술-스택)
- [코드 컨벤션](#코드-컨벤션)
- [브랜치 및 커밋 정책 (AF1-1)](#브랜치-및-커밋-정책)
- [스토어 구성](#스토어-구성)

### 기술 스택

- [React](https://github.com/facebook/react/)
- [Ant Design](https://github.com/ant-design/ant-design) : React UI 컴포넌트 라이브러리
- [MobX](https://github.com/mobxjs/mobx) : 상태 관리 라이브러리
- [React Router](https://github.com/ReactTraining/react-router) : 라우팅 라이브러리

### 코드 컨벤션

- [Airbnb의 Style Guide](https://github.com/airbnb/javascript/tree/master/react)을 따릅니다.

- VS Code Extension 설치

> ESLint 및 Prettier 설치  
> VS Code 설정에서 "Format On Save" 체크

### 브랜치 및 커밋 정책

master의 최신 커밋에서 브랜치를 생성한 후 작업을 수행하고 커밋하여 머지 리퀘스트를 등록합니다.

브랜치명: `개발자이름이니셜(또는 닉네임)/커밋타입이니셜/간단한키워드` ex) ksh/f/login

| Commit Type | Description                                      |
| ----------- | ------------------------------------------------ |
| feat        | 새로운 기능 추가                                 |
| bugfix      | 버그 수정                                        |
| docs        | 문서 수정                                        |
| style       | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는경우 |
| refactor    | 코드 리펙토링                                    |
| test        | 테스트 코드, 리펙토링 테스트 코드 추가           |
| chore       | 빌드 업무 수정, 패키지 매니저 수정               |

머지 리퀘스트 양식: `커밋 타입, 커밋 제목, 커밋 내용`을 담습니다.  
 제목에는 모두가 이해할 수 있는 내용으로 작성하며, 내용에는 해당 커밋에 대한 자세한 설명을 작성합니다.

```
[Commit Type 명] [Title]
[DESC]

ex) [feat] SNS 링크 공유 템플릿 구현
 페이스북, 인스타그램, 트위터, 카카오에 대한 단색/원형 타입 아이콘 추가 및 템플릿에 들어갈 props 정의
```

머지 리퀘스트 등록 시에는 머지 리퀘스트 내용과 더불어 `Label`을 설정하고  
 Merge Request 에 성공한 Source Branch 를 삭제하는 `Merge Option`을 선택하여, 머지 시 사용된 브랜치가 제거될 수 있도록 합니다.

### 스토어 구성

`need to update`

1. RootStore: 모든 스토어들의 인스턴스를 가집니다. 각 스토어는 RootStore를 거쳐 다른 스토어에 접근할 수 있습니다.
2. CampaignStore: 대시보드 페이지에 필요한 State와 Logic을 담고 있는 스토어입니다.
3. FormStore: 폼 페이지에 필요한 State와 Logic을 담고 있는 스토어입니다.
4. RouterStore: react-router의 Location state 관리를 위한 스토어입니다. 자세한 사항은 [mobx-react-router](https://github.com/alisd23/mobx-react-router)을 참고합니다.
