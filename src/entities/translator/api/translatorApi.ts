import { $api, API } from "@/src/shared";
import { AxiosResponse, CancelTokenSource } from "axios";
import {
  ExamplesResponseDto,
  TranslateRequestDto,
  TranslateResponseDto,
} from "./types";
import { EXAMPLES, TRANSLATE, TRANSLATOR } from "./constants";

export async function translate(
  data: TranslateRequestDto,
  cancelToken: CancelTokenSource
): Promise<AxiosResponse<TranslateResponseDto>> {
  return await $api.post(`/${API}/${TRANSLATOR}/${TRANSLATE}`, data, {
    cancelToken: cancelToken.token,
  });
}

export async function getExamples(
  data: TranslateRequestDto
): Promise<AxiosResponse<ExamplesResponseDto>> {
  return await $api.post(`/${API}/${TRANSLATOR}/${EXAMPLES}`, data);
}
