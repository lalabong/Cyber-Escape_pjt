import Video1 from "../Interactions/Video1"
// import Video2 from "../Interactions/Video2"

const Videos = ({ sequences, setSequences }: any) => {
  const url1 = "video/error1.mp4"
  // const url2 = "video/countdown.mp4"

  return (
    <>
      <Video1
        url={url1}
        position={[25.2, 5, -7]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[15, 4, 6]}
      />
      {/* <Video2
        url={url2}
        position={[-128.651, 3.5, 85.6]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[5, 2.7, 3]}
      /> */}
    </>
  )
}

export default Videos
