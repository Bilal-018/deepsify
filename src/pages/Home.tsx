import { NavBar } from '../components/NavBar'
import editorImg from '../assets/images/imgHome.jpg'
import { useEffect, useRef } from 'react'
import arrowImg from '../assets/icons/arrowImg.png'
import { ReactComponent as StarYellow } from "../assets/icons/star-yellow.svg"
import boyDp from "../assets/images/pf-man.jpg"
import girlDp1 from "../assets/images/pf-girl1.jpg"
import girlDp2 from "../assets/images/pf-girl2.jpg"
import { Footer } from '../components/Footer'
import ipadImg from "../assets/images/IpadImg.png"
import asset1VE from "../assets/images/asset1VE.png"
import asset2VE from "../assets/images/asset2VE.png"
import asset3VE from "../assets/images/asset3VE.png"
import asset4VE from "../assets/images/asset4VE.png"

export const Home = () => {
    const imgRef = useRef<HTMLImageElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const vidRef = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const ratingRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const ipadRef = useRef<HTMLDivElement>(null);
    const blurRef = useRef<HTMLDivElement>(null);

    const elements = [
        { ref: imgRef, class: 'appear' },
        { ref: divRef, class: 'slide-in-right' },
        { ref: div2Ref, class: 'slide-in-bottom2' },
        { ref: vidRef, class: 'appear' },
        { ref: div3Ref, class: 'blur-clear' },
        { ref: div4Ref, class: 'slide-in-bottom2' },
        { ref: ratingRef, class: 'appear' },
        { ref: footerRef, class: 'slide-up' },
        { ref: div5Ref, class: 'appear' },
        { ref: div6Ref, class: 'appear' },
        { ref: ipadRef, class: 'sm-effect' },
        { ref: blurRef, class: 'blur-to-clear' },
    ];

    const testimonials = [
        {
            text: "I'm blown away by how easy it is to use this video editing tool. As someone who is new to video editing. I was intimidated by the thought of creating a video, but this tool made it so simple and intiutive. I was able to create a professional-quality video in just a few hours!",
            name: 'Sarah J.',
            role: 'Designer',
            imgSrc: girlDp1
        },
        {
            text: "As a SMM, I'm always looking for ways to make my videos stand out. This video editing tool has been a game-changer for me. I can easily add visual effects and create engaging titles that help my videos get noticed. Thanks to the Cinecut, I've been able to increase engagement and grow my following on social media.",
            name: 'Emily L.',
            role: 'SMM',
            imgSrc: girlDp2
        },
        {
            text: "I love this video editing tooll It's so easy to use, and the results are amazing. I've been able to create videos that look like they were made by a professional studio, all from the comfort of my own home. I've recommended this tool to all of my friends and colleagues who are looking to get into video editing.",
            name: 'Alex C.',
            role: 'Designer',
            imgSrc: boyDp
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const target = entry.target as HTMLElement;
                if (entry.isIntersecting) {
                    target.classList.add(target.dataset.class!);
                    // observer.unobserve(target);
                }
            });
        });

        elements.forEach(el => {
            if (el.ref.current) {
                el.ref.current.dataset.class = el.class;
                observer.observe(el.ref.current);
            }
        });

        return () => {
            elements.forEach(el => {
                if (el.ref.current) {
                    observer.unobserve(el.ref.current);
                }
            });
        };
    }, []);

    return (
        <div className='overflow-hidden'>
            <div className='max-w-[1120px] mx-auto pb-20 px-5 md:px-10'>
                <NavBar />

                <div className='pt-20'>
                    <h3 className='text-xs md:text-xl font-medium text-center'>ONLINE EDITOR</h3>
                    <div className='text-2xl md:text-5xl sm_laptop:text-7xl font-medium text-center md:space-y-2 sm_laptop:space-y-4 mt-1 md:mt-2 sm_laptop:mt-5'>
                        <h1>Powerful Editing Tools</h1>
                        <h1>For Your Videos</h1>
                    </div>
                    <div className='flex justify-center w-full mt-5 md:mt-10'>
                        <button className='bg-blue-500 py-2 px-4 md:py-3 md:px-8 rounded-lg md:rounded-xl max-md:text-xs'>Start Editing</button>
                    </div>
                </div>

                <div className='image-container py-5 md:py-10 sm_laptop:py-20 pl-2 md:pl-14 sm_laptop:pl-28'>
                    <img ref={imgRef} className='rounded-3xl editor-image' src={editorImg} alt="editor" />
                </div>


                <div ref={divRef} className='bg-[#515366] bg-opacity-15 rounded-3xl md:rounded-[42px] p-5 md:p-12 my-14 md:my-20 md:flex max-md:space-y-8'>
                    <div className='sm_laptop:w-1/2 space-y-3 md:space-y-4 sm_laptop:space-y-6'>
                        <h2 className='text-xl md:text-4xl sm_laptop:text-5xl font-medium slide-in-bottom'>Our Best Features For the Seamless Result</h2>
                        <p className='text-xs md:text-base sm_laptop:text-lg slide-in-bottom'>Our user-friendly interface makes it easy to navigate the tool and find the features you need.</p>
                        <button className='bg-blue-500 py-2 px-4 md:py-3 md:px-8 rounded-lg md:rounded-xl slide-in-bottom max-md:text-xs'>Join the Beta</button>

                        <div className='flex items-center gap-x-4 md:pt-14 sm_laptop:pt-28 blur-to-clear max-md:hidden'>
                            <p className='md:text-5xl sm_laptop:text-7xl font-medium w-max'>125<span className='md:text-3xl sm_laptop:text-5xl font-medium'>+ k</span></p>
                            <div className='text-gray-500 md:text-base sm_laptop:text-lg font-medium leading-5 md:-mb-3 sm_laptop:-mb-5 relative'>
                                <p>users have already</p>
                                <p>joined us.</p>
                                <img className='absolute md:-top-full sm_laptop:-top-[120%] md:-right-1/2 sm_laptop:-right-1/3' src={arrowImg} alt="arrow" />
                            </div>
                        </div>
                    </div>
                    <div ref={ipadRef} className='md:w-3/5 sm_laptop:w-1/2 content-center'>
                        <img className='grow-effect' src={ipadImg} alt="ipad mockup" />
                    </div>
                    <div ref={blurRef} className='flex items-center gap-x-2 opacity-0 md:hidden'>
                        <p className='text-3xl font-medium w-max'>125<span className='font-medium text-lg'>+ k</span></p>
                        <div className='text-gray-500 text-xs font-medium -mb-2 relative'>
                            <p>users have already</p>
                            <p>joined us.</p>
                            <img className='absolute -top-full right-1/2' src={arrowImg} alt="arrow" />
                        </div>
                    </div>
                </div>

                <div ref={div2Ref} className='text-center md:py-10 sm_laptop:py-20 space-y-4 md:space-y-2'>
                    <div className='text-2xl md:text-5xl sm_laptop:text-6xl font-medium leading-tight'>
                        <h2>Unleash Your</h2>
                        <h2>Creative Power</h2>
                    </div>
                    <div className='text-xs max-md:tracking-tighter max-md:font-light md:text-base sm_laptop:text-lg'>
                        <p>We are encouraging creative people to try out the online</p>
                        <p>video editing tool and creating stunning videos with ease.</p>
                    </div>
                </div>

                <div ref={vidRef} className='py-10 sm_laptop:py-20'>
                    <video autoPlay muted className='rounded-3xl md:rounded-[42px] editor-video'>
                        <source src={process.env.PUBLIC_URL + '/videos/fireworks.mp4'} />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div ref={div5Ref} className='flex flex-col max-sm_laptop:gap-y-5 sm_laptop:flex-row w-full sm_laptop:justify-between mt-10'>
                    <div className='sm_laptop:inline-block md:h-[480px] sm_laptop:w-3/5 bg-[#515366] bg-opacity-15 rounded-3xl p-5 md:p-10 space-y-3 md:space-y-6 slide-to-right slide-up'>
                        <h2 className='text-2xl md:text-4xl font-medium'>Easy Editing Tools</h2>
                        <p className='max-md:text-xs sm_laptop:w-7/12'>Our video editor includes a range of editing tools that are easy to use, even for beginners. You can trim, cut and splice your videos to create the perfect final product.</p>
                        <button className='bg-blue-500 py-2 px-4 md:py-3 md:px-8 rounded-lg md:rounded-xl max-md:text-xs'>Join the Beta</button>
                        <div className='relative max-md:hidden grow-effect'>
                            <img className='absolute w-3/4 md:w-1/2 top-5 md:-top-16 xl:-top-24 right-10 md:-right-2 opacity-80' src={asset1VE} alt="asset1" />
                        </div>
                    </div>

                    <div className='sm_laptop:inline-block md:h-96 sm_laptop:h-auto sm_laptop:w-[38%] bg-[#515366] bg-opacity-15 rounded-3xl p-5 md:p-10 space-y-2 slide-to-left slide-up'>
                        <h2 className='text-2xl md:text-3xl md:font-medium'>Export Options</h2>
                        <p className='max-md:text-xs'>Our tool supports a wide range of export options, including popular formats like MP4, AVI and MOV.</p>
                        <div className='relative max-md:hidden grow-effect'>
                            <img className='absolute opacity-80 w-2/3 -top-5 sm_laptop:top-16 sm_laptop:left-10 max-sm_laptop:w-2/5 max-sm_laptop:right-0' src={asset2VE} alt="asset2" />
                        </div>
                    </div>
                </div>

                <div ref={div6Ref} className='flex flex-col max-sm_laptop:gap-y-5 sm_laptop:flex-row w-full sm_laptop:justify-between mt-5 md:mb-10 sm_laptop:mb-20'>
                    <div className='sm_laptop:inline-block md:h-96 sm_laptop:h-auto sm_laptop:w-[38%] bg-[#515366] bg-opacity-15 rounded-3xl p-5 md:p-10 space-y-2 slide-to-right slide-up'>
                        <h2 className='text-2xl md:text-3xl md:font-medium'>Timeline</h2>
                        <p className='max-md:text-xs'>Our timeline allows you to easily arrange and sequence your video and audio clips, cut and trim them, and add transitions between them.</p>
                        <div className='relative max-md:hidden grow-effect'>
                            <img className='absolute max-sm_laptop:w-1/2 max-sm_laptop:right-0 opacity-80 sm_laptop:top-14' src={asset3VE} alt="asset3" />
                        </div>
                    </div>

                    <div className='sm_laptop:inline-block md:h-[480px] sm_laptop:w-3/5 bg-[#515366] bg-opacity-15 rounded-3xl p-5 md:p-10 space-y-2 slide-to-left slide-up'>
                        <h2 className='text-2xl md:text-3xl md:font-medium'>Visual Effects</h2>
                        <p className='max-md:text-xs'>Our video editing tool comes with a range of filters and effects that can add a professional touch to your videos. You can adjust the brightness, contrast, and saturation of your videos.</p>
                        <div className='relative max-md:hidden grow-effect'>
                            <img className='absolute opacity-80 w-1/2 max-sm_laptop:w-2/5 right-0 top-6' src={asset4VE} alt="asset4" />
                        </div>
                    </div>
                </div>

                <div ref={div4Ref} className='py-10 sm_laptop:py-20 text-center space-y-2'>
                    <div className='text-2xl md:text-5xl sm_laptop:text-6xl font-medium leading-tight'>
                        <h2>What Our</h2>
                        <h2>Customers Say</h2>
                    </div>
                    <div className='text-xs max-md:font-light md:text-base sm_laptop:text-lg'>
                        <p>Discover why our video editor is a favourite</p>
                        <p>among content creators</p>
                    </div>
                </div>

                <div ref={ratingRef} className='flex flex-col sm_laptop:flex-row w-full pb-10 sm_laptop:pb-20 max-sm_laptop:px-3'>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`max-sm_laptop:py-5 sm_laptop:px-5 space-y-5 flex-1 slide-to-left opacity-0 ${index === 1 ? 'border-fade' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="flex gap-x-1">
                                {Array(5).fill(null).map((_, index) => <StarYellow key={index} />)}
                            </div>

                            <p className='text-gray-500 max-md:text-sm'>
                                {testimonial.text}
                            </p>

                            <div className='flex items-center gap-x-2'>
                                <div className='w-14 h-14 rounded-full overflow-hidden'>
                                    <img className='object-cover w-full h-full' src={testimonial.imgSrc} alt='profile' />
                                </div>
                                <div>
                                    <p className='font-medium'>{testimonial.name}</p>
                                    <p className='text-gray-500 text-sm'>{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div ref={div3Ref} className='bg-bg-videoShot bg-cover bg-center h-96 md:h-[420px] sm_laptop:h-[552px] rounded-[42px] md:my-10 sm_laptop:my-20'>
                    <div className='flex items-center justify-center h-full bg-black bg-opacity-50 md:bg-opacity-35 backdrop-blur-sm rounded-[42px]'>
                        <div className='md:w-4/5 sm_laptop:w-[58%] flex flex-col items-center text-center max-md:px-2 max-md:tracking-tighter space-y-3 md:space-y-6'>
                            <h2 className='text-xl md:text-4xl sm_laptop:text-5xl font-medium'>Don't just take our word for it - try it out for yourself!</h2>
                            <p className='text-xs md:text-base sm_laptop:text-lg'>Sign in today and start creating amazing videos in minutes. Our team is here to support you every step of the way, so don't hesitate to reach out if you have any questions. Let's make some magic together!</p>
                            <button className='bg-blue-500 py-2 px-4 md:py-3 md:px-8 rounded-lg md:rounded-xl w-max max-md:text-xs'>Join the Beta</button>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={footerRef} className='appear'>
                <Footer />
            </div>
        </div>
    )
}
