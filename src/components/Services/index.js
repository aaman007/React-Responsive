import React from "react";

import icon1 from '../../assets/images/svg-1.svg';
import icon2 from '../../assets/images/svg-2.svg';
import icon3 from '../../assets/images/svg-3.svg';

import {
    ServicesContainer,
    ServicesCard,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper
} from "./ServicesElements";

const Services = () => {
    return (
        <ServicesContainer id={"services"}>
            <ServicesH1> Our Services </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1} />
                    <ServicesH2> Reduce Expense </ServicesH2>
                    <ServicesP> We reduce your expense and increase your productivity </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon2} />
                    <ServicesH2> Reduce Time Waste </ServicesH2>
                    <ServicesP> We give you faster access and save your time </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3} />
                    <ServicesH2> Premium Data </ServicesH2>
                    <ServicesP> We provide some premium data that is also accessible </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;