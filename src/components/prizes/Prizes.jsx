import { prizesData } from "../../data/prizesData";
import PropTypes from "prop-types";
import SectionTitle from "../lib/SectionTitle";

export default function Prize() {
  return (
    <section id="prizes" className="pt-16 pb-8 bg-white">
      <SectionTitle
        title={"Exciting Prizes!"}
        titleDescription={
          "Checkout what different prizes synchronicity has to offer to you."
        }
      />
      <div className="grid grid-cols-1 px-10 py-8 lg:grid-cols-3 md:grid-cols-2">
        {prizesData.map((element) => (
          <PrizeItem prize={element} key={element.type} />
        ))}
      </div>
    </section>
  );
}

function PrizeItem({ prize }) {
  return (
    <div className="p-8 text-center">
      <div className="flex items-center justify-center">
        <img src={prize.icon} className="h-16" alt="Icon" />
      </div>
      <h2 className="py-3 text-3xl">{prize.type}</h2>
      {Number.parseInt(prize.cashComponent) > 0 && (
        <strong className="text-4xl">&#8377; {prize.cashComponent}</strong>
      )}
      <p className="pt-6 text-center">{prize.content}</p>
    </div>
  );
}

PrizeItem.propTypes = {
  prize: PropTypes.object,
};
