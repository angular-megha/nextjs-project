// import Video from "next-video"
// import myVideo from "../../videos/3192305-uhd_3840_2160_25fps.mp4"


//note : if video link in public folder no need to assign there path, directly should render on it


const UseVideoModule = () => {
  return (
    <video width="320" height="240" controls preload="none">
        <source src='/3192305-uhd_3840_2160_25fps.mp4' type="video/mp4"  /> 
        <track
        src='path/to/your/subtitles.vtt'
        kind="subtitles"
        srcLang="en"
        label="English"
      />
        Your browser does not support the video tag.
    </video>

  )
}

export default UseVideoModule