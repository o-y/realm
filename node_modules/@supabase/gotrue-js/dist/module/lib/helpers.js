var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function expiresAt(expiresIn) {
    const timeNow = Math.round(Date.now() / 1000);
    return timeNow + expiresIn;
}
export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
export const isBrowser = () => typeof window !== 'undefined';
export function getParameterByName(name, url) {
    var _a;
    if (!url)
        url = ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.href) || '';
    // eslint-disable-next-line no-useless-escape
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&#]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
export const resolveFetch = (customFetch) => {
    let _fetch;
    if (customFetch) {
        _fetch = customFetch;
    }
    else if (typeof fetch === 'undefined') {
        _fetch = (...args) => __awaiter(void 0, void 0, void 0, function* () { return yield (yield import('cross-fetch')).fetch(...args); });
    }
    else {
        _fetch = fetch;
    }
    return (...args) => _fetch(...args);
};
// LocalStorage helpers
export const setItemAsync = (storage, key, data) => __awaiter(void 0, void 0, void 0, function* () {
    isBrowser() && (yield (storage === null || storage === void 0 ? void 0 : storage.setItem(key, JSON.stringify(data))));
});
export const getItemAsync = (storage, key) => __awaiter(void 0, void 0, void 0, function* () {
    const value = isBrowser() && (yield (storage === null || storage === void 0 ? void 0 : storage.getItem(key)));
    if (!value)
        return null;
    try {
        return JSON.parse(value);
    }
    catch (_a) {
        return value;
    }
});
export const getItemSynchronously = (storage, key) => {
    const value = isBrowser() && (storage === null || storage === void 0 ? void 0 : storage.getItem(key));
    if (!value || typeof value !== 'string') {
        return null;
    }
    try {
        return JSON.parse(value);
    }
    catch (_a) {
        return value;
    }
};
export const removeItemAsync = (storage, key) => __awaiter(void 0, void 0, void 0, function* () {
    isBrowser() && (yield (storage === null || storage === void 0 ? void 0 : storage.removeItem(key)));
});
//# sourceMappingURL=helpers.js.map