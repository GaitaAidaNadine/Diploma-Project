import React, { Component } from "react";
import Category from "../Category/Category";
import "./Directory.scss";
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
          linkUrl: "musclebuilding",
        },
        {
          title: "cardio",
          imageUrl: `${cardio}`,
          id: 3,
          linkUrl: "cardio",
        },
        {
          title: "yoga",
          imageUrl: `${yoga}`,
          size: "large",
          id: 4,
          linkUrl: "yoga",
        },
        {
          title: "pilates",
          imageUrl: `${pilates}`,
          size: "large",
          id: 5,
          linkUrl: "pilates",
        },
      ],
    };
  }

  render() {
    return (
      <div className="dir-menu">
        {this.state.sections.map((section) => (
          <Category
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
