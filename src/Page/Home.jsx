import React, { useState } from 'react'
import image from '../Images/Fruits.jpg'
import image1 from '../Images/Basket.png'
import image2 from '../Images/pineappleremove.png'
import image3 from '../Images/jam.png'
import image4 from '../Images/Drumstick.png'
import image5 from '../Images/Dogfeed.png'
import image6 from '../Images/creammilk.png'
import image7 from '../Images/orange.png'
import image8 from '../Images/orangedrink.png'
import image9 from '../Images/loki.jpg'
import image10 from '../Images/kale.png'
import image11 from '../Images/cabbage.jpg'
import image12 from '../Images/carrot.jpeg'
import image13 from '../Images/cocacola.png'
import image14 from '../Images/7up.png'
import image15 from '../Images/fanta.png'
import image16 from '../Images/sprite.png'
import image17 from '../Images/sting.png'
import image18 from '../Images/anti.png'
import image19 from '../Images/Masla.png'
import image20 from '../Images/Groupdrink.png'
import image21 from '../Images/Blue.png'
import image22 from '../Images/Surf.png'
import image23 from '../Images/kiwi.png'
import image24 from '../Images/banana.jpg'
import image25 from '../Images/watermelon.jpg'
import image26 from '../Images/peach.jpg'
import image27 from '../Images/orange.png'
import image28 from '../Images/mango.png'
import image29 from '../Images/guava.png'
import image30 from '../Images/grapes.png'
import image31 from '../Images/vegetableoil.png'
import image32 from '../Images/pasta.jpg'
import image33 from '../Images/cornoil.jpg'
import image34 from '../Images/barilla.png'
import image35 from '../Images/aata.jpg'
import image36 from '../Images/kolson.jpg'
import image37 from '../Images/wine.png'
import image38 from '../Images/vegetables1.png'
import image39 from '../Images/vegetables.png'
import image40 from '../Images/tomato.jpg'
import image41 from '../Images/milk1.png'
import image42 from '../Images/hallow.png'
import image43 from '../Images/dough.png'
import image44 from '../Images/pineapple.png'
import Navbar from '../Page/Navbar'
import {Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import image45 from '../Images/vegetable.png'
function Footer(){
  return(
    <section id='footer' style={{backgroundColor:' rgba(103, 77, 15,0.8)'}}>
        <div className="container-fluid" style={{backgroundImage:`url(${image2})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className="container my-md-5 my-3" style={{backgroundColor:'#0A1E00'}}>
          <div className="row">
            <div className="col">
              <img src={image45} alt="Logo" className='img-fluid' style={{width:'100px',height:'100px'}}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h6 className='text-white fw-bold ps-4'>PRODUCT</h6>
              <ul className='text-white fw-light' style={{paddingLeft:'1.5rem'}}>
                <li>Product overview</li>
                <li>Omni-Channel</li>
                <li>Sourcing</li>
                <li>Compliance & Contracting</li>
                <li>Payments</li>
                <li>Data & ReportingPricing</li>
              </ul>
            </div>
            <div className="col-md-4">
            <h6 className='text-white fw-bold ps-4'>WHY WORKSOME</h6>
              <ul className='text-white fw-light' style={{paddingLeft:'1.5rem'}}>
                <li>Product overview</li>
                <li>Omni-Channel</li>
                <li>Sourcing</li>
                <li>Compliance & Contracting</li>
                <li>Payments</li>
                <li>Data & ReportingPricing</li>
              </ul>
            </div>
            <div className="col-md-4">
            <h6 className='text-white fw-bold ps-4'>RESORCES</h6>
              <ul className='text-white fw-light' style={{paddingLeft:'1.5rem'}}>
                <li>Product overview</li>
                <li>Omni-Channel</li>
                <li>Sourcing</li>
                <li>Compliance & Contracting</li>
                <li>Payments</li>
                <li>Data & ReportingPricing</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex mb-3">
              <FontAwesomeIcon icon={faPhone} size='2x' color='#EEF2FB' className='ms-auto me-2'/>
              <FontAwesomeIcon icon={faGoogle} size='2x' color='#EEF2FB' className='me-2'/>
              <FontAwesomeIcon icon={faFacebook} size='2x' color='#EEF2FB' className='me-2'/>
              <FontAwesomeIcon icon={faLinkedin} size='2x' color='#EEF2FB' className='me-2'/>
              <FontAwesomeIcon icon={faTwitter} size='2x' color='#EEF2FB' className='me-5'/>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}
const Home = () => {
  const products=[
    {
     image:image6,
     title:'Full Cream Milk',
     description:'On a recent test run of All three services.',
     weight:'1500ml'
    },
    {
      image:image5,
      title:'Dog Feed',
      description:'On a recent test run of All three services.',
      weight:'1500g'
     },
     {
      image:image3,
      title:'Full Cream Milk',
      description:'On a recent test run of All three services.',
      weight:'100ml'
     },
     {
      image:image4,
      title:'Drum Stick',
      description:'On a recent test run of All three services.',
      weight:'1000g'
     }
  ]
  const vegetables=[
    {
      image:image12,
     title:'Carrot',
     description:'On a recent test run of All three services.'
    },
    {
      image:image9,
     title:'CalaBash',
     description:'On a recent test run of All three services.'
    },
    {
      image:image10,
     title:'CalaBash',
     description:'On a recent test run of All three services.'
    },
    {
      image:image11,
     title:'Cabbage',
     description:'On a recent test run of All three services.'
    }
]
const drinks=[
  {
    image:image14,
   title:'7UP',
   description:'On a recent test run of All three services.',
    weight:'1000ml'
  },
  {
    image:image15,
   title:'FANTA',
   description:'On a recent test run of All three services.',
    weight:'1000ml'
  },
  {
    image:image16,
   title:'SPRITE',
   description:'On a recent test run of All three services.',
    weight:'1000ml'
  },
  {
    image:image17,
   title:'STING',
   description:'On a recent test run of All three services.',
    weight:'1000ml'
  }
]
const fruits=[
  {
    image:image23,
   title:'KIWI',
   description:'On a recent test run of All three services.'
  },
  {
    image:image24,
   title:'BANANA',
   description:'On a recent test run of All three services.'
  },
  {
    image:image25,
   title:'WATERMELON',
   description:'On a recent test run of All three services.'
  },
  {
    image:image26,
   title:'PEACH',
   description:'On a recent test run of All three services.'
  },
  {
    image:image27,
   title:'ORANGE',
   description:'On a recent test run of All three services.'
  },
  {
    image:image28,
   title:'MANGO',
   description:'On a recent test run of All three services.'
  },
  {
    image:image29,
   title:'GUAVA',
   description:'On a recent test run of All three services.'
  },
  {
    image:image30,
   title:'GRAPES',
   description:'On a recent test run of All three services.'
  }
]
const gradient=[
  {
    image:image31,
   title:'OIL',
   description:'On a recent test run of All three services.',
    weight:'1000ml'
  },
  {
    image:image32,
   title:'PASTA',
   description:'On a recent test run of All three services.',
    weight:'100g'
  },
  {
    image:image35,
   title:'AATA',
   description:'On a recent test run of All three services.',
    weight:'1000g'
  },
  {
    image:image36,
   title:'KOLSON SPAGETTI',
   description:'On a recent test run of All three services.',
    weight:'100g'
  }
]
const [searchQuery, setSearchQuery] = useState('');
const handleSearchChange = (e) => {
  setSearchQuery(e.target.value);  // Update the search query with input value
};

// Filter products based on the search query (case insensitive)

  const Products1=[
    {
      image:image6,
      title:'Full Cream Milk',
      description:'On a recent test run of All three services.',
      weight:'1500ml'
     },
     {
       image:image5,
       title:'Dog Feed',
       description:'On a recent test run of All three services.',
       weight:'1500g'
      },
      {
       image:image3,
       title:'Full Cream Milk',
       description:'On a recent test run of All three services.',
       weight:'100ml'
      },
      {
       image:image4,
       title:'Drum Stick',
       description:'On a recent test run of All three services.',
       weight:'1000g'
      },
      {
        image:image31,
       title:'OIL',
       description:'On a recent test run of All three services.',
        weight:'1000ml'
      },
      {
        image:image32,
       title:'PASTA',
       description:'On a recent test run of All three services.',
        weight:'100g'
      },
      {
        image:image35,
       title:'AATA',
       description:'On a recent test run of All three services.',
        weight:'1000g'
      },
      {
        image:image36,
       title:'KOLSON SPAGETTI',
       description:'On a recent test run of All three services.',
        weight:'100g'
      },
      {
        image:image23,
       title:'KIWI',
       description:'On a recent test run of All three services.'
      },
      {
        image:image24,
       title:'BANANA',
       description:'On a recent test run of All three services.'
      },
      {
        image:image25,
       title:'WATERMELON',
       description:'On a recent test run of All three services.'
      },
      {
        image:image26,
       title:'PEACH',
       description:'On a recent test run of All three services.'
      },
      {
        image:image27,
       title:'ORANGE',
       description:'On a recent test run of All three services.'
      },
      {
        image:image28,
       title:'MANGO',
       description:'On a recent test run of All three services.'
      },
      {
        image:image29,
       title:'GUAVA',
       description:'On a recent test run of All three services.'
      },
      {
        image:image30,
       title:'GRAPES',
       description:'On a recent test run of All three services.'
      },
      {
        image:image14,
       title:'7UP',
       description:'On a recent test run of All three services.',
        weight:'1000ml'
      },
      {
        image:image15,
       title:'FANTA',
       description:'On a recent test run of All three services.',
        weight:'1000ml'
      },
      {
        image:image16,
       title:'SPRITE',
       description:'On a recent test run of All three services.',
        weight:'1000ml'
      },
      {
        image:image17,
       title:'STING',
       description:'On a recent test run of All three services.',
        weight:'1000ml'
      },
      {
        image:image12,
       title:'Carrot',
       description:'On a recent test run of All three services.'
      },
      {
        image:image9,
       title:'CalaBash',
       description:'On a recent test run of All three services.'
      },
      {
        image:image10,
       title:'CalaBash',
       description:'On a recent test run of All three services.'
      },
      {
        image:image11,
       title:'Cabbage',
       description:'On a recent test run of All three services.'
      }
  ]
  const filteredProducts = Products1.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

    return(
        <section id='header'>
          <div className="container-fluid vh-100" style={{backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat",backgroundSize:'cover'}}>
          <div className="container header vh-100" style={{backgroundColor:'#111517',backgroundImage:`url(${image1})`, backgroundRepeat:'no-repeat',backgroundPosition:"center bottom",backgroundSize:'50% 100%'}}>
              <div className="row">
                <div className="col">
                <Navbar searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 d-flex flex-column align-items-center my-lg-5">
                  <h1 className='display-1 text-white' id='millionheading'>𝓜𝓲𝓵𝓵𝓲𝓸𝓷𝓼 𝓞𝓯  𝓗𝓪𝓹𝓹𝔂</h1>
                  <p className='fs-4 text-white text-center' id="milliontext">Send unlimited free texts and make WiFi calls from a free phone number. Download the free app or sign up online to pick your free phone number.</p>
                 <Link to="/product"><button type='button' className='rounded ps-5 pe-5 py-2' style={{borderColor:'#d8c26a',color:'#d8c26a',backgroundColor: 'rgba(255, 255, 255, 0)'}}>Start Now</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid p-0" style={{backgroundImage:`url(${image2}),url(${image2})`,backgroundRepeat:'no-repeat',backgroundSize:'contain, 40% 50%',backgroundPosition:'center , right bottom',backgroundColor:' rgba(103, 77, 15,0.8)'}}>
           <div className="container">
           <div className="row p-3">
              <div className="col" style={{marginTop:'100px'}}>
                <h3 className='text-black fw-bold'>TOP SELLER</h3>
              </div>
            </div>
            <div className="row" >
              <div className="col-12" >
              <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active ">
      <div className='d-flex flex-wrap justify-content-around'>
      {products.map((product,index)=>(
        <div className="card my-3" style={{width: '15rem',backgroundColor:'#0A1E00',height:'26rem',borderRadius:'15px'}} key={index}>
        <img src={product.image} className="card-img-top img-fluid px-3 pt-3" alt="..." style={{borderTopLeftRadius:'30px',height:'300px',width:'300px'}}/>
        <div className="card-body pt-0 overflow-hidden">
          <h5 className="card-title text-white mb-0">{product.title}</h5>
          <p className="card-text text-white mb-0">{product.weight}</p>
          <p className="card-text text-white mb-0">{product.description}</p>
          <button type='button' className='rounded py-2 px-5 text-white d-flex ms-auto me-auto' style={{borderColor:'#d8c26a',backgroundColor:'#0A1E00'}}>Add Cart</button>
        </div>
      </div>
      ))}
      </div>
    </div>
    <div className="carousel-item ">
    <div className='d-flex flex-wrap justify-content-around'>
      {products.map((product,index)=>(
        <div className="card  my-3" style={{width: '15rem',backgroundColor:'#0A1E00',height:'27rem',borderRadius:'15px'}} key={index}>
        <img src={product.image} className="card-img-top img-fluid p-3" alt="..." style={{borderTopLeftRadius:'30px',height:'300px',width:'300px'}}/>
        <div className="card-body pt-0 overflow-hidden">
          <h5 className="card-title text-white mb-0">{product.title}</h5>
          <p className="card-text text-white mb-0">{product.weight}</p>
          <p className="card-text text-white mb-0">{product.description}</p>
          <button type='button' className='rounded py-2  px-5 text-white d-flex ms-auto me-auto ' style={{borderColor:'#d8c26a',backgroundColor:'#0A1E00'}}>Add Cart</button>
        </div>
      </div>
      ))}
      </div>
    </div>
    <div className="carousel-item ">
    <div className='d-flex flex-wrap justify-content-around'>
      {products.map((product,index)=>(
        <div className="card my-3" style={{width: '15rem',backgroundColor:'#0A1E00',height:'27rem',borderRadius:'15px'}} key={index}>
        <img src={product.image} className="card-img-top img-fluid p-3" alt="..." style={{borderTopLeftRadius:'30px',height:'300px',width:'300px'}}/>
        <div className="card-body pt-0 overflow-hidden">
          <h5 className="card-title text-white mb-0">{product.title}</h5>
          <p className="card-text text-white mb-0">{product.weight}</p>
          <p className="card-text text-white mb-0">{product.description}</p>
          <button type='button' className='rounded py-2  px-5 text-white d-flex ms-auto me-auto' style={{borderColor:'#d8c26a',backgroundColor:'#0A1E00'}}>Add Cart</button>
        </div>
      </div>
      ))}
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style={{left:'-75px'}}>
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{right:'-75px'}}>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
              </div>
            </div>
           </div>
           <div className="container">
            <div className="row">
              <div className="col">
              <div className="product-list d-flex flex-wrap ">
  {searchQuery ? (
    filteredProducts.length > 0 ? (
      filteredProducts.map(product => (
        <div
          key={product.id} // add a unique key for React optimization
          className="card my-3"
          style={{
            width: '15rem',
            backgroundColor: '#0A1E00',
            height: '26rem',
            borderRadius: '15px',
          }}
        >
          <img
            src={product.image}
            className="card-img-top img-fluid px-3 pt-3"
            alt="..."
            style={{ borderRadius: '20px', height: '300px', width: '300px' }}
          />
          <div className="card-body pt-0 overflow-hidden">
            <h5 className="card-title text-white mb-0">{product.title}</h5>
            <p className="card-text text-white mb-0">{product.weight}</p>
            <p className="card-text text-white mb-0">{product.description}</p>
            <button
              type="button"
              className="rounded py-2 px-5 text-white d-flex ms-auto me-auto"
              style={{
                borderColor: '#d8c26a',
                backgroundColor: '#0A1E00',
              }}
            >
              Add Cart
            </button>
          </div>
        </div>
      ))
    ) : (
      <p className='text-white fw-bold'>No products match your search.</p>
    )
  ) : (
    <p className='text-white fw-bold'>Please enter a search term to find products.</p>
  )}
</div>
              </div>
            </div>
           </div>
           <div className="container rounded banner my-md-5 my-3" style={{backgroundImage:`url(${image7})`,backgroundRepeat:'no-repeat',backgroundSize:"cover",backgroundPosition:"center",width:'1080px'}}>
            <div className="row" style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
              <div className="col-lg-3 col-md-4 p-3 text-center">
                <img src={image8} alt="OrangeDrink" className='img-fluid rounded ' style={{width:'250px',height:'250px'}}/>
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <h3 className='text-white fw-bold text-center'>TOP SELLER</h3>
                <p className='text-white fw-bold text-center'>“On a recent test run of all three services, Text Free was the fastest, most reliable and easiest to use."</p>
              </div>
            </div>
           </div>
           <div className="container my-md-5 my-3">
            <div className="row">
              <div className="col">
                <h3 className='text-decoration-underline text-black ms-4 fw-bold'>VEGETABLES</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
              <div className='d-flex flex-wrap justify-content-around' id='card'>
      {vegetables.map((vegetable,index)=>(
        <div className="card my-3" style={{width: '15rem',backgroundColor:'#0A1E00',height:'26rem',borderRadius:'15px'}} key={index}>
        <img src={vegetable.image} className="card-img-top img-fluid px-3 pt-3" alt="..." style={{borderRadius:'20px',height:'300px',width:'300px'}}/>
        <div className="card-body pt-0 overflow-hidden">
          <h5 className="card-title text-white mb-0">{vegetable.title}</h5>
          <p className="card-text text-white mb-0">{vegetable.weight}</p>
          <p className="card-text text-white mb-0">{vegetable.description}</p>
          <button type='button' className='rounded py-2 px-5 text-white d-flex ms-auto me-auto' style={{borderColor:'#d8c26a',backgroundColor:'#0A1E00'}}>Add Cart</button>
        </div>
      </div>
      ))}
      </div>
              </div>
            </div>
           </div>
           <div className="container ps-5 pe-5" >
            <div className="row  rounded" style={{backgroundColor:'#0A1E00'}}>
              <div className="col-md-6 overflow-hidden py-3 d-flex">
                <img src={image13} alt="Coca-cola" className='img-fluid ms-auto' style={{width:"300px",height:'600px',transform:'rotate(-10deg)'}}/>
              </div>
              <div className="col-lg-4 col-md-6 d-flex flex-column justify-content-center my-3">
                <h1 className='text-white fw-bold mb-0'>COCA-COLA</h1>
                <p className='text-white mb-0'>1 LITER</p>
                <p className='text-white mb-2'>“On a recent test run of
                all three services.</p>
                <button type='button' className='rounded text-white text-center py-1' style={{borderColor:'#d8c26a',backgroundColor:'#0A1E00'}}>Add Cart</button>
              </div>
            </div>
           </div>
           <div className="container my-md-5 my-3">
           <div className="row">
              <div className="col">
                <h3 className='text-decoration-underline text-black ms-4 fw-bold'>SOFT DRINKS</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
              <div className='d-flex flex-wrap justify-content-around' id='card'>
      {drinks.map((drink,index)=>(
        <div className="card my-3" style={{width: '15rem',backgroundColor:'#0A1E00',height:'26rem',borderRadius:'15px'}} key={index}>
        <img src={drink.image} className="card-img-top img-fluid px-3 pt-3" alt="..." style={{borderRadius:'20px',height:'300px',width:'300px'}}/>
        <div className="card-body pt-0 overflow-hidden">
          <h5 className="card-title text-white mb-0">{drink.title}</h5>
          <p className="card-text text-white mb-0">{drink.weight}</p>
          <p className="card-text text-white mb-0">{drink.description}</p>
          <button type='button' className='rounded py-2 px-5 text-white d-flex ms-auto me-auto mb-2' style={{borderColor:'#d8c26a',backgroundColor:'#0A1E00'}}>Add Cart</button>
        </div>
      </div>
      ))}
      </div>
              </div>
            </div>
           </div>
           <div className="container my-md-5 my-3">
            <div className="row d-flex justify-content-around">
              <div className="col-md-4 mb-1 mt-0">
                <div className="row">
                  <div className="col-12 mb-1 mt-2">
                    <img src={image18} alt="Marwa" className='img-fluid rounded' style={{width:'500px',height:'300px'}}/>
                  </div>
                  <div className="col-12 mt-2 mb-1">
                  <img src={image19} alt="Marwa" className='img-fluid rounded' style={{width:'500px',height:'300px'}} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-2 mt-1">
              <img src={image20} alt="Group" className='img-fluid rounded' style={{width:'100%',height:'100%'}} />
              </div>
              <div className="col-md-4 my-1">
                <div className="row">
                  <div className="col-12 mb-2">
                  <img src={image21} alt="Group" className='img-fluid rounded' style={{width:'500px',height:'300px'}} />
                  </div>
                  <div className="col-12 mt-1 mb-2">
                  <img src={image22} alt="Group" className='img-fluid rounded' style={{width:'500px',height:'300px'}}/>
                  </div>
                </div>
              </div>
            </div>
           </div>
           <div className="container rounded banner my-md-5 my-3" style={{backgroundImage:`url(${image24})`,backgroundRepeat:'no-repeat',backgroundSize:"cover",backgroundPosition:"center",width:'1080px'}}>
            <div className="row" style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
              <div className="col-lg-3 col-md-4 p-3 text-center">
                <img src={image23} alt="OrangeDrink" className='img-fluid rounded ' style={{width:'250px',height:'250px'}}/>
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <h3 className='text-white fw-bold text-center'>TOP SELLER</h3>
                <p className='text-white fw-bold text-center'>“On a recent test run of all three services, Text Free was the fastest, most reliable and easiest to use."</p>
              </div>
            </div>
           </div>
           <div className="container my-md-5 my-3">
           <div className="row">
              <div className="col">
                <h3 className='text-decoration-underline text-black ms-4 fw-bold'>FRUITS</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
              <div className='d-flex flex-wrap justify-content-around' id='card'>
      {fruits.map((fruit,index)=>(
        <div className="card my-3" style={{width: '15rem',backgroundColor:'#0A1E00',height:'26rem',borderRadius:'15px'}} key={index}>
        <img src={fruit.image} className="card-img-top img-fluid px-3 pt-3" alt="..." style={{borderRadius:'20px',height:'300px',width:'300px'}}/>
        <div className="card-body pt-0 overflow-hidden">
          <h5 className="card-title text-white mb-0">{fruit.title}</h5>
          <p className="card-text text-white mb-0">{fruit.description}</p>
          <button type='button' className='rounded py-2 px-5 text-white d-flex ms-auto me-auto' style={{borderColor:'#d8c26a',backgroundColor:'#0A1E00'}}>Add Cart</button>
        </div>
      </div>
      ))}
      </div>
              </div>
            </div>
           </div>
           <div className="container rounded banner my-md-5 my-3" style={{backgroundImage:`url(${image24})`,backgroundRepeat:'no-repeat',backgroundSize:"cover",backgroundPosition:"center",width:'1080px'}}>
            <div className="row" style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
              <div className="col-lg-3 col-md-4 p-3 text-center">
                <img src={image23} alt="OrangeDrink" className='img-fluid rounded ' style={{width:'250px',height:'250px'}}/>
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <h3 className='text-white fw-bold text-center'>TOP SELLER</h3>
                <p className='text-white fw-bold text-center'>“On a recent test run of all three services, Text Free was the fastest, most reliable and easiest to use."</p>
              </div>
            </div>
           </div>
           <div className="container my-md-5 my-3">
            <div className="row d-flex justify-content-around">
              <div className="col-md-4 mb-1 mt-0">
                <div className="row">
                  <div className="col-12 mb-1 mt-2">
                    <img src={image33} alt="Marwa" className='img-fluid rounded' style={{width:'500px',height:'300px'}}/>
                  </div>
                  <div className="col-12 mt-2 mb-1">
                  <img src={image32} alt="Marwa" className='img-fluid rounded' style={{width:'500px',height:'300px'}} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-2 mt-1">
              <img src={image35} alt="Group" className='img-fluid rounded' style={{width:'100%',height:'100%'}} />
              </div>
              <div className="col-md-4 my-1">
                <div className="row">
                  <div className="col-12 mb-2">
                  <img src={image31} alt="Group" className='img-fluid rounded' style={{width:'500px',height:'300px'}} />
                  </div>
                  <div className="col-12 mt-1 mb-2">
                  <img src={image34} alt="Group" className='img-fluid rounded' style={{width:'500px',height:'300px'}}/>
                  </div>
                </div>
              </div>
            </div>
           </div>
           <div className="container">
           <div className="row">
              <div className="col">
                <h3 className='text-decoration-underline text-black ms-4 fw-bold'>GRADIENTS</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
              <div className='d-flex flex-wrap justify-content-around' id='card'>
      {gradient.map((gradient,index)=>(
        <div className="card my-3" style={{width: '15rem',backgroundColor:'#0A1E00',height:'26rem',borderRadius:'15px'}} key={index}>
        <img src={gradient.image} className="card-img-top img-fluid px-3 pt-3" alt="..." style={{borderRadius:'20px',height:'300px',width:'300px'}}/>
        <div className="card-body pt-0 overflow-hidden">
          <h5 className="card-title text-white mb-0">{gradient.title}</h5>
          <p className="card-text text-white mb-0">{gradient.weight}</p>
          <p className="card-text text-white mb-0">{gradient.description}</p>
          <button type='button' className='rounded py-2 px-5 text-white d-flex ms-auto me-auto' style={{borderColor:'#d8c26a',backgroundColor:'#0A1E00'}}>Add Cart</button>
        </div>
      </div>
      ))}
      </div>
              </div>
            </div>
           </div>
           <div className="container rounded" style={{backgroundColor:'#0a1e00'}}>
            <div className="row">
              <div className="col-md-3 py-md-4 pt-3 pb-0">
                <div style={{backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${image41})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'100% 100%',height:'250px'}} className='d-flex flex-column justify-content-end rounded my-2 align-items-center'>
                  <h3 style={{color:'#f9ca33'}}>MILK</h3>
                  <p className='text-white'>Million Of Happyusers</p>
                </div>
                <div style={{backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${image39})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'100% 100%',height:'250px'}} className='d-flex flex-column justify-content-end rounded mt-1 mb-2 align-items-center'>
                  <h3 style={{color:'#f9ca33'}}>VEGETABLES</h3>
                  <p className='text-white'>Million Of Happyusers</p>
                </div>
              </div>
              <div className="col-md-4 py-md-4 py-0">
              <div style={{backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${image44})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',height:'320px'}} className='d-flex flex-column justify-content-end rounded my-2 align-items-center'>
                  <h3 style={{color:'#f9ca33'}}>FRUITS</h3>
                  <p className='text-white'>Million Of Happyusers</p>
                </div>
                <div style={{backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${image40})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',height:'180px'}} className='d-flex flex-column justify-content-end rounded my-2 align-items-center'>
                  <h3 style={{color:'#f9ca33'}}>VEGETABLE</h3>
                  <p className='text-white'>Million Of Happyusers</p>
                </div>
              </div>
              <div className="col-md-5 py-md-4 pt-0 pb-3">
              <div className="row d-flex justify-content-around">
              <div style={{backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${image42})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',height:'250px'}} className='d-flex flex-column justify-content-end rounded my-2 align-items-center col-5 pe-0 ps-0'>
                  <h3 style={{color:'#f9ca33'}}>FRUITS</h3>
                  <p className='text-white'>Million Of Happyusers</p>
                </div>
                <div style={{backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${image38})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',height:'250px'}} className='d-flex flex-column justify-content-end rounded my-2 align-items-center col-5 ps-0'>
                  <h3 style={{color:'#f9ca33'}}>VEGETABLE</h3>
                  <p className='text-white'>Million Of Happyusers</p>
                </div>
              </div>
              <div className="row d-flex justify-content-around">
              <div style={{backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${image43})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',height:'250px'}} className='d-flex flex-column justify-content-end rounded mt-0 align-items-center col-7 pe-0 ps-0'>
                  <h3 style={{color:'#f9ca33'}}>DOUGH</h3>
                  <p className='text-white'>Million Of Happyusers</p>
                </div>
                <div style={{backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${image37})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',height:'250px'}} className='d-flex flex-column justify-content-end rounded mt-0 align-items-center col-4 ps-0'>
                  <h3 style={{color:'#f9ca33'}}>WINE</h3>
                  <p className='text-white'>Million Of Happyusers</p>
                </div>
              </div>
              </div>
            </div>
           </div>
          </div>
          <Footer/>
        </section>
      );
}

export default Home
