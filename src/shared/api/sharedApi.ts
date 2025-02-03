import { AxiosResponse } from "axios";
import { $api, $apiFile } from "./default";
import {
  STTRequestDTO,
  STTResponseDTO,
  TTSRequestDTO,
  TTSResponseDTO,
} from "./types";

export async function textToSpeech(
  data: TTSRequestDTO
): Promise<AxiosResponse<TTSResponseDTO>> {
  return await $api.post("/api/audio/tts", data);
}

export async function speechToText(
  data: STTRequestDTO
): Promise<AxiosResponse<STTResponseDTO>> {
  return await $apiFile.post("/api/audio/stt", data);
}
