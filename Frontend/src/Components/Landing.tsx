import { Featured } from "@/Pages/Featured/Featured"
import { NavBar } from "@/Pages/NavBar/NavBar"
import { Section1 } from "@/Pages/Section1/Section1"

export function Landing(){
    return(
        <div>
            <NavBar/>
            <Section1/>
            <Featured/>
        </div>
    )
}