import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Personal } from "../types/personal-schema";
import { Payout } from "../types/payout-schema";

type SummaryContext = {
    personalInfo?: Personal
    setPersonalInfo: (personalInfo: Personal) => void
    payoutInfo?: Payout
    setPayoutInfo: (payoutInfo: Payout) => void
}

const SummaryContext = createContext<SummaryContext>({personalInfo: undefined, setPersonalInfo: () => {}, payoutInfo: undefined, setPayoutInfo: () => {}})

const SummaryContextProvider = ({children} : PropsWithChildren) => {
    const [personalInfo, setPersonalInfo] = useState<Personal>()
    const [payoutInfo, setPayoutInfo] = useState<Payout>()
    return (
        <SummaryContext.Provider value={{personalInfo, setPersonalInfo,payoutInfo, setPayoutInfo}}>
            {children}
        </SummaryContext.Provider>
    )
}

export default SummaryContextProvider

export const useSummary = () => useContext(SummaryContext)