/**
 * Stock Manager API
 * Stock Manager API reference for developers
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@oferto.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ProductRes } from './productRes';


/**
 * Class representing a stock tracked by the application.
 */
export interface StockRes { 
    expirationDate?: string;
    /**
     * Unique identifier of the entity. No two entities can have the same id.
     */
    id: number;
    lot?: string;
    persisted?: boolean;
    product: ProductRes;
    quantity?: number;
    serialNumber?: string;
    status: StockRes.StatusEnum;
}
export namespace StockRes {
    export type StatusEnum = 'RESERVED' | 'STORED';
    export const StatusEnum = {
        Reserved: 'RESERVED' as StatusEnum,
        Stored: 'STORED' as StatusEnum
    };
}

