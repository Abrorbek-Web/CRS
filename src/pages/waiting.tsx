// import Lottie from "react-lottie";
import animationPath from "../assets/waiting-animation.json";
import Timer from "../components/timer";

export function Waiting() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="bg-white pt-5 pb-2 text-center">
        <p className="text-2xl font-semibold mb-4">Account Approval Pending</p>
      </div>
      <div className="max-w-[400px] mx-auto mb-3">
        {/* <Lottie options={defaultOptions} /> */}
      </div>

      <div className="mb-12 pt-1">
        <Timer />
      </div>

      {/* <p className='max-w-[600px] mx-auto text-center mt-5 px-5'>
                Thank you for registering! Your account is urrently under review. Please wait for the admin to approve your registration. You will receive a notification once your account is approved. We appreciate your patience and understanding.
            </p> */}
    </>
  );
}

// const Timerf = ({ initialSeconds }) => {
//     const [seconds, setSeconds] = useState(initialSeconds);

//     useEffect(() => {
//       if (seconds > 0) {
//         const interval = setInterval(() => {
//           setSeconds(seconds => seconds - 1);
//         }, 1000);
//         return () => clearInterval(interval);
//       }
//     }, [seconds]);

//     return (
//       <div>
//         {seconds > 0 ? (
//           <h1>{seconds}</h1>
//         ) : (
//           <h1>Time's up!</h1>
//         )}
//       </div>
//     );
//   };
