export default function YoutubeVideo() {
  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      <iframe
        src="https://www.youtube.com/embed/ywWHDD9sFK8?si=5dZeycZXIrQEKiG9"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
      ></iframe>
    </div>
  );
}
