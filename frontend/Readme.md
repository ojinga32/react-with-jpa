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

```js
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
