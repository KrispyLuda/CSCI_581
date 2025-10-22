import Squares from './flair/Squares.jsx';

import sign from './assets/Orginal.png';
import vsign from './assets/outline_s.png';

import rsign from './assets/rect_s.png';

import one from './assets/1.jpg';
import two from './assets/2.jpg';
import three from './assets/3.jpg';
import four from './assets/4.jpg';
import five from './assets/5.jpg';

import Pano from './assets/Panoroma.png';

// Fix these image imports and then post to github pages and Done 
import TMW3 from './assets/TPMW-3.png';
import TMW7 from './assets/Screenshot 2025-10-20 173420.png';

import TPSW3 from './assets/TPS Warp-3.png';
import TPSW7 from './assets/Screenshot 2025-10-20 173409.png';


import threeA from './assets/digit_3-a.jpg';
import threeb from './assets/digit_3-b.jpg';

import sevenA from './assets/digit_7-a.jpg';
import sevenb from './assets/digit_7-b.jpg';

// import img from './assets/img.png';





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
        <h1 style={{ color: "black" }} className="text-4xl font-bold"> Project 2: Image Homography and Warping</h1>
        <p style={{ color: "black", textAlign: "center"}} className="text-lg text-gray-700">In this project, you will apply geometric transformation concepts from class to perform image rectification and explore creative applications of image homography. The goal is to understand how 2D transformations can recover fronto-parallel views of planar surfaces and be used in real-world applications such as document scanning or panoramic stitching.</p>
      </div>
      <br />
{/* Part 1 */}
      <section>
        <div className=" max-w-4xl mx-auto">
          <h2 style={{ textAlign: "center" }}>Part 1: Image Homography Estimation</h2>
          <p style={{ textAlign: "center" }}>Implement homography estimation and image warping to rectify an input image containing a planar surface (e.g., a document, a poster, or a road sign) captured at an angle.<br /></p>
        </div>
      </section>
        <br />

        <div style={{ textAlign: "center", borderBottom: "1px solid #ccc", margin: "20px 0", width: "80%", marginLeft: "auto", marginRight: "auto" }}>
<div style={{textAlign: "center",margin: "20px 0",width: "80%",marginLeft: "auto",marginRight: "auto",}}>
  <h3>Image of Sign found Online</h3>
  {/* IMGS HERE */}
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
        src={sign}
        alt="Orginal"
        style={{
          width: "400px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "6px",
        }}
      /> 
        <img
        src={vsign}
        alt="Orginal"
        style={{
          width: "400px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "6px",
        }}
      />
    </div>

<h3>Rectified Output</h3>
{/* IMG HERE */}
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
        src={rsign}
        alt="Original"
        style={{
          width: "400px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "6px",
        }}
      />
    </div>
    <p><b>How does Homography enable rectification?</b> .... Rectification removes perspective distortion by wraping the image with a homography. </p>
</div>
</div>

{/* Part 2 */}
        <section>
        <div className=" max-w-4xl mx-auto">
          <h2 style={{ textAlign: "center" }}>Part 2: Creative Application (Exploration and Extension)</h2>
          <p style={{ textAlign: "center" }}>Use your homography implementation creatively to demonstrate a real-world or artistic application.
<b>Chosen Route: Panoroma mosaicing</b><br /></p>
        </div>
      </section>
      <div style={{ textAlign: "center", borderBottom: "1px solid #ccc", margin: "20px 0", width: "80%", marginLeft: "auto", marginRight: "auto" }}>
<div style={{textAlign: "center",margin: "10px 0",width: "80%",marginLeft: "auto",marginRight: "auto",}}>
  <h2>Images used for <b> <i>Panorama mosaicing</i></b></h2>
  {/* IMGS HERE */}
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

   {/* PANOROMA HERE */}
<h2>Results of Panoroma..</h2>           
{/* IMG HERE */}
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
        src={Pano}
        alt="Panorama"
        style={{
          width: "580px",
          height: "500px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "6px",
        }}
      />
    </div>
<h4>some challenges appear with the amount of imgs used and using which image as a reference to map and plot the others for the panoroma.</h4>
</div>
</div>

