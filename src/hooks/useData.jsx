import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

function useData() {
  const {user}=useContext(AuthContext)

  const {data,isLoading,refetch}=  useQuery({
        queryKey:["Lists"],
        queryFn: async()=>{
            const res= await fetch(`https://ninja-explore-hub-server.vercel.app/myLists/${user.email}`)
            const data= await res.json();
            return data
        }
    })
  return {data,isLoading,refetch}
}

export default useData