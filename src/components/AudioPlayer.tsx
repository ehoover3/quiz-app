import { useEffect, useRef, useState } from "react";

type Track = {
    label: string;
    src: string;
};

const tracks: Track[] = [
    { label: "Pharm ATI 1", src: "/audio/PharmATI_1.m4a" },

];

export default function AudioPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [current, setCurrent] = useState<number | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playTrack = (index: number) => {
        const track = tracks[index];

        // stop any existing audio
        if (audioRef.current) {
            audioRef.current.pause();
        }

        // create new audio instance
        const audio = new Audio(track.src);
        audioRef.current = audio;

        audio.play();
        setCurrent(index);
        setIsPlaying(true);

        audio.onended = () => {
            setIsPlaying(false);
            setCurrent(null);
        };
    };

    const togglePlay = (index: number) => {
        if (current !== index) {
            playTrack(index);
            return;
        }

        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="card border border-gray-800 space-y-3">
            <h3 className="title text-lg">Audio Review</h3>

            <div className="space-y-2">
                {tracks.map((t, i) => (
                    <button
                        key={t.label}
                        onClick={() => togglePlay(i)}
                        className="button w-full flex justify-between items-center"
                    >
                        <span>{t.label}</span>
                        <span className="text-sm text-gray-500">
                            {current === i && isPlaying ? "⏸️" : "▶️"}            </span>
                    </button>
                ))}
            </div>
        </div>
    );
}