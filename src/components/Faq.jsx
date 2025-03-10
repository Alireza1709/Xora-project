import { Element } from "react-scroll";
import { faq } from "../constanst";
import FaqItem from "./FaqItem";

const Faq = () => {

    const halfLength = Math.floor(faq.length / 2 )

    return ( 
        <>
            <section>
                <Element name="FAQ" className="relative ">
                    <div className="relative pt-28 z-2 container">
                        <div className="text-center">
                            <h3 className="h3 max-md:h5  mb-7 text-p4  ">
                                Curiosity didn't kill the cat , it gave it answers.   
                            </h3>
                            <p className="body-1"> 
                                You've got questions,we've got answers !
                            </p>
                        </div>

                        <div className="faq-line_after w-0.5 h-[1200px] absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2">

                        </div>

                        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1 mt-40">
                            <div className="container gap-10 flex max-lg:block">
                                <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
                                    <img src="./images/faq-logo.svg" alt="logo" className="size-1/2"  />
                                </div>

                                <div className="relative flex-1 pt-24">
                                    {
                                        faq.slice(0 , halfLength).map((item , inedx) => (
                                            <FaqItem key={item.id} index={inedx} item={item}/>
                                        ))
                                    }
                                </div>
                                <div className="relative flex-1 lg:pt-24">
                                    {
                                        faq.slice(halfLength).map((item , inedx) => (
                                            <FaqItem key={item.id} index={halfLength + inedx} item={item}/>
                                        ))
                                    }
                                </div>

                            </div>
                            <div className="faq-line_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden"/>
                        </div>

                    </div>

                </Element>
            </section>
        </>
     );
}
 
export default Faq;