import React, { useEffect, useRef, useState } from 'react'

const LoveLetter = () => {
    const lettersData = [
        {
            id: 1,
            name: "Apologetic Abubu 😪",
            msg: "Finally, from the depth of my hearts... I know I have been tough on you sometimes, I know I have hurt you quite alot of times, I am sorry for all the pain I have caused, knowingly and unknowingly. I am sorry for all the scars in your heart from my mistakes, I hope you find it in your heart to forgive me. It was never my intention to make you feel any kind of pain. I am truly sorry for all that i've done to you which is wrong or unfair, I love you so much. .",
        },
        {
            id: 2,
            name: "Flow State Abubu 😮‍💨",
            msg: "My Jiddah, my love, my heart, my life, I want to make you the happiest woman alive, I want to shower you with so much love, so much love that you've never seen in your life. I want to be the solution to all your pains and problems, I want to be your partner in everything, I want to always be there for you. I don't want to ever hurt you, and I promise to never let any harm come close to you. I want to be the person who makes your face light up and makes you instantly happy whenever I come back to you from the shortest time away. I want to come back home and tell you all about my day, and also listen to how yours went, and whether it was a sad or happy day, I want to be the one to hold you in my arms and make you feel better, safe, protected, loved and cherished. I love you 3000. ",
        },
        {
            id: 3,
            name: "Sincere Abubu 🖤",
            msg: "Dear Baby J, I love you beyond your imagination or mine, you mean the world to me and I am not just saying it to make you feel good because it's your birthday, Allah is my witness. Every single message in this envelope is coming from the depths of my heart. As you read all these through your screen and pixels, I hope the warmth and happiness you feel reaches me like the sun rising during an early morning football session, warm, real, energizing, and impossible to forget or replicate. I love you more than life 🖤 ",
        },
        {
            id: 4,
            name: "Emotional Abubu ☹️",
            msg: "One picture from you can change my whole day, my whole mood, my whole heartbeat. Every notification from you fills me up with so much joy and feels like a heartbeat whispering, 'I’m always here, and I love you'. It gives me so much peace, I know I can be too demanding sometimes but just know that it comes from a place of love and needing of an attachment with you. I am just so obsessed with you. You are such a blessing, I feel like Allah made us cross paths with each other so you could help me become the great man I am destined to be. Anything mixed with the thought of you turns into a powerful force to be reckoned with in my head, nothing motivates me and gives me energy and hope more than the thought of spending life with you. May Allah bless you and make our dreams come true. Thank you for being with me.",
        },
        {
            id: 5,
            name: "Hopeful Abubu 😁",
            msg: "Maijidda Aliyu Ibrahim, I swear by almighty Allah, there is nothing I want at this moment in life more than to spend my life with you alone. I want to be your bestfriend, your partner, your human shield and protector, I want to be your home, your peace, your happiness. Beyond all, I want to be your husband. I want whatever is mine to be yours, I want you to have my kids, I want to raise a little beautiful family with you filled with joy, happiness, rizq and so much blessings. I want to spend the rest of my life with you, loving you, until death do us apart and we get reunited in Jannah, In Shaa Allah. I love you so much 🖤",
        },
        {
            id: 6,
            name: "Finished Abubu 🫠",
            msg: "Ever since you caught my attention, my heart knew it has seen what it has been waiting for and what it wanted. Which is to be with you in every soft moment, through every smile, through the highs and lows, and everything in between. I want to be with you through every step in life. I promise to be your safe space and stay with you forever baby, In Shaa Allah. Gitchee Gitchee Goo 😘",
        },
        {
            id: 7,
            name: "Clingy Abubu",
            msg: "Every moment we have shared together has turned into a memory that my heart cannot forget even if it wants to. Ever since I first saw you and heard your voice, everything else faded and all I see is the Noor inside you, everything else sounds disturbing and only your voice calms my soul. Every moment with you feels soft, bright, and filled with a kind of peace that only you bring. And when you're not around, all my soul craves is to speak with you again or have your attention. So please don't get tired of me, nothing just feels better than seeing you, thinking of you, spending time with you, speaking with you, and loving you. I love you so much 🖤",
        },
        {
            id: 8,
            name: "Simple Abubakar 😀",
            msg: "Since our first conversation, you’ve been the quiet spark that has lightened everything in my world, turning ordinary days into moments that feel beautifully meant to be. I wake up everyday feeling lucky to have you in life. It still feels unreal, and sometimes I wake up feeling like there is no way i am this lucky in life, but Alhamdulliah for life, which of the favors of my Lord would I deny? Suratu Nahl, Ayah 18: 'And if you should count the favors of Allah, you could not enumerate them'.",
        },
         {
            id: 9,
            name: "Prayerful Abubu 🤲🏻",
            msg: "May Allah bless you abundantly, protect you, keep you steadfast in your deen and grant you what's best for you in this world and the next, and may He make me a part of it all. May Allah grant you and your loved ones Al-Jannatul Firdaus. May Allah take away all the sadness that dims the Noor in your eyes, may He grant you happinnes and reunite you with your loved ones in Jannah. May Allah bless you with good health and fill you with the strength to always sail through life with ease, with your head held high and your heart filled with Iman and Tawakkul. Aameen ya Rabb. May Allah bless you. I love you.",
        },
    ];
    const [openEnvelope, setOpenEnvelope] = useState(false);
    const [letters, setLetters] = useState([]);
    const [zIndexCounter, setZIndexCounter] = useState(10);
    const lettersContainerRef = useRef(null);
    useEffect(() => {
        setLetters(lettersData);
    }, []);
    // Drag logic
    const handleMouseDown = (e) => {
        const isTouch = e.type === "touchstart";
        const startEvent = isTouch ? e.touches[0] : e;

        if (startEvent.target.tagName === "BUTTON") return;

        const letterEl = e.currentTarget;

        const rect = letterEl.getBoundingClientRect();

        const offsetX = startEvent.clientX - rect.left;
        const offsetY = startEvent.clientY - rect.top;

        const startLeft = rect.left + window.scrollX;
        const startTop = rect.top + window.scrollY;

        letterEl.style.transform = "none";
        letterEl.classList.remove("-translate-x-1/2");
        letterEl.classList.remove("-translate-y-1/2");

        letterEl.style.position = "absolute";
        letterEl.style.left = `${startLeft}px`;
        letterEl.style.top = `${startTop}px`;
        letterEl.style.margin = 0;
        letterEl.style.zIndex = zIndexCounter;

        const moveAt = (posX, posY) => {
            letterEl.style.left = `${posX - offsetX}px`;
            letterEl.style.top = `${posY - offsetY}px`;
        };

        const onMouseMove = (moveEvent) => {
            const ev = isTouch ? moveEvent.touches[0] : moveEvent;
            moveAt(ev.clientX, ev.clientY);
        };

        const onMouseUp = () => {
            if (isTouch) {
                document.removeEventListener("touchmove", onMouseMove);
                document.removeEventListener("touchend", onMouseUp);
            } else {
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            }
        };

        if (isTouch) {
            document.addEventListener("touchmove", onMouseMove);
            document.addEventListener("touchend", onMouseUp);
        } else {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        }
    };


    const handleCloseLetter = (id) => {
        setLetters((prev) => prev.filter((l) => l.id !== id));
    };


    return (
        <main className='munna bg-[#8b0000] h-screen w-full overflow-hidden'>
            <section className="munna cssletter z-10">
                <div className={`envelope ${openEnvelope ? "active" : ""}`}>
                    <button
                        className="munna heart"
                        id="openEnvelope"
                        aria-label="Open Envelope"
                        onClick={() => setOpenEnvelope(true)}
                    >
                        <span className="munna heart-text">Open</span>
                    </button>
                    <div className="munna envelope-flap text-black relative">
                        <div className='munna absolute left-1/2 top-[20%] -translate-x-1/2 flex items-center justify-center flex-col md:gap-y-2'>
                            <span className='munna font-sriracha md:text-2xl text-lg'>Wasiqoqi na soyayya guda takwas</span>
                            <span className='munna font-dancingScript md:text-3xl text-xl'>To my Noor 🖤, my Baby J ❤️</span>
                        </div>
                    </div>
                    <div className="munna envelope-folds">
                        <div className="munna envelope-left"></div>
                        <div className="munna envelope-right"></div>
                        <div className="munna envelope-bottom"></div>
                    </div>
                </div>

                <div className="munna letters" ref={lettersContainerRef}>
                    {letters.map((letter) => (
                        <blockquote
                            key={letter.id}
                            className="munna letter center -translate-x-1/2 -translate-y-1/2"
                            id={letter.id}
                            tabIndex={0}
                            style={{
                                position: 'absolute',
                                top: window.innerWidth < 768 ? '53%' : '50%',
                                left: window.innerWidth < 768 ? '50%' : '50%',
                                transform: 'none',
                            }}

                            onMouseDown={(e) => handleMouseDown(e, letter.id)}
                            onTouchStart={handleMouseDown}
                        >
                            <button
                                className="munna closeLetter"
                                title={`Close ${letter.name}'s letter`}
                                onClick={() => handleCloseLetter(letter.id)}
                            >
                                Close {letter.name}'s letter
                            </button>
                            <p>{letter.msg}</p>
                            <cite>{letter.name}</cite>
                        </blockquote>
                    ))}
                </div>
            </section>


            {/* ------------------ Heart Beating  */}
            <div className="munna heart-container absolute top-[20%] md:left-20 left-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="munna heartBeating md:w-[150px] w-[110px] h-[200px]"
                >
                    <path
                        d="M471.7 73.6c-54.5-46.4-136-38.3-186.4 15.8L256 120.6l-29.3-31.2C176.3 35.3 94.8 27.2 40.3 73.6-18 125.4-13.3 221 43 273.7l187.3 177.6a24 24 0 0032.4 0L469 273.7c56.3-52.8 61-148.3 2.7-200.1z"
                        fill="#b10505"
                    />
                </svg>
            </div>
            <div className="munna heart-container absolute bottom-[10%] md:right-20 right-6 rotate-180">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="munna heartBeating md:w-[150px] w-[110px] h-[200px]"
                >
                    <path
                        d="M471.7 73.6c-54.5-46.4-136-38.3-186.4 15.8L256 120.6l-29.3-31.2C176.3 35.3 94.8 27.2 40.3 73.6-18 125.4-13.3 221 43 273.7l187.3 177.6a24 24 0 0032.4 0L469 273.7c56.3-52.8 61-148.3 2.7-200.1z"
                        fill="#b10505"
                    />
                </svg>
            </div>
            {/* ------------------ Heart Falling  */}
            <div className="munna snowflakes z-0">
                <div className="munna snowflake">
                    <img src="https://i.pinimg.com/originals/96/c7/8b/96c78bc8ab873498b763798793d64f62.png" width="25" />
                </div>
                <div className="munna snowflake">
                    <img src="https://i.pinimg.com/originals/96/c7/8b/96c78bc8ab873498b763798793d64f62.png" width="25" />  </div>
                <div className="munna snowflake">
                    <img src="https://i.pinimg.com/originals/96/c7/8b/96c78bc8ab873498b763798793d64f62.png" width="25" />
                </div>
                <div className="munna snowflake">
                    <img src="https://i.pinimg.com/originals/96/c7/8b/96c78bc8ab873498b763798793d64f62.png" width="25" />
                </div>
                <div className="munna snowflake">
                    <img src="https://i.pinimg.com/originals/96/c7/8b/96c78bc8ab873498b763798793d64f62.png" width="25" />
                </div>
                <div className="munna snowflake">
                    <img src="https://i.pinimg.com/originals/96/c7/8b/96c78bc8ab873498b763798793d64f62.png" width="25" />
                </div>
                <div className="munna snowflake">
                    <img src="https://i.pinimg.com/originals/96/c7/8b/96c78bc8ab873498b763798793d64f62.png" width="25" />
                </div>
                <div className="munna snowflake">
                    <img src="https://i.pinimg.com/originals/96/c7/8b/96c78bc8ab873498b763798793d64f62.png" width="25" />
                </div>
                <div className="munna snowflake">
                    <img src="https://i.pinimg.com/originals/96/c7/8b/96c78bc8ab873498b763798793d64f62.png" width="25" />
                </div>
                <div className="munna snowflake">
                    <img src="https://i.pinimg.com/originals/96/c7/8b/96c78bc8ab873498b763798793d64f62.png" width="25" />
                </div>
            </div>
        </main>
    )
}

export default LoveLetter
