import Image from "next/image";

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos")
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return await res.json();
  
}

const UseDataFetching = async () => {
   const data = await getData()
    console.log("data:",data);

    const dummyImagePath = "/dummy.jpg";

  return (
    <>
    {data.map((photo, id) => (
      <div key={id}>
        <h1>{photo.title}</h1>
        <div>
          <img
            src={photo.url || dummyImagePath}
            alt={photo.title}
            width={150}
            height={150}
            
          />
        </div>
        <hr />
      </div>
    ))}
  </>
  )
}

export default UseDataFetching