import React from "react";
import "../Css/bootstrap.min.css";
import "../Css/car.card.css";
import img1 from '../Images/car1.jpg';
import img2 from '../Images/car2.jpg';
import img3 from '../Images/car3.jpg';
import img4 from '../Images/car4.jpg';
import img5 from '../Images/car5.jpg';

//getting data from parent and show
const CarCard = (props) => {

  const lists = props.lists.map((list, ida) => {
    let image ;
   switch(ida){
     case 0:
        image = img1;
      break;
      case 1:
        image = img2;
        break;
        case 2:
          image = img3;
          break;
          case 3:
          image = img4;
          break;
          case 4:
          image = img5;
          break;
      default:
        image=img4;
   }
    return (
      <React.Fragment>
      <div className="container ">
      <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
         <div className="card-h100" style={{ width: '25rem' }} key={`card${ida}`}>
             <img className="card-img-top" src={image}  width="100"  height="200" />
             <div className="card-body">
             <h5 className="card-title">{list.Make_Name}</h5>
             <p className="card-text">{list.Model_Name} </p>
             <p class="card-text">Type: {list.VehicleTypeName} </p>
                  <div className="btn-toolbar pull-right">
                    <button type="button" className="btn btn-primary mr-3">Buy Car</button>
                    <button type="button" className="btn btn-primary mr-3">Rent Car</button>
                   </div>
              </div>
              </div>
           </div>     
        </div>
     </div>
    
     
     </React.Fragment>
          
    );
  });
  return <div className="wrapper">{lists}</div>;
};

export default CarCard;
