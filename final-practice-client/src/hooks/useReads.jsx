import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useReads = () => {
    // tanstack query
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { refetch, data: reads = [] } = useQuery({
        queryKey: ['reads', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/reads?email=${user.email}`)
            return res.data;
        }
    })
    return [reads, refetch]
};

export default useReads;


