import React, { Component } from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./directory-musclebuilding.styles.scss";
import musclebuilding1 from './../../assets/musclebuilding1.png'
import musclebuilding2 from './../../assets/musclebuilding2.png'
import musclebuilding3 from './../../assets/musclebuilding3.png'
import musclebuilding4 from './../../assets/musclebuilding4.png'
import musclebuilding5 from './../../assets/musclebuilding5.png'
import musclebuilding6 from './../../assets/musclebuilding6.png'

class DirectoryMuscleBuilding extends Component {
  constructor() {
    super();

    this.state = {
      programs: [
        {
          id: 1,
          name: "Warrior Workout",
          imageUrl: `${musclebuilding1}`,
          price: 45,
        },
        {
          id: 2,
          name: "Drop 5 System",
          imageUrl: `${musclebuilding2}`,
          price: 50,
        },
        {
          id: 3,
          name: "Off-Season Classic",
          imageUrl: `${musclebuilding3}`,
          price: 35,
        },
        {
          id: 4,
          name: "Look Like a Pro",
          imageUrl: `${musclebuilding4}`,
          price: 25,
        },
        {
          id: 5,
          name: "The Total Package",
          imageUrl: `${musclebuilding5}`,
          price: 32,
        },
        {
          id: 6,
          name: "Military Athlete Workout",
          imageUrl: `${musclebuilding6}`,
          price: 14,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-musclebuilding-menu">
        {this.state.programs.map((program) => (
          <CollectionItem
            key={program.id}
            imageUrl={program.imageUrl}
            name={program.name}
            price={program.price}
          />
        ))}
      </div>
    );
  }
}

export default DirectoryMuscleBuilding;
