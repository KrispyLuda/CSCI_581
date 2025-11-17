import Squares from './flair/Squares.jsx';

import curve from './assets/output.jpg';

import one from './assets/ban1.jpg';
import two from './assets/ban2.jpg';
import three from './assets/ban3.jpg';
import four from './assets/ban4.jpg';
import five from './assets/ban5.jpg';


import personal1 from './assets/banana_background_output.jpg';
import personal2 from './assets/corner_output.jpg';

import before from './assets/banana_output.jpg';
import after from './assets/Banana-nms.jpg';



import pyto from './assets/Banana_pyt.jpg';

export default function project2() {
  return (
    <main>
<Squares 
        speed={0.5} 
        squareSize={35}
        direction='down' // up, down, left, right, diagonal
        borderColor='#0C61A1'
        hoverFillColor='#1E4366'
      />

      {/* Content wrapper so everything sits above the squares background */}
      <div className="relative z-20">
      <div style={{ backgroundColor: "#f0f0f0" }} className="flex flex-col items-center justify-center h-[20vh]">
        <h1 style={{ color: "black" , textAlign: "center"}} className="text-4xl font-bold">Project 3: Object Detection and Human–Object Interaction Analysis</h1>
        <p style={{ color: "black", textAlign: "center"}} className="text-lg text-gray-700">The goal of this project is to deepen your understanding of object detection pipelines and extend that knowledge to higher-level visual reasoning. </p>
      </div>
      <br />
{/* Part 1 */}
      <section>
        <div className=" max-w-4xl mx-auto">
          <h2 style={{ textAlign: "center" }}>Part 1: Lightweight Object Detection</h2>
          <p style={{ textAlign: "center" }}>Implement and train a lightweight detection model (SSD, Faster R-CNN with MobileNet, or YOLO). Object detection datasets are typically larger than the toy example datasets like MNIST used in image classification, here is a banana detection dataset that can be used, where the authors took photos of bananas and generated 1000 banana images with different rotations and sizes.<br /></p>
        </div>
      </section>

      <div className=" max-w-4xl mx-auto">
          <h2 style={{ textAlign: "center", alignItems: "center" }}>Training Loss Curves:</h2>
          {/* Image Here */}
<div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px", // spacing between images
        flexWrap: "wrap", // optional: wrap on small screens
      }}
    >
      <img
        src={curve}
        alt="curve"
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "3px",
          margin: "6px",
        }}
      />
    </div>

          <h2 style={{ textAlign: "center", alignItems: "center" }}>5 Sample Detections:</h2>
          {/* 5 images here */}
  <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1px", // spacing between images
        flexWrap: "wrap", // optional: wrap on small screens
      }}
    >
      <img
        src={one}
        alt="one"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "2px",
        }}
      />
      <img
        src={two}
        alt="two"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "2px",
        }}
      />
      <img
        src={three}
        alt="three"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "2px",
        }}
      />  
      <img
        src={four}
        alt="four"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "2px",
        }}
      />
       <img
        src={five}
        alt="five"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "2px",
        }}
      />
    </div>
          <h2 style={{ textAlign: "center", alignItems: "center" }}>Personal Image found online to test model:</h2>
          {/* image here */}
<div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px", // spacing between images
        flexWrap: "wrap", // optional: wrap on small screens
      }}
    >
      <img
        src={personal1}
        alt="personal1"
        style={{
          width: "350px",
          height: "350px",
          borderRadius: "3px",
          margin: "6px",
        }}
      />
      <img
        src={personal2}
        alt="personal2"
        style={{
          width: "350px",
          height: "350px",
          borderRadius: "3px",
          margin: "6px",
        }}
      />
    </div>
    <h4>These are the test images found online, both images were used in the model to detection bananas. both would be considered failure cases in my opinon, the image on the left does not clearly show box around each banana on the screen these may be becuase of the angle of the bananas. The image on the right has problems with mis identifing the bananas on the Image
        i think i big part of the failure case is the shade and color of the background, making the model assume that many bananas in the image.
    </h4>
        </div>
          
{/* Part 2 */}
 <section>
        <div className=" max-w-4xl mx-auto">
          <h2 style={{ textAlign: "center" }}> Part 2: Non-Maximum Suppression (NMS)</h2>
          <p style={{ textAlign: "center" }}>Implement NMS to process the object detector’s output. <br /></p>
        </div>
      </section>
<div className=" max-w-4xl mx-auto">
          <h2 style={{ textAlign: "center", alignItems: "center" }}>Before/After NMS(2 Images)</h2>
                                                                             <h3 style={{ textAlign: "center", alignItems: "center" }}>Before</h3>
<div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px", // spacing between images
        flexWrap: "wrap", // optional: wrap on small screens
      }}
    >
      <img
        src={before}
        alt="curve"
        style={{
          width: "400px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "6px",
        }}
      />
    </div>
                                                                  {/* AFTER */}
<h3 style={{ textAlign: "center", alignItems: "center" }}>After NMS</h3><div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px", // spacing between images
        flexWrap: "wrap", // optional: wrap on small screens
      }}
    >
      <img
        src={after}
        alt="curve"
        style={{
          width: "400px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "6px",
        }}
      />
    </div>

          <h2 style={{ textAlign: "center", alignItems: "center" }}>Pytorch's NMS implementation</h2>
          <h4 style={{ textAlign: "center", alignItems: "center" }}>NMS(Left Image) & Pytorch(Right Image)</h4>

          {/* 2 images here */}
<div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px", // spacing between images
        flexWrap: "wrap", // optional: wrap on small screens
      }}
    >
      <img
        src={after}
        alt="personal1"
        style={{
          width: "350px",
          height: "350px",
          borderRadius: "3px",
          margin: "6px",
        }}
      />
      <img
        src={pyto}
        alt="personal2"
        style={{
          width: "350px",
          height: "350px",
          borderRadius: "3px",
          margin: "6px",
        }}
      />
    <p style={{ textAlign: "center", alignItems: "center" }}>Was given the same output when testing - no differances</p>

    </div>
          <h2 style={{ textAlign: "center", alignItems: "center" }}>Purpose and Limitations</h2>
          <h4 style={{ textAlign: "center", alignItems: "center" }}>Purpose: Non-Maximum Suppression (NMS) is used filter and retrain bounding boxes from object detections algorithms, many people use it to obtain a sinlge clean prediction box. 
 <br/>Limitations: results are varied when objects are grouped too close together, also, for larger bounding boxes than overlap, NMP may incorrectly cupress small objects next to large ones. </h4>

        </div>
{/* Part 3 */}
 <section>
        <div className=" max-w-4xl mx-auto">
          <h2 style={{ textAlign: "center" }}>  Part 3: Human–Object Interaction (HOI) Analysis using VLMs</h2>
          <p style={{ textAlign: "center" }}>Perform zero-shot HOI analysis using VLMs on a subset of HICO-DET dataset (huggingface zhimeng/hico_det · Datasets at Hugging Face).  <br /> Use one (or more) open-source or closed-source VLMs (e.g., Gemini, GPT, LLaVA, Qwen) to predict human–object interactions.</p>
        </div>
      </section>

      </div>
    </main>
    );
}