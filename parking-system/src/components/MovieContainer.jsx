import Container from "./Container";

export default function MovieContainer() {

    return(
        <div className="body">
        <div className="movie-container">
            <label htmlFor="">Select Vehicle</label>
            <select name="" id="vehicle" >
                <option value="100">Car (100Rs)</option>
                <option value="50">Bike (50Rs)</option>
            </select>
        </div>
        <ul className="showcase">
            <li>
                <div className="seat"></div>
                <small>N/A</small>
            </li>
            <li>
                <div className="seat selected"></div>
                <small>Select</small>
            </li>
            <li>
                <div className="seat occupied"></div>
                <small>Occupied</small>
            </li>
        </ul>
        <Container />
       </div>
        
    )   
}
