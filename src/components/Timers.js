import React, { useEffect, useState } from "react";

export const Tt = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setSeconds((seconds) => seconds + 1),
      1000
    );
    return () => clearInterval(interval);
  }, []);
  return <h1>Seconds: {seconds}</h1>;
};
// export class Timers extends Component {

//   static propTypes = {}

//   return (
//     <h1>Seconds: {seconds}</h1>
//   )
// }

// export default Timers
