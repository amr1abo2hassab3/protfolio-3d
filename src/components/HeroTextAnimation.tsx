import { words } from '../data/data';

const HeroTextAnimation = () => {
  return (
    <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
      <div className="flex flex-col gap-7">
        <div className="hero-text text-white text-3xl font-bold h-[50px] overflow-hidden">
          <h1 className="flex items-center gap-2 relative">
            Shaping
            <span className="relative h-[50px]  w-96  ml-2 overflow-hidden inline-block">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="absolute  top-0 left-0 w-full flex items-center gap-2 h-[50px] opacity-0 animate-wordSlide"
                  style={{
                    animationDelay: `${index * 2}s`,
                    animationDuration: `${words.length * 2}s`,
                  }}
                >
                  <img
                    src={word.imgPath}
                    alt="person"
                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white"
                  />
                  <span>{word.text}</span>
                </span>
              ))}
            </span>
          </h1>

          <h1>into Real Projects</h1>
          <h1>that Deliver Results</h1>
        </div>

        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
          Hi, I’m Adrian, a developer based in Croatia with a passion for code.
        </p>
      </div>
    </header>
  );
};

export default HeroTextAnimation;
