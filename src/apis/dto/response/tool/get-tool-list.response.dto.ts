// interface: get tool list response body Dto //

import { Tool } from "src/types";
import ResponseDto from "../response.dto";

export default interface GetToolListResponseDto extends ResponseDto {
    tools: Tool[];
}