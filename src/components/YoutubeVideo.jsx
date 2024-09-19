"use client";

export default function YoutubeVideo() {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/ywWHDD9sFK8?si=5dZeycZXIrQEKiG9"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-full rounded-lg shadow-md"
    ></iframe>
  );
}
