import React from "react"
import { personalInfo } from "../data/mock"
import {Mail, Phone, Linkedin, Github} from "lucide-react"
const Footer =()=>{
    return(
         <footer className=" mt-16">
            <div className="py-4 text-center ">
                <div className="container max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 gap-4 mb-8"> 
                        <div className="text-left">
                            <div className="grid grid-rows-3 gap-2">
                                <p className="text-regular text-gray-600 dark:text-gray-400">
                                    Contact Me:
                                </p>
                                <a href={`mailto:${personalInfo.email}`} className="text-body text-gray-600 dark:text-gray-400 hover:underline mr-4">
                                    <Mail size={24} className="inline-block mr-2 "/> {personalInfo.email} </a>
                                
                                <span className="text-body text-gray-600 dark:text-gray-400 mr-4">
                                    <Phone size={24} className="inline-block mr-2 "/>  {personalInfo.phone}</span>
                                
                                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-body text-gray-600 dark:text-gray-400 hover:underline mr-4">
                                    <Linkedin size={24} className="inline-block mr-2 "/> {personalInfo.linkedin} </a>
                            </div>
                            
                        </div>                                                                        
                    </div>
                </div>                           
            </div>
        </footer>
    );
}

export default Footer;