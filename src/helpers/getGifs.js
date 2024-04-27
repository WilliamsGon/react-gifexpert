export const getGifs = async ( category ) => {

    console.log(category);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=HCfuXvmfz1pyfLCcqAJsQSa7r4ANR70k&q=${category}&limit=10`;
    const resp = await fetch(url);
    console.log(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));

    console.log(gifs);
    return gifs;
  }