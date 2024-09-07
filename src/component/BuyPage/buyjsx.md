import './BuyPage.css'; // Import the CSS file
import SearchBar from '../shared/SearchBar';
import searchIcon from '../../assets/search.png';
import homeIcon from '../../assets/home.png';
import villaIcon from '../../assets/villa.png';
import foundationIcon from '../../assets/foundation.png';
import scheduleIcon from '../../assets/schedule.png';
import vectorIcon from '../../assets/vector.png';
import Homeacq1 from '../../assets/Homeacq1.png'; 
import Homeacq2 from '../../assets/Homeacq2.png';
import Homeacq3 from '../../assets/Homeacq3.png';
import Homeacq4 from '../../assets/Homeacq4.png';
import Card from '../shared/Card';
import Button from '../shared/Button';

const Buy = () => {
  return (
    <div className="buy-page">
      <div className="sidebar">
        <div className="search-container">
          {/* First Line: 2 Search Bars */}
          <div className="search-row">
            <SearchBar
              placeholder="For Sale"
              height="40px"
              width="250px"
              borderRadius="15px"
              backgroundColor="#CFCECE"
            >
              <img src={searchIcon} alt="Search"  />
            </SearchBar>
            <SearchBar
              placeholder="For Rent"
              height="40px"
              width="250px"
              borderRadius="15px"
              backgroundColor="#CFCECE"
            >
              <img src={searchIcon} alt="Search" />
            </SearchBar>
          </div>
          {/* Second Line: 2 Search Bars */}
          <div className="search-row">
            <SearchBar
              placeholder="House"
              height="40px"
              width="250px"
              borderRadius="15px"
              backgroundColor="#CFCECE"
            >
              <img src={homeIcon} alt="Search" />
            </SearchBar>
            <SearchBar
              placeholder="Condo"
              height="40px"
              width="250px"
              borderRadius="15px"
              backgroundColor="#CFCECE"
            >
              <img src={villaIcon} alt="Search" />
            </SearchBar>
          </div>
          {/* Third Line: 1 Search Bar */}
          <div className="search-row">
            <SearchBar
              placeholder="New Constructions"
              height="40px"
              width="200px"
              borderRadius="15px"
              backgroundColor="#CFCECE"
            >
              <img src={foundationIcon} alt="Search" />
            </SearchBar>
          </div>
          {/* Fourth Line: 2 Search Bars */}
          <div className="search-row">
            <SearchBar
              placeholder="Coming Soon"
              height="30px"
              width="250px"
              borderRadius="15px"
              backgroundColor="#CFCECE"
            >
              <img src={scheduleIcon} alt="Search" style={{ height: "12px", width: "12px"}}/>
            </SearchBar>
            <SearchBar
  placeholder="More"
  height="40px"
  width="150px"
  borderRadius="15px"
  backgroundColor="#CFCECE"
>
  <img 
    src={vectorIcon} 
    alt="Search"  
    style={{
      height: "16px",
    }}
  />
</SearchBar>

          </div>
        </div>
        {/* Remaining empty divs in the sidebar */}
        <div className="H3text"> 
          <h3>Bedrooms</h3>
        </div>
        {/* second div*/}
        <div className="search-row1">
            <SearchBar
              placeholder="Studio"
              height="40px"
              width="200px"
              borderRadius="15px"
              backgroundColor="#CFCECE"
            >
              <img src={searchIcon} alt="Search"  />
            </SearchBar>
            <SearchBar
              placeholder="1"
              height="40px"
              width="120px"
              borderRadius="15px"
              backgroundColor="#CFCECE"
            >
              <img src={searchIcon} alt="Search" />
            </SearchBar>
            <SearchBar
              placeholder="2"
              height="30px"
              Width="150px"
              borderRadius="15px"
              backgroundColor="#CFCECE"
            >
              <img src={searchIcon} alt="Search" />
            </SearchBar>
          </div>


        {/* third div  */}
        <div className="search-row2">
            <SearchBar
              placeholder="3"
              height="40px"
              width="150px"
              borderRadius="15px"
              backgroundColor="#CFCECE"
            >
              <img src={searchIcon} alt="Search"  />
            </SearchBar>
            <SearchBar
              placeholder="4+"
              height="40px"
              width="150px"
              borderRadius="15px"
              backgroundColor="#CFCECE"
            >
              <img src={searchIcon} alt="Search" />
            </SearchBar>
          </div>

          <div className="H3text"> 
          <h3>Bathrooms</h3>
        </div>
        {/* second div*/}
        <div className="search-row1">
            <SearchBar
              placeholder="1+"
              height="40px"
              width="210px"
              borderRadius="15px"
              backgroundColor="#CFCECE"
            >
              <img src={searchIcon} alt="Search"  />
            </SearchBar>
            <SearchBar
              placeholder="2+"
              height="40px"
              width="210px"
              borderRadius="15px"
              backgroundColor="#CFCECE"
            >
              <img src={searchIcon} alt="Search" />
            </SearchBar>
            <SearchBar
              placeholder="3+"
              height="40px"
              Width="150px"
              borderRadius="15px"
              backgroundColor="#CFCECE"
            >
              <img src={searchIcon} alt="Search" />
            </SearchBar>
          </div>


        {/* third div  */}
        <div className="search-row2">
            <SearchBar
              placeholder="4+"
              height="40px"
              width="150px"
              borderRadius="15px"
              backgroundColor="#CFCECE"
            >
              <img src={searchIcon} alt="Search"  />
            </SearchBar>
            <SearchBar
              placeholder="5+"
              height="40px"
              width="150px"
              borderRadius="15px"
              backgroundColor="#CFCECE"
            >
              <img src={searchIcon} alt="Search" />
            </SearchBar>
          </div>


        <div className='PrizeRange'>
          <h3>Price range</h3>
           
                      <div className='PriceRange1'>
                      <SearchBar
              placeholder=" Min"
              height="40px"
              width="300px"
              borderRadius="15px"
              backgroundColor=""
              border="1px solid orange"
            >
            
            </SearchBar>
                      </div>
                       <div className='PriceRange2'>
            <SearchBar
              placeholder="Max"
              height="40px"
              width="300px"
              borderRadius="15px"
              backgroundColor=""
              border="1px solid orange"
            >
            
                      </SearchBar>
                      </div>
        </div>

  {/* Home  Type Div */}
<div className='HomeTypeContainer'>
  <h3>Home Type</h3>

  <div className='HomeType'>
    <SearchBar
      placeholder="Houses"
      height="40px"
      width="300px"
      borderRadius="15px"
      backgroundColor=""
      border="1px solid orange"
      showRadio={true}
      radioName="homeType"
    >
      
    </SearchBar>
  </div>

  <div className='HomeType'>
    <SearchBar
      placeholder="Apartments"
      height="40px"
      width="300px"
      borderRadius="15px"
      backgroundColor=""
      border="1px solid orange"
      showRadio={true}
      radioName="homeType"
    >
     
    </SearchBar>
  </div>

  <div className='HomeType'>
    <SearchBar
      placeholder="Condos/co-ops"
      height="40px"
      width="300px"
      borderRadius="15px"
      backgroundColor=""
      border="1px solid orange"
      showRadio={true}
      radioName="homeType"
    >
      
    </SearchBar>
  </div>

  <div className='HomeType'>
    <SearchBar
      placeholder="Townhomes"
      height="40px"
      width="300px"
      borderRadius="15px"
      backgroundColor=""
      border="1px solid orange"
      showRadio={true}
      radioName="homeType"
    >
      
    </SearchBar>
  </div>

  <div className='HomeType'>
    <SearchBar
      placeholder="Manufactures"
      height="40px"
      width="300px"
      borderRadius="15px"
      backgroundColor=""
      border="1px solid orange"
      showRadio={true}
      radioName="homeType"
    >
      
    </SearchBar>
  </div>

  <div className='HomeType'>
    <SearchBar
      placeholder="Lots/land"
      height="40px"
      width="300px"
      borderRadius="15px"
      backgroundColor=""
      border="1px solid orange"
      showRadio={true}
      radioName="homeType"
    >
    
    </SearchBar>
  </div>

  <div className='HomeType'>
    <SearchBar
      placeholder="Multifamily"
      height="40px"
      width="300px"
      borderRadius="15px"
      backgroundColor=""
      border="1px solid orange"
      showRadio={true}
      radioName="homeType"
    >
      
    </SearchBar>
  </div>
</div>

       <div className='PrizeRange'>
          <h3>Keywords</h3>
           
                      <div className='PriceRange1'>
                      <SearchBar
              placeholder=" Eg, Lake, Pool, Ocean  view"
              height="40px"
              width="300px"
              borderRadius="15px"
              backgroundColor=""
              border="1px solid orange"
            >
            
            </SearchBar>
                      </div>
                      <Button 
           
            text="Apply"
            bgColor="rgb(220, 101, 41)" // Example background color
            txColor="#fff"    // Example text color
            btnBorder="none"
            width="300px"
            borderRadius="5px"
            padding="8px 16px"
            fontSize="14px"
            cursor="pointer"
            transition="background-color 0.3s ease"
          />
        </div>

      



      </div>


      

      <div className="main-content">
        <h2>Explore Properties for Sale</h2>
        
        <div className='HomeType'>
    <SearchBar
      placeholder="Search Properties for Sale"
      height="40px"
      width="999px"
      borderRadius="15px"
      backgroundColor=""
      border="1px solid orange"
    >
      <img src={searchIcon} alt="Search" />
    </SearchBar>
  </div>

      
        
  <div className="card-container">
  <Card 
    title="Beautiful Beach House"
    price={5000000}
    image={Homeacq1}
    description="A lovely beach house with stunning ocean views."
    name="Beach House 1"
    address="123 Ocean Drive, Lagos"
  />
  <Card 
    title="Urban Apartment"
    price={4500000}
    image={Homeacq2}
    description="A modern apartment in the city center with all amenities."
    name="City Apartment"
    address="456 City Lane, Abuja"
  />
  <Card 
    title="Luxury Villa"
    price={10000000}
    image={Homeacq3}
    description="A luxurious villa with a private pool and garden."
    name="Villa Serenity"
    address="789 Sunset Boulevard, Ikoyi"
  />
  <Card 
    title="Cozy Cottage"
    price={2500000}
    image={Homeacq4}
    description="A cozy cottage nestled in the countryside, perfect for a getaway."
    name="Country Cottage"
    address="321 Countryside Road, Jos"
  />
  <Card 
    title="Modern Duplex"
    price={6000000}
    image={Homeacq1}
    description="A spacious duplex with modern finishes and a rooftop terrace."
    name="Duplex Haven"
    address="654 Green Park, Lekki"
  />
  <Card 
    title="Penthouse Suite"
    price={8500000}
    image={Homeacq2}
    description="A stunning penthouse suite with panoramic city views."
    name="Skyline Penthouse"
    address="987 Tower Plaza, Victoria Island"
  />
  <Card 
    title="Family Bungalow"
    price={4000000}
    image={Homeacq3}
    description="A comfortable bungalow perfect for family living."
    name="Bungalow Bliss"
    address="432 Maple Avenue, Enugu"
  />
  <Card 
    title="Seaside Condo"
    price={7500000}
    image={Homeacq4}
    description="A stylish condo with easy access to the beach."
    name="Ocean Breeze Condo"
    address="567 Beachfront Avenue, Port Harcourt"
  />
</div>

      
      </div>
    </div>
  );
};

export default Buy;
