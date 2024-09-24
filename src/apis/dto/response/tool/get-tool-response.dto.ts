// interface: get tool response body dto //

import ResponseDto from "../response.dto";

export default interface GetToolResponseDto extends ResponseDto {
    toolNumber: number;
    name: string;
    purpose: string;
    count: number;
}