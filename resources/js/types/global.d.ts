import type { Auth } from '@/types/auth';
import type { Flash, Site } from '@/types/site';

declare module '@inertiajs/core' {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string;
            auth: Auth;
            flash: Flash;
            site: Site;
            [key: string]: unknown;
        };
    }
}