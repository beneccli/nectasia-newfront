
const ListVerticalFading = ({
  className = '',
  containerClassName = '',
  list = [],
  duration = 10,
  slideDuration = 0.6
}) => {

  let singleDuration = 100 / list.length;
  let firstStep = slideDuration * singleDuration / duration;
  let secondStep = singleDuration - firstStep;
  let delay = (i) => duration / list.length * (i-1);

  return (
    <div className={`relative left ${containerClassName}`}>
      {list.map((text, key) =>
        <div className={`${className} animated-text animated-text-${key+1} w-full`} key={key}>
          <h1>
            {text}
          </h1>
        </div>
      )}
      <style jsx>{`
        .animated-text { @apply absolute opacity-0 }
        .animated-text-1 { animation: ${duration}s ease-in-out ${delay(1)}s infinite running animate_text }
        .animated-text-2 { animation: ${duration}s ease-in-out ${delay(2)}s infinite running animate_text }
        .animated-text-3 { animation: ${duration}s ease-in-out ${delay(3)}s infinite running animate_text }
        .animated-text-4 { animation: ${duration}s ease-in-out ${delay(4)}s infinite running animate_text }
        .animated-text-5 { animation: ${duration}s ease-in-out ${delay(5)}s infinite running animate_text }

        @keyframes animate_text {
          from { opacity: 0; transform: translateY(15px) }
          ${`${firstStep}%`}  { opacity: 1; transform: translateY(0) }
          ${`${secondStep}%`}  { opacity: 1; transform: translateY(0) }
          ${`${singleDuration}%`}   { opacity: 0; transform: translateY(-15px) }
          to   { opacity: 0; transform: translateY(-15px) }
        }
      `}</style>
    </div>
  )
};

export default ListVerticalFading;
