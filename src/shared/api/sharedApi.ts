import { AxiosResponse } from "axios";
import { $api } from "./default";
import { TTSRequestDTO, TTSResponseDTO } from "./types";

export async function textToSpeech(
  data: TTSRequestDTO
): Promise<AxiosResponse<TTSResponseDTO>> {
  return await $api.post("/api/audio/tts", data);
}
