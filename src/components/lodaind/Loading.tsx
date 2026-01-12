import TextType from "../TextType";

const Loading = () => {

    return (
        <section className="relative w-full bg-[#0a0a0a] min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute w-75 h-75 bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />
            <div className="relative z-10 flex flex-col items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-10! py-8! shadow-lg">

                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-4 border-white/10" />
                    <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
                </div>

                <TextType
                    text={["Hello!", "Welcome in Massar Website", "Loading..."]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                />

            </div>

        </section>
    );
};

export default Loading;
