import React, { useRef, useState } from "react";

const VideoBackground: React.FC = () => {
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  
  const handleVideoError = () => {
    setVideoFailed(true);
  };
  return (
    <div className="relative w-full h-96 overflow-hidden aspect-auto object-center">
      {/* Video with reduced opacity */}
      <video
        ref={videoRef}
        id="myVideo"
        className={`w-full object-cover object-center opacity-50${
          videoFailed ? "hidden" : "block"
        }`}
        autoPlay
        muted
        loop
        onError={handleVideoError}
      >
        <source src="/src/components/context/bleachvidhd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback background image (if video fails to load) */}
      <div
        className={`absolute inset-0 w-full h-full bg-hero-pattern bg-cover bg-center opacity-50 ${
          videoFailed ? "block" : "hidden"
        }`}
      >
        <img src="/src/components/context/BackgroundFillin.png" alt="Background Byakuya" />
      </div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/80 to-transparent"></div>

      {/* Overlay content */}
      <div className="pt-16 z-10 absolute bottom-0 left-0 max-w-screen-lg xl:max-w-screen-xl mx-auto p-4">
          <h1 className="text-9xl sm:text-5xl font-mono leading-none tracking-tight text-[gold]">
            <span className="text-[#a41d1d] text-6xl font-avestrava opacity-90">Quincy </span>
            Portal
          </h1>
          <h1 className="font-avestrava text-6xl lg:text-7xl leading7-none font-extrabold tracking-tight mb-8 sm:mb-10 text-blue-700">
            Wandenreich
          </h1>
          <p className="max-w-screen-lg text-lg sm:text-xl  text-[#a473f8] font-medium mb-10 sm:mb-11">
            The capital of the Lichtreich in the Human World, before being moved to the Schatten Bereich and becoming the base of the Wandenreich:{" "}
            <code className="font-mono text-blue-500 font-bold">影の領域</code>
            , <code className="font-mono text-blue-500 font-bold">Shatten Beraihi; German for "Shadow Realm"</code>,{" "}
            <code className="font-mono text-blue-500 font-bold">Vandenraihi; German for "Walled Empire"</code>,{" "}
            <code className="font-mono text-blue-500 font-bold">Japanese for "Invisible Empire"</code>
            , and{" "}
            <code className="font-mono text-blue-500 font-bold">
              For the remnants of the Quincy that remained in the World of the Living </code>
          </p>
      </div> 
    </div>
  );
};

export default VideoBackground;