export interface PetCreatePayload {
    type: string;
    name: string;
}
export declare namespace Pets {
    /**
   * No description
   * @name PetCreate
   * @request POST:/pets
   * @response `200` `({
      id: number,
      type: string,
      name: string,
  
  })[]` Successful response
   * @response `default` `{
      message: string,
      code: string,
      issues?: ({
      message: string,
  
  })[],
  
  }`
  */
    namespace PetCreate {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = PetCreatePayload;
        type RequestHeaders = {};
        type ResponseBody = {
            id: number;
            type: string;
            name: string;
        }[];
    }
    /**
   * No description
   * @name PetGetAll
   * @request GET:/pets
   * @response `200` `({
      id: number,
      type: string,
      name: string,
  
  })[]` Successful response
   * @response `default` `{
      message: string,
      code: string,
      issues?: ({
      message: string,
  
  })[],
  
  }`
  */
    namespace PetGetAll {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = {
            id: number;
            type: string;
            name: string;
        }[];
    }
    /**
   * No description
   * @name PetGet
   * @request GET:/pets/{pet_id}
   * @response `200` `{
      id: number,
      type: string,
      name: string,
  
  }` Successful response
   * @response `default` `{
      message: string,
      code: string,
      issues?: ({
      message: string,
  
  })[],
  
  }`
  */
    namespace PetGet {
        type RequestParams = {
            petId: number;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = {
            id: number;
            type: string;
            name: string;
        };
    }
}
export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;
export interface FullRequestParams extends Omit<RequestInit, 'body'> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseFormat;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
    securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
    customFetch?: typeof fetch;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker?;
    private abortControllers;
    private customFetch;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    protected encodeQueryParam(key: string, value: any): string;
    protected addQueryParam(query: QueryParamsType, key: string): string;
    protected addArrayQueryParam(query: QueryParamsType, key: string): any;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams;
    protected createAbortSignal: (cancelToken: CancelToken) => AbortSignal | undefined;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title Pets API
 * @version 0.0.4
 * @baseUrl -
 *
 * Pets API
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    pets: {
        /**
     * No description
     *
     * @name PetCreate
     * @request POST:/pets
     * @response `200` `({
        id: number,
        type: string,
        name: string,
    
    })[]` Successful response
     * @response `default` `{
        message: string,
        code: string,
        issues?: ({
        message: string,
    
    })[],
    
    }`
     */
        petCreate: (data: PetCreatePayload, params?: RequestParams) => Promise<HttpResponse<{
            id: number;
            type: string;
            name: string;
        }[], {
            message: string;
            code: string;
            issues?: {
                message: string;
            }[];
        }>>;
        /**
     * No description
     *
     * @name PetGetAll
     * @request GET:/pets
     * @response `200` `({
        id: number,
        type: string,
        name: string,
    
    })[]` Successful response
     * @response `default` `{
        message: string,
        code: string,
        issues?: ({
        message: string,
    
    })[],
    
    }`
     */
        petGetAll: (params?: RequestParams) => Promise<HttpResponse<{
            id: number;
            type: string;
            name: string;
        }[], {
            message: string;
            code: string;
            issues?: {
                message: string;
            }[];
        }>>;
        /**
     * No description
     *
     * @name PetGet
     * @request GET:/pets/{pet_id}
     * @response `200` `{
        id: number,
        type: string,
        name: string,
    
    }` Successful response
     * @response `default` `{
        message: string,
        code: string,
        issues?: ({
        message: string,
    
    })[],
    
    }`
     */
        petGet: (petId: number, params?: RequestParams) => Promise<HttpResponse<{
            id: number;
            type: string;
            name: string;
        }, {
            message: string;
            code: string;
            issues?: {
                message: string;
            }[];
        }>>;
    };
}
export {};
