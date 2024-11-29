// app/personas/[name].tsx
'use client';
import { usePathname, useRouter } from 'next/navigation';

type PersonaData = {
    [key: string]: {
        koreanName: string;
        age: number;
        personality: string;
        background: string;
        personas: {
            [key: string]: string; // 인격 이름과 인격 등급
        };
    };
};

const personaData: PersonaData = {
    YiSang: { koreanName: "이상", age: 30, personality: "강렬한 의지", background: "과거의 상처를 극복하며 살아가는 인물",
        personas: {
            "LCB 수감자": "1성",
            "남부 세븐 협회 6과": "2성",
            "어금니 사무소 해결사": "2성",
            "피쿼드호 일등 항해사": "2성",
            "남부 디에치 협회 4과": "2성",
            "검계 살수": "3성",
            "개화 EGO::동백": "3성",
            "W사 3등급 정리 요원": "3성",
            "약지 점묘파 스튜던트": "3성",
            "로보토미 EGO::엄숙한 애도": "3성"
        }
        },
    Faust: { koreanName: "파우스트", age: 45, personality: "지혜롭고 깊이 있는 성격", background: "학문에 일생을 바친 인물", personas: {} },
    DonQuixote: { koreanName: "돈키호테", age: 50, personality: "모험적이고 낙천적", background: "광기와 현실 사이에서 갈등하는 인물",
        personas: {
            "LCB 수감자": "1성",
            "남부 시 협회 5과 부장": "2성",
            "N사 중간 망치": "2성",
            "로보토미 E.G.O::초롱": "2성",
            "검계 살수": "2성",
            "W사 3등급 정리 요원": "3성",
            "남부 섕크 협회 5과 부장": "3성",
            "중지 작은 아우": "3성",
            "T사 3등급 징수직 직원": "3성",
            "라만차랜드 실장": "3성"
        } },
    RyoShu: { koreanName: "료슈", age: 35, personality: "냉철하고 침착", background: "자신의 목표를 위해 살아가는 인물", personas: {} },
    Meursault: { koreanName: "뫼르소", age: 28, personality: "차가운 현실주의자", background: "삶에 대한 감정이 부족한 인물", personas: {} },
    HongRu: { koreanName: "홍루", age: 40, personality: "민첩하고 계산적인 성격", background: "자신의 목적을 위해 무엇이든 할 수 있는 인물", personas: {} },
    Heathcliff: { koreanName: "히스클리프", age: 38, personality: "복수심에 불타는 인물", background: "불행한 과거를 딛고 복수에 눈이 먼 인물", personas: {} },
    Ishmael: { koreanName: "이스마엘", age: 32, personality: "호기심 많고 탐험적인 성격", background: "세상의 끝을 찾기 위해 떠나는 인물", personas: {} },
    Rodion: { koreanName: "로쟈", age: 34, personality: "자유롭고 예술적인 성격", background: "고독을 즐기며 자신만의 세상을 살아가는 인물", personas: {} },
    Sinclair: { koreanName: "싱클레어", age: 27, personality: "순수하고 감정적인 성격", background: "세상의 어둠을 받아들이려는 인물", personas: {} },
    Outis: { koreanName: "오티스", age: 50, personality: "합리적이고 신중한 성격", background: "오랫동안 살아온 경험으로 세상을 꿰뚫어 보는 인물", personas: {} },
    Gregor: { koreanName: "그레고르", age: 24, personality: "괴팍하고 고독한 성격", background: "불안정한 삶을 살아가고 있는 인물", personas: {} }
};

export default function PersonaDetailPage() {
    const pathname = usePathname();
    const router = useRouter();
    const name = pathname.split('/').pop();

    if (!name) return <div>Loading...</div>;


    if (personaData[name as string]) {

        const persona = personaData[name as string];

        const rankGroups: Record<string, string[]> = {
            "1성": [],
            "2성": [],
            "3성": []
        };

        // personas 데이터를 rank별로 분류
        Object.entries(persona.personas).forEach(([personaName, rank]) => {
            if (rankGroups[rank]) {
                rankGroups[rank].push(personaName);
            }
        });

        const navigateToPersonaDetail = (personaName: string) => {
            // 인격 상세 페이지로 이동
            const encodedName = encodeURIComponent(personaName);
            router.push(`/personas/${name}/${encodedName}`);
        };

        return (
            <div>
                <h1>{persona.koreanName}의 인격정보</h1>
                <p><strong>나이:</strong> {persona.age}</p>
                <p><strong>성격:</strong> {persona.personality}</p>
                <p><strong>배경:</strong> {persona.background}</p>

                <h2>인격 리스트</h2>

                {/* 1성 테이블 */}
                {rankGroups["1성"].length > 0 && (
                    <table>
                        <thead>
                        <tr>
                            <th>인격 이름</th>
                            <th>등급</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rankGroups["1성"].map((personaName) => (
                            <tr key={personaName}>
                                <td>
                                    <button onClick={() => navigateToPersonaDetail(personaName)}>
                                        {personaName}
                                    </button>
                                </td>
                                <td>1성</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}

                {/* 2성 테이블 */}
                {rankGroups["2성"].length > 0 && (
                    <table>
                        <thead>
                        <tr>
                            <th>인격 이름</th>
                            <th>등급</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rankGroups["2성"].map((personaName) => (
                            <tr key={personaName}>
                                <td>
                                    <button onClick={() => navigateToPersonaDetail(personaName)}>
                                        {personaName}
                                    </button>
                                </td>
                                <td>2성</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}

                {/* 3성 테이블 */}
                {rankGroups["3성"].length > 0 && (
                    <table>
                        <thead>
                        <tr>
                            <th>인격 이름</th>
                            <th>등급</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rankGroups["3성"].map((personaName) => (
                            <tr key={personaName}>
                                <td>
                                    <button onClick={() => navigateToPersonaDetail(personaName)}>
                                        {personaName}
                                    </button>
                                </td>
                                <td>3성</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        );
    }

    return <div>404 - Not Found</div>;
}