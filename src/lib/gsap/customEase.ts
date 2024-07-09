import { gsap } from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';

gsap.registerPlugin(CustomEase);

export function createCustomEase(name: string, points: string) {
    return CustomEase.create(name, points);
}
