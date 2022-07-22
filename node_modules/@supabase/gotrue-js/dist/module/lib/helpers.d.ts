import { SupportedStorage } from './types';
export declare function expiresAt(expiresIn: number): number;
export declare function uuid(): string;
export declare const isBrowser: () => boolean;
export declare function getParameterByName(name: string, url?: string): string | null;
declare type Fetch = typeof fetch;
export declare const resolveFetch: (customFetch?: typeof fetch | undefined) => Fetch;
export declare const setItemAsync: (storage: SupportedStorage, key: string, data: any) => Promise<void>;
export declare const getItemAsync: (storage: SupportedStorage, key: string) => Promise<any | null>;
export declare const getItemSynchronously: (storage: SupportedStorage, key: string) => any | null;
export declare const removeItemAsync: (storage: SupportedStorage, key: string) => Promise<void>;
export {};
//# sourceMappingURL=helpers.d.ts.map