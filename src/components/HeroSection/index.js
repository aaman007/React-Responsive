import React, { useState } from "react";

import { HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroH1, HeroP, HeroButtonWrapper, ArrowForward, ArrowRight } from "./HeroElements";
import Video from '../../assets/videos/video.mp4';
import { Button } from "../ButtonElements";

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id={"home"}>
            <HeroBackground>
                <VideoBackground
                    autoPlay
                    loop
                    muted
                    src={Video}
                    type={"video/mp4"}
                />
            </HeroBackground>
            <HeroContent>
                <HeroH1> Ultimate Data Center </HeroH1>
                <HeroP>
                    Sign up now and get $300 to purchase the data you need
                </HeroP>
                <HeroButtonWrapper>
                    <Button
                        to={"signup"}
                        smooth
                        spy
                        exact
                        offset={-80}
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary={"true"}
                        dark={"true"}
                    >
                        Get Started { hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroButtonWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;