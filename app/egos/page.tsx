// app/egos/page.tsx
import Link from 'next/link';

export default function EgosPage() {
    const prisoners = [
        { urlName: "YiSang", koreanName: "이상" },
        { urlName: "Faust", koreanName: "파우스트" },
        { urlName: "DonQuixote", koreanName: "돈키호테" },
        { urlName: "RyoShu", koreanName: "료슈" },
        { urlName: "Meursault", koreanName: "뫼르소" },
        { urlName: "HongRu", koreanName: "홍루" },
        { urlName: "Heathcliff", koreanName: "히스클리프" },
        { urlName: "Ishmael", koreanName: "이스마엘" },
        { urlName: "Rodion", koreanName: "로쟈" },
        { urlName: "Sinclair", koreanName: "싱클레어" },
        { urlName: "Outis", koreanName: "오티스" },
        { urlName: "Gregor", koreanName: "그레고르" }
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">인격정보</h1>
            <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                <tr>
                    <th className="border px-4 py-2">수감자 이름</th>
                    <th className="border px-4 py-2">이미지</th>
                </tr>
                </thead>
                <tbody>
                {prisoners.map(({ urlName, koreanName }) => (
                    <tr key={urlName}>
                        <td className="border px-4 py-2">
                            <Link href={`/egos/${urlName}`} className="text-blue-500 hover:underline">
                                {koreanName}
                            </Link>
                        </td>
                        <td className="border px-4 py-2">
                            <img
                                src={`/images/${urlName}.jpg`}
                                alt={`${urlName} 이미지`}
                                className="w-16 h-16 object-cover rounded-full"
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
