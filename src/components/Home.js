import logo from './logo.jpeg';
import vestido1_1 from '../images/vestido1_1'
import vestido1_2 from '..images/vestido1_2'
import vestido1_3 from '../images/vestido1_3'

function Home() {
    return (
        <div>
            <header>
                <img src={logo} alt="Logo" />
                <div header-btn>
                    <button className="login-btn">Log in</button>
                    <button className="signup-btn">Sign up</button>
                </div>
            </header>
            <div className="categories">
                <button>Products</button>

            </div>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                {/* Wrapper for slides */}
                <div class="carousel-inner">
                    <div class="item active">
                        <img src={vestido1_1} alt="First_dress_1" />
                    </div>

                    <div class="item">
                        <img src={vestido1_2} alt="First_dress_2" />
                    </div>

                    <div class="item">
                        <img src={vestido1_3} alt="First_dress_3" />
                    </div>
                </div>

                {/* Left and right controls */}
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <footer>

            </footer>
        </div>
    )
}

export default Home