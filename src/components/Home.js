import React from 'react';

const Home = () => {
    return (
        <div className="" style={{ backgroundColor: 'lightblue', height: '93vh' }}>
            <div class="jumbotron" style={{ display: 'flex', justifyContent: 'space-between', columnGap: '10px' }}>
                <div className="card" style={{ width: '300px' }}>
                    <div className="card-title">
                        <img src="https://hbr.org/resources/images/article_assets/2019/09/Logos-SecondTake1-2.jpg" alt="no img" width="300px" />

                    </div>
                    <div className="card-header">
                        <h2>Burger</h2>
                    </div>
                    <div className="card-body">

                        <p>Tasty Burger with Extra cheese</p>
                        <h3>Price:${15.00}</h3>
                        <button className="btn btn-primary float-right">Add To Cart</button>
                    </div>
                </div>
                {/*  */}
                <div className="card" style={{ width: '300px' }}>
                    <div className="card-title">
                        <img src="https://hbr.org/resources/images/article_assets/2019/09/Logos-SecondTake1-2.jpg" width="300px" />

                    </div>
                    <div className="card-header">
                        <h2>Burger</h2>
                    </div>
                    <div className="card-body">

                        <p>Tasty Burger with Extra cheese</p>
                        <h3>Price:${15.00}</h3>
                        <button className="btn btn-primary float-right">Add To Cart</button>
                    </div>
                </div>


                {/* 
                    */}

                <div className="card" style={{ width: '300px' }}>
                    <div className="card-title">
                        <img src="https://hbr.org/resources/images/article_assets/2019/09/Logos-SecondTake1-2.jpg" width="300px" />

                    </div>
                    <div className="card-header">
                        <h2>Burger</h2>
                    </div>
                    <div className="card-body">

                        <p>Tasty Burger with Extra cheese</p>
                        <h3>Price:${15.00}</h3>
                        <button className="btn btn-primary float-right">Add To Cart</button>
                    </div>
                </div>

                <div className="card" style={{width:'300px'}}>
                       <div className="card-title">
                           <img  src="https://hbr.org/resources/images/article_assets/2019/09/Logos-SecondTake1-2.jpg" width="300px" />
        
                       </div>
                       <div className="card-header">
                           <h2>Burger</h2>
                       </div>
                       <div className="card-body">

                         <p>Tasty Burger with Extra cheese</p>
                         <h3>Price:${15.00}</h3>
                           <button className="btn btn-primary float-right">Add To Cart</button>
                       </div>
                   </div>

                   

            </div>
        </div>
    );
};

export default Home;