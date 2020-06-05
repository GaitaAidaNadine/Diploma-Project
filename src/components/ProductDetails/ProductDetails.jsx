import React from "react";
import ReactPlayer from "react-player";
import dumbbell from "./../../assets/dumbell.png";
import yogaPos from "./../../assets/yoga-pos.png";
import pilatesPos from './../../assets/pilates-pos.png'
import "./ProductDetails.scss";

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      programs: [
        {
          id: 1,
          name: "Fight to be Fit Workout Plan",
          videoUrl:
            "https://www.youtube.com/watch?v=eBq1JEb2Np8&fbclid=IwAR3Xo1JQpBrKfCXtAGG1_R5iB47w_VKpGF__nLojf_dCAMBoKS9asyKWEcI",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 2,
          name: "Body Fat Beat Down Workout Plan",
          videoUrl:
            "https://www.youtube.com/watch?v=Tt8ejc-ikZ4&fbclid=IwAR2c0lQuZTgg2NQkdy25vNEeEdJoeUk-6I6DO_qYLMfE9OKcjNs-FLutsp4",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 3,
          name: "Livin' Lean Workout Plan",
          videoUrl: "https://www.youtube.com/watch?v=eJupiv9tGcE",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 4,
          name: "Body Fat Demolition Workout Plan",
          videoUrl: "https://www.youtube.com/watch?v=SxroBCr_jKU",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 5,
          name: "Train together, stay together Workout Plan",
          videoUrl: "https://www.youtube.com/watch?v=covJQBGHTs4",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 6,
          name: "The Fat Incinerator Workout Plan",
          videoUrl: "https://www.youtube.com/watch?v=w0gbk3eQXJA",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 7,
          name: "Tactical Tabata Workout Plan",
          videoUrl: "https://www.youtube.com/watch?v=JAdz-AhVTRY",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 8,
          name: "High Definition Routine Workout Plan",
          videoUrl: "https://www.youtube.com/watch?v=w29usY52ecg",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 9,
          name: "Warrior Workout",
          videoUrl:
            "https://www.youtube.com/watch?v=PXjfecguayM&fbclid=IwAR1CsYBBj9ilo7381hFedm6KaFwA5NhT-kea7p3igNAmdm3xxNSepmTQ3N0",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 10,
          name: "Drop 5 System",
          videoUrl: "https://www.youtube.com/watch?v=2JftMzYyKJ8",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 11,
          name: "Off-Season Classic",
          videoUrl: "https://www.youtube.com/watch?v=lDECBe_lphU",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 12,
          name: "Look Like a Pro",
          videoUrl: "https://www.youtube.com/watch?v=zXB7QnBK9GQ",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 13,
          name: "The Total Package",
          videoUrl: "https://www.youtube.com/watch?v=ZKME0gKMAzU",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 14,
          name: "Military Athlete Workout",
          videoUrl: "https://www.youtube.com/watch?v=kyaexwy53Rw",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 15,
          name: "4 Week Advanced Plyometric",
          videoUrl:
            "https://www.youtube.com/watch?v=lSRYJkCjrhs&list=PLxlwFcWtExicDKHy9BWPeJoS0McSbJHBO",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 16,
          name: "4 Week Intermediate Plyometric",
          videoUrl: "https://www.youtube.com/watch?v=FRxTPuYC4I8",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 17,
          name: "Rapid HIIT Cardio Workouts",
          videoUrl: "https://www.youtube.com/watch?v=7-q3m6y1VWo",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 18,
          name: "Convenient Cardio: Killer Workout Plan",
          videoUrl:
            "https://www.youtube.com/watch?v=3BzxxrF9aHM&list=PLxlwFcWtExicDKHy9BWPeJoS0McSbJHBO&index=7",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 19,
          name: "The Bear Barbell Complex",
          videoUrl: "https://www.youtube.com/watch?v=-N5mI9-oFvM",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${dumbbell}`,
        },
        {
          id: 20,
          name: "Yin Yoga Training",
          videoUrl:
            "https://www.youtube.com/watch?v=pGRnHX-ksKw&fbclid=IwAR3tOBaHWLmSxc0tF0dkBTUWb6l-NYlZqOdw9c6d_I40lXQ06L3OmdIQOYQ",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${yogaPos}`,
        },
        {
          id: 21,
          name: "Transformational Hatha Vinyasa",
          videoUrl: "https://www.youtube.com/watch?v=l0SYxJJVgEQ",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${yogaPos}`,
        },
        {
          id: 22,
          name: "Multi Style Yoga Training",
          videoUrl: "https://www.youtube.com/watch?v=s_OAOw-lS7k",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${yogaPos}`,
        },
        {
          id: 23,
          name: "Self Paced Yoga Training",
          videoUrl: "https://www.youtube.com/watch?v=zeN-gsQ3jw8",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${yogaPos}`,
        },
        {
          id: 24,
          name: "Reformer Workout Plan",
          videoUrl:
            "https://www.youtube.com/watch?v=mZdkRwXVWbM&fbclid=IwAR2WmWJxEYd3bdw3dEbfpW9afBJJdlLKQyv4uq-Dvgm_9xvJX60eFECFi7Q",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${pilatesPos}`,
        },
        {
          id: 25,
          name: "Connected Mat Workout",
          videoUrl:
            "https://www.youtube.com/watch?v=okyKIeI54V4&fbclid=IwAR2dOCaxzRmA8mP8RwoMXiTaruWqvU1rkOHkRlizYSh0Jsf0F1LWCnfBPAw",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${pilatesPos}`,
        },
        {
          id: 26,
          name: "Double Trouble Foot Workout",
          videoUrl: "https://www.youtube.com/watch?v=2Nb9QPJBG6E",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${pilatesPos}`,
        },
        {
          id: 27,
          name: "Ballet Barre Workout",
          videoUrl: "https://www.youtube.com/watch?v=hDtUlIyMQNo",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${pilatesPos}`,
        },
        {
          id: 28,
          name: "Centering Reformer Flow",
          videoUrl: "https://www.youtube.com/watch?v=izrsnXYsdD4",
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
          imageUrl: `${pilatesPos}`,
        },
      ],
    };
  }

  render() {
    const { match } = this.props;
    let product = this.state.programs.find(
      (p) => p.id == match.params.productId
    );
    let productData;
    if (product)
      productData = (
        <div className="product">
          <div>
            <h1 className="product-title"> {product.name} </h1>
          </div>
          <div className="product-details">
            <div>
              <ReactPlayer url={`${product.videoUrl}`} />
            </div>
            <h3
              className="product-description"
              style={{
                backgroundImage: `url(${product.imageUrl})`,
                width: "450px",
                height: "450px",
                opacity: 0.8,
              }}
            >
              {" "}
              {product.description}{" "}
            </h3>
          </div>
        </div>
      );
    else
      productData = <h2 className="sorry"> Sorry. Product doesn't exist </h2>;
    return <div>{productData}</div>;
  }
}

export default ProductDetails;
