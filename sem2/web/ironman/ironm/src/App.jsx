import { useState } from 'react'
import './App.css'
import pic from './assets/im.jpg';



function App() {

  function ContentBox(){
    const contents = [
      {id: 1, title: "What's a statue?", body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, neque?"},
      {id: 2, title: "How to display?", body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, neque?"},
      {id: 3, title: "Meet collectors", body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, neque?" },
      {id: 4, title: "Start your journey", body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, neque?"}
    ];

    return(
      <div className='bar'>
        {contents.map((content) => (
        <div key={content.id} className='box'>
          <img className='icon' src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQwNiAzNjFjOC4yODQgMCAxNS02LjcxNiAxNS0xNSAwLTU4LjQ0OS00Ny4xMDMtMTA2LTEwNS0xMDZoLTE1di0xNS4wNThjMTQuOTU2LTExLjI1NiAyNS41OTMtMjcuOTU3IDI4LjkwNy00Ny4xNDEgMTguMDI5LTUuODcxIDMxLjA5My0yMi44MzkgMzEuMDkzLTQyLjgwMXYtMzBjMC01Ny44OTctNDcuMTAzLTEwNS0xMDUtMTA1cy0xMDUgNDcuMTAzLTEwNSAxMDV2MzBjMCAxOS45NjIgMTMuMDY0IDM2LjkzIDMxLjA5MyA0Mi44MDEgMy4zMTQgMTkuMTg1IDEzLjk1MiAzNS44ODUgMjguOTA3IDQ3LjE0MXYxNS4wNThoLTE1Yy01Ny44OTcgMC0xMDUgNDcuNTUxLTEwNSAxMDYgMCA4LjI4NCA2LjcxNiAxNSAxNSAxNSAzNi4yODkgMCA2Ni42MzQgMjYuMjUzIDczLjUyNiA2MWgtNDMuNTI2Yy04LjI4NCAwLTE1IDYuNzE2LTE1IDE1djYwYzAgOC4yODQgNi43MTYgMTUgMTUgMTVoMjQwYzguMjg0IDAgMTUtNi43MTYgMTUtMTV2LTYwYzAtOC4yODQtNi43MTYtMTUtMTUtMTVoLTQzLjUyNmM2Ljg5Mi0zNC43NDcgMzcuMjM3LTYxIDczLjUyNi02MXptLTE1MC0zMzFjMzYuOTg4IDAgNjcuNzg3IDI2LjkyMSA3My44ODQgNjIuMTk0LS41My0uMTcyLTEuMDYyLS4zMzgtMS42MDEtLjQ5MS0yLjY2Ny02LjIwNS03LjIwNC0xMS41MzUtMTMuMTktMTUuMjM2LTkuOTYyLTYuMTU1LTIyLjE2LTYuNzA0LTMyLjYzNC0xLjQ2OC0xOS42MjYgOS44MTMtNDEuNTk5IDE1LTYzLjU0MSAxNWgtMjIuOTE4Yy00Ljg0NSAwLTkuNTA5Ljc3OS0xMy44ODUgMi4yMDIgNi4wOTMtMzUuMjc1IDM2Ljg5NC02Mi4yMDEgNzMuODg1LTYyLjIwMXptLTYwIDEyMGMtOC4yNzEgMC0xNS02LjcyOS0xNS0xNXM2LjcyOS0xNSAxNS0xNWgyMi45MThjMjYuNTc2IDAgNTMuMTg4LTYuMjgyIDc2Ljk1Ny0xOC4xNjcgMS4xMDQtLjU1MiAyLjM5NS0uNDk2IDMuNDQ1LjE1NCAxLjA1Mi42NSAxLjY4IDEuNzc2IDEuNjggMy4wMTMgMCA4LjI4NCA2LjcxNiAxNSAxNSAxNSA4LjI3MSAwIDE1IDYuNzI5IDE1IDE1cy02LjcyOSAxNS0xNSAxNWMtOC4yODQgMC0xNSA2LjcxNi0xNSAxNSAwIDI0LjgxMy0yMC4xODcgNDUtNDUgNDVzLTQ1LTIwLjE4Ny00NS00NWMwLTguMjg0LTYuNzE2LTE1LTE1LTE1em0xNjUgMzMyaC0yMTB2LTMwaDIxMHptLTE1MS4wNDgtNjBjLTYuNDgzLTQ2LjAxLTQyLjMzOC04Mi42LTg3LjcyNS04OS43MzYgNi4zOTgtMzUuMzczIDM3LjA0NC02Mi4yNjQgNzMuNzczLTYyLjI2NGgzMGM4LjI4NCAwIDE1LTYuNzE2IDE1LTE1di0xNi41MjZjNC44NS45ODkgOS44NjIgMS41MjYgMTUgMS41MjZzMTAuMTUtLjUzNyAxNS0xLjUyNnYxNi41MjZjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNWgzMGMzNi43MjkgMCA2Ny4zNzUgMjYuODkxIDczLjc3MiA2Mi4yNjQtNDUuMzg2IDcuMTM2LTgxLjI0MSA0My43MjYtODcuNzI0IDg5LjczNnoiLz48L2c+PC9zdmc+" alt="icon" />
          <h2 className='font-l'>{content.title}</h2>
          <p className='font-s'>{content.body}</p>
        </div>
        ))}
    </div>
    )
  }
  

  function Images(){
    const images = [
      {id: 1, src: pic , alt: 'Ironman', },
      {id: 2, src: pic , alt: 'Ironman', },
      {id: 3, src: pic , alt: 'Ironman', }
    ];

    return(
      <div className='image-container'>
          {images.map((image) => (
            <img 
            key={image.id}
            className='irm'
            src={image.src}
            alt={image.alt}
            />
          ))}
        </div>
    )
  }
  

  return (
    <>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swaphttps://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
    </head>

      <div className='container'>
        <div className='intro'>
          <h4 className='font-m'>Happy collecting</h4>
          <h3 className='font-xl'>TSC Channel</h3>
          <h2 className='font-l'>The source for your statue journey</h2>
          <p className='font-s'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quisquam eum officiis ducimus nesciunt repudiandae suscipit? </p>
          <form>
                <input type="text" placeholder="E-mail address" className='inpbox'/>
                <input type="button" value="Join US!" className='button' />
          </form>
        </div>

        <Images />

        <ContentBox />
        
       
        
      </div>
    </>
  );
}

export default App;
