import { ArrowDown } from "lucide-react"

export const HeroSection = () => { 
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl max-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight" >
                        <span className="opacity-0 animate-fade-in " >Hi I'm</span>
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-1" >Roger</span>
                        <span className=" opacity-0 ml-2 animate-fade-in-delay-2" >Rodriguez </span>
                    </h1>

                    <p className="text-lg md:text-md text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3" >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt corporis consectetur delectus assumenda modi, repudiandae, vel nihil tempora repellat, beatae illo unde totam.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button"> View my work </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}