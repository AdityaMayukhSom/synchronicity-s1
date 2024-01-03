import React from "react";
import PropTypes from "prop-types";

/**
 * @param {object} props
 *
 * @param {string} [props.preTitle]
 * Text to be shown before the main title appears.
 *
 * @param {string} props.title
 * Main title for the section.
 *
 * @param {string} [props.titleDescription]
 * A small description of the section or a tagline.
 */
const SectionTitle = ({ preTitle, title, titleDescription }) => {
  return (
    <div className="w-full px-4 mt-12">
      <div className="mx-auto max-w-[640px] text-center">
        {preTitle && (
          <span className="block mb-2 text-lg font-semibold text-primary">
            {preTitle}
          </span>
        )}
        <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-4.5xl">
          {title}
        </h2>
        {titleDescription && (
          <p className="text-base font-medium text-body-color">
            {titleDescription}
          </p>
        )}
      </div>
    </div>
  );
};

SectionTitle.propTypes = {
  preTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleDescription: PropTypes.string,
};

export default SectionTitle;
