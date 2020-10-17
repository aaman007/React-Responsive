import React from "react";

import { Column1, Column2, Image, ImageWrapper, InfoContainer, InfoWrapper, InfoRow, TextWrapper, TopLine, Heading, Subtitle, ButtonWrapper} from "./InfoElements";
import { Button } from "../ButtonElements";

const InfoSection = (prop) => {
    return (
        <>
            <InfoContainer lightBg={prop.lightBg} id={prop.id}>
                <InfoWrapper>
                    <InfoRow imgStart={prop.imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine> {prop.topLine} </TopLine>
                                <Heading lightText={prop.lightText}> { prop.heading } </Heading>
                                <Subtitle darkText={prop.darkText}> { prop.description } </Subtitle>
                                <ButtonWrapper>
                                    <Button
                                        to={"home"}
                                        smooth
                                        spy
                                        exact
                                        offset={-80}
                                        primary={prop.primary}
                                        dark={prop.dark}
                                    >
                                        { prop.buttonLabel }
                                    </Button>
                                </ButtonWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImageWrapper>
                                <Image src={prop.img} alt={prop.alt} />
                            </ImageWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;