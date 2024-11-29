'use client';
import { usePathname } from 'next/navigation';

type EgoSkill = {
    attackType: string;
    sinAttribute: string;
    skillPower: number;
    coinPower: number;
    attackWeight: number;
};

type EgoDetail = {
    basicInfo: {
        illusionBody: string;
        season: string;
        egoName: string;
        prisoner: string;
        egoRank: string;
        releaseDate: string;
    };
    resistance: {
        anger: string;
        lust: string;
        sloth: string;
        gluttony: string;
        melancholy: string;
        pride: string;
        envy: string;
    };
    awakeningSkills: EgoSkill[];
    erosionSkills: EgoSkill[];
    passiveSkills: string[];
    attackLevel: number;
    mentalConsumption: number;
    cost: {
        sloth: number;
        melancholy: number;
    };
};

const egoDetails: Record<string, EgoDetail> = {
    "오감도": {
        basicInfo: {
            illusionBody: "어느날의초상",
            season: "4",
            egoName: "지난날 수감자",
            prisoner: "이상",
            egoRank: "ZAYIN",
            releaseDate: "2024.04.04"
        },
        resistance: {
            anger: "보통",
            lust: "취약",
            sloth: "보통",
            gluttony: "보통",
            melancholy: "견딤(x0.75)",
            pride: "취약",
            envy: "보통"
        },
        awakeningSkills: [
            {
                attackType: "관통",
                sinAttribute: "우울",
                skillPower: 15,
                coinPower: 8,
                attackWeight: 3
            }
        ],
        erosionSkills: [
            {
                attackType: "타격",
                sinAttribute: "우울",
                skillPower: 22,
                coinPower: -6,
                attackWeight: 3
            }
        ],
        passiveSkills: [
            "대상의 침잠위력이 6 이상이면 합위력 +1",
            "대상의 침잠횟수가 4 이상이면 합위력 +1"
        ],
        attackLevel: 50,
        mentalConsumption: 15,
        cost: {
            sloth: 3,
            melancholy: 3
        }
    },
    // 여기에 다른 EGO의 정보 추가
};

export default function EgoPage() {
    const pathname = usePathname();
    const name = pathname.split('/').pop();

    if (!name || typeof name !== "string") return <div>Loading...</div>;

    const decodedName = decodeURIComponent(name);

    const ego = egoDetails[decodedName];

    if (!ego) return <div>404 - Ego Not Found</div>;

    return (
        <div>
            <h1>{ego.basicInfo.egoName}의 상세 정보</h1>
            <p><strong>환상체:</strong> {ego.basicInfo.illusionBody}</p>
            <p><strong>시즌:</strong> {ego.basicInfo.season}</p>
            <p><strong>EGO 명칭:</strong> {ego.basicInfo.egoName}</p>
            <p><strong>수감자:</strong> {ego.basicInfo.prisoner}</p>
            <p><strong>EGO 등급:</strong> {ego.basicInfo.egoRank}</p>
            <p><strong>출시일:</strong> {ego.basicInfo.releaseDate}</p>

            <h3>내성 정보</h3>
            <table>
                <thead>
                <tr>
                    <th>분노</th>
                    <th>색욕</th>
                    <th>나태</th>
                    <th>탐식</th>
                    <th>우울</th>
                    <th>오만</th>
                    <th>질투</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{ego.resistance.anger}</td>
                    <td>{ego.resistance.lust}</td>
                    <td>{ego.resistance.sloth}</td>
                    <td>{ego.resistance.gluttony}</td>
                    <td>{ego.resistance.melancholy}</td>
                    <td>{ego.resistance.pride}</td>
                    <td>{ego.resistance.envy}</td>
                </tr>
                </tbody>
            </table>

            <h3>각성 스킬</h3>
            <table>
                <thead>
                <tr>
                    <th>공격 유형</th>
                    <th>죄악 속성</th>
                    <th>스킬 위력</th>
                    <th>코인 위력</th>
                    <th>공격 가중치</th>
                </tr>
                </thead>
                <tbody>
                {ego.awakeningSkills.map((skill, index) => (
                    <tr key={index}>
                        <td>{skill.attackType}</td>
                        <td>{skill.sinAttribute}</td>
                        <td>{skill.skillPower}</td>
                        <td>{skill.coinPower}</td>
                        <td>{skill.attackWeight}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h3>침식 스킬</h3>
            <table>
                <thead>
                <tr>
                    <th>공격 유형</th>
                    <th>죄악 속성</th>
                    <th>스킬 위력</th>
                    <th>코인 위력</th>
                    <th>공격 가중치</th>
                </tr>
                </thead>
                <tbody>
                {ego.erosionSkills.map((skill, index) => (
                    <tr key={index}>
                        <td>{skill.attackType}</td>
                        <td>{skill.sinAttribute}</td>
                        <td>{skill.skillPower}</td>
                        <td>{skill.coinPower}</td>
                        <td>{skill.attackWeight}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h3>패시브 스킬</h3>
            <ul>
                {ego.passiveSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>

            <h3>기타 정보</h3>
            <p><strong>공격 레벨:</strong> {ego.attackLevel}</p>
            <p><strong>정신 소모량:</strong> {ego.mentalConsumption}</p>

            <h3>코스트</h3>
            <p><strong>나태:</strong> {ego.cost.sloth}</p>
            <p><strong>우울:</strong> {ego.cost.melancholy}</p>
        </div>
    );
}
