import type { PageCopyright } from '../types';
import { UsersEnCopy } from './en';
import { UsersJaCopy } from './ja';

export type UsersCopyrightShape = typeof UsersEnCopy;

export const UsersCopyright: PageCopyright<UsersCopyrightShape> = {
    en: UsersEnCopy,
    ja: UsersJaCopy,
};
