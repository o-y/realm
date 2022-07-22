"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionsClient = void 0;
const helper_1 = require("./helper");
class FunctionsClient {
    constructor(url, { headers = {}, customFetch, } = {}) {
        this.url = url;
        this.headers = headers;
        this.fetch = (0, helper_1.resolveFetch)(customFetch);
    }
    /**
     * Updates the authorization header
     * @params token - the new jwt token sent in the authorisation header
     */
    setAuth(token) {
        this.headers.Authorization = `Bearer ${token}`;
    }
    /**
     * Invokes a function
     * @param functionName - the name of the function to invoke
     * @param invokeOptions - object with the following properties
     * `headers`: object representing the headers to send with the request
     * `body`: the body of the request
     * `responseType`: how the response should be parsed. The default is `json`
     */
    invoke(functionName, invokeOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { headers, body } = invokeOptions !== null && invokeOptions !== void 0 ? invokeOptions : {};
                const response = yield this.fetch(`${this.url}/${functionName}`, {
                    method: 'POST',
                    headers: Object.assign({}, this.headers, headers),
                    body,
                });
                const isRelayError = response.headers.get('x-relay-error');
                if (isRelayError && isRelayError === 'true') {
                    return { data: null, error: new Error(yield response.text()) };
                }
                let data;
                const { responseType } = invokeOptions !== null && invokeOptions !== void 0 ? invokeOptions : {};
                if (!responseType || responseType === 'json') {
                    data = yield response.json();
                }
                else if (responseType === 'arrayBuffer') {
                    data = yield response.arrayBuffer();
                }
                else if (responseType === 'blob') {
                    data = yield response.blob();
                }
                else {
                    data = yield response.text();
                }
                return { data, error: null };
            }
            catch (error) {
                return { data: null, error };
            }
        });
    }
}
exports.FunctionsClient = FunctionsClient;
//# sourceMappingURL=index.js.map