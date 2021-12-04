class Navbar extends React.Component{
    render(){
        return(
            <div id="header">
                <div id="navbar">

                <div id="sections">
                    <img src="./src/img/logo.svg" alt="Logo" />
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Resources</p>
                </div>

                <div id="cta">
                    <p>Login</p>
                    <p>Sign Up</p>
                </div>

                <i class="fas fa-bars"></i>

                </div>
            </div>
        );
    }
}

class General extends React.Component{
    render(){
        return(
            <div id="general">
                <div id="container">
                    <div id="title">
                        <h1>More than just shorter links</h1>
                        <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                        <button>Get Started</button>
                    </div>

                    <img src="./src/img/illustration-working.svg" alt="working" />
                </div>
            </div>
        );
    }
}

class StatBox extends React.Component{
    render(){
        return(
            <div id="statbox">
                <div id="icon">
                    <div><img src={this.props.src} /></div>
                </div>
                <h1>{this.props.title}</h1>
                <p>{this.props.para}</p>
            </div>
        );
    }
}

class Stats extends React.Component{
    render(){
        return(
            <div id="stats">
                <div id="form">
                    <input type="text" placeholder="Shorten a link here..." />
                    <input type="submit" value="Shorten It!" />
                </div>
                <h1>Advanced Statistics</h1>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                <div id="container">
                    <StatBox title="Brand Recognition" para="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content." src="./src/img/icon-brand-recognition.svg"/>
                    <StatBox title="Detailed Records" para="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." src="./src/img/icon-detailed-records.svg"/>
                    <StatBox title="Fully Customizable" para="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." src="./src/img/icon-fully-customizable.svg"/>
                </div>
            </div>
        );
    }
}

class Boost extends React.Component{
    render(){
        return(
            <div id="Boost">
                <h1>Boost your links today</h1>
                <button>Get Started</button>
            </div>
        );
    }
}

class Foot extends React.Component{
    render(){
        return(
            <div id="foot">
                <h1>{this.props.title}</h1>
                {this.props.links.map((link) => <p>{link}</p>)}
            </div>
        );
    }
}

const feet = [["Link Shortening","Branded Links","Analytics"],["Blog","Developers","Support"],["About","Our Team","Careers","Contact"]];

class Footer extends React.Component{
    render(){
        return(
            <div id="ctf">
                <div id="footer">
                    <img src="./src/img/logo.svg" alt="Logo-White" id="logo" />
                    <Foot title="Features" links={feet[0]} />
                    <Foot title="Resources" links={feet[1]} />
                    <Foot title="Company" links={feet[2]} />
                    <div id="socials">
                        <a href="#"><img src="./src/img/icon-facebook.svg" alt="facebook-logo" /></a>
                        <a href="#"><img src="./src/img/icon-twitter.svg" alt="twitter-logo" /></a>
                        <a href="#"><img src="./src/img/icon-pinterest.svg" alt="pinterst-logo" /></a>
                        <a href="#"><img src="./src/img/icon-instagram.svg" alt="instagram-logo" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<div><Navbar /><div class="spacer"></div><General /><Stats /><Boost /><Footer /></div>, document.getElementById('root'));

let last = false;

setInterval(function(){
	if(window.scrollY > 100 && !last){
        $('#header').hide();
        $("#header").toggleClass('active');
        $('.spacer').css("height","150px");
        $('#header').css("position","fixed");
        $('#header').css("top","-150px");
        $('#header').slideDown("50ms");
        $('#header').css("top","0px");
        last = true;
      }

      if(window.scrollY < 100 && last){
        $("#header").toggleClass('active');
        $('#header').css("position","relative");
        $('.spacer').css("height","0px");
        last = false;
      }
}, 1);