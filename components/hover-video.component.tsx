'use client'

interface Props {
    src: string
}

const HoverVideo: React.FC<Props> = ({ src }) => (
    <video
        src={src}
        onMouseEnter={e => (e.target as HTMLVideoElement).play()}
        onMouseOut={e => (e.target as HTMLVideoElement).pause()}
        loop
        muted
    >
    </video>
);

export default HoverVideo;