const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    const html = `
    <!DOCTYPE html>
<html>
<head>
  <title>Tribute to Steve Jobs</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f1f1f1;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #333;
      text-align: center;
    }
    img {
      display: block;
      margin: 20px auto;
      max-width: 100%;
      border-radius: 8px;
    }
    p {
      font-size: 18px;
      line-height: 1.5;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Tribute to Steve Jobs</h1>
    <img src="https://photos5.appleinsider.com/gallery/product_pages/189-hero.jpg" alt="Steve Jobs">
    <p>
      Steve Jobs was an American business magnate, industrial designer, and inventor.
      He co-founded, chaired, and served as CEO of Apple Inc., and played a pivotal role
      in revolutionizing the personal computer industry.
    </p>
    <p>
      Known for his passion for design and innovation, Jobs introduced iconic products
      like the iPhone, Macintosh, iPod, and iPad, shaping the landscape of consumer
      electronics. His vision and attention to detail have made Apple a leading brand
      worldwide.
    </p>
    <p>
      Steve Jobs' relentless pursuit of excellence and his ability to seamlessly blend
      technology with artistry have left an enduring legacy. He will always be remembered
      as an inspiration to entrepreneurs and innovators around the world.
    </p>
  </div>
</body>
</html>

`
    res.write(html)
    res.end()
}).listen(3001)