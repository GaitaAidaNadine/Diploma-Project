import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
import "./directory-fatloss.styles.scss";
import fatloss1 from "./../../assets/fatloss1.png";
import fatloss2 from "./../../assets/fatloss2.png";
import fatloss3 from "./../../assets/fatloss3.png";
import fatloss4 from "./../../assets/fatloss4.png";
import fatloss5 from "./../../assets/fatloss5.png";
import fatloss6 from "./../../assets/fatloss6.png";
import fatloss7 from "./../../assets/fatloss7.png";
import fatloss8 from "./../../assets/fatloss8.png";

class DirectoryFatLoss extends Component {
  constructor() {
    super();

    this.state = {
      programs: [
        {
          id: 1,
          name: "Fight to be Fit",
          imageUrl: `${fatloss1}`,
          price: 28,
        },
        {
          id: 2,
          name: "Body Fat Beat Down",
          imageUrl: `${fatloss2}`,
          price: 18,
        },
        {
          id: 3,
          name: "Livin' Lean",
          imageUrl: `${fatloss3}`,
          price: 35,
        },
        {
          id: 4,
          name: "Body Fat Demolition",
          imageUrl: `${fatloss4}`,
          price: 25,
        },
        {
          id: 5,
          name: "Train together, stay together",
          imageUrl: `${fatloss5}`,
          price: 18,
        },
        {
          id: 6,
          name: "The Fat Incinerator",
          imageUrl: `${fatloss6}`,
          price: 14,
        },
        {
          id: 7,
          name: "Tactical Tabata",
          imageUrl: `${fatloss7}`,
          price: 18,
        },
        {
          id: 8,
          name: "High Definition Routine",
          imageUrl: `${fatloss8}`,
          price: 14,
        },
      ],
    };
  }

  render() {
    const { match, history } = this.props;
    return (
      <div className="directory-fatloss-menu">
        {this.state.programs.map((program) => (
          <CollectionItem
            key={program.id}
            match={match}
            history={history}
            program={program}
          />
        ))}
      </div>
    );
  }
}

export default withRouter(DirectoryFatLoss);
