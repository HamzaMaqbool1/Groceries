import React, { useState } from 'react'
import image2 from '../Images/vegetable.png'
import image3 from '../Images/mango.png'
import image4 from '../Images/annar.jpg'
import image5 from '../Images/apple.jpg'
import image6 from '../Images/dragonfruit.png'
import image7 from '../Images/grapes.png'
import image9 from '../Images/kopa.png'
import image10 from '../Images/orange.png'
import image11 from '../Images/watermelon.jpg'
import image12 from '../Images/orange1.jpg'
import image13 from '../Images/kiwi1.png'
import image15 from '../Images/strawberyremove.png'
import image16 from '../Images/cherry.png'
import image17 from '../Images/kiwi.png'
import image18 from '../Images/melon.png'
import image19 from '../Images/banana.jpg'
import image20 from '../Images/peach.jpg'
import image21 from '../Images/guava.png'
import image22 from '../Images/khopa.png'
import image23 from '../Images/peach1.png'
import image24 from '../Images/avocado.png'
import image25 from '../Images/group.png'
import image26 from '../Images/mellburry.png'
import image27 from '../Images/pineapple2.png'
import image28 from '../Images/orange3.png'
import image29 from '../Images/avocado1.jpg'
import image30 from '../Images/papaya.jpg'
import image31 from '../Images/coconut.jpeg'
import image32 from '../Images/dates.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faPhone,faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Footer(){
    return(
      <section id='footer'>
          <div className="container-fluid bg-black d-block" style={{height:'max-content'}} >
            <div className="row">
              <div className="col-12">
                <img src={image2} alt="Logo" className='img-fluid' style={{width:'100px',height:'100px'}}/>
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
      </section>
    )
  }
