// app/egos/[name].tsx
'use client';
import { usePathname, useRouter } from 'next/navigation';

type EGOData = {
    [key: string]: {
        koreanName: string;
        description: string;
        egos: {
            [key: string]: string[]; // EGO 항목 (ZAYIN, TETH 등)과 그에 속한 세부 EGO 목록
        };
    };
};

const egoData: EGOData = {
    LeeSang: {
        koreanName: "이상",
        description: "이상에 대한 EGO 목록입니다.",
        egos: {
            ZAYIN: ["오감도", "지난 날"],
            TETH: ["4번째 성냥불", "소망석"],
            HE: ["차원찢개", "흉탄"],
            WAW: ["여우비"]
        }
    },
    Faust: {
        koreanName: "파우스트",
        description: "파우스트에 대한 EGO 목록입니다.",
        egos: {
            ZAYIN: ["미래의 울음소리", "상처의 미로"]
        }
    }
    // 다른 캐릭터들에 대한 EGO 데이터 추가 가능
};

export default function EgoDetailPage() {
    const pathname = usePathname();
    const router = useRouter();
    const name = pathname.split('/').pop();

    if (!name) return <div>Loading...</div>;

    if (egoData[name as string]) {
        const ego = egoData[name as string];

        const navigateToEgoDetail = (egoName: string) => {
            // EGO 세부 페이지로 이동
            const encodedName = encodeURIComponent(egoName);
            router.push(`/egos/${name}/${encodedName}`);
        };

        return (
            <div>
                <h1>{ego.koreanName}의 EGO 정보</h1>
                <p>{ego.description}</p>

                <h2>EGO 목록</h2>

                {/* ZAYIN EGO 목록 */}
                {Object.entries(ego.egos).map(([egoGroup, egos]) => (
                    <div key={egoGroup}>
                        <h3>{egoGroup}</h3>
                        <ul>
                            {egos.map((egoName) => (
                                <li key={egoName}>
                                    <button onClick={() => navigateToEgoDetail(egoName)}>
                                        {egoName}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    }

    return <div>404 - Not Found</div>;
}
