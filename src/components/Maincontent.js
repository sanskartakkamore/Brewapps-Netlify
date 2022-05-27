import React from 'react'

export default function Maincontent() {
  return (
    <>
    <div className="container-fluid px-0">
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://source.unsplash.com/1600x600/?Nft,trade,meta" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>BrewApps Welcome's you all</h5>
            <p>Yes we serve the best deals for our clients</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/1600x600/?stocks,bitcoins" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Expertize Solutions from BrewApps</h5>
            <p>We are pleased to give<strong>Moring Tips on Stock Exchange</strong></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/1600x600/?Money,NFT" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5><b><strong>NFT'S</strong></b></h5>
            <p>Non Fungible token</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

      
    {/* cor end here */}

<div className="container my-4">
    <h1 className="my-2 text-center"><b>Live Spaces</b></h1>
    <p className='text-center'><em>All NFT's on cyber belongs toor were minted by thier space creater</em></p>
    <p></p>

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div className="col">
        <div className="card shadow-sm">
          <img
            src="https://media.istockphoto.com/photos/man-wearing-vr-glasses-picture-id1351720122?b=1&k=20&m=1351720122&s=170667a&w=0&h=avNfCIqSViPF4y82lZRzPwxP75MfYcj8lHY0w7-QQnI="
            alt=""/>

          <div className="card-body bg-dark">
            <p className="card-text text-light"><strong>Visualize your Meta</strong></p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">@metaverse</button>
                {/* <button type="button" id="one" className="btn btn-sm btn-outline-secondary">Buy</button> */}
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1639136950485-d194afb5196e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAyfHxuZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500"
            alt=""/>

          <div className="card-body bg-dark">
            <p className="card-text text-light"><strong>The Non Fungible Tokens <b>NFT'S</b></strong></p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">@07892gy</button>
                {/* <button type="button" id="two" className="btn btn-sm btn-outline-secondary">Buy</button> */}
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
          <img
            src="https://media.istockphoto.com/photos/stock-chart-display-finance-and-economy-concepts-picture-id1352115850?b=1&k=20&m=1352115850&s=170667a&w=0&h=spEfDwkQYGUctdkoY_K2kBExJzT14WruYO2T1-iB4KM="
            alt=""/>

          <div className="card-body bg-dark">
            <p className="card-text text-light"><strong>Power of Market <b>Stocks</b></strong></p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">@stocks1290</button>
                {/* <button type="button" id="three" className="btn btn-sm btn-outline-secondary">Buy</button> */}
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card shadow-sm">
          <img
            src="https://media.istockphoto.com/photos/working-in-metaverse-with-tokyo-skyline-picture-id1371917432?b=1&k=20&m=1371917432&s=170667a&w=0&h=SeJcwYQ9egL1yDKnv_6dNoKKEyfDGmZmMXb-1J5KfLM="
            alt=""/>

          <div className="card-body bg-dark">
            <p className="card-text text-light"><strong>MetaVerse the New Digital World</strong></p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">@digital7895</button>
                {/* <button type="button" id="four" className="btn btn-sm btn-outline-secondary">Buy</button> */}
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
          <img src="https://media.istockphoto.com/photos/bitcoin-concept-with-binary-codes-picture-id1305092068?b=1&k=20&m=1305092068&s=170667a&w=0&h=les8_XT0hF2gWWAfpreiyY1kreJFyituhtVMoO6Ah5g="
            alt=""/>

          <div className="card-body bg-dark">
            <p className="card-text text-light"><strong>Bitcoin "The Future of Currency"</strong></p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">@6589bit</button>
                {/* <button type="button" id="five" className="btn btn-sm btn-outline-secondary">Buy</button> */}
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
          <img
            src="https://media.istockphoto.com/photos/bitcoin-money-with-piggy-bank-and-wooden-home-model-on-the-table-and-picture-id1313812709?b=1&k=20&m=1313812709&s=170667a&w=0&h=stTVS6rfn11Yh_Z-S50le842827rhhdDR6XDJFSj6Lw="
            alt=""/>

          <div className="card-body bg-dark">
            <p className="card-text text-light"><strong>Piggi Bank Home Loans</strong></p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">@Bank3645</button>
                {/* <button type="button" id="six" className="btn btn-sm btn-outline-secondary">Buy</button> */}
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1641932269869-46d52e20d8a1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGJsb2NrY2hhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500"
            alt=""/>

          <div className="card-body bg-dark">
            <p className="card-text text-light"><strong>Dogiee Coin Trade</strong></p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">@dogi68</button>
                {/* <button type="button" id="seven" className="btn btn-sm btn-outline-secondary">Buy</button> */}
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1631864032976-cef7f00fea43?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGJsb2NrY2hhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500"
            alt=""/>

          <div className="card-body bg-dark">
            <p className="card-text text-light"><strong>Block Chain</strong></p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">@6354du</button>
                {/* <button type="button" id="eight" className="btn btn-sm btn-outline-secondary">Buy</button> */}
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1642364706728-14a86b585bb1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxibG9ja2NoYWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
            alt=""/>

          <div className="card-body bg-dark">
            <p className="card-text text-light "><strong>Bitcoins & NFT</strong></p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">@bitcoins7895er</button>
                {/* <button type="button" id="nine" className="btn btn-sm btn-outline-secondary">NFTs</button> */}
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  )
}