<section>
        <div className=" max-w-4xl mx-auto">
          <h2 style={{ textAlign: "center" }}>Part 3: Warping Comparison</h2>
          <p style={{ textAlign: "center" }}>Compare triangular mesh warping and thin-plate spline (TPS) warping.</p>
          <p style={{ textAlign: "center" }}><i>For Part 3, warping one source image to a target (based on the provided ones from the same digit) using both techniques. For example, warping digit 3-a to match digit 3-b. Also, warping digit 7-a to match digit 7-b, based on the provided images below. No face morphing here, the purpose of Part 3 is to understand the differences between two warping techniques (triangular mesh warping and thin-plate spline warping). </i></p>
        </div>
      </section>
<div style={{ textAlign: "center", borderBottom: "1px solid #ccc", margin: "20px 0", width: "80%", marginLeft: "auto", marginRight: "auto" }}>
<div style={{textAlign: "center",margin: "10px 0",width: "80%",marginLeft: "auto",marginRight: "auto",}}>
  <h2><b>Test Images</b></h2>
{/* Test images */}
<div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1px", // spacing between images
        flexWrap: "wrap", // optional: wrap on small screens
      }}
    >
      <img src={threeA} alt="one" style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "2px",
        }}
      />
      <img src={threeb} alt="two" style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "2px",
        }}
      />
       <img src={sevenA} alt="two" style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "2px",
        }}
      />
       <img src={sevenb} alt="two" style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "2px",
        }}
      />
    </div>
    <h4>the task was to show and display both warping techniques on the same test image</h4>
       <p>Triangular Mesh Warping for <b>Test Image "3"(Left) and image "7"(Right)</b></p>
       <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1px", // spacing between images
        flexWrap: "wrap", // optional: wrap on small screens
      }}
    >
      <img src={TMW3} alt="one" style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "2px",
        }}
      />
      <img src={TMW7} alt="two" style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "2px",
        }}
      />
      </div>

{/* The other one */}
       <p>Thin-Plate Spline Warping for <b>Test Image "3"(Left) and image "7"(Right)</b></p>
       <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1px", // spacing between images
        flexWrap: "wrap", // optional: wrap on small screens
      }}
    >
      <img src={TPSW3} alt="one" style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "2px",
        }}
      />
      <img src={TPSW7} alt="two" style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "2px",
        }}
      />
      </div>
      <p>results from output: but looking at the approaches and examining the images, for me, image 3 was best warped with TMP(Triangular Mesh Warping) to achieve a closer image to the target. on the other hand, Image 7 was better with the Thin-plate spline warping, the image outputed was closer to its target image than the other approach.</p>
      {/* Pros & Cons of TMW */}
     <h3><b>Pros</b> of Triangular Mesh Warping</h3>
     <ul>
       <li style={{ textAlign: "left" }}>it is simple and fast</li>
       <li style={{ textAlign: "left" }}>great for real time and GPU implementations</li>
       <li style={{ textAlign: "left" }}>Local control over the warping process</li>
     </ul>
     <h3><b>Cons</b> of Triangular Mesh Warping</h3>
     <ul>
       <li style={{ textAlign: "left" }}>Only Piecewise-affine</li>
       <li style={{ textAlign: "left" }}>requires notice of triangle boundary points and coverage</li>
     </ul>
     {/* Pros & Cons of TPSW */}
     <h3><b>Pros</b> of Thin-Plate Spline Warping</h3>
     <ul>
       <li style={{ textAlign: "left" }}>Can produce smoother and more natural-looking results</li>
       <li style={{ textAlign: "left" }}>Globally Smooth warps</li>
     </ul>
     <h3><b>Cons</b> of Thin-Plate Spline Warping</h3>
     <ul>
       <li style={{ textAlign: "left" }}>More computationally intensive</li>
       <li style={{ textAlign: "left" }}>Requires more control points for accurate results</li>
       <li style={{ textAlign: "left" }}>Way more expensive in terms of computation</li>
     </ul>

  </div>
  </div>

        </div>
    </main>
    );
}