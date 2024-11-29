'use client';
import { usePathname } from 'next/navigation';

type Skill = {
    name: string;
    coinCount: number;
    attackType: string;
    sinAttribute: string;
    skillQuantity: number;
    skillPower: number;
    coinPower: number;
    attackWeight: number;
};

type PersonaDetail = {
    basicInfo: {
        name: string;
        season: string;
        personaRank: string;
        releaseDate: string;
        traits: string[];
    };
    status: {
        health: number;
        speed: string;
        defense: number;
        defenseBonus: number;
    };
    resistance: {
        slash: string;
        pierce: string;
        strike: string;
    };
    skills: Skill[];
};

const personaDetails: Record<string, PersonaDetail> = {
    "남부 세븐 협회 6과": {
        basicInfo: {
            name: "이상",
            season: "통상",
            personaRank: "2성",
            releaseDate: "2023.02.27",
            traits: ["해결사", "세븐협회"]
        },
        status: {
            health: 223,
            speed: "5-8",
            defense: 52,
            defenseBonus: 2
        },
        resistance: {
            slash: "보통",
            pierce: "내성",
            strike: "취약"
        },
        skills: [
            {
                name: "플래시",
                coinCount: 1,
                attackType: "관통",
                sinAttribute: "우울",
                skillQuantity: 3,
                skillPower: 5,
                coinPower: 7,
                attackWeight: 1
            },
            {
                name: "스킬2",
                coinCount: 2,
                attackType: "타격",
                sinAttribute: "분노",
                skillQuantity: 4,
                skillPower: 6,
                coinPower: 8,
                attackWeight: 1.2
            }
        ]
    },
    // 여기에 다른 인격들의 상세 정보 추가
};

export default function PersonaPage() {
    const pathname = usePathname();
    const name = pathname.split('/').pop();


    if (!name || typeof name !== "string") return <div>Loading...</div>;

    const decodedName = decodeURIComponent(name);

    const persona = personaDetails[decodedName];

    if (!persona) return <div>404 - Persona Not Found</div>;

    return (
        <div>
            <h1>{persona.basicInfo.name}의 상세 정보</h1>
            <p><strong>시즌:</strong> {persona.basicInfo.season}</p>
            <p><strong>등급:</strong> {persona.basicInfo.personaRank}</p>
            <p><strong>배포일:</strong> {persona.basicInfo.releaseDate}</p>
            <p><strong>특성:</strong> {persona.basicInfo.traits.join(", ")}</p>

            <h3>상태</h3>
            <p><strong>체력:</strong> {persona.status.health}</p>
            <p><strong>속도:</strong> {persona.status.speed}</p>
            <p><strong>방어력:</strong> {persona.status.defense}</p>
            <p><strong>방어력 보너스:</strong> {persona.status.defenseBonus}</p>

            <h3>저항력</h3>
            <p><strong>베기:</strong> {persona.resistance.slash}</p>
            <p><strong>찌르기:</strong> {persona.resistance.pierce}</p>
            <p><strong>타격:</strong> {persona.resistance.strike}</p>

            <h3>스킬</h3>
            <ul>
                {persona.skills.map((skill, index) => (
                    <li key={index}>
                        <strong>{skill.name}</strong><br />
                        <p><strong>동전 개수:</strong> {skill.coinCount}</p>
                        <p><strong>공격 유형:</strong> {skill.attackType}</p>
                        <p><strong>죄악 속성:</strong> {skill.sinAttribute}</p>
                        <p><strong>스킬 양:</strong> {skill.skillQuantity}</p>
                        <p><strong>스킬 파워:</strong> {skill.skillPower}</p>
                        <p><strong>동전 파워:</strong> {skill.coinPower}</p>
                        <p><strong>공격 가중치:</strong> {skill.attackWeight}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
