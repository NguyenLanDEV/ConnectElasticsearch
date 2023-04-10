const StatusCode = {
    FORBIDDEN: 403,
    CONFLICT: 409,
    NOTFOUND: 404
}

const ReasonStatusCode = {
    FORBIDDEN: "Bad request error",
    CONFLICT: "Conflict error",
    NOTFOUND: "Not found data exception"
}

class ErrorResponse extends Error {
    public status: number

    constructor(message: string, status: number){
        super(message)
        this.status = status
    }
}

class ElasticsearchError extends ErrorResponse{
    
    constructor(message = ReasonStatusCode.NOTFOUND, statusCode = StatusCode.NOTFOUND){
        super(message, statusCode)
    }
}

class ConflictRequestError extends ErrorResponse {

    constructor(message = ReasonStatusCode.CONFLICT, statusCode = StatusCode.CONFLICT){
        super(message, statusCode)
    }
}

class BadRequestError extends ErrorResponse {

    constructor(message = ReasonStatusCode.FORBIDDEN, statusCode = StatusCode.FORBIDDEN){
        super(message, statusCode)
    }
}

export {ConflictRequestError, BadRequestError, ElasticsearchError}