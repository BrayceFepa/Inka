import { Modal, useMantineTheme } from '@mantine/core';
import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import previewVideo from '../../assets/metrage pub bon small.mp4';
import 'react-html5video/dist/styles.css';
import thum from '../../assets/Inka-post.png'; 

function  ModalVideo({modalOpened, setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
          overlayBlur={3}
          size={550}
          opened={modalOpened}
          onClose={()=>setModalOpened(false)}
          
    >
      <Video
          autoPlay
          loop
          onCanPlayThrough={() => {
          console.log("video play")
      }}
      >
          <source src={previewVideo} type="video/webm" />
    </Video>
    </Modal>
  );
}

export default ModalVideo;








// // const ModalVideo = () => {
// //   return (
//       <Video
//           autoPlay
//           loop
//           onCanPlayThrough={() => {
//           console.log("video play")
//       }}
//       >
//           <source src={previewVideo} type="video/webm" />
//     </Video>    
// //   );
// // }

// // export default ModalVideo;