import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2021
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="4" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="3" text="Months" />
      </div>
      <p className="text-center">
        With 4 years of experience building dynamic and user-friendly web
        applications along with a hint of app development.
      </p>
      <ExperienceInfo number="5" text="Full-Stack Projects" />
    </div>
  );
};

export default ExperienceTopLeft;
