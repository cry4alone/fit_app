import { useState } from 'react';

export function useUserProgress() {
    const [xp, setXp] = useState(0);
    const [level, setLevel] = useState(1);
    const [achievements, setAchievements] = useState(['Первые шаги — 1000 шагов за день', 'Активность 5 дней подряд']);

    const addXp = (amount: number) => {
        setXp(xp + amount);

        if (xp + amount >= 1000) {
            const newLevel = level + 1;
            setLevel(newLevel);
            setXp(xp + amount - 1000);
            setAchievements([...achievements, `Новый Уровень ${newLevel}`]);
        }
    };
    return {
        addXp,
        xp,
        level,
        achievements,
    };
}
