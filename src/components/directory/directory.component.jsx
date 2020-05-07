import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import fatloss from "./../../assets/fatloss.png";
import musclebuilding from "./../../assets/musclebuilding.png";
import cardio from "./../../assets/cardio.png";
import yoga from "./../../assets/yoga.png";
import pilates from "./../../assets/pilates.png";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "fat loss",
          imageUrl: `${fatloss}`,
          id: 1,
          linkUrl: "fatloss",
        },
        {
          title: "muscle building",
          imageUrl: `${musclebuilding}`,
          id: 2,
          linkUrl: "",
        },
        {
          title: "cardio",
          imageUrl: `${cardio}`,
          id: 3,
          linkUrl: "",
        },
        {
          title: "yoga",
          imageUrl: `${yoga}`,
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "pilates",
          imageUrl: `${pilates}`,
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          <MenuItem
            key={section.id}
            title={section.title}
            imageUrl={section.imageUrl}
            size={section.size}
            linkUrl={section.linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
