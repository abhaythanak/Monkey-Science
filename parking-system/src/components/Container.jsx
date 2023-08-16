

export default function Container() {


    function updateSelectedCount() {
        const vehicleSelect = document.getElementById('vehicle')
        const count = document.getElementById('count')
        const total = document.getElementById('total')

        let ticketPrice = +vehicleSelect.value

        const selectedLots = document.querySelectorAll('.row .seat.selected')

        const selectedLotCount = selectedLots.length
        
        count.innerText = selectedLotCount;
        total.innerText = selectedLotCount * ticketPrice
    }  

    // park bike
    let statusColor = 'green';
    let statusSymbol = '✓';
  
    if (lot === 'car' || lot === 'bike2') {
      statusColor = 'red';
      statusSymbol = 'X';
    } else if (lot === 'bike1') {
      statusColor = 'orange';
      statusSymbol = '+';
    }


const LotSelection = (e)=>{
    if(e.target.classList.contains('seat') && 
    !e.target.classList.contains('occupied')
    ){
        e.target.classList.toggle('selected')
    }
    updateSelectedCount()
}

    return(
        <>
        <div className="container" onClick={LotSelection}>
            <div className="row">
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
            </div>
            <div className="row" style={{marginBottom:"25px"}}>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row" style={{marginBottom:"25px"}}>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied" ></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
        </div>
        <p className="text">You have selected <span id="count">0</span>lot for price of <span id="total">0</span>Rs</p>
        </>
    )   
}
