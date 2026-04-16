import { Pixel } from "./PixelInterface";
import { LoginDto } from "./UserInterface";

export interface IRoom {
    id: string,
    name: string,
    players: LoginDto[],
    pixels: Pixel[]
}

export interface MinimalizedRoom {
    id: string,
    name: string,
    quantityOfPlayers: number,
}

export interface GetAllRoomsResponse {
    rooms?: MinimalizedRoom[]
}
// 1
export interface WebSocketMessage<T> {
    Type: MessageType,
    Data: T
}

export enum MessageType {
    Message,
    PlayerAction,
    FirstConnection
}
// 2
export type CanvasAction =
    | {type: "FULL_LOAD"; payload: Pixel[]}
    | {type: "SINGLE_LOAD"; payload: Pixel}