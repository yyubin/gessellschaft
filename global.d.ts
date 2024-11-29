// global.d.ts
declare global {
    interface Window {
        YT: unknown; // YT 객체가 any 타입임을 선언
        onYouTubeIframeAPIReady: () => void; // onYouTubeIframeAPIReady 함수가 존재한다고 선언
    }
}

export {};
