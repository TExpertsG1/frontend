import { UserProfile } from './user-profile';

export interface ContactStateProps {
    contacts: UserProfile[];
    error: object | string | null;
}
