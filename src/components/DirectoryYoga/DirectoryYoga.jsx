import React, { Component } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import { withRouter } from "react-router-dom";
import "./DirectoryYoga.scss";
import yoga1 from "./../../assets/yoga1.png";
import yoga2 from "./../../assets/yoga2.png";
import yoga3 from "./../../assets/yoga3.png";
import yoga4 from "./../../assets/yoga4.png";

class DirectoryYoga extends Component {
  constructor() {
    super();

    this.state = {
      programs: [
        {
          id: 20,
          name: "Yin Yoga Training",
          imageUrl: `${yoga1}`,
          price: 25,
        },
        {
          id: 21,
          name: "Transformational Hatha Vinyasa",
          imageUrl: `${yoga2}`,
          price: 55,
        },
        {
          id: 22,
          name: "Multi Style Yoga Training",
          imageUrl: `${yoga3}`,
          price: 33,
        },
        {
          id: 23,
          name: "Self Paced Yoga Training",
          imageUrl: `${yoga4}`,
          price: 35,
        }
      ],
    };
  }

  render() {
    const { match, history } = this.props;
    return (
      <div className="directory-yoga-menu">
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
export default withRouter(DirectoryYoga);
