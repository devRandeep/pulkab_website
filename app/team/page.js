"use client";
import { teamData } from "../constants/page"
import { ArrowRight } from "lucide-react"
import { X } from "lucide-react";
import { useState } from "react"

const team = () => {
    const [selectedPerson, setselectedPerson] = useState(null)

    return (
        <>
            <section className="md:w-6xl w-full m-auto container">
            <h1 className="text-5xl font-bold text-left my-8">Our Team</h1>
            <p className="text-lg text-left mb-8 text-gray-300">
                Meet the talented individuals behind our success. Our team is
                composed of creative minds, skilled professionals, and dedicated
                experts who work together to deliver exceptional results.
            </p>
                <div className="grid md:grid-cols-3 gap-10 justify-center mt-5">
                    {teamData.map((person, index) => (
                        <div 
                            key={person.id} 
                            className="flex flex-col justify-center items-center text-center gap-3  py-5 duration-400 rounded-xl animate-team-card hover:scale-105"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="h-[200px] w-[200px] rounded-full overflow-hidden">
                                <img src={person.image} alt={person.name} className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                            </div>
                            <h2 className="text-[24px]">{person.name}</h2>
                            <h3 className="text-[15px] text-[#aaaaaa]">{person.jobTitle}</h3>
                            <div className="bg-[#1f1f1f] p-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110" onClick={() => { setselectedPerson(person) }}>
                                <ArrowRight />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* pop up section */}
            {selectedPerson && (
                <section className="fixed inset-0 flex backdrop-blur-xl justify-center items-center z-100 bg-black/50 animate-backdrop" onClick={() => setselectedPerson(null)}>
                    <div className="md:h-[600px] md:w-[900px] rounded-lg border-2 border-[#333] bg-[#121212] overflow-hidden animate-popup-card" onClick={(e) => e.stopPropagation()}>
                        <div className="flex md:flex-row flex-col md:gap-8 ">
                            <div className="flex flex-col gap-3">
                                <div className="md:h-[700px] md:w-[350px] ">
                                    <img src={selectedPerson.image} alt={selectedPerson.name} className="h-[100%] w-[100%] object-cover" />
                                </div> 
                            </div>
                            <div className="flex flex-col md:gap-15 py-5 md:pr-10 pr-3 text-start">
                                <div className="w-fit ml-auto cursor-pointer" onClick={() => { setselectedPerson(null) }}>
                                    <X />
                                </div>
                                <div className="flex flex-col gap-3 md:px-0 px-5">
                                    <h2 className="text-[30px]">{selectedPerson.name}</h2>
                                    <h3 className="text-[18px] text-[#aaaaaa] font-bold">{selectedPerson.jobTitle}</h3>
                                    <p className="text-[16px] text-[#aaaaaa]">{selectedPerson.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            )}
        </>
    )
}
export default team