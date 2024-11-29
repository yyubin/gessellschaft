export default function Header() {
    return (
        <header className="bg-black text-white p-4 flex items-center justify-between">
            {/* 로고 이미지 (크기 조정) */}
            <a href="/" className="flex items-center">
                <img
                    src="/components/header/gessellschaft-logo-removebg.png"
                    alt="게젤샤프트 로고"
                    className="h-16 w-auto" // 높이를 16 단위로, 가로는 비율에 따라 자동
                />
            </a>

            {/* 네비게이션 메뉴 */}
            <nav className="flex space-x-8 text-xl">
                <a href="/" className="hover:underline">
                    Home
                </a>
                <div className="relative group">
                    {/* 1차 메뉴 - 캐릭터 */}
                    <a href="/charater" className="hover:underline">
                        캐릭터
                    </a>
                    {/* 2차 메뉴 */}
                    <div className="absolute left-0 mt-2 hidden group-hover:block rounded-md shadow-lg min-w-[100px]"
                         style={{backgroundColor: '#700204'}}>
                        <a
                            href="/charater/personas"
                            className="block px-4 py-2 hover:bg-gray-600"
                        >
                            인격
                        </a>
                        <a
                            href="/charater/egos"
                            className="block px-4 py-2 hover:bg-gray-600"
                        >
                            에고
                        </a>
                    </div>
                </div>
                <a href="/personas" className="hover:underline">
                    덱메이커
                </a>
                <a href="/egos" className="hover:underline">
                    거울던전
                </a>
            </nav>
        </header>
    );
}