const Product = () => {
    const [active,setActive]=useState("product")
    const handleActive=(option)=>{
        setActive(option)
    }
    const [searchQuery, setSearchQuery] = useState('');
const handleSearchChange = (e) => {
  setSearchQuery(e.target.value);  // Update the search query with input value
};

    const Fruits=[
        {
            image:image6,
            title:"Dragon Fruit",
            description:"A dragon fruit is an edible stone fruit."
    },
    {
        image:image4,
        title:"Anar",
        description:"An anar fruit is an edible stone fruit."},
        {
            image:image10,
            title:"Orange",
            description:"An orange fruit is an edible stone fruit."
        },
        {
            image:image5,
            title:"Apple",
            description:"An apple fruit is an edible stone fruit."
        },
        {
            image:image11,
            title:"Watermelon",
            description:"A watermelon fruit is an edible stone fruit."
        },
        {
            image:image7,
            title:"Grapes",
            description:"A grapes fruit is an edible stone fruit."
        },
        {
            image:image9,
            title:"Chiku",
            description:"A Chiku fruit is an edible stone fruit."
        },
        {
            image:image12,
            title:"Orange",
            description:"A orange fruit is an edible stone fruit."
        },
        {
            image:image16,
            title:"Cherry",
            description:"A cherry fruit is an edible stone fruit."
        },
        {
            image:image17,
            title:"kiwi",
            description:"A kiwi fruit is an edible stone fruit."
        },
        {
            image:image18,
            title:"Melon",
            description:"A melon fruit is an edible stone fruit."
        },
        {
            image:image19,
            title:"Banana",
            description:"A banana fruit is an edible stone fruit."
        },
        {
            image:image11,
            title:"Watermelon",
            description:"A watermelon fruit is an edible stone fruit."
        },
        {
            image:image20,
            title:"Peach",
            description:"A peach fruit is an edible stone fruit."
        },
        {
            image:image21,
            title:"Guava",
            description:"A guava fruit is an edible stone fruit."
        },
        {
            image:image22,
            title:"Chiku",
            description:"A Chiku fruit is an edible stone fruit."
        },
        {
            image:image9,
            title:"Chiku",
            description:"A Chiku fruit is an edible stone fruit."
        },
        {
            image:image26,
            title:"Mellburry",
            description:"A Mellburry fruit is an edible stone fruit."
        },
        {
            image:image27,
            title:"Pineapple",
            description:"A Pineapple fruit is an edible stone fruit."
        },
        {
            image:image28,
            title:"Orange",
            description:"An Orange fruit is an edible stone fruit."
        },
        {
            image:image29,
            title:"Avocado",
            description:"An Avocado fruit is an edible stone fruit."
        },
        {
            image:image30,
            title:"Pappaya",
            description:"A Pappaya fruit is an edible stone fruit."
        },
        {
            image:image7,
            title:"Grapes",
            description:"A Grapes fruit is an edible stone fruit."
        },
        {
            image:image31,
            title:"Cocconut",
            description:"A Coccunt fruit is an edible stone fruit."
        }
        
]
const filteredProducts = Fruits.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <section id='product'>
        <div className="container-fluid p-0"  style={{backgroundColor:'#E4E4E4'}}>
            <div className="row">
                <div className="col-12">
                <nav className="navbar navbar-expand-lg">
    <img src={image2} alt="Logo" className='img-fluid' style={{width:'50px',height:'50px'}}/>
    <button className="navbar-toggler ms-lg-0 ms-auto bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex ms-auto" role="search">
        <input className="form-control " type="search" placeholder="Search" aria-label="Search" value={searchQuery}
          onChange={handleSearchChange}/>
      </form>
      <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
        <li className={`nav-item ${active === "home"?"active":""}`}>
          <Link className="nav-link" onClick={()=>{handleActive("home")}} style={active === "home"?{color:'#d8c26a',textDecoration:'underline'}:{color:'white'}}  to="/">Home</Link>
        </li>
        <li className={`nav-item ${active === "about"?"active":""}`}>
          <Link className="nav-link" onClick={()=>{handleActive("about")}} style={active ==="about"?{color:'#d8c26a',textDecoration:'underline'}:{color:'white'}}  to="/about">About</Link>
        </li>
        <li className={`nav-item ${active === "contact"?"active":""}`}>
          <Link className="nav-link" onClick={()=>{handleActive("contact")}} style={active ==="contact"?{color:'#d8c26a',textDecoration:'underline'}:{color:'white'}}  to="/contact">Contact</Link>
        </li>
        <li className={`nav-item ${active === "product"?"active":""}`}>
          <Link className="nav-link" onClick={()=>{handleActive("product")}} style={active ==="product"?{color:'#d8c26a',textDecoration:'underline'}:{color:'white'}}  to="/product">Product</Link>
        </li>
        <li className={`nav-item ${active === "login"?"active":""}`}>
          <Link className="nav-link" onClick={()=>{handleActive("login")}} style={active ==="login"?{color:'#d8c26a',textDecoration:'underline'}:{color:'white'}}  to="/login">Login</Link>
        </li>
      </ul>
    </div>
</nav>
                </div>
            </div>
            <div className="row d-flex justify-content-between vh-md-100 my-md-5 my-3">
                <div className="col-md-4 d-flex flex-column justify-content-center ms-auto me-auto">
                    <h1 className='text-muted display-3'>𝓣a𝓼𝓽𝔂 𝓪𝓷𝓭 <span style={{color:'#f9ca33'}}>𝓕𝓻𝓮𝓼𝓱</span></h1>
                    <p className='text-black fs-6 pe-5'>A mango is an edible stone fruit produced by the tropical tree Mangifera indica.</p>
                    <div className='d-flex'>
                        <FontAwesomeIcon icon={faStar} size='2x' color='#f9ca33'/>
                        <FontAwesomeIcon icon={faStar} size='2x' color='#f9ca33'/>
                        <FontAwesomeIcon icon={faStar} size='2x' color='#f9ca33'/>
                        <FontAwesomeIcon icon={faStar} size='2x' color='#f9ca33'/>
                        <FontAwesomeIcon icon={faStar} size='2x' color='white'/>
                    </div>
                    <button type='button' className='py-2 rounded  text-black fw-bold d-flex ms-auto me-auto justify-content-center my-3' style={{borderColor:'#f9ca33' ,width:'70%'}}>BUY NOW</button>
                </div>
                <div className="col-md-6 mango" style={{backgroundColor:'#CBCBCA',borderTopLeftRadius:'50px',borderBottomLeftRadius:'50px'}}>
                    <img src={image3} alt="" className='img-fluid' style={{width:'100%', height:'100%'}}/>
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
          className="card my-3 border-0"
          style={{
            width: '15rem',
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
          <h5 className="card-title text-white mb-0 d-flex">
            <span style={{color:'#f9ca33'}}>𝓕𝓻𝓮𝓼𝓱</span>
            <div className='d-flex ms-auto'>
                <p className='text-black fw-bold'>4.3</p>
                <FontAwesomeIcon icon={faStar} size='1x' color='#f9ca33'/>
            </div>
          </h5>
          <p className="card-text text-black mb-0">{product.description}</p>
          <button type='button' className='px-5 text-black fw-bold d-flex ms-auto me-auto' style={{borderColor:'#d8c26a',borderRadius:'50px'}}>Add Cart</button>
        </div>
        </div>
      ))
    ) : (
      <p className='text-black fw-bol'>No products match your search.</p>
    )
  ) : (
    <p className='text-black fw-bold'>Please enter a search term to find products.</p> 
  )}
