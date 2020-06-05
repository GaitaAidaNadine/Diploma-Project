import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CategoryItem from "../CategoryItem/CategoryItem";
import "./DirectoryCardio.scss";
import cardio1 from "./../../assets/cardio1.png";
import cardio2 from "./../../assets/cardio2.png";
import cardio3 from "./../../assets/cardio3.png";
import cardio4 from "./../../assets/cardio4.png";
import cardio5 from "./../../assets/cardio5.png";

class DirectoryCardio extends Component {
  constructor() {
    super();

    this.state = {
      programs: [
        {
          id: 15,
          name: "4 Week Advanced Plyometric",
          imageUrl: `${cardio1}`,
          price: 32,
        },
        {
          id: 16,
          name: "4 Week Intermediate Plyometric",
          imageUrl: `${cardio2}`,
          price: 24,
        },
        {
          id: 17,
          name: "Rapid HIIT Cardio Workouts",
          imageUrl: `${cardio3}`,
          price: 35,
        },
        {
          id: 18,
          name: "Convenient Cardio: Killer Workout Plan",
          imageUrl: `${cardio4}`,
          price: 20,
        },
        {
          id: 19,
          name: "The Bear Barbell Complex",
          imageUrl: `${cardio5}`,
          price: 29,
        },
      ],
    };
  }

  render() {
    const { match, history } = this.props;
    return (
      <div className="directory-cardio-menu">
        {this.state.programs.map((program) => (
          <CategoryItem
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
export default withRouter(DirectoryCardio);
