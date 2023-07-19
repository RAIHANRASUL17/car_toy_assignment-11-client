import { useQuery } from "@tanstack/react-query";

const useMyToyUpdate = () => {

  
  const { data: update = [], isLoading: loading, refetch,} = useQuery({
    
    queryKey: ["updated"],

    queryFn: async () => {
      if(!id){
        return []
      }
      const res = await fetch(`https://car-toy-assignment-11-server.vercel.app/updated/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(objectMaking),
      });
      return res.json();
    },
  });
  return [update, loading, refetch];
};

export default useMyToyUpdate;
