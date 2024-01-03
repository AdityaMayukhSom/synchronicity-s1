import { PrimaryButton } from "../lib/Buttons";
import SectionTitle from "../lib/SectionTitle";

export default function About() {
  return (
    <section id="about" className="pt-16 bg-white">
      <SectionTitle
        title={"All about synchronicity!"}
        titleDescription={"Get a glimpse of what our hackathon is about!"}
      />
      <div className="flex flex-col items-center justify-center grid-cols-1 grid-rows-2 py-10 md:grid lg:grid-rows-1 lg:grid-cols-2">
        <div
          className="Image"
          style={{ maxWidth: "100%", display: "block", margin: "auto" }}
        >
          <img
            alt="teamwork logo"
            width="400px"
            src="/illustrations/TeamWork.svg"
          />
        </div>

        <div className="flex flex-col justify-start p-10 pt-5">
          <p className="pb-4 text-lg lg:pr-12 font-medium leading-relaxed text-justify">
            <strong>synchronicity</strong> is an offline hackathon in which
            participants can sharpen their skills and connect with people to
            grow together. It is designed to spark innovation, attract and
            educate new talent and create new channels for collaboration between
            performance and capacity professionals. We want to spread the idea
            that programming is a useful skill that can be enjoyed by anyone. We
            are planning to host approximately 150+ students offline in the
            college with proper arrangement and 200+ students online.
          </p>
          <PrimaryButton
            iconFilePath={"/icons/discord.svg"}
            buttonText={"Discord Coming Soon!"}
            buttonURL={"/"}
            iconAlternativeText={"discord logo"}
          />
        </div>
      </div>
    </section>
  );
}
