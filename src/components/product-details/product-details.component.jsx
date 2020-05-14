import React from "react";
import ReactPlayer from "react-player";
import dumbbell from "./../../assets/dumbell.png";
import "./product-details.styles.scss";

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      programs: [
        {
          id: 1,
          name: "Fight to be Fit Workout Plan",
          videoUrl: 'https://www.youtube.com/watch?v=eBq1JEb2Np8&fbclid=IwAR3Xo1JQpBrKfCXtAGG1_R5iB47w_VKpGF__nLojf_dCAMBoKS9asyKWEcI',
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
        },
        {
          id: 2,
          name: "Body Fat Beat Down Workout Plan",
          videoUrl: 'https://www.youtube.com/watch?v=Tt8ejc-ikZ4&fbclid=IwAR2c0lQuZTgg2NQkdy25vNEeEdJoeUk-6I6DO_qYLMfE9OKcjNs-FLutsp4',
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
        },
        {
          id: 3,
          name: "Livin' Lean Workout Plan",
          videoUrl: 'https://www.youtube.com/watch?v=eJupiv9tGcE',
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
        },
        {
          id: 4,
          name: "Body Fat Demolition Workout Plan",
          videoUrl: 'https://www.youtube.com/watch?v=SxroBCr_jKU',
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
        },
        {
          id: 5,
          name: "Train together, stay together Workout Plan",
          videoUrl: 'https://www.youtube.com/watch?v=covJQBGHTs4',
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
        },
        {
          id: 6,
          name: "The Fat Incinerator Workout Plan",
          videoUrl: 'https://www.youtube.com/watch?v=w0gbk3eQXJA',
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
        },
        {
          id: 7,
          name: "Tactical Tabata Workout Plan",
          videoUrl: 'https://www.youtube.com/watch?v=JAdz-AhVTRY',
          description: 
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
        },
        {
          id: 8,
          name: "High Definition Routine Workout Plan",
          videoUrl: 'https://www.youtube.com/watch?v=w29usY52ecg',
          description:
            "FB Blend is a fun, challenging, and flexible workout plan; you get to choose the length of your workouts each day, roughly 35 or 55 minutes a day, depending on your own schedule and energy levels. Each day of this program offers a unique workout - you'll never have to do the same video twice. It's a smart combination of HIIT, strength training, functional movement, Pilates, supersets, cardio, plyometrics, stretching, yoga and more. All you need is dumbbells and even if you don't have dumbbells, you can still get in a great workout using your own bodyweight.",
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
                backgroundImage: `url(${dumbbell})`,
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
    else productData = <h2> Sorry. Product doesn't exist </h2>;
    return <div>{productData}</div>;
  }
}

export default ProductDetails;
