import { Box } from "~styled-system/jsx";

type YoutubeEmbedProperties = {
    readonly postId: string;
};

export function YoutubeEmbed({ postId }: YoutubeEmbedProperties) {
    return (
        <Box css={{ display: "flex", 
                    justifyContent: "center", 
                    marginY: "32px",
                    }}>
            <iframe
                style={{
                    width: "80%",
                    height: "auto",
                    aspectRatio: "16 / 9",
                }}
                src={`https://www.youtube.com/embed/${postId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
            />
        </Box>
    );
}