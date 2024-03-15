/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Course = ({ course }) => {
    // console.log(course);
  const { name, description, photo, pricec, redit} = course;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
