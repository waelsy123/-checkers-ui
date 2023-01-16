import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing"
import {
    MsgCreateGame,
    MsgCreateGameResponse,
    MsgPlayMove,
    MsgPlayMoveResponse,
    MsgRejectGame,
    MsgRejectGameResponse,
} from "../generated/checkers/tx"

export const typeUrlMsgCreateGame = "/waelsy123.checkers.checkers.MsgCreateGame"
export const typeUrlMsgCreateGameResponse = "/waelsy123.checkers.checkers.MsgCreateGameResponse"
export const typeUrlMsgPlayMove = "/waelsy123.checkers.checkers.MsgPlayMove"
export const typeUrlMsgPlayMoveResponse = "/waelsy123.checkers.checkers.MsgPlayMoveResponse"
export const typeUrlMsgRejectGame = "/waelsy123.checkers.checkers.MsgRejectGame"
export const typeUrlMsgRejectGameResponse = "/waelsy123.checkers.checkers.MsgRejectGameResponse"

export const checkersTypes: ReadonlyArray<[string, GeneratedType]> = [
    [typeUrlMsgCreateGame, MsgCreateGame],
    [typeUrlMsgCreateGameResponse, MsgCreateGameResponse],
    [typeUrlMsgPlayMove, MsgPlayMove],
    [typeUrlMsgPlayMoveResponse, MsgPlayMoveResponse],
    [typeUrlMsgRejectGame, MsgRejectGame],
    [typeUrlMsgRejectGameResponse, MsgRejectGameResponse],
]

export interface MsgCreateGameEncodeObject extends EncodeObject {
    readonly typeUrl: "/waelsy123.checkers.checkers.MsgCreateGame"
    readonly value: Partial<MsgCreateGame>
}

export function isMsgCreateGameEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgCreateGameEncodeObject {
    return (encodeObject as MsgCreateGameEncodeObject).typeUrl === typeUrlMsgCreateGame
}

export interface MsgCreateGameResponseEncodeObject extends EncodeObject {
    readonly typeUrl: "/waelsy123.checkers.checkers.MsgCreateGameResponse"
    readonly value: Partial<MsgCreateGameResponse>
}

export function isMsgCreateGameResponseEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgCreateGameResponseEncodeObject {
    return (encodeObject as MsgCreateGameResponseEncodeObject).typeUrl === typeUrlMsgCreateGameResponse
}

export interface MsgPlayMoveEncodeObject extends EncodeObject {
    readonly typeUrl: "/waelsy123.checkers.checkers.MsgPlayMove"
    readonly value: Partial<MsgPlayMove>
}

export function isMsgPlayMoveEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgPlayMoveEncodeObject {
    return (encodeObject as MsgPlayMoveEncodeObject).typeUrl === typeUrlMsgPlayMove
}

export interface MsgPlayMoveResponseEncodeObject extends EncodeObject {
    readonly typeUrl: "/waelsy123.checkers.checkers.MsgPlayMoveResponse"
    readonly value: Partial<MsgPlayMoveResponse>
}

export function isMsgPlayMoveResponseEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgPlayMoveResponseEncodeObject {
    return (encodeObject as MsgPlayMoveResponseEncodeObject).typeUrl === typeUrlMsgPlayMoveResponse
}

export interface MsgRejectGameEncodeObject extends EncodeObject {
    readonly typeUrl: "/waelsy123.checkers.checkers.MsgRejectGame"
    readonly value: Partial<MsgRejectGame>
}

export function isMsgRejectGameEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgRejectGameEncodeObject {
    return (encodeObject as MsgRejectGameEncodeObject).typeUrl === typeUrlMsgRejectGame
}

export interface MsgRejectGameResponseEncodeObject extends EncodeObject {
    readonly typeUrl: "/waelsy123.checkers.checkers.MsgRejectGameResponse"
    readonly value: Partial<MsgRejectGameResponse>
}

export function isMsgRejectGameResponseEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgRejectGameResponseEncodeObject {
    return (encodeObject as MsgRejectGameResponseEncodeObject).typeUrl === typeUrlMsgRejectGameResponse
}