</div>
              </div>
            </div>
           </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-flex flex-wrap justify-content-around" id='card'>
                    {Fruits.slice(0,8).map((fruit,index)=>(
        <div className="card my-3 border-0" style={{width: '15rem',height:'26rem',borderRadius:'15px'}} key={index}>
        <img src={fruit.image} className="card-img-top img-fluid px-3 pt-3" alt="..." style={{height:'300px',width:'300px'}}/>
        <div className="card-body pt-0 overflow-hidden">
          <h5 className="card-title text-white mb-0 d-flex">
            <span style={{color:'#f9ca33'}}>𝓕𝓻𝓮𝓼𝓱</span>
            <div className='d-flex ms-auto'>
                <p className='text-black fw-bold'>4.3</p>
                <FontAwesomeIcon icon={faStar} size='1x' color='#f9ca33'/>
            </div>
          </h5>
          <p className="card-text text-black mb-0">{fruit.description}</p>
          <button type='button' className='px-5 text-black fw-bold d-flex ms-auto me-auto' style={{borderColor:'#d8c26a',borderRadius:'50px'}}>Add Cart</button>
        </div>
      </div>
      ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid" style={{backgroundColor:'#E4E4E4'}}>
            <div className="container-fluid my-5" style={{backgroundImage:`url(${image13})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                <div className="row d-flex justify-content-center vh-md-100 ">
                    <div className="col-lg-4 col-md-6 d-flex flex-column justify-content-center ms-auto me-auto text-center">
                    <h1 className='text-white display-3'>𝓣a𝓼𝓽𝔂 𝓪𝓷𝓭 <span style={{color:'#f9ca33'}}>𝓕𝓻𝓮𝓼𝓱</span></h1>
                    <p className='text-white fs-4 pe-5'>A mango is an edible stone fruit produced by the tropical tree Mangifera indica.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={image15} alt="Strabery" className='img-fluid' style={{width:'100%', height:'100%'}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-flex flex-wrap justify-content-around" id='card'>
                    {Fruits.slice(8,16).map((fruit,index)=>(
        <div className="card my-3 border-0" style={{width: '15rem',height:'26rem',borderRadius:'15px'}} key={index}>
        <img src={fruit.image} className="card-img-top img-fluid px-3 pt-3" alt="..." style={{height:'300px',width:'300px'}}/>
        <div className="card-body pt-0 overflow-hidden">
          <h5 className="card-title text-white mb-0 d-flex">
            <span style={{color:'#f9ca33'}}>𝓕𝓻𝓮𝓼𝓱</span>
            <div className='d-flex ms-auto'>
                <p className='text-black fw-bold'>4.3</p>
                <FontAwesomeIcon icon={faStar} size='1x' color='#f9ca33'/>
            </div>
          </h5>
          <p className="card-text text-black mb-0">{fruit.description}</p>
          <button type='button' className='px-5 text-black fw-bold d-flex ms-auto me-auto' style={{borderColor:'#d8c26a',borderRadius:'50px'}}>Add Cart</button>
        </div>
      </div>
      ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid p-0" style={{backgroundColor:'#E4E4E4'}}>
            <div className="container my-md-5 my-3">
                <div className="row d-flex justify-content-around">
                    <div className="col-md-6 mb-3">
                    <img src={image23} alt="" className='img-fluid rounded' style={{width:'500px',height:'500px'}}/>
                    <h1 className="card-title text-white mb-0 d-flex">
            <span style={{color:'#f9ca33'}}>𝓕𝓻𝓮𝓼𝓱</span>
            <div className='d-flex ms-auto me-5'>
                <p className='text-black fw-bold'>4.3</p>
                <FontAwesomeIcon icon={faStar} size='1x' color='#f9ca33'/>
            </div>
          </h1>
          <p className="card-text text-black mb-0 fs-5">A Peach is an edible
 stone fruit.

</p>
          <button type='button' className='px-5 text-black fw-bold d-flex ms-auto me-auto' style={{borderColor:'#d8c26a',borderRadius:'50px'}}>Add Cart</button>
                    </div>
                    <div className="col-md-6">
                    <img src={image24} alt="" className='img-fluid rounded' style={{width:'500px',height:'500px'}}/>
                    <h1 className="card-title text-white mb-0 d-flex">
            <span style={{color:'#f9ca33'}}>𝓕𝓻𝓮𝓼𝓱</span>
            <div className='d-flex ms-auto me-5'>
                <p className='text-black fw-bold'>4.3</p>
                <FontAwesomeIcon icon={faStar} size='1x' color='#f9ca33'/>
            </div>
          </h1>
          <p className="card-text text-black mb-0 fs-5">An Avocado is an edible
 stone fruit.

</p>
          <button type='button' className='px-5 text-black fw-bold d-flex ms-auto me-auto' style={{borderColor:'#d8c26a',borderRadius:'50px'}}>Add Cart</button>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-3" style={{backgroundImage:`url(${image25})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                <div className="row d-flex justify-content-center my-3">
                    <div className="col-md-6 d-flex flex-column align-items-center">
                    <h1 className='text-white display-3'>𝓣a𝓼𝓽𝔂 𝓪𝓷𝓭 <span style={{color:'#f9ca33'}}>𝓕𝓻𝓮𝓼𝓱</span></h1>
                    <p className='text-white fs-4 pe-5'>A mango is an edible stone fruit produced by the tropical tree Mangifera indica.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                <div className="d-flex flex-wrap justify-content-around" id='card'>
                    {Fruits.slice(16,24).map((fruit,index)=>(
        <div className="card my-3 border-0" style={{width: '15rem',height:'26rem',borderRadius:'15px'}} key={index}>
        <img src={fruit.image} className="card-img-top img-fluid px-3 pt-3" alt="..." style={{height:'300px',width:'300px'}}/>
        <div className="card-body pt-0 overflow-hidden">
          <h5 className="card-title text-white mb-0 d-flex">
            <span style={{color:'#f9ca33'}}>𝓕𝓻𝓮𝓼𝓱</span>
            <div className='d-flex ms-auto'>
                <p className='text-black fw-bold'>4.3</p>
                <FontAwesomeIcon icon={faStar} size='1x' color='#f9ca33'/>
            </div>
          </h5>
          <p className="card-text text-black mb-0">{fruit.description}</p>
          <button type='button' className='px-5 text-black fw-bold d-flex ms-auto me-auto' style={{borderColor:'#d8c26a',borderRadius:'50px'}}>Add Cart</button>
        </div>
      </div>
      ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid p-0" style={{backgroundColor:'#E4E4E4'}}>
            <div className="container-fluid mt-5 vh-100" style={{backgroundImage:`url(${image32})`,backgroundRepeat:'no-repeat',backgroundSize:"cover"}}>
                <div className="row d-flex justify-content-end vh-100">
                    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <h1 className='text-white display-3'>𝓣a𝓼𝓽𝔂 𝓪𝓷𝓭 <span style={{color:'#f9ca33'}}>𝓕𝓻𝓮𝓼𝓱</span></h1>
                    <p className='text-white fs-4 pe-5'>A Dates is an edible stone fruit produced by the tropical tree Mangifera indica.</p>
                    </div>
                </div>
            </div>
        </div>
      <Footer/>
    </section>
  )
}

export default Product
