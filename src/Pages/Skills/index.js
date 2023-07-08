import React from "react"

import { CyberSecurity } from "./Items/cybersec.js";
import { FrontEnd,  } from "./Items/frontend.js";
import { Programming } from "./Items/programming.js";
import { SysAdm } from "./Items/sysadm.js";
import {ContainerSkills} from "./style.js"

export const Skills = () => {

    return (
        <ContainerSkills>
            <Programming />
            <FrontEnd />
            <SysAdm />
            <CyberSecurity />
        </ContainerSkills>
    )
}