import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "benjamin bushman",
          "a web developer",
          "a tech enthusiast",
          "a freelancer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
