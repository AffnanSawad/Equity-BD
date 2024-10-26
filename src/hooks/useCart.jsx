// api, axios (axios secure), tan stack 

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Authentications/Providers/Providers";

// using tenstack query ......

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useContext(AuthContext);

    
    // Refetch is Used to count adding cart item number in Dashboard

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch]
};

export default useCart;