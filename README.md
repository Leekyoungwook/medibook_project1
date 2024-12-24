# Medibook Project
<div align="center" margin="20px 0">
  <br/><br/>
    <img alt="image" src="https://github.com/hyeonji423/project_front/blob/main/src/assets/medi_logo.png?raw=true">
  <br/><br/>
</div>


# Medibook Web Page v1.0
> **코드랩 아카데미 AICC 4기 2팀** <br/> **개발기간: 2024. 11. 20 ~ 2024. 12. 19**<br/>
## 배포 주소
> **프론트 서버** : [https://project-front-eight.vercel.app](https://project-front-eight.vercel.app)<br>
> **백엔드 서버** : [https://back.aicc4hyeonji.site](https://back.aicc4hyeonji.site)<br>
> **데이터베이스** : [https://107.21.20.220](https://107.21.20.220)<br>


## 웹개발팀 소개
> **김용주**, **유인규**, **이경욱**, **이영선**, **황현지**


## 프로젝트 소개
저희는 약물의 효능, 성분, 부작용을 잘 파악하여 안전한 셀프 메디케이션을 할 수 있도록 돕는 가정용 약물 정보 및 관리 사이트 **메디북**을 개발하였습니다.


## 시작 가이드
### Requirements
For building and running the application you need:
- [Node.js v20.18.0](https://nodejs.org/ko/download/package-manager)
- [Npm 10.8.2](https://www.npmjs.com/package/npm/v/9.2.0)
- [Python 3.12.7](https://www.python.org/downloads/windows/)
### Installation
> **Frontend**
``` Frontend
$ git clone https://github.com/hyeonji423/project_front.git
$ cd project_front
```
```
$ npm install
$ npm start
```
> **Backend**
``` backend
$ git clone https://github.com/hyeonji423/team2backprod.git
$ cd team2backprod
```
```
$ npm install
$ npm run start
```

---
## Stacks💊
### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Cursor](https://img.shields.io/badge/Cursor-000000?style=for-the-badge&logo=Cursor&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white)
![pip](https://img.shields.io/badge/pip-3776AB?style=for-the-badge&logo=pip&logoColor=white)

### Development
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### Communication
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
![GoogleDrive](https://img.shields.io/badge/GoogleDrive-4285F4?style=for-the-badge&logo=GoogleDrive&logoColor=white)


---
## 화면 구성 :tv:
| 메인 페이지  |  소개 페이지   |
| :-------------------------------------------: | :------------: |
|  <img width="329" src="https://user-images.githubusercontent.com/50205887/208036155-a57900f7-c68a-470d-923c-ff3c296ea635.png"/> |  <img width="329" src="https://user-images.githubusercontent.com/50205887/208036645-a76cf400-85bc-4fa2-af72-86d2abf61366.png"/>|
| 강좌 소개 페이지   |  강의 영상 페이지   |
| <img width="329" src="https://user-images.githubusercontent.com/50205887/208038737-2b32b7d2-25f4-4949-baf5-83b5c02915a3.png"/>   |  <img width="329" src="https://user-images.githubusercontent.com/50205887/208038965-43a6318a-7b05-44bb-97c8-b08b0495fba7.png"/>     |
---
## 주요 기능 📦
### ⭐ 강좌 선택 및 강의 영상 시청 기능
- Scratch, Python 2개 강좌 및 각 강좌마다 10개 가량의 강의 영상 제공
- 추후 지속적으로 강좌 추가 및 업로드 예정
### ⭐ 강의 관련 및 단체에 대한 자유로운 댓글 작성 가능
- Disqus를 이용하여 강의 관련 질문이나 단체에 대한 질문 작성 가능
### ⭐ 이어 학습하기 기능
- Cookie 기능을 이용하여 이전에 학습했던 내용 이후부터 바로 학습 가능
---
## 아키텍쳐
### 디렉토리 구조
```bash
├── Medibook
│
├── back : 백엔드
│   │
│   ├── database : 데이터베이스 관련 정보 폴더
│   │   ├── database.js : 기본 개발 환경(NODE_ENV = development)에서 database 설정 파일
│   │   └─── db.sql
│   │
│   ├── controllers : [table 이름]Ctrl.js : controller 커스텀 파일
│   │   ├── postAuthCtrl.js : 회원가입/로그인
│   │   ├── updateAuthCtrl.js : 비밀번호 변경
│   │   ├── deleteAuthCtrl.js : 회원탈퇴
│   │   │
│   │   ├── postMyMediCtrl.js : 약품 등록
│   │   ├── getMyMediCtrl.js : 약품 목록
│   │   ├── updateMyMediCtrl.js : 약품 수정
│   │   ├── deleteMyMediCtrl.js : 약품 삭제
│   │   │
│   │   ├── getMediInfoCtrl.js : 일반의약품 정보/검색
│   │   │
│   │   └── emailCtril.js : 이메일 인증/알림/건의사항 수신
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── myPageRoutes.js
│   │   ├── searchRoutes.js
│   │   └── emailRoutes.js
│   │
│   ├── vector_cache
│   │   ├── index.faiss
│   │   └── index.pkl
│   ├── data.json
│   ├── chat1.py
│   │
│   ├── index.js
│   │
│   ├── requirement.txt
│   │
│   ├── package.json
│   │
│   └── .env : 환경변수 파일(데이터베이스, 이메일, 오픈API 관련 정보)
│
│
│
└── front : 프론트엔드
    │
    ├── README.md
    │
    ├── public
    │   ├── mediImage
    │   │   └── 일반의약품.jpg
    │   ├── favicon.ico
    │   └── index.html
    │
    ├── src
    │   ├── assets
    │   │   ├── medi_logo.png
    │   │   └── 일반의약품.jpg
    │   │
    │   ├── chatbot
    │   │   └── 
    │   │
    │   ├── components
    │   │   └── 
    │   │
    │   ├── constants
    │   │   └── 
    │   │
    │   ├── redux
    │   │   └── 
    │   │
    │   ├── utils
    │   │   └── 
    │   │
    │   ├── App.js
    │   ├── index.js
    │   ├── index.css
    │   └── setupProxy.js
    │
    ├── tailwind.config.js
    │
    ├── vercel.json
    │
    └── package.json


    ├── config/
    │   └── next.config.js
    │
    ├── lib/
    │   └── ga/
    │   │   └── index.js
    │   └── context.js
    │
    ├── pages/
    │   ├── courses/
    │   │   └── [id].js : 강의 페이지
    │   ├── _app.js : Next.js에서 전체 컴포넌트 구조를 결정, 공통 컴포넌트(navbar, footer)가 선언되도록 customizing 됨.
    │   ├── _document.js : Next.js에서 전체 html 문서의 구조를 결정, lang 속성과 meta tag가 customizing 됨.
    │   ├── about.js : 단체 소개 페이지
    │   ├── index.js : 메인 페이지
    │   ├── question.js : Q&A 페이지
    │   └── setting.js : 쿠키, 구글 애널리틱스 정보 수집 정책 페이지
    │
    ├── public/
    │   ├── favicon.ico : 네비게이션바 이미지
    │   └── logo_about.png : about 페이지 로고 이미지
    │
    └── styles/
        └── Home.module.css
```
-->
