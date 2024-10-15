import GoogleMapReact from 'google-map-react';


const Map = () => {
   
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
  
    const defaultProps = {
        center: {
          lat: 22.3583,
          lng:  91.8383
        },
        zoom: 20
      };




    return (
       <div>
       
       <div>

        <h1 className="text-4xl font-bold text-center text-red-600  underline"> Find Our Office</h1>
        <h1 className='my-2 text-center text-xl font-bold'>Arakan Road , Cawkbazar , Chittagong.</h1>
       </div>


<div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />


        </GoogleMapReact>
      </div>
       </div>
    );
};

export default Map;