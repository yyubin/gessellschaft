// app/page.tsx
import Timer from "../app/components/home/Timer";
import YouTubeBackground from "../app/components/home/YouTubeBackground";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold mb-8">다음 거던 초기화 전까지</h1>

            {/* 타이머 컴포넌트 */}
            <Timer />

            <p className="text-lg mt-4">매주 목요일 오전 6시에 초기화 됩니다.</p>

            {/* 유튜브 배경 컴포넌트 */}
            <YouTubeBackground />
        </div>
    );
}
