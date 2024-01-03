import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../lib/SectionTitle";

//import titleSponsors from "../../data/sponsorsData/titleSponsors";
//import goldSponsors from "../../data/sponsorsData/goldSponsors";
//import silverSponsors from "../../data/sponsorsData/silverSponsors";
//import bronzeSponsors from "../../data/sponsorsData/bronzeSponsors";
import genericSponsors from "../../data/sponsorsData/genericSponsors";
import APIToolingPartner from "../../data/sponsorsData/APIToolingPartner";

/**
 * @typedef {object} Sponsor
 * @property {string} name
 * @property {string} sponsorWebsiteURL
 * @property {string} sponsorLogoURL
 */

const sponsorLists = [
  {
    name: "Sponsors",
    list: genericSponsors,
  },
  {
    name: "API Tooling Partner",
    list: APIToolingPartner,
  },
];

/**
 * @param {Sponsor} props
 */
function Sponsor(props) {
  return (
    <div
      className="flex items-center justify-center bg-white rounded-md p-8"
      key={props.name}
    >
      <a href={props.sponsorWebsiteURL} rel="noreferrer" target="_blank">
        <img
          src={props.sponsorLogoURL}
          alt={props.name}
          className=" max-h-48 max-w-72 sm:w-96"
        />
      </a>
    </div>
  );
}

/**
 * @param {object} props
 * @param {string} props.name
 * @param {Sponsor[]} props.list
 */
function SponsorList({ name, list }) {
  return (
    <>
      <SectionTitle title={name} />
      <section className="flex flex-col items-center justify-center">
        <section className="flex flex-wrap items-center justify-center gap-16 p-8">
          {list.map(Sponsor)}
        </section>
      </section>
    </>
  );
}

SponsorList.propType = {
  name: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      fontSize: PropTypes.number.isRequired,
    })
  ),
};

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-16 bg-gray-950 text-white">
      {sponsorLists.map(SponsorList)}
    </section>
  );
}
