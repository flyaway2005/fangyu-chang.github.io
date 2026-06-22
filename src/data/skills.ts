import { site } from './site';

export const skillGroups = site.skills;

export const allSkills = site.skills.flatMap((group) => group.items);

const skillOrder = new Map(allSkills.map((skill, index) => [skill.toLowerCase(), index]));

/** Sort tech stack labels to match homepage skill group order; unknown labels go last. */
export function sortBySkillOrder(items: string[]): string[] {
  return [...items].sort((a, b) => {
    const aIndex = skillOrder.get(a.toLowerCase()) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = skillOrder.get(b.toLowerCase()) ?? Number.MAX_SAFE_INTEGER;
    if (aIndex !== bIndex) return aIndex - bIndex;
    return a.localeCompare(b);
  });
}
