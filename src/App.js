/* import logo from './logo.svg'; */
import './App.css';
import Card from "./components/Card";

const data=[
  {
    url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    productName:"love",
    _id:1,
    desc: "lorem ipsum dolor"
    },
    {
      url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      productName:"sun",
      _id:2,
      desc: "lorem ipsum dolor"
      },
      {
        url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        productName:"earth",
        _id:3,
        desc: "lorem ipsum dolor"
        },
        {
          url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          productName:"moon",
          _id:4,
          desc: "lorem ipsum dolor"
          },
]

function App() {
  const title="HEY LETS GO/..."
  return (
    <div className='container'>
       <h1>hello</h1>
       <br />
     {/* <h1>{title}</h1>
      <div className='row'>

        <div className="col-6 col-sm-4 col-md-3">
          <Card />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <Card />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <Card />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <Card />
        </div>
      </div>
 */}

    <div className='row'>
      {
        data.map((val,i)=>{
          return (<div className="col-6 col-sm-4 col-md-3">
          <Card values={val} />
        </div>)
        })
      }
      </div>  
    </div>
  );
}

export default App;


/* class == className
  no closing tag == inline closing */