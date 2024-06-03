import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useWishlist = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: wishlist = [] } = useQuery({
        queryKey: ["wishlist"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/wishlist`)
            return res.data
        }
    })
    return [wishlist, refetch]
};

export default useWishlist;