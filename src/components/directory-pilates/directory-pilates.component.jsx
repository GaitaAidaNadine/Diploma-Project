import React, { Component } from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { withRouter } from "react-router-dom";
import "./directory-pilates.styles.scss";
import pilates1 from "./../../assets/pilates1.png";
import pilates2 from "./../../assets/pilates2.png";
import pilates3 from "./../../assets/pilates3.png";
import pilates4 from "./../../assets/pilates4.png";
import pilates5 from "./../../assets/pilates5.png";

class DirectoryPilates extends Component {
  constructor() {
    super();

    this.state = {
      programs: [
        {
          id: 24,
          name: "Reformer Workout Plan",
          imageUrl: `${pilates1}`,
          price: 28,
        },
        {
          id: 25,
          name: "Connected Mat Workout",
          imageUrl: `${pilates2}`,
          price: 45,
        },
        {
          id: 26,
          name: "Double Trouble Foot Workout",
          imageUrl: `${pilates3}`,
          price: 33,
        },
        {
          id: 27,
          name: "Ballet Barre Workout",
          imageUrl: `${pilates4}`,
          price: 39,
        },
        {
          id: 28,
          name: "Centering Reformer Flow",
          imageUrl: `${pilates5}`,
          price: 41,
        },
      ],
    };
  }

  render() {
    const { match, history } = this.props;
    return (
      <div className="directory-yoga-menu">
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

export default withRouter(DirectoryPilates);
