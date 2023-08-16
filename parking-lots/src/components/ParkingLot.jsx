

const ParkingLot = ({ lot, takeVehicle }) => {
  let statusColor = 'green';
  let statusSymbol = '✓';
  let statusText = "Empty";

  if (lot === 'car') {
    statusColor = 'red';
    statusSymbol = 'X';
    statusText = 'Car Parked';
  } else if (lot === 'bike2') {
    statusColor = 'red';
    statusSymbol = 'X';
    statusText = 'Two Bikes Parked';
  } else if (lot === 'bike1') {
    statusColor = 'orange';
    statusSymbol = '+';
    statusText = 'One Bike Parked';
  }

  return (
    <div className="container">
      <div className={`parking-lot ${lot}`} onClick={()=>takeVehicle(lot)} style={{ backgroundColor: statusColor }}>
      {statusSymbol}-{statusText}
    </div>
    </div>
  );
};

export default ParkingLot;
