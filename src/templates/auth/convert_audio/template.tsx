"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { GridPattern } from "@/components/file-upload/ui";

const ConvertAudioTemplate = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    effects: Array<"slow" | "reverb" | "lofi"> = []
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);

    const { createFFmpeg, fetchFile } = await import("@ffmpeg/ffmpeg");
    const ffmpeg = createFFmpeg({
      log: true,
      corePath: "https://unpkg.com/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js",
    });

    await ffmpeg.load();
    ffmpeg.FS("writeFile", "input.mp3", await fetchFile(file));

    // Prepare filters array to combine effects
    const filters: string[] = [];

    effects.forEach((effect) => {
      if (effect === "slow") filters.push("atempo=0.8");
      else if (effect === "reverb") filters.push("aecho=0.8:0.9:1000:0.3");
      else if (effect === "lofi")
        filters.push("asetrate=44100*0.8,atempo=1.1,lowpass=f=3000");
    });
    const filterString = filters.join(",");
    if (filterString) {
      await ffmpeg.run("-i", "input.mp3", "-af", filterString, "output.mp3");
    } else {
      await ffmpeg.run("-i", "input.mp3", "output.mp3");
    }

    const data = ffmpeg.FS("readFile", "output.mp3");
    const uint8ArrayCopy = new Uint8Array(data);
    const blob = new Blob([uint8ArrayCopy], { type: "audio/mp3" });
    const url = URL.createObjectURL(blob);

    setAudioUrl(url);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-4">
      <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
        <motion.div
          onClick={handleClick}
          whileHover="animate"
          className="p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="audio/*"
            onChange={(e) => handleFileChange(e, ["slow", "reverb", "lofi"])}
            className="hidden"
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
            <GridPattern />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="relative z-20 font-sans font-bold text-neutral-700 dark:text-neutral-300 text-base">
              Upload file
            </p>
            <p className="relative z-20 font-sans font-normal text-neutral-400 dark:text-neutral-400 text-base mt-2">
              Drag or drop your files here or click to upload
            </p>
          </div>
        </motion.div>
      </div>

      {loading && <p>Processing...</p>}
      {audioUrl && (
        <div className="max-w-4xl mx-auto w-full">
          <audio controls src={audioUrl} className="w-full bg-transparent" />
        </div>
      )}
    </div>
  );
};

export default ConvertAudioTemplate;
