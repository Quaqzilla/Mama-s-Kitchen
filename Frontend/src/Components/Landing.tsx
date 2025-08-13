import { Bottom } from "@/Pages/Bottom/Bottom"
import { Featured } from "@/Pages/Featured/Featured"
import { NavBar } from "@/Pages/NavBar/NavBar"
import { Options } from "@/Pages/Options/Options"
import { Section1 } from "@/Pages/Section1/Section1"

export function Landing(){
    return(
        <div>
            <NavBar/>
            <Section1/>
            <Options/>
            <Featured/>
            <Bottom/>
        </div>
    )
}