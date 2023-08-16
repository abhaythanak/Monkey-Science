

const ParkingForm = ({ parkCar, parkBike }) => {
  return (
    <div className="btnContainer">
      <button className="ParkCar" onClick={parkCar}>Park Car</button>
      <button className="ParkBike" onClick={parkBike}>Park Bike</button>
    </div>
  );
};

export default ParkingForm
// ...
