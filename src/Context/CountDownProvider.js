import CountDownContext from "./CountDownContext";

const CountDownProvider = ({ children }) => {
    
    const ONE_MONTH_IN_MS = 31 * 24 * 60 * 60 * 1000;
    const SUNDAY_SIX_NOV = new Date(2022, 10, 9).getTime();
    const DateAfterOneMonth = SUNDAY_SIX_NOV + ONE_MONTH_IN_MS;

    return (
        <CountDownContext.Provider
        value={{ DateAfterOneMonth }}
        >
            {children}
        </CountDownContext.Provider>
    )

}

export default CountDownProvider;





