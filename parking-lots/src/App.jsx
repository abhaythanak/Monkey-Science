import { useState } from 'react';
import './App.css';
import ParkingLot from './components/ParkingLot';
import ParkingForm from './components/ParkingForm';

const App = () => {
 const initialParkingLots = new Array(25).fill("empty")


  const [parkingLots, setParkingLots] = useState(initialParkingLots);
  const [totalCharges, setTotalCharges] = useState(0);

  const CAR_CHARGE = 100; 
  const BIKE_CHARGE = 50; 

  const handleParkCar = () => {
    const emptyLotIndex = parkingLots.findIndex((lot) => lot === 'empty');

    if (emptyLotIndex !== -1) {
      const newParkingLots = [...parkingLots];
      newParkingLots[emptyLotIndex] = 'car';
      setParkingLots(newParkingLots);
      alert('Car parked successfully.');
    } else {
      alert('All parking lots are occupied.');
    }
  };

  const handleParkBike = () => {
    const bikeLotIndex = parkingLots.findIndex((lot) => lot === 'bike1');

    if (bikeLotIndex !== -1) {
      const newParkingLots = [...parkingLots];
      if (newParkingLots[bikeLotIndex] === 'bike1') {
        newParkingLots[bikeLotIndex] = 'bike2';
        setParkingLots(newParkingLots);  
        alert('Bike parked successfully.');
        return;
      }
    }

    const emptyLotIndex = parkingLots.findIndex((lot) => lot === 'empty');

    if (emptyLotIndex !== -1) {
      const newParkingLots = [...parkingLots];
      newParkingLots[emptyLotIndex] = 'bike1';
      setParkingLots(newParkingLots);
      alert('Bike parked successfully.');
    } else {
      alert('All parking lots are occupied.');
    }
  };

  const takeVehicle = (lotType) => {
    const lotIndex = parkingLots.findIndex((lot) => lot === lotType);

    if (lotIndex !== -1) {
      const newParkingLots = [...parkingLots];
      newParkingLots[lotIndex] = 'empty';
      setParkingLots(newParkingLots);

      let fare = 0;
      if (lotType === 'car') {
        fare = CAR_CHARGE;
      } else if (lotType === 'bike1' ) {
        fare = BIKE_CHARGE;
      }
      else if ( lotType === 'bike2') {
        fare = BIKE_CHARGE * 2;
      }

      alert(`Your Parking Fees is - ${fare}Rs`)
      setTotalCharges( fare);
    }
  };

  return (
    <div className="App">
      <h1>Parking Reservation App</h1>
     <div className="parking-wrapper">
     <div className="parking-lot">
        {parkingLots.map((lot, index) => (
          <ParkingLot key={index} lot={lot} takeVehicle={takeVehicle} />
        ))}
      </div>
     </div>
      <ParkingForm parkCar={handleParkCar} parkBike={handleParkBike} />
      <div className='charges'>
        Total Charges: {totalCharges} Rs
      </div>
    </div>
  );
};

export default App;
