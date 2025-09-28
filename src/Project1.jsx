import orthographic from './assets/approximate-orthographic-Marked.png';
import perspective from './assets/Perspective-Marked.png';
import Squares from './flair/Squares.jsx';

import ti_1 from './assets/test image 1.png';
import ti_2 from './assets/test image 2.png';
import ti_3 from './assets/test image 3.png';

import ti_4 from './assets/test image 4.png';
import ti_5 from './assets/test image 5.png';
import ti_6 from './assets/test image 6.png';

import nx_4 from './assets/NX_4.png';
import ny_4 from './assets/NY_4.png';
import dogx_4 from './assets/DOGX_4.png';
import dogy_4 from './assets/DOGY_4.png';

import nx_6 from './assets/NX_6.png';
import ny_6 from './assets/NY_6.png';
import dogx_6 from './assets/DOGX_6.png';
import dogy_6 from './assets/DOGY_6.png';

import eti_1 from './assets/equal_image1.png';
import eti_2 from './assets/equal_image2.png';
import eti_3 from './assets/equal_image3.png';

import peter1 from './assets/peter.webp';
import peter2 from './assets/peter(post).png';

import ct from './assets/CT.png';
import moon from './assets/moon.png';
import ct_sharp from './assets/ct_sharp.png';
import moon_sharp from './assets/moon_sharp.png';
import ct_omega from './assets/ct_omega.png';
import moon_omega from './assets/moon_omega.png';

import band from './assets/band.jpg';
import minecraft from './assets/minecraft.webp';
import band_omega from './assets/band_omega.png';
import minecraft_omega from './assets/minecraft_omega.png';

import nti1 from './assets/noisy test image 1.png';
import nti2 from './assets/noisy test image 2.png';

import nti_1_1 from './assets/nti_1_1.png';
import nti_1_2 from './assets/nti_1_2.png';
import nti_2_1 from './assets/nti_2_1.png';
import nti_2_2 from './assets/nti_2_2.png';

import nt_smooth from './assets/nt_smooth.png';

export default function Project1() {
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
        <h1 style={{ color: "black" }} className="text-4xl font-bold mb-1">🚀 Project 1: Histogram and Filtering</h1>
        <p style={{ color: "black" }} className="text-lg text-gray-700">This project will give you hands-on experience with image processing techniques and help you connect mathematical concepts to practical implementations</p>
      </div>
      <br />

      <section>
        <div className=" max-w-4xl mx-auto">
          <h2 style={{ textAlign: "center" }}>Part 1: Perspective and Orthographic Projections</h2>
          <p style={{ textAlign: "center" }}>This question aims to help to understand how projection affects images. Using a camera (a phone camera is fine), take two photos of the same scene: <br />

- Perspective projection: Take a normal photo, where lines appear to converge due to perspective (e.g., a desk or the edges of a building). <br />
- Orthographic projection (approximate): Either zoom in from farther away or crop the central part of the image so that lines appear more parallel and less converging.</p>

<p style={{ textAlign: "center" }}>Choose any scene you like (indoor or outdoor), but make sure there are some straight edges in the images.</p>
        </div>
      </section>

      <div style={{ textAlign: "center", borderBottom: "1px solid #ccc", margin: "20px 0", width: "80%", marginLeft: "auto", marginRight: "auto" }}>
<div
  style={{
    textAlign: "center",
    margin: "20px 0",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  }}
>
  <h3>Question 1:</h3>
  <p>Perspective(Left Image)    Vs Orthographic(Right Image)</p>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px", // spacing between images
        flexWrap: "wrap", // optional: wrap on small screens
      }}
    >
      {/* Use the imported assets so the bundler serves them correctly */}
      <img
        src={perspective}
        alt="Orthographic"
        style={{
          width: "400px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "6px",
        }}
      />
      <img
        src={orthographic}
        alt="Perspective"
        style={{
          width: "400px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "3px",
          margin: "6px",
        }}
      />
    </div>
          <p>*Image of a coffee table taken <br />from inside my apartment</p>
    <p style={{
    textAlign: "left"}}><b>Brief Note:</b>when comparing both images side by side, it is possible to see various differances in line angles and sizing of the subject. The coffee table image of Perpective seems to have lines that differ in angles(ex. Gray Carpet and Wall). In the Image of Othrographic(Approx), Lines still look perpendiculer, although most of the markings display lines that have angles and slopes that match other adjacent ones</p>
</div>
      </div>

{/* PART 2 */}
       <section>
        <div className=" max-w-4xl mx-auto">
          <h2 style={{ textAlign: "center" }}>Part 2: Histogram Manipulation & Linear Filtering</h2>
          <p style={{ textAlign: "center" }}>The purpose of this part is to help you understand and implement histogram equalization, one of the fundamental point operations, which is useful to enhance image contrast.<br /></p>
        </div>
      </section>
      
      <div style={{ textAlign: "center", borderBottom: "1px solid #ccc", margin: "20px 0", width: "80%", marginLeft: "auto", marginRight: "auto" }}>
<div style={{textAlign: "center",margin: "20px 0",width: "80%",marginLeft: "auto",marginRight: "auto",}}>
<h3>Question 1:</h3>
<p>You are given three test images (grayscale test image 1, 2, 3) with low or uneven contrast. The task is to:</p>
<ul>
  <li>Compute the histogram of each image.</li>
  <li>Compute the cumulative distribution function (CDF) from the histogram.</li>
  <li>Use the CDF to perform histogram equalization.</li>
  <li>Display, for each test image, its Original image & histogram. And the equalized image & histogram.</li>
</ul>
<h3>Original Test images 1,2,3 (left to right)</h3>

 <img
        src={ti_1}
        alt="Test image"
        style={{
          width: "400px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "3px",
        }}
      />
      <img
        src={ti_2}
        alt="Test image"
        style={{
          width: "400px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "3px",
        }}
      />
      <img
        src={ti_3}
        alt="Test image"
        style={{
          width: "400px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "3px",
        }}
      />
</div>
<h3>Histogram and Equalized images 1,2,3</h3>
<p>Equalized Image 1:</p>
 <img src={eti_1} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
  <p>Equalized Image 2:</p>
  <img src={eti_2} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
  <p>Equalized Image 3:</p>
 <img src={eti_3} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />




      </div>
      {/* Question 2: Histogram and Equalization */}
      <div style={{ textAlign: "center", borderBottom: "1px solid #ccc", margin: "20px 0", width: "80%", marginLeft: "auto", marginRight: "auto" }}>
<div style={{textAlign: "center",margin: "20px 0",width: "80%",marginLeft: "auto",marginRight: "auto",}}>
<h2>Question 2:</h2>
<p> Find at least one of your own images with poor contrast (too dark, too bright, or low contrast). Apply your histogram equalization implementation to this image and show the result.</p>
<h4>Selected Image</h4>
 <p>*his iconic picture of Peter Van Ness holding a Lightsaber was used for this section</p>

 <img src={peter1} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
 <img src={peter2} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
 <p><i>Briefly describe how equalization changed the image and whether you think it improved the quality.</i></p>
 <p>As shown in the figure above, the blue glow from the lightsaber was amplified and not now vividly shines a cyan outline around the blade. Equalization also changed the background from the previous image, making it a more light color that displays the stairs and wall more clearly. I didnt assume that this picture could have any more aura points(get better), but i was mistaken</p>
</div>
</div>


{/* Question 4: Your Own Image */}
<div style={{ textAlign: "center", borderBottom: "1px solid #ccc", margin: "20px 0", width: "80%", marginLeft: "auto", marginRight: "auto" }}>
<div style={{textAlign: "center",margin: "20px 0",width: "80%", gap: "10px", marginLeft: "auto",marginRight: "auto",}}>

<h2>Question 4: Derivative of Gaussian</h2>
<p>You are given three test images (grayscale test image 4, 5, 6), the task is to apply the Native Approach(Gaussian Filter) and the Direct Approach(DoG filters)</p>
<p><b>Test Images 4,5,6 below(Left to Right)</b></p>
 <img src={ti_4} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
  <img src={ti_5} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
 <img src={ti_6} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
{/* Image 4 */}
 <p><b>Test Image 4 - Native  Approach & DoG</b></p>
 <p>Native X(Left)  &  Native Y(Right)</p>
  <img src={nx_4} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
 <img src={ny_4} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />

 <p>DoG X(Left)  &  DoG Y(Right)</p>
  <img src={dogx_4} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
 <img src={dogy_4} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />


{/* image 6 */}
 <p><b>Test Image 6 - Native  Approach and DoG</b></p>
 <p>Native X(Left)  &  Native Y(Right)</p>
  <img src={nx_6} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
 <img src={ny_6} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />

 <p>DoG X(Left)  &  DoG Y(Right)</p>
  <img src={dogx_6} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
 <img src={dogy_6} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
<h4><i>Briefly describe your observations: are the results nearly the same? Why might small differences appear?</i></h4>
<p><b>Image4</b> - very similar, on the one aspect that is the swapped black and white values/spaces. becuase of this the images look flipped and inverted. <br />
<b>Image 5(not included)</b> - alike Image6 in the amount of pixels, the pictures are hard to tell apart becuase of how similar they are from each other. <br />
<b>Image6</b> - I believe it is because of the pixels, but the the corresponding Ys and Xs looking almost the same. there is not much that can be picked out as a differance from the images of DoG and native. </p>
</div>
</div>


{/* Question 5 */}
<div style={{ textAlign: "center", borderBottom: "1px solid #ccc", margin: "20px 0", width: "80%", marginLeft: "auto", marginRight: "auto" }}>
  <div style={{textAlign: "center",margin: "20px 0",width: "80%", gap: "10px", marginLeft: "auto",marginRight: "auto",}}>

    <h2>Question 5: Creative Task: Image Sharpening</h2>
    <p>In class, we discussed that by subtracting a smoothed (low-pass) version of an image from the original, we can extract the edges and details (high-frequency details). Adding these details back into the original image enhances sharpness. </p>
    <p>You are given two test images (grayscale test image CT and moon), the task is to: </p>
    <ul style={{textAlign: "left"}}>
      <li><b>Extract High-Frequency Details</b>
      <li>Smooth the image using a Gaussian filter.</li>
      <li>Subtract the smoothed version from the original image to obtain the high-frequency component.</li>
      </li>
      <li><b>Sharpen the Image</b>
        <li>Add the high-frequency component back to the original image.</li>
        <li>Experiment with different blending weights (e.g., original + α × high-frequency, with α ranging from 1 to 10).</li>
        <li>Observe how the sharpness changes as you vary α.</li>
      </li>
      <li><b>Creative Exploration</b>
      <li>Apply your sharpening method to your own images.</li>
      <li>Pick at least one example where sharpening makes the image look noticeably better, and one example where too much sharpening creates artifacts (e.g., amplified noise).</li>
      </li>
    </ul>
    <h4>Test Images CT & Moon</h4>
 <img src={ct} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
 <img src={moon} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
<h5>Test Image CT - Sharpened and High Frequency</h5>
 <img src={ct_sharp} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
<img src={ct_omega} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />

<h5>Test Image Moon - Sharpened and High Frequency</h5>
 <img src={moon_sharp} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
<img src={moon_omega} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />

<h4>Apply your sharpening method to your own images.
Pick at least one example where sharpening makes the image look noticeably better, and one example where too much sharpening creates artifacts (e.g., amplified noise).
</h4>
<h3>Example of too much Sharpening</h3>
<p><b>Original</b></p>
 <img src={band} alt="Test image" style={{ width: "auto", height: "500px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
<img src={band_omega} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />

<h3>Example of Better Image with Sharpening</h3>
<p><b>Original</b></p>
 <img src={minecraft} alt="Test image" style={{ width: "auto", height: "500px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
<img src={minecraft_omega} alt="Test image" style={{ width: "auto", height: "350px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />

  </div>
</div>

<section>
        <div className=" max-w-4xl mx-auto">
          <h2 style={{ textAlign: "center" }}>Part 3: Anisotropic Diffusion(Graduate Only)</h2>
          <p style={{ textAlign: "center" }}> This part introduces you to anisotropic diffusion, a classic image filtering technique (also called Perona–Malik diffusion) proposed by Pietro Perona and Jitendra Malik in their 1990 IEEE Transactions on Pattern Analysis and Machine Intelligence paper. The goal is to reduce noise in images while preserving important structures such as edges, something that ordinary Gaussian smoothing cannot achieve.<br /></p>
       
  </div>
</section>
<div style={{ textAlign: "center", borderBottom: "1px solid #ccc", margin: "20px 0", width: "80%", marginLeft: "auto", marginRight: "auto" }}>
  <div style={{textAlign: "center",margin: "20px 0",width: "80%", gap: "10px", marginLeft: "auto",marginRight: "auto",}}>

    <h2>Question 1:  Implementation of the Anisotropic diffusion</h2>
    <h3>You are given two test images (grayscale noisy test image 1 and 2), the task is to:</h3>
    <p>Run your implementation for different values of the parameter $K$ and different numbers of iterations. How does the choice of $K$ affect the result? What happens as you increase the number of iterations?</p>
    <h3>Noisy Test Images 1 & 2</h3>
<img src={nti1} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
  <img src={nti2} alt="Test image" style={{ width: "auto", height: "300px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />

    <h3>Outputs</h3>
    <h4>Noisy Test Image 1</h4>
    <img src={nti_1_1} alt="Test image" style={{ width: "auto", height: "520px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
    <img src={nti_1_2} alt="Test image" style={{ width: "auto", height: "520px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
    <h4>Noisy Test Image 2</h4>
    <img src={nti_2_1} alt="Test image" style={{ width: "auto", height: "520px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
    <img src={nti_2_2} alt="Test image" style={{ width: "auto", height: "520px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />



      </div>
    </div>

    <div style={{ textAlign: "center", borderBottom: "1px solid #ccc", margin: "20px 0", width: "80%", marginLeft: "auto", marginRight: "auto" }}>
  <div style={{textAlign: "center",margin: "20px 0",width: "80%", gap: "10px", marginLeft: "auto",marginRight: "auto",}}>

    <h2>Question 2:  Comparison with Gaussian Smoothing</h2>
    <h3>Apply Gaussian smoothing to the same images.</h3>
    <h3><i>Compare results side-by-side: how does anisotropic diffusion preserve edges differently? Discuss the results and the differences you observed.</i></h3>
    <h4>Images smoothed with Gaussian</h4>
    <img src={nt_smooth} alt="Test image" style={{ width: "auto", height: "520px", objectFit: "cover", borderRadius: "3px", margin: "6px" }} />
    <p> From what I've seen with Anisotropic diffusion, the edges are roughened, making it easier to outline the subject. When comparing to Gaussian blurring, the anisotropic is definitely more blurred and out of focus. It seems when K increases, the roughness on the edges also increases.
</p>
      </div>
    </div>
    <div style={{ textAlign: "center", borderBottom: "1px solid #ccc", margin: "20px 0", width: "80%", marginLeft: "auto", marginRight: "auto" }}>
  <div style={{textAlign: "center",margin: "20px 0",width: "80%", gap: "10px", marginLeft: "auto",marginRight: "auto",}}>

    <h2>Question 3:(Optional)</h2>
    <h3>Think critically about the limitations of anisotropic diffusion. Suggest one possible improvement or alternative approach, drawing from your own intuition or knowledge from other methods. </h3>
    <p>DID NOT ATTEMPT</p>
      </div>
    </div>


      </div>
    </main>
  );
}
