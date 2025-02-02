import { $api, API } from "@/src/shared";
import { AxiosResponse, CancelTokenSource } from "axios";
import { TranslateRequestDto, TranslateResponseDto } from "./types";
import { TRANSLATE, TRANSLATOR } from "./constants";

export async function translate(
  data: TranslateRequestDto,
  cancelToken: CancelTokenSource
): Promise<AxiosResponse<TranslateResponseDto>> {
  return await $api.post(`/${API}/${TRANSLATOR}/${TRANSLATE}`, data, {
    cancelToken: cancelToken.token,
  });
}
