import { useState } from "react";
import Item from "./Item";



 
  return (
    <ul className="list-group">
      {FoodItems.map((item) => (
        <li> <span className={styles["kg-span"]}>{item}</span>
              <button
                className={`${styles.button} btn btn-info`}
              
              >
                Buy
              </button></li>
      
      ))}
    </ul>
  );


export default FoodItems;