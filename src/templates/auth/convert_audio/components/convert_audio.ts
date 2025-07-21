'use client';

import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const ffmpeg = createFFmpeg({ log: true });

export async function processAudio(
  file: File,
  type: "slow" | "reverb" | "lofi"
) {
  if (!ffmpeg.isLoaded()) await ffmpeg.load();

  const fileName = "input.mp3";
  ffmpeg.FS("writeFile", fileName, await fetchFile(file));

  const output = "output.mp3";
  let filters = "";

  if (type === "slow") filters = "atempo=0.8";
  else if (type === "reverb") filters = "aecho=0.8:0.9:1000:0.3";
  else if (type === "lofi")
    filters = "asetrate=44100*0.8,atempo=1.1,lowpass=f=3000";

  await ffmpeg.run("-i", fileName, "-af", filters, output);
  const data = ffmpeg.FS("readFile", output);

  return new Blob([data.slice().buffer], { type: "audio/mp3" });
}
