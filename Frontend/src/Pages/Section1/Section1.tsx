import bg from './../../assets/bg.webp';
import bc from './../../assets/Cloudy.svg';

export function Section1() {
  return (
    <div className="relative w-full h-135 overflow-hidden mb-4">
      <img
        src={bc}
        alt="Background Cloudy"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 flex flex-row justify-evenly h-full p-4 lg:items-center">
        <div className="m-2 lg:flex flex-col gap-3 text-foreground">
          <div>
            <h1 className="text-7xl font-medium leading-snug" data-aos = "fade-right" data-aos-duration="2000">
              Welcome to Mama's Kitchen
            </h1>
            <p className="text-3xl font-light" data-aos = "fade-right" data-aos-duration="2500">Slogan</p>
          </div>
        </div>

        <div className="hidden w-170 lg:flex">
          <img src={bg} alt="Burger Icon" />
        </div>
      </div>
    </div>
  );
}
