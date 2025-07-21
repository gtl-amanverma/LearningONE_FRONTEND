'use client';

export default function AudioPlayer({ blob }: { blob: Blob }) {
  const url = URL.createObjectURL(blob);

  return (
    <div>
      <audio controls src={url}></audio>
      <a download="converted.mp3" href={url} className="btn">
        Download
      </a>
    </div>
  );
}
