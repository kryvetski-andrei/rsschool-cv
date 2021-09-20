import React from "react";
import { socialLinksList } from "../assets/someDataBase/someDataBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinks = () => {
  return (
    <section className="social">
      <ul className="social__list">
        {socialLinksList.map((item) =>
          item.isActive ? (
            <li className="social__item" key={item.id}>
              <a
                className="social__link"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {item.text}
              </a>
              <div className="icon icon-github">
                <FontAwesomeIcon icon={item.icon} />
              </div>
            </li>
          ) : (
            <li className="social__item" key={item.id}>
              <span className="social__span">{item.text}</span>
              <div className="icon icon-github">
                <FontAwesomeIcon icon={item.icon} />
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default SocialLinks;
