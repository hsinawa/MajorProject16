import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import Loader from 'react-loader-spinner';
import useInterval from '@use-it/interval';
import { BrowserRouter , Route,Routes } from "react-router-dom";
import Result from './Result';
import Chart from './Chart';

let classifier;
const Prediction = () =>{

//     const videoRef = useRef();
//     const [start, setStart] = useState(false);
//     const [result, setResult] = useState([]);
//     const [loaded, setLoaded] = useState(false);
  
//     useEffect(() => {
//       classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/pjc08xM9K/model.json", () => {
//         navigator.mediaDevices
//           .getUserMedia({ video: true, audio: false })
//           .then((stream) => {
//             videoRef.current.srcObject = stream;
//             videoRef.current.play();
//             setLoaded(true);
//           });
//       });
//     }, []);
  
//     useInterval(() => {
//       if (classifier && start) {
//         classifier.classify(videoRef.current, (error, results) => {
//           if (error) {
//             console.error(error);
//             return;
//           }
//           setResult(results);
//           // console.log(results)
//         });
//       }
//     }, 500);
  
//     const toggle = () => {
//       setStart(!start);
//       setResult([]);
//     }

// console.log('The resul is', result[0])

// if(result[0]?.label==='Accident'  && result[0]?.confidence > 0.85 )
// {
//   alert('Calling SOS')
// }
  
    return (
      <div className="container">
         
         <h2>Accident Pred Page</h2>
        {/* <Loader
          type="Watch"
          color="#00BFFF"
          height={200}
          width={200}
          visible={!loaded}
          style={{display:'flex', justifyContent:'center', marginTop:'30px' }}
        />
        <div className="upper">
          <div className="capture">
            <video
              ref={videoRef}
              style={{ transform: "scale(-1, 1)" }}
              width="300"
              height="150"
            />
            {loaded && (
              <button onClick={() => toggle()}>
                {start ? "Stop" : "Start"}
              </button>
            )}
          </div>
          
        
          {result.length > 0 && (
            <div>
              <Chart data={result[0]} />
            </div>
          )}
        </div>
        {result.length > 0 && (
          <div className="results"  >
            <Result data={result} />
          </div>
        )}
   */}
  
  
  
  
  
  
  
      </div>
    );

}

export default Prediction