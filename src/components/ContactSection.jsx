import { Instagram, Linkedin, Locate, Mail, Map, Phone, Twitch, Twitter } from "lucide-react"


export const ContactSection = () => { 
    return (
        <section id="contact" className="py-25 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Get In <span className="text-primary"> Touch </span> </h2>
            
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-9">
                        <h3 className="text-2xl font-semibold mb-6">Contact information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" /> 
                                </div>
                                <div className="">
                                    <h4 className="font-medium" > Email </h4>
                                    <a href="mailto:rstevenpr@gmail.com" className="text-muted-forefround hover:text-primary transition-colors">
                                        rstevenpr@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" /> 
                                </div>
                                <div className="">
                                    <h4 className="font-medium" > Phone </h4>
                                    <a href="tel:+50587249178" className="text-muted-forefround hover:text-primary transition-colors">
                                        +505 8724 9178
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Map className="h-6 w-6 text-primary" /> 
                                </div>
                                <div className="">
                                    <h4 className="font-medium" > Address </h4>
                                    <a href="mailto:rstevenpr@gmail.com" className="text-muted-forefround hover:text-primary transition-colors">
                                        Managua, Nicaragua
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4" > Connect with me </h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="" target="_blank" > <Linkedin />  </a>

                                <a href="" target="_blank" > <Twitter />  </a>

                                <a href="" target="_blank" > <Instagram />  </a>

                                <a href="" target="_blank" > <Twitch/>  </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs ">
                        <h3 className="text-2xl font-semibold mb-6" >Send a message</h3>

                        <form action="" className="space-y-6">
                            <div className="">
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-left"> Your name </label>
                                <input type="text" id="name" name="name" required  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Your Name ..." />
                            </div>

                            <div className="">
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-left"> Your name </label>
                                <input type="text" id="name" name="name" required  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Your Name ..." />
                            </div>

                            <div className="">
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-left"> Your name </label>
                                <input type="text" id="name" name="name" required  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Your Name ..." />
                            </div>

                            
                            

                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}