import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Image1 from '../assets/pimg1.jpg'
import Image2 from '../assets/pimg2.jpg'
import Image3 from '../assets/pimg3.jpg';
import Image4 from '../assets/pimg4.jpg';
import Image5 from '../assets/pimg5.jpg';
import Image6 from '../assets/pimg6.jpg';
import Image7 from '../assets/pimg7.jpg';
import Image8 from '../assets/pimg8.jpg';




function Landing() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div style={{ marginTop: "200px" }}>
                            <Image src={Image1} rounded  style={{width:"200px", height:"200px"}}/>
                            <h1>Free Image</h1>
                            <h1>Background Remover</h1>
                            <p>Our AI background remover instantly removes the background of your photos in seconds. Then you can add any new background or leave it transparent!</p>
                        </div>

                    </Col>
                    <Col>
                        <div className='text-center mt-3' style={{ width: "600px", height: "600px", border: "dotted", borderRadius: "15px"}}>
                            <div className='text-center' style={{marginTop:"260px"}}>
                                <Button variant="primary">Get Start</Button>
                                <p className='mt-5'>Welcome to PixelCut</p>
                            </div>

                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                    <h1>Instant and automatic background remover</h1>
                    <p>Our BG Remover automatically removes the background in less than 3 seconds! With our AI-powered technology, you'll be amazed at how quickly and perfectly you can remove the background in your images and get a nice transparent background. Gone are the days of tedious manual editing—just let Pixelcut's free background eraser do its wonders and you'll have images with transparent or white backgrounds in seconds. Delete background from heic, png, or jpg images in seconds. Perfect for pros and newbies alike, Pixelcut's photo background remover is your go-to tool for fast and easy editing. Also, the quality of the cutout is top-notch! If you want to remove the background in HD quality, we have you covered. Give it a try, background removal has never been easier!</p>
                    <Button variant="primary">Get Start</Button>
                    </Col>
                    <Col>
                    <Image src={Image2} rounded  style={{width:"100%"}}/>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col> 
                    <Image src={Image3} rounded  style={{width:"100%"}}/></Col>
                    <Col>
                    <h1>Remove BG in seconds and add background color</h1>
                    <p>Once you remove the background from your image, you are left with a transparent image. From there you can add a white background, choose from thousands of photo backgrounds that are curated specifically for you, or keep your image with no background. If you have a specific image background in mind, like a marble table, you can simply type "marble background" and you'll have hundreds of options to choose from in just a few seconds. This can all be done in three easy steps. Step one, upload the image. Step two, remove the image background automatically. Step three, change to any background color, background image, or keep it with no bg. It's that easy!</p>
                    <Button variant="primary">Get Start</Button>
                    </Col>

                </Row>
                <Row className='mt-5'>
                    <Col>
                    <h1>Add beautiful shadows to your product photos</h1>
                    <p>Erase background is just the start of what Pixelcut can do! After you've used Pixelcut's background removal tool, add a dash of depth and realism to your product images with Pixelcut's shadow feature! Once you've quickly removed the background using our high quality Background Remover, it's time to make your product truly pop. With just one click, you can easily add a custom shadow that brings your image to life, giving it that extra touch of professionalism. Perfect for showcasing your products in all their glory, Pixelcut's shadow-adding magic will have your images looking top-notch and ready to impress. To recap, you can export your image with a clear background, colored background like a simple white background, or a solid colored background with a soft shadow. Give it a whirl and see how a little shadow can make a big difference!</p>
                    <Button variant="primary">Get Start</Button>
                    </Col>
                    <Col>
                    <Image src={Image4} rounded  style={{width:"100%"}}/>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                    <Image src={Image5} rounded  style={{width:"100%"}}/>
                    </Col>
                    <Col>
                    <h1>Design captivating product graphics using free templates</h1>
                    <p>We're not just an online background remover tool. After using Pixelcut's image background removal, you can then use one of our free templates to inspire your next graphic. Choose from hundreds of curated custom backgrounds, stickers, fonts, and more to make your image shine. Say goodbye to the days of fiddling around with complicated editing tools and use our background remover online!</p>
                    <Button variant="primary">Get Start</Button>
                    </Col>

                </Row>
                <Row className='mt-5'>
                    <Col>
                    <h1>Generate a new background with our AI Background Generator</h1>
                    <p>If you need to edit photo backgrounds, Pixelcut's AI Background Generator can help you out! After the background is removed, you can choose from dozens of different AI backgrounds that look photorealistic! Our AI Background Generator is perfect for professional looking product photography without the need to go to a real photo studio. You can also use our AI Background Generator on people and place yourself in front of the Eiffel Tower or on the top of Mount Everest!</p>
                    <Button variant="primary">Get Start</Button>
                    </Col>
                    <Col>
                    <Image src={Image6} rounded  style={{width:"100%"}}/>
                    </Col>

                </Row>
                <Row className='mt-5'>
                    <Col>
                    <Image src={Image7} rounded  style={{width:"100%"}}/>
                    </Col>
                    <Col>
                    <h1>Streamline your editing process with batch background removal</h1>
                    <p>Our batch background removal tool is designed to optimize your editing workflow by allowing you to remove backgrounds from multiple images simultaneously. Powered by advanced AI technology, this tool automates the process of creating transparent PNG images, eliminating the need for manual editing. This feature is particularly beneficial for professionals who deal with a high volume of images, such as photographers, graphic designers, and e-commerce business owners. By streamlining the background removal process, our tool enables you to save significant time and effort, allowing you to focus on other essential aspects of your projects. The resulting images can be used for a variety of purposes, including product listings, marketing materials, and graphic design projects.</p>
                    <Button variant="primary">Get Start</Button>
                    </Col>

                </Row>
                <Row className='mt-5'>
                    <Col>
                    <h1>Integrate your app with our background remover API</h1>
                    <p>Enhance your app's functionality by integrating our background remover API. Our API provides a seamless way to incorporate powerful background removal capabilities into your existing application. Our API will give your application blazing fast and extremely accurate background removal. By leveraging our API, you can enable your users to remove backgrounds from images directly within your app, without the need for external tools or software. This integration allows for a more streamlined user experience and eliminates the hassle of switching between different applications. Our API is designed to be developer-friendly, with comprehensive documentation and support to ensure smooth implementation. Whether you're building a photo editing app, an e-commerce platform, or any other application that requires background removal functionality, our API provides a reliable and efficient solution.</p>
                    <Button className='mb-5' variant="primary">Get Start</Button>
                    </Col>
                    <Col>
                    <Image src={Image8} rounded  style={{width:"100%"}}/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Landing