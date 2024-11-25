import { AxiosError } from "axios";
import { useState } from "react"
import { toast } from "./use-toast";
import CallAPI from "@/api/CallAPI";
import { CallDetails } from "@/interfaces/Dashboard";

const useCallDetails = () => {
    const [loading, setLoading] = useState<Boolean>(false);
    const [error, setError] = useState<string | null>(null)
    const [callDetails, setCallDetails] = useState<CallDetails[] | null>()

    const fetchCallDetails = async (clientId: string) => {
        setLoading(true);
        setError(null);
        try {
            const data = await CallAPI.fetchCalls(clientId)
            console.log(data)
            if (data.status == 200) {
                setCallDetails(data.data.data)
            }
        } catch (err: unknown) {
            let error;
            if (err instanceof AxiosError) {
                error = err.response?.data?.message
            } else {
                error = "Failed to get call logs";
            }
            toast({
                description: error,
                variant: 'destructive',
            })
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return { fetchCallDetails, callDetails, loading, error }
}

export default useCallDetails;