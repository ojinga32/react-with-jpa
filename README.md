# ⚡ Vite + React + TypeScript + Tailwind CSS

## 🧩 개요 (Overview)
**Vite + React + TypeScript + Tailwind CSS** 조합은  
빠른 빌드 속도 ⚡, 타입 안정성 🔒, 유연한 UI 설계 🎨 를 모두 갖춘  
현대적인 프론트엔드 개발 환경입니다.

- **Vite** → 초고속 개발 서버 및 번들러  
- **React** → 컴포넌트 기반 UI 라이브러리  
- **TypeScript** → 타입 안정성 및 코드 유지보수성 향상  
- **Tailwind CSS** → 유틸리티 기반 CSS 프레임워크로 빠른 스타일링 가능  

---

## ⚙️ Tailwind CSS 설정 (Configuration)

`tailwind.config.cjs` 또는 `tailwind.config.js` 파일에 아래 내용을 추가합니다 👇

```
js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

그 다음, src/index.css 파일을 열고 아래처럼 변경합니다 👇

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

💡 주요 특징 (Key Features)

⚡ Vite → 즉각적인 HMR(Hot Module Replacement)

🧱 React → 컴포넌트 기반 아키텍처

🔒 TypeScript → 정적 타입 검사를 통한 안정성 향상

🎨 Tailwind CSS → CSS 클래스만으로 빠르고 일관된 스타일링

📦 Rollup 기반 빌드 → 최적화된 프로덕션 번들 제공

## 📚 참고 문서 (Documentation)

- [Vite 공식문서](https://vitejs.dev/)
- [React 공식문서](https://react.dev/)
- [TypeScript 공식문서](https://www.typescriptlang.org/)
- [Tailwind CSS 공식문서](https://tailwindcss.com/)

---

🧠 요약

Vite + React + TypeScript + Tailwind CSS 조합은
빠른 개발 속도 ⚡, 강력한 타입 시스템 🔒,
효율적인 컴포넌트 구조 🧱, 감각적인 디자인 🎨
을 모두 만족시키는 최신 프론트엔드 개발 표준입니다.


---
