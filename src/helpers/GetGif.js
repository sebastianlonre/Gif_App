export const GetGif = async (category) =>{
    
    const apiKey = 'LGm2PamSdNrODWuqCy15gngDKQLgQAyx';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;

    try{

        const response = await fetch(url);
        const { data } = await response.json();

        const gifs = data.map((gif) => ({
          url: gif.images.fixed_height.url
        }));

      return gifs;

    }catch (e){
        console.e('Error in GetGif', e);
        return[];
    }
}