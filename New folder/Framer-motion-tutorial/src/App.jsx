import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion,AnimatePresence ,MotionConfig, useAnimationControls, useInView, useScroll, useSpring, useTransform} from 'framer-motion'
import { BlockInTextExample } from './components/BlockInTextExample'


function App() {
  const [isVisible, setIsVisible] = useState(true)
  const controls = useAnimationControls()

  const handleClick = () => {
    controls.start("flip");
  };

  const ref = useRef(null)
  const isInview = useInView(ref, {once:true});

  useEffect(()=>{
    console.log("Is in view ->", isInview);
  }, [isInview]);

  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(scrollYProgress,[0,1],["rgb(86,1,245)","rgb(1,245,13)"])


  return (
    <>
      <div>

        <motion.div
        style={{
          // scaleX: scrollYProgress,
          scaleX,
          transformOrigin:"left",
          // background:"blue",
          background,
          position:"sticky",
          top:0,
          width:"100%",
          height:"20px",

        }} />
        <div
        style={{maxWidth:"700px",
          margin:"auto",
          padding: "1.2rem",
        }}>

          
          
          

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque atque ipsa dolore maxime blanditiis officiis, reprehenderit fugit distinctio voluptatum exercitationem facere, at voluptas natus cupiditate amet. In, quas. Quidem, deserunt.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur dicta, ipsum illo deserunt doloremque tenetur id corporis illum at repellat sint ullam beatae unde eveniet quis. Velit placeat qui architecto!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, autem accusantium maxime aut qui, numquam reprehenderit aperiam, accusamus nam vitae porro incidunt placeat architecto! Error adipisci nisi eos doloremque laborum!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ipsum eveniet aut eligendi voluptate veniam magnam iure quibusdam vel sed. Perspiciatis, itaque? Nostrum minus libero explicabo eaque aspernatur a sint?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, illo at. Vitae ipsam reprehenderit obcaecati iusto quidem delectus magnam minus, culpa quasi temporibus ab, fugiat quis, amet sunt? Doloremque, id.

          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quos eveniet perspiciatis iste eius, voluptatem sint molestias rem, commodi hic ducimus fugiat, similique consequuntur eligendi et voluptate quisquam nobis aut.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus natus error, molestias, optio voluptas esse rem odio doloremque aliquam exercitationem praesentium. Delectus quos, tempore accusantium mollitia maxime iste quam deleniti.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, vel iste? Nisi, amet! Cum sit inventore molestiae ratione voluptatem, officia numquam quis nihil cupiditate dolorum fugiat perferendis, quod autem consequuntur?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, iusto similique cumque temporibus corporis veritatis quae architecto accusantium neque ullam exercitationem earum et eaque nisi laboriosam quas impedit tempora quia!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eos necessitatibus nostrum harum perferendis, molestiae officiis, excepturi eveniet accusantium natus repellendus, quo eum odit veniam nisi ipsam suscipit! Optio, distinctio.

          </p>
        
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur nulla, eius consequatur debitis autem quibusdam error nam hic velit rerum ratione unde modi perferendis magni ipsam numquam assumenda at?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur praesentium iure ducimus. Provident debitis repudiandae voluptas vel! Nesciunt mollitia aperiam ducimus sunt illum sed, cumque, voluptatem aliquid, nobis minus modi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae nobis eligendi fugit consequuntur expedita ea illum, officia molestias soluta necessitatibus consectetur aut nihil porro fugiat? Consequuntur debitis assumenda vero!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores delectus at quasi, id dolor quidem nisi modi, quia quam repellendus porro quo eveniet dicta rem? Perferendis quisquam aspernatur et neque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem, nisi et natus earum cumque voluptatum laborum fugit dolores exercitationem sequi nesciunt dolore ducimus aperiam beatae quod est excepturi labore!

          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus maiores officia. Quaerat asperiores doloribus suscipit deleniti. Saepe, esse! Suscipit vitae incidunt eligendi amet nemo. Ratione deserunt fuga fugiat beatae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla cupiditate ipsa vero reprehenderit consequuntur ipsum. Amet veniam enim officiis eveniet recusandae velit adipisci harum saepe quibusdam, nam molestiae debitis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolorem quos tempora fugiat dolorum consectetur expedita. Excepturi, fugiat sint voluptas, accusamus praesentium error illum laborum at doloremque optio odio hic.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi vitae qui at officiis ducimus a corrupti dolores explicabo tempora provident, sapiente et modi officia sint nisi assumenda aperiam voluptatum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex nam aperiam, obcaecati dicta corrupti quidem quod aliquam esse laborum, minus veniam rerum sequi incidunt inventore soluta dolorem amet eius?

          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus maiores officia. Quaerat asperiores doloribus suscipit deleniti. Saepe, esse! Suscipit vitae incidunt eligendi amet nemo. Ratione deserunt fuga fugiat beatae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla cupiditate ipsa vero reprehenderit consequuntur ipsum. Amet veniam enim officiis eveniet recusandae velit adipisci harum saepe quibusdam, nam molestiae debitis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolorem quos tempora fugiat dolorum consectetur expedita. Excepturi, fugiat sint voluptas, accusamus praesentium error illum laborum at doloremque optio odio hic.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi vitae qui at officiis ducimus a corrupti dolores explicabo tempora provident, sapiente et modi officia sint nisi assumenda aperiam voluptatum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex nam aperiam, obcaecati dicta corrupti quidem quod aliquam esse laborum, minus veniam rerum sequi incidunt inventore soluta dolorem amet eius?

          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus maiores officia. Quaerat asperiores doloribus suscipit deleniti. Saepe, esse! Suscipit vitae incidunt eligendi amet nemo. Ratione deserunt fuga fugiat beatae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla cupiditate ipsa vero reprehenderit consequuntur ipsum. Amet veniam enim officiis eveniet recusandae velit adipisci harum saepe quibusdam, nam molestiae debitis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolorem quos tempora fugiat dolorum consectetur expedita. Excepturi, fugiat sint voluptas, accusamus praesentium error illum laborum at doloremque optio odio hic.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi vitae qui at officiis ducimus a corrupti dolores explicabo tempora provident, sapiente et modi officia sint nisi assumenda aperiam voluptatum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex nam aperiam, obcaecati dicta corrupti quidem quod aliquam esse laborum, minus veniam rerum sequi incidunt inventore soluta dolorem amet eius?

          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus maiores officia. Quaerat asperiores doloribus suscipit deleniti. Saepe, esse! Suscipit vitae incidunt eligendi amet nemo. Ratione deserunt fuga fugiat beatae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla cupiditate ipsa vero reprehenderit consequuntur ipsum. Amet veniam enim officiis eveniet recusandae velit adipisci harum saepe quibusdam, nam molestiae debitis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolorem quos tempora fugiat dolorum consectetur expedita. Excepturi, fugiat sint voluptas, accusamus praesentium error illum laborum at doloremque optio odio hic.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi vitae qui at officiis ducimus a corrupti dolores explicabo tempora provident, sapiente et modi officia sint nisi assumenda aperiam voluptatum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex nam aperiam, obcaecati dicta corrupti quidem quod aliquam esse laborum, minus veniam rerum sequi incidunt inventore soluta dolorem amet eius?

          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus maiores officia. Quaerat asperiores doloribus suscipit deleniti. Saepe, esse! Suscipit vitae incidunt eligendi amet nemo. Ratione deserunt fuga fugiat beatae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla cupiditate ipsa vero reprehenderit consequuntur ipsum. Amet veniam enim officiis eveniet recusandae velit adipisci harum saepe quibusdam, nam molestiae debitis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolorem quos tempora fugiat dolorum consectetur expedita. Excepturi, fugiat sint voluptas, accusamus praesentium error illum laborum at doloremque optio odio hic.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi vitae qui at officiis ducimus a corrupti dolores explicabo tempora provident, sapiente et modi officia sint nisi assumenda aperiam voluptatum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex nam aperiam, obcaecati dicta corrupti quidem quod aliquam esse laborum, minus veniam rerum sequi incidunt inventore soluta dolorem amet eius?

          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus maiores officia. Quaerat asperiores doloribus suscipit deleniti. Saepe, esse! Suscipit vitae incidunt eligendi amet nemo. Ratione deserunt fuga fugiat beatae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla cupiditate ipsa vero reprehenderit consequuntur ipsum. Amet veniam enim officiis eveniet recusandae velit adipisci harum saepe quibusdam, nam molestiae debitis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolorem quos tempora fugiat dolorum consectetur expedita. Excepturi, fugiat sint voluptas, accusamus praesentium error illum laborum at doloremque optio odio hic.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi vitae qui at officiis ducimus a corrupti dolores explicabo tempora provident, sapiente et modi officia sint nisi assumenda aperiam voluptatum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex nam aperiam, obcaecati dicta corrupti quidem quod aliquam esse laborum, minus veniam rerum sequi incidunt inventore soluta dolorem amet eius?

          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus maiores officia. Quaerat asperiores doloribus suscipit deleniti. Saepe, esse! Suscipit vitae incidunt eligendi amet nemo. Ratione deserunt fuga fugiat beatae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla cupiditate ipsa vero reprehenderit consequuntur ipsum. Amet veniam enim officiis eveniet recusandae velit adipisci harum saepe quibusdam, nam molestiae debitis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolorem quos tempora fugiat dolorum consectetur expedita. Excepturi, fugiat sint voluptas, accusamus praesentium error illum laborum at doloremque optio odio hic.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi vitae qui at officiis ducimus a corrupti dolores explicabo tempora provident, sapiente et modi officia sint nisi assumenda aperiam voluptatum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex nam aperiam, obcaecati dicta corrupti quidem quod aliquam esse laborum, minus veniam rerum sequi incidunt inventore soluta dolorem amet eius?

          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus maiores officia. Quaerat asperiores doloribus suscipit deleniti. Saepe, esse! Suscipit vitae incidunt eligendi amet nemo. Ratione deserunt fuga fugiat beatae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla cupiditate ipsa vero reprehenderit consequuntur ipsum. Amet veniam enim officiis eveniet recusandae velit adipisci harum saepe quibusdam, nam molestiae debitis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolorem quos tempora fugiat dolorum consectetur expedita. Excepturi, fugiat sint voluptas, accusamus praesentium error illum laborum at doloremque optio odio hic.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi vitae qui at officiis ducimus a corrupti dolores explicabo tempora provident, sapiente et modi officia sint nisi assumenda aperiam voluptatum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex nam aperiam, obcaecati dicta corrupti quidem quod aliquam esse laborum, minus veniam rerum sequi incidunt inventore soluta dolorem amet eius?

          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus maiores officia. Quaerat asperiores doloribus suscipit deleniti. Saepe, esse! Suscipit vitae incidunt eligendi amet nemo. Ratione deserunt fuga fugiat beatae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla cupiditate ipsa vero reprehenderit consequuntur ipsum. Amet veniam enim officiis eveniet recusandae velit adipisci harum saepe quibusdam, nam molestiae debitis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolorem quos tempora fugiat dolorum consectetur expedita. Excepturi, fugiat sint voluptas, accusamus praesentium error illum laborum at doloremque optio odio hic.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi vitae qui at officiis ducimus a corrupti dolores explicabo tempora provident, sapiente et modi officia sint nisi assumenda aperiam voluptatum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex nam aperiam, obcaecati dicta corrupti quidem quod aliquam esse laborum, minus veniam rerum sequi incidunt inventore soluta dolorem amet eius?

          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus maiores officia. Quaerat asperiores doloribus suscipit deleniti. Saepe, esse! Suscipit vitae incidunt eligendi amet nemo. Ratione deserunt fuga fugiat beatae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla cupiditate ipsa vero reprehenderit consequuntur ipsum. Amet veniam enim officiis eveniet recusandae velit adipisci harum saepe quibusdam, nam molestiae debitis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolorem quos tempora fugiat dolorum consectetur expedita. Excepturi, fugiat sint voluptas, accusamus praesentium error illum laborum at doloremque optio odio hic.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi vitae qui at officiis ducimus a corrupti dolores explicabo tempora provident, sapiente et modi officia sint nisi assumenda aperiam voluptatum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex nam aperiam, obcaecati dicta corrupti quidem quod aliquam esse laborum, minus veniam rerum sequi incidunt inventore soluta dolorem amet eius?

          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus maiores officia. Quaerat asperiores doloribus suscipit deleniti. Saepe, esse! Suscipit vitae incidunt eligendi amet nemo. Ratione deserunt fuga fugiat beatae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla cupiditate ipsa vero reprehenderit consequuntur ipsum. Amet veniam enim officiis eveniet recusandae velit adipisci harum saepe quibusdam, nam molestiae debitis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolorem quos tempora fugiat dolorum consectetur expedita. Excepturi, fugiat sint voluptas, accusamus praesentium error illum laborum at doloremque optio odio hic.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi vitae qui at officiis ducimus a corrupti dolores explicabo tempora provident, sapiente et modi officia sint nisi assumenda aperiam voluptatum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex nam aperiam, obcaecati dicta corrupti quidem quod aliquam esse laborum, minus veniam rerum sequi incidunt inventore soluta dolorem amet eius?

          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus maiores officia. Quaerat asperiores doloribus suscipit deleniti. Saepe, esse! Suscipit vitae incidunt eligendi amet nemo. Ratione deserunt fuga fugiat beatae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla cupiditate ipsa vero reprehenderit consequuntur ipsum. Amet veniam enim officiis eveniet recusandae velit adipisci harum saepe quibusdam, nam molestiae debitis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolorem quos tempora fugiat dolorum consectetur expedita. Excepturi, fugiat sint voluptas, accusamus praesentium error illum laborum at doloremque optio odio hic.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi vitae qui at officiis ducimus a corrupti dolores explicabo tempora provident, sapiente et modi officia sint nisi assumenda aperiam voluptatum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex nam aperiam, obcaecati dicta corrupti quidem quod aliquam esse laborum, minus veniam rerum sequi incidunt inventore soluta dolorem amet eius?

          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus maiores officia. Quaerat asperiores doloribus suscipit deleniti. Saepe, esse! Suscipit vitae incidunt eligendi amet nemo. Ratione deserunt fuga fugiat beatae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla cupiditate ipsa vero reprehenderit consequuntur ipsum. Amet veniam enim officiis eveniet recusandae velit adipisci harum saepe quibusdam, nam molestiae debitis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolorem quos tempora fugiat dolorum consectetur expedita. Excepturi, fugiat sint voluptas, accusamus praesentium error illum laborum at doloremque optio odio hic.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi vitae qui at officiis ducimus a corrupti dolores explicabo tempora provident, sapiente et modi officia sint nisi assumenda aperiam voluptatum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex nam aperiam, obcaecati dicta corrupti quidem quod aliquam esse laborum, minus veniam rerum sequi incidunt inventore soluta dolorem amet eius?

          </p>

        </div>
      </div>
    



      <div
      style={{
        // display: 'grid',
        // placeContent: 'center',
        height: "150vh",
        // gap: '0.8rem',
      }}
      />

        <motion.div
        style={{height:"100vh", background:"black"}}
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        />

        <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInview ? "blue": "red",
          transition: "1s backgroud",
        }} />
       

      <button
      onClick={handleClick}
      >Flip it!</button>
      <motion.div
      style={{
        width: '150px',
        height: '150px',
        background: 'white',
      }}
      variants={{
        initial: {
          rotate: "0deg",
        },
        flip:{
          rotate: "360deg",
        },
      }}
      initial="initial"
      animate={controls}
      ></motion.div>



      <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      >

        <motion.button 
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95, rotate:"2.5deg"}}
        
        className='example-btn'>Click me!</motion.button>


        <motion.button 
        whileHover={{scale: 1.15}}
        whileTap={{scale: 0.85, rotate:"-2.5deg"}}
      
        style={{backgroundColor: 'red'}}
        className='example-btn'>Click me!</motion.button>
      </MotionConfig>


      <motion.button
      onClick={() => setIsVisible(!isVisible)} 
      className='example-btn'
      layout
      >Show/Hide</motion.button>

      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
          initial={{
            rotate: "0deg",
            scale: 0,
            y: 0
          }}
          animate={{
            rotate: "180deg",
            scale: 1,
            y: [0,150,-150,-150,0]
          }}
          exit={{
            rotate: "0deg",
            scale: 0,
            y: 0
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            times: [0,0.25,0.5,0.85,1],
          }}
          style={{
            width: '150px',
            height: '150px',
            background:"white"
            }}></motion.div>
        )}
      </AnimatePresence>

      

    </>
  )
}

export default App
