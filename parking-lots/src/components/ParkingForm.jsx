

const ParkingForm = ({ parkCar, parkBike }) => {
  return (
    <div>
      <button onClick={parkCar}>Park Car</button>
      <button onClick={parkBike}>Park Bike</button>
    </div>
  );
};

export default ParkingForm
// ...